import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export const TableOfContents = () => {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const article = document.querySelector("article");
    if (!article) return;

    const elements = article.querySelectorAll("h2, h3");
    const items: TOCItem[] = Array.from(elements).map((elem) => ({
      id: elem.id || elem.textContent?.toLowerCase().replace(/\s+/g, "-") || "",
      text: elem.textContent || "",
      level: parseInt(elem.tagName.charAt(1))
    }));

    // Add IDs to headings if they don't have them
    elements.forEach((elem, index) => {
      if (!elem.id) {
        elem.id = items[index].id;
      }
    });

    setHeadings(items);

    // Intersection Observer for active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -66%" }
    );

    elements.forEach((elem) => observer.observe(elem));
    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto">
      <Card className="p-6">
        <h3 className="font-semibold text-lg mb-4">Table of Contents</h3>
        <nav>
          <ul className="space-y-2">
            {headings.map((heading) => (
              <li
                key={heading.id}
                style={{ paddingLeft: `${(heading.level - 2) * 0.75}rem` }}
              >
                <a
                  href={`#${heading.id}`}
                  className={cn(
                    "text-sm hover:text-primary transition-colors block py-1 leading-tight",
                    activeId === heading.id
                      ? "text-primary font-semibold"
                      : "text-muted-foreground"
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(heading.id)?.scrollIntoView({
                      behavior: "smooth",
                      block: "start"
                    });
                  }}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Card>
    </div>
  );
};
