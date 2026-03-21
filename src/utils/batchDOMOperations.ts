// Utility to batch DOM reads and writes to prevent forced reflow/layout thrashing

class DOMBatcher {
  private readQueue: Array<() => void> = [];
  private writeQueue: Array<() => void> = [];
  private scheduled = false;

  // Schedule DOM reads
  read(callback: () => void) {
    this.readQueue.push(callback);
    this.schedule();
  }

  // Schedule DOM writes
  write(callback: () => void) {
    this.writeQueue.push(callback);
    this.schedule();
  }

  private schedule() {
    if (this.scheduled) return;
    this.scheduled = true;

    requestAnimationFrame(() => {
      // Execute all reads first
      while (this.readQueue.length) {
        const read = this.readQueue.shift();
        read?.();
      }

      // Then execute all writes
      while (this.writeQueue.length) {
        const write = this.writeQueue.shift();
        write?.();
      }

      this.scheduled = false;
    });
  }

  // Clear all queued operations
  clear() {
    this.readQueue = [];
    this.writeQueue = [];
    this.scheduled = false;
  }
}

export const domBatcher = new DOMBatcher();

// Helper to measure elements without causing reflow
export const measureElement = (element: HTMLElement): Promise<DOMRect> => {
  return new Promise((resolve) => {
    domBatcher.read(() => {
      resolve(element.getBoundingClientRect());
    });
  });
};

// Helper to update element styles without causing reflow
export const updateStyles = (element: HTMLElement, styles: Partial<CSSStyleDeclaration>): Promise<void> => {
  return new Promise((resolve) => {
    domBatcher.write(() => {
      Object.assign(element.style, styles);
      resolve();
    });
  });
};
