export const SITE_URL = "https://trytrimi.com";
export const SITE_NAME = "Trimi Health";
export const SITE_DESCRIPTION =
  "Online weight-loss clinic offering physician-guided access to compounded GLP-1 medications including semaglutide and tirzepatide.";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/logo.png`;
export const TITLE_SUFFIX = ` | ${SITE_NAME}`;

export function normalizePath(path: string): string {
  if (!path) {
    return "/";
  }

  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const pathname = path.startsWith("/") ? path : `/${path}`;
  return pathname !== "/" && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

export function toAbsoluteUrl(path: string): string {
  if (!path) {
    return SITE_URL;
  }

  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const normalizedPath = normalizePath(path);
  return normalizedPath === "/" ? SITE_URL : `${SITE_URL}${normalizedPath}`;
}

export function formatSeoTitle(title: string): string {
  const normalizedTitle = title.trim();

  if (!normalizedTitle) {
    return SITE_NAME;
  }

  return /trimi/i.test(normalizedTitle) ? normalizedTitle : `${normalizedTitle}${TITLE_SUFFIX}`;
}
