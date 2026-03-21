import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";

interface ComparisonItem {
  feature: string;
  values: (string | boolean)[];
}

interface ComparisonTableProps {
  title: string;
  columns: string[];
  items: ComparisonItem[];
  className?: string;
}

export const ComparisonTable = ({
  title,
  columns,
  items,
  className = ""
}: ComparisonTableProps) => {
  const renderCell = (value: string | boolean) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="w-5 h-5 text-green-600 mx-auto" />
      ) : (
        <X className="w-5 h-5 text-red-600 mx-auto" />
      );
    }
    return value;
  };

  return (
    <Card className={`overflow-hidden ${className}`}>
      <div className="p-6 bg-primary/5">
        <h3 className="text-2xl font-semibold text-foreground">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-semibold">Feature</TableHead>
              {columns.map((column, index) => (
                <TableHead key={index} className="font-semibold text-center">
                  {column}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{item.feature}</TableCell>
                {item.values.map((value, valueIndex) => (
                  <TableCell key={valueIndex} className="text-center">
                    {renderCell(value)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};
