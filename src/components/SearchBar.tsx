import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Link } from "@/compat/react-router-dom";
import { blogPosts } from "@/data/blogPosts";

interface SearchResult {
  title: string;
  excerpt: string;
  path: string;
  category: string;
}

export const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    const searchResults = blogPosts
      .filter(post => 
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        post.category.toLowerCase().includes(query.toLowerCase())
      )
      .slice(0, 5)
      .map(post => ({
        title: post.title,
        excerpt: post.excerpt,
        path: post.path,
        category: post.category
      }));

    setResults(searchResults);
  }, [query]);

  return (
    <div className="relative" ref={searchRef}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search articles..."
          className="pl-10 pr-10 w-full md:w-80"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
        />
        {query && (
          <button
            onClick={() => {
              setQuery("");
              setResults([]);
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
          </button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <Card className="absolute top-full mt-2 w-full md:w-96 max-h-96 overflow-y-auto z-50 shadow-lg">
          <div className="p-2">
            {results.map((result, index) => (
              <Link
                key={index}
                to={result.path}
                onClick={() => {
                  setIsOpen(false);
                  setQuery("");
                }}
                className="block p-3 hover:bg-accent rounded-lg transition-colors"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm text-foreground line-clamp-1">
                      {result.title}
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                      {result.excerpt}
                    </p>
                  </div>
                  <span className="text-xs text-primary font-medium whitespace-nowrap">
                    {result.category}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Card>
      )}

      {isOpen && query.length >= 2 && results.length === 0 && (
        <Card className="absolute top-full mt-2 w-full md:w-96 p-4 z-50 shadow-lg">
          <p className="text-sm text-muted-foreground text-center">
            No results found for "{query}"
          </p>
        </Card>
      )}
    </div>
  );
};
