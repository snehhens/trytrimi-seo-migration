/**
 * Compression and encoding optimization utilities
 */

/**
 * Check Brotli compression support
 */
export const supportsBrotli = (): boolean => {
  if (typeof navigator === 'undefined') return false;
  
  const acceptEncoding = (navigator as any).userAgentData?.brands
    ? true
    : /Chrome|Firefox|Safari/.test(navigator.userAgent);
  
  return acceptEncoding;
};

/**
 * Compress data before sending to API
 */
export const compressData = async (data: string): Promise<Blob> => {
  if (!('CompressionStream' in window)) {
    return new Blob([data], { type: 'application/json' });
  }

  const stream = new Blob([data], { type: 'application/json' }).stream();
  const compressedStream = stream.pipeThrough(
    new (window as any).CompressionStream('gzip')
  );

  return new Response(compressedStream).blob();
};

/**
 * Decompress response data
 */
export const decompressData = async (blob: Blob): Promise<string> => {
  if (!('DecompressionStream' in window)) {
    return blob.text();
  }

  const stream = blob.stream();
  const decompressedStream = stream.pipeThrough(
    new (window as any).DecompressionStream('gzip')
  );

  return new Response(decompressedStream).text();
};

/**
 * Check if response is compressed
 */
export const isCompressed = (response: Response): boolean => {
  const encoding = response.headers.get('content-encoding');
  return encoding === 'gzip' || encoding === 'br' || encoding === 'deflate';
};

/**
 * Optimize fetch with compression
 */
export const optimizedFetch = async (
  url: string,
  options: RequestInit = {}
): Promise<Response> => {
  const headers = new Headers(options.headers);
  
  // Request compressed responses
  headers.set('Accept-Encoding', 'gzip, deflate, br');
  
  // Add compression for POST/PUT
  if (options.method === 'POST' || options.method === 'PUT') {
    if (options.body && typeof options.body === 'string') {
      const compressed = await compressData(options.body);
      headers.set('Content-Encoding', 'gzip');
      options.body = compressed;
    }
  }

  return fetch(url, {
    ...options,
    headers,
  });
};

/**
 * Measure compression ratio
 */
export const measureCompressionRatio = async (data: string): Promise<number> => {
  const original = new Blob([data]).size;
  const compressed = await compressData(data);
  const compressedSize = compressed.size;
  
  return ((original - compressedSize) / original) * 100;
};
