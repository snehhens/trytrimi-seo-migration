/// <reference types="vite/client" />

declare global {
  interface Window {
    tiktokEmbed?: {
      lib: {
        render: (elements: NodeListOf<Element>) => void;
      };
    };
  }
}

export {};
