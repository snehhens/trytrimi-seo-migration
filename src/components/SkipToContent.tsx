import { focusMainContent } from "@/utils/accessibility";

export const SkipToContent = () => {
  return (
    <a
      href="#main-content"
      onClick={(e) => {
        e.preventDefault();
        focusMainContent();
      }}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded"
    >
      Skip to main content
    </a>
  );
};
