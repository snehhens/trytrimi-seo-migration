import { lazy, Suspense, useEffect, useState } from "react";
import { useNavigate, Link } from "@/compat/react-router-dom";
import { Helmet } from "@/compat/react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Plus, ArrowLeft, ExternalLink } from "lucide-react";
import { z } from "zod";

const Navigation = lazy(() => import("@/components/Navigation"));
const Footer = lazy(() => import("@/components/Footer"));

// Validation schema
const prospectSchema = z.object({
  website_name: z.string()
    .trim()
    .min(1, { message: "Website name is required" })
    .max(200, { message: "Website name must be less than 200 characters" }),
  website_url: z.string()
    .trim()
    .url({ message: "Please enter a valid URL (e.g., https://example.com)" })
    .max(500, { message: "URL must be less than 500 characters" }),
  contact_email: z.string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" })
    .optional()
    .or(z.literal("")),
  contact_name: z.string()
    .trim()
    .max(100, { message: "Contact name must be less than 100 characters" })
    .optional()
    .or(z.literal("")),
  notes: z.string()
    .trim()
    .max(2000, { message: "Notes must be less than 2000 characters" })
    .optional()
    .or(z.literal("")),
  domain_authority: z.number()
    .min(0, { message: "Domain authority must be between 0 and 100" })
    .max(100, { message: "Domain authority must be between 0 and 100" })
});

interface BacklinkProspect {
  id: string;
  website_name: string;
  website_url: string;
  contact_email: string;
  contact_name: string;
  outreach_type: string;
  status: string;
  domain_authority: number;
  notes: string;
  created_at: string;
}

const BacklinkManager = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [prospects, setProspects] = useState<BacklinkProspect[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    website_name: "",
    website_url: "",
    contact_email: "",
    contact_name: "",
    outreach_type: "guest_post",
    domain_authority: 0,
    notes: ""
  });

  useEffect(() => {
    checkAuth();
    fetchProspects();
  }, []);

  const checkAuth = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      navigate("/auth");
    }
  };

  const fetchProspects = async () => {
    const { data, error } = await supabase
      .from("backlink_prospects")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch prospects",
        variant: "destructive",
      });
    } else {
      setProspects(data || []);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      // Validate form data
      const validated = prospectSchema.parse({
        website_name: formData.website_name,
        website_url: formData.website_url,
        contact_email: formData.contact_email,
        contact_name: formData.contact_name,
        notes: formData.notes,
        domain_authority: formData.domain_authority
      });

      const { error } = await supabase.from("backlink_prospects").insert([
        { 
          website_name: validated.website_name,
          website_url: validated.website_url,
          contact_email: validated.contact_email || "",
          contact_name: validated.contact_name || "",
          notes: validated.notes || "",
          domain_authority: validated.domain_authority,
          outreach_type: formData.outreach_type,
          user_id: user.id 
        }
      ]);

      if (error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Success",
          description: "Prospect added successfully",
        });
        setFormData({
          website_name: "",
          website_url: "",
          contact_email: "",
          contact_name: "",
          outreach_type: "guest_post",
          domain_authority: 0,
          notes: ""
        });
        setShowAddForm(false);
        fetchProspects();
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string): "default" | "destructive" | "outline" | "secondary" => {
    const colors: Record<string, "default" | "destructive" | "outline" | "secondary"> = {
      prospect: "secondary",
      contacted: "default",
      responded: "default",
      agreed: "default",
      published: "default",
      rejected: "destructive"
    };
    return colors[status] || "secondary";
  };

  return (
    <div className="min-h-screen bg-background">
      <Suspense fallback={<div className="h-20 bg-background border-b border-border" />}>
        <Navigation />
      </Suspense>

      <Helmet>
        <title>Backlink Outreach Manager - Trimi Health</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link to="/seo-dashboard">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Backlink Outreach</h1>
              <p className="text-muted-foreground">Track prospects and manage outreach campaigns</p>
            </div>
            <Button onClick={() => setShowAddForm(!showAddForm)}>
              <Plus className="h-4 w-4 mr-2" />
              Add Prospect
            </Button>
          </div>
        </div>

        {showAddForm && (
          <Card className="p-6 mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Add New Prospect</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="website_name">Website Name *</Label>
                  <Input
                    id="website_name"
                    value={formData.website_name}
                    onChange={(e) => setFormData({ ...formData, website_name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="website_url">Website URL *</Label>
                  <Input
                    id="website_url"
                    type="url"
                    value={formData.website_url}
                    onChange={(e) => setFormData({ ...formData, website_url: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="contact_name">Contact Name</Label>
                  <Input
                    id="contact_name"
                    value={formData.contact_name}
                    onChange={(e) => setFormData({ ...formData, contact_name: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="contact_email">Contact Email</Label>
                  <Input
                    id="contact_email"
                    type="email"
                    value={formData.contact_email}
                    onChange={(e) => setFormData({ ...formData, contact_email: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="outreach_type">Outreach Type *</Label>
                  <Select
                    value={formData.outreach_type}
                    onValueChange={(value) => setFormData({ ...formData, outreach_type: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="guest_post">Guest Post</SelectItem>
                      <SelectItem value="directory">Directory Listing</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="press">Press/PR</SelectItem>
                      <SelectItem value="resource_page">Resource Page</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="domain_authority">Domain Authority (0-100)</Label>
                  <Input
                    id="domain_authority"
                    type="number"
                    min="0"
                    max="100"
                    value={formData.domain_authority}
                    onChange={(e) => setFormData({ ...formData, domain_authority: parseInt(e.target.value) || 0 })}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="notes">Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={3}
                />
              </div>
              <div className="flex gap-4">
                <Button type="submit" disabled={loading}>
                  {loading ? "Adding..." : "Add Prospect"}
                </Button>
                <Button type="button" variant="outline" onClick={() => setShowAddForm(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </Card>
        )}

        <Card className="p-6">
          <h2 className="text-2xl font-bold text-foreground mb-6">Prospects ({prospects.length})</h2>
          {prospects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">No prospects yet. Start building your backlink pipeline!</p>
              <Button onClick={() => setShowAddForm(true)}>
                <Plus className="h-4 w-4 mr-2" />
                Add First Prospect
              </Button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Website</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>DA</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Added</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {prospects.map((prospect) => (
                    <TableRow key={prospect.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{prospect.website_name}</div>
                          <a
                            href={prospect.website_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline flex items-center gap-1"
                          >
                            Visit <ExternalLink className="h-3 w-3" />
                          </a>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{prospect.outreach_type.replace("_", " ")}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          {prospect.contact_name && <div>{prospect.contact_name}</div>}
                          {prospect.contact_email && <div className="text-muted-foreground">{prospect.contact_email}</div>}
                        </div>
                      </TableCell>
                      <TableCell>{prospect.domain_authority || "-"}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusColor(prospect.status)}>
                          {prospect.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {new Date(prospect.created_at).toLocaleDateString()}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </Card>
      </main>

      <Suspense fallback={<div className="h-64 bg-background" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default BacklinkManager;
