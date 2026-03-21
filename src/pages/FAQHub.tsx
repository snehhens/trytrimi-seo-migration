import { Helmet } from "@/compat/react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, BookOpen, DollarSign, Scale, Syringe, Heart, Shield, CheckCircle } from "lucide-react";
import { useState } from "react";
import { FAQSchema } from "@/components/seo/FAQSchema";
import { QAPageSchema } from "@/components/seo/QAPageSchema";
import { Link } from "@/compat/react-router-dom";

const FAQHub = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const faqCategories = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "How do I get started with GLP-1 medication?",
          answer: "Getting started is simple: Complete our online medical assessment, consult with a licensed healthcare provider, receive your prescription, and get your medication delivered to your door. The entire process typically takes 24-48 hours."
        },
        {
          question: "Do I need a prescription for semaglutide or tirzepatide?",
          answer: "Yes, both semaglutide and tirzepatide are prescription medications. You'll need to complete a medical consultation with a licensed provider who will determine if these medications are appropriate for you."
        },
        {
          question: "What if I'm not approved for treatment?",
          answer: "If our medical team determines that GLP-1 medications aren't right for you, we'll provide alternative recommendations and won't charge you for the consultation. Your health and safety are our top priorities."
        },
        {
          question: "How long does the approval process take?",
          answer: "Most patients receive approval within 24-48 hours. Once approved, your medication is shipped and typically arrives within 3-5 business days."
        }
      ]
    },
    {
      category: "Medication & Dosing",
      questions: [
        {
          question: "What's the difference between semaglutide and tirzepatide?",
          answer: "Semaglutide is a GLP-1 receptor agonist that promotes weight loss by reducing appetite and slowing digestion. Tirzepatide is a dual GIP/GLP-1 receptor agonist that works on two hormone pathways. Clinical trials show tirzepatide produces slightly more weight loss (~20%) compared to semaglutide (~15%)."
        },
        {
          question: "How do I inject the medication?",
          answer: "Both medications are injected subcutaneously (under the skin) once weekly. You'll inject into your abdomen, thigh, or upper arm using a small needle. We provide detailed injection instructions and video guides with your first shipment."
        },
        {
          question: "What if I miss a dose?",
          answer: "If you miss a dose and it's within 5 days of your scheduled injection, take it as soon as you remember. If more than 5 days have passed, skip the missed dose and resume your regular schedule. Never double up on doses."
        },
        {
          question: "How long does it take to reach the maintenance dose?",
          answer: "For semaglutide, it typically takes 16-20 weeks to reach the maintenance dose of 2.4mg. For tirzepatide, it takes 16-20 weeks to reach the maximum dose of 13.5mg. The gradual increase helps minimize side effects."
        },
        {
          question: "Can I adjust my dose?",
          answer: "Dose adjustments should only be made under the guidance of your healthcare provider. If you're experiencing side effects or not seeing results, contact our medical team to discuss adjusting your treatment plan."
        }
      ]
    },
    {
      category: "Pricing & Insurance",
      questions: [
        {
          question: "How much does it cost?",
          answer: "Compounded semaglutide starts at $299/month, and compounded tirzepatide starts at $399/month. This includes the medication, medical consultations, and ongoing support. No hidden fees or insurance required."
        },
        {
          question: "Do you accept insurance?",
          answer: "We do not accept insurance for compounded medications, but our cash-pay prices are often lower than insurance copays for brand-name versions. You may be able to submit receipts to your insurance for reimbursement."
        },
        {
          question: "Is there a subscription or can I pay month-to-month?",
          answer: "We offer flexible month-to-month payment with no long-term commitment. You can pause or cancel anytime if the medication isn't working for you."
        },
        {
          question: "What's included in the monthly cost?",
          answer: "Your monthly fee includes: the medication, ongoing medical support, provider consultations, injection supplies, shipping, and access to our patient portal with educational resources."
        },
        {
          question: "How much can I save compared to brand name?",
          answer: "Brand-name Wegovy and Mounjaro cost $1,100+ per month without insurance. With Trimi's compounded options, you save up to 70% while receiving the same active ingredients."
        }
      ]
    },
    {
      category: "Effectiveness & Results",
      questions: [
        {
          question: "How much weight can I expect to lose?",
          answer: "Clinical trials show average weight loss of 15% with semaglutide and 20% with tirzepatide over 68 weeks. Individual results vary based on starting weight, diet, exercise, and adherence to treatment."
        },
        {
          question: "When will I see results?",
          answer: "Most patients begin noticing reduced appetite within the first week. Visible weight loss typically starts within 4-8 weeks, with maximum results achieved after 6-12 months of treatment."
        },
        {
          question: "What if the medication doesn't work for me?",
          answer: "If you're not seeing results after 3 months, we'll work with you to adjust your dose, switch medications, or explore alternative treatment options. We're committed to helping you succeed."
        },
        {
          question: "Do I need to diet and exercise?",
          answer: "While the medication significantly reduces appetite, combining it with healthy eating and regular physical activity maximizes results. We provide nutritional guidance and meal planning resources to all patients."
        },
        {
          question: "Will I gain the weight back if I stop?",
          answer: "Some weight regain is common after stopping GLP-1 medications. To maintain results, we recommend transitioning to a maintenance plan that includes lifestyle modifications and possibly a lower medication dose."
        }
      ]
    },
    {
      category: "Side Effects & Safety",
      questions: [
        {
          question: "What are common side effects?",
          answer: "The most common side effects are nausea, diarrhea, constipation, and reduced appetite. These typically occur when starting or increasing doses and usually improve within a few weeks as your body adjusts."
        },
        {
          question: "How can I minimize side effects?",
          answer: "Start with a low dose and increase gradually, eat smaller meals, avoid greasy/fatty foods, stay hydrated, and don't lie down immediately after eating. Most side effects are temporary and manageable."
        },
        {
          question: "Are these medications safe long-term?",
          answer: "GLP-1 medications have been used for diabetes treatment for over a decade. Long-term studies show they're generally safe for extended use. Regular monitoring by your healthcare provider ensures continued safety."
        },
        {
          question: "Who should NOT take GLP-1 medications?",
          answer: "These medications aren't recommended if you're pregnant, breastfeeding, have a history of medullary thyroid cancer or MEN2, pancreatitis, or severe gastrointestinal disease. Your provider will review your medical history."
        },
        {
          question: "Can I take this with other medications?",
          answer: "GLP-1 medications can interact with diabetes medications, blood thinners, and certain other drugs. Always inform your provider about all medications and supplements you're taking."
        }
      ]
    },
    {
      category: "Compounded vs Brand Name",
      questions: [
        {
          question: "What does 'compounded' mean?",
          answer: "Compounded medications are custom-made by licensed pharmacies using the same active ingredients as brand-name drugs. They're FDA-approved ingredients but the final product isn't FDA-approved like brand drugs."
        },
        {
          question: "Is compounded medication as effective as brand name?",
          answer: "Yes, compounded versions contain the same active ingredients (semaglutide or tirzepatide) at the same doses. The main differences are the inactive ingredients and price point."
        },
        {
          question: "Why is compounded medication so much cheaper?",
          answer: "You're not paying for brand-name marketing, packaging, and distribution. Compounding pharmacies can produce the medication more affordably while maintaining the same quality and effectiveness."
        },
        {
          question: "Are compounded medications safe?",
          answer: "Yes, when sourced from licensed 503B compounding pharmacies that follow strict FDA guidelines. All our partner pharmacies are licensed, inspected, and follow rigorous quality control standards."
        }
      ]
    },
    {
      category: "Treatment Process",
      questions: [
        {
          question: "How often do I need to see a doctor?",
          answer: "You'll have an initial consultation, then check-ins at 1 month, 3 months, and then every 3 months thereafter. Additional consultations are available anytime you have questions or concerns."
        },
        {
          question: "What if I have questions between appointments?",
          answer: "Our medical team is available via secure messaging through your patient portal. Most messages receive a response within 24 hours. For urgent concerns, contact us immediately."
        },
        {
          question: "Can I pause or cancel my subscription?",
          answer: "Yes, you can pause or cancel anytime with no penalties or fees. We recommend discussing with your provider first to ensure a safe transition off the medication."
        },
        {
          question: "How is the medication shipped?",
          answer: "Medications are shipped in temperature-controlled packaging with ice packs to maintain proper storage conditions. Shipping typically takes 3-5 business days via FedEx or UPS."
        },
        {
          question: "What if I'm traveling?",
          answer: "GLP-1 medications should be refrigerated but can be kept at room temperature for up to 4 weeks. We provide travel tips and can adjust shipping schedules if needed."
        }
      ]
    },
    {
      category: "Lifestyle & Diet",
      questions: [
        {
          question: "What should I eat while on GLP-1 medication?",
          answer: "Focus on lean proteins, vegetables, fruits, and whole grains. Eat smaller, more frequent meals. Avoid greasy, fatty, or very spicy foods that can worsen nausea. We provide detailed meal planning guides."
        },
        {
          question: "Can I drink alcohol while taking GLP-1 medication?",
          answer: "Moderate alcohol consumption is generally safe, but alcohol may increase nausea and can interfere with weight loss goals. Discuss your alcohol consumption with your provider."
        },
        {
          question: "Will I feel hungry?",
          answer: "One of the primary effects of GLP-1 medications is reduced appetite. Most patients report feeling fuller faster and having fewer cravings. This is a normal and desired effect."
        },
        {
          question: "Can I exercise while on the medication?",
          answer: "Yes! Exercise is encouraged and enhances weight loss results. Start slowly if you're new to exercise and listen to your body. Aim for 150 minutes of moderate activity per week."
        },
        {
          question: "What if I develop food aversions?",
          answer: "Some patients develop aversions to certain foods, particularly fatty or greasy items. This is common and usually temporary. Work with our team to ensure you're still getting adequate nutrition."
        }
      ]
    }
  ];

  const allQuestions = faqCategories.flatMap(cat => 
    cat.questions.map(q => ({ ...q, category: cat.category }))
  );

  const filteredQuestions = searchQuery
    ? allQuestions.filter(q => 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allQuestions;

  // Generate FAQ schema for all questions
  const faqSchemaItems = allQuestions.map(q => ({
    question: q.question,
    answer: q.answer
  }));

  return (
    <>
      <Helmet>
        <title>GLP-1 Weight Loss FAQ | Semaglutide & Tirzepatide Questions</title>
        <meta 
          name="description" 
          content="Find answers to all your questions about GLP-1 medications, semaglutide, tirzepatide, pricing, side effects, effectiveness, and more." 
        />
        <meta name="keywords" content="GLP-1 FAQ, semaglutide questions, tirzepatide FAQ, weight loss medication questions" />
        <link rel="canonical" href="https://trytrimi.com/faq-hub" />
        
        <meta property="og:title" content="GLP-1 Weight Loss FAQ | Your Questions Answered" />
        <meta property="og:description" content="Comprehensive FAQ covering everything about GLP-1 medications, from getting started to side effects and results." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://trytrimi.com/faq-hub" />
      </Helmet>

    <FAQSchema faqs={faqSchemaItems} />
    
    <QAPageSchema 
      mainEntityName="GLP-1 Weight Loss Medication Questions"
      questions={faqSchemaItems.slice(0, 20).map(faq => ({
        question: faq.question,
        answer: faq.answer
      }))}
    />

      <div className="min-h-screen flex flex-col bg-background">
        <Navigation />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="py-16 bg-gradient-to-b from-primary/5 to-background">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Frequently Asked Questions
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Everything you need to know about GLP-1 weight loss medications
                </p>
                
                {/* Search Bar */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Search questions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 py-6 text-lg"
                  />
                </div>
              </div>
            </div>
        </section>

        {/* Category Cards */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">Browse by Topic</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <a href="#getting-started" className="block">
                  <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <BookOpen className="h-10 w-10 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Getting Started</h3>
                    <p className="text-sm text-muted-foreground">
                      First steps, approval process, and initial setup
                    </p>
                  </Card>
                </a>
                
                <a href="#medication-&-dosing" className="block">
                  <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <Syringe className="h-10 w-10 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Medication & Dosing</h3>
                    <p className="text-sm text-muted-foreground">
                      Dosage schedules, injection techniques, and adjustments
                    </p>
                  </Card>
                </a>
                
                <a href="#pricing-&-insurance" className="block">
                  <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <DollarSign className="h-10 w-10 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Pricing & Insurance</h3>
                    <p className="text-sm text-muted-foreground">
                      Costs, payment options, and insurance coverage
                    </p>
                  </Card>
                </a>
                
                <a href="#effectiveness-&-results" className="block">
                  <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <Scale className="h-10 w-10 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Effectiveness & Results</h3>
                    <p className="text-sm text-muted-foreground">
                      Expected outcomes, timelines, and success factors
                    </p>
                  </Card>
                </a>
                
                <a href="#side-effects-&-safety" className="block">
                  <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <Shield className="h-10 w-10 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Side Effects & Safety</h3>
                    <p className="text-sm text-muted-foreground">
                      Managing side effects and safety considerations
                    </p>
                  </Card>
                </a>
                
                <a href="#lifestyle-&-diet" className="block">
                  <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <Heart className="h-10 w-10 text-primary mb-4" />
                    <h3 className="font-bold text-lg mb-2">Lifestyle & Diet</h3>
                    <p className="text-sm text-muted-foreground">
                      Nutrition tips, exercise, and lifestyle optimization
                    </p>
                  </Card>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
          <section className="py-8 border-b">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-center gap-3">
                {faqCategories.map((cat) => (
                  <a
                    key={cat.category}
                    href={`#${cat.category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="px-4 py-2 rounded-lg border hover:border-primary transition-colors text-sm"
                  >
                    {cat.category}
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Content */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto space-y-12">
                {searchQuery ? (
                  <Card className="p-6">
                    <h2 className="text-2xl font-bold mb-6">
                      Search Results ({filteredQuestions.length})
                    </h2>
                    <Accordion type="single" collapsible className="space-y-4">
                      {filteredQuestions.map((q, index) => (
                        <AccordionItem key={index} value={`search-${index}`}>
                          <AccordionTrigger className="text-left">
                            <div>
                              <span className="font-semibold">{q.question}</span>
                              <span className="text-sm text-muted-foreground ml-2">
                                ({q.category})
                              </span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            {q.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </Card>
                ) : (
                  faqCategories.map((category) => (
                    <div key={category.category} id={category.category.toLowerCase().replace(/\s+/g, '-')}>
                      <Card className="p-6">
                        <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
                        <Accordion type="single" collapsible className="space-y-4">
                          {category.questions.map((q, index) => (
                            <AccordionItem key={index} value={`${category.category}-${index}`}>
                              <AccordionTrigger className="text-left font-semibold">
                                {q.question}
                              </AccordionTrigger>
                              <AccordionContent className="text-muted-foreground">
                                {q.answer}
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </Card>
                    </div>
                  ))
                )}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-primary/5">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Our medical team is here to help. Schedule a free consultation to discuss your specific situation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="https://app.trytrimi.com/start-online-visit/weight-loss-memberships">
                      Get Started Today
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/contact">Contact Our Team</a>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default FAQHub;
