/**
 * react-router-dom compatibility shim for Next.js Pages Router.
 *
 * This file is aliased to replace "react-router-dom" across the entire codebase.
 * It replaces the parts that require a Router context (Link, hooks) with Next.js
 * equivalents that work everywhere without a BrowserRouter wrapper, while keeping
 * the real react-router-dom APIs (Routes, Route, BrowserRouter, etc.) for App.tsx
 * catch-all routes that still use the full SPA routing setup.
 */

import NextLink from "next/link";
import { useRouter } from "next/router";
import type { PropsWithChildren, MouseEvent } from "react";
import { useEffect } from "react";
import {
  BrowserRouter as ClientBrowserRouter,
  Navigate as ClientNavigate,
} from "../../node_modules/react-router-dom/dist/index.js";

// ─── Pass-through exports ────────────────────────────────────────────────────
// Re-export everything from the real react-router-dom that we are NOT overriding.
export {
  Routes,
  Route,
  Outlet,
  createBrowserRouter,
  createMemoryRouter,
  createPath,
  createSearchParams,
  generatePath,
  matchPath,
  matchRoutes,
  renderMatches,
  resolvePath,
  useMatch,
  useRouteError,
  useRouteLoaderData,
  useRoutes,
  useSearchParams,
  useSubmit,
  useRevalidator,
  useNavigation,
  RouterProvider,
  ScrollRestoration,
  Form,
  useActionData,
  useLoaderData,
  useFetcher,
  useFetchers,
  useFormAction,
  useHref,
  useInRouterContext,
  useOutlet,
  useOutletContext,
  useResolvedPath,
  useBlocker,
  isRouteErrorResponse,
  redirect,
  json,
  defer,
  Await,
  MemoryRouter,
  HashRouter,
} from "../../node_modules/react-router-dom/dist/index.js";

// ─── Link ────────────────────────────────────────────────────────────────────
// Replaces react-router-dom Link with next/link — works without any Router context.
interface LinkProps {
  to?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  target?: string;
  rel?: string;
  style?: React.CSSProperties;
  tabIndex?: number;
  replace?: boolean;
  prefetch?: boolean;
  [key: string]: unknown;
}

export function Link({
  to,
  children,
  className,
  onClick,
  replace,
  prefetch = true,
  target,
  rel,
  style,
  tabIndex,
}: LinkProps) {
  const href = typeof to === "string" && to.length > 0 ? to : "/";

  if (process.env.NODE_ENV !== "production" && href === "/" && (to === undefined || to === null || to === "")) {
    console.warn('[compat Link] Received empty "to" prop. Falling back to "/".');
  }

  return (
    <NextLink
      href={href}
      className={className}
      onClick={onClick}
      replace={replace}
      prefetch={prefetch}
      target={target}
      rel={rel}
      style={style}
      tabIndex={tabIndex}
    >
      {children}
    </NextLink>
  );
}

// ─── useLocation ─────────────────────────────────────────────────────────────
// Returns a location-like object built from next/router — no Router context needed.
export function useLocation() {
  const router = useRouter();
  const search =
    typeof window !== "undefined"
      ? window.location.search
      : router.asPath.includes("?")
      ? "?" + router.asPath.split("?")[1]
      : "";

  return {
    pathname: router.pathname === "/[...slug]" ? router.asPath.split("?")[0] : router.pathname,
    search,
    hash: typeof window !== "undefined" ? window.location.hash : "",
    state: null,
    key: "default",
  };
}

// ─── useNavigate ─────────────────────────────────────────────────────────────
// Returns a navigate function backed by next/router — no Router context needed.
export function useNavigate() {
  const router = useRouter();
  return (to: string | number, options?: { replace?: boolean; state?: unknown }) => {
    if (typeof to === "number") {
      window.history.go(to);
      return;
    }
    if (options?.replace) {
      router.replace(to);
    } else {
      router.push(to);
    }
  };
}

// ─── useParams ───────────────────────────────────────────────────────────────
// Returns path params from next/router query — no Router context needed.
export function useParams<T extends Record<string, string>>(): T {
  const router = useRouter();
  const params: Record<string, string> = {};
  for (const [key, val] of Object.entries(router.query || {})) {
    if (typeof val === "string") params[key] = val;
    else if (Array.isArray(val)) params[key] = val.join("/");
  }
  return params as T;
}

// ─── BrowserRouter ───────────────────────────────────────────────────────────
// Used only inside App.tsx (the catch-all SSR route). Uses StaticRouter on the
// server so that the full route tree still renders correct HTML.
export function BrowserRouter({
  children,
  ...props
}: PropsWithChildren<Record<string, unknown>>) {
  const router = useRouter();

  if (typeof window === "undefined") {
    const { StaticRouter } = require("../../node_modules/react-router-dom/server.js");
    return <StaticRouter location={router.asPath || "/"}>{children}</StaticRouter>;
  }

  return <ClientBrowserRouter {...props}>{children}</ClientBrowserRouter>;
}

// ─── Navigate ────────────────────────────────────────────────────────────────
// Programmatic redirect using next/router on the client.
export function Navigate({ to, replace }: { to: string; replace?: boolean }) {
  const router = useRouter();

  useEffect(() => {
    if (!to) return;
    if (replace) {
      router.replace(to);
    } else {
      router.push(to);
    }
  }, [replace, router, to]);

  if (typeof window === "undefined") return null;

  return <ClientNavigate to={to} replace={replace} />;
}
