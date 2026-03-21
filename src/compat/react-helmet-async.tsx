import {
  Children,
  cloneElement,
  isValidElement,
  type PropsWithChildren,
  type ReactElement,
  type ReactNode,
} from "react";
import Head from "next/head";

export function HelmetProvider({ children }: PropsWithChildren) {
  return <>{children}</>;
}

function buildHeadKey(element: ReactElement, index: number): string {
  const tag = typeof element.type === "string" ? element.type : "component";
  const props = element.props as Record<string, unknown>;

  if (tag === "title") {
    return "title";
  }

  if (tag === "meta") {
    if ("charSet" in props) {
      return "meta:charset";
    }

    if (typeof props.name === "string") {
      return `meta:name:${props.name}`;
    }

    if (typeof props.property === "string") {
      return `meta:property:${props.property}`;
    }

    if (typeof props.httpEquiv === "string") {
      return `meta:httpEquiv:${props.httpEquiv}`;
    }
  }

  if (tag === "link") {
    if (props.rel === "canonical") {
      return "link:canonical";
    }

    if (typeof props.rel === "string" && typeof props.href === "string") {
      return `link:${props.rel}:${props.href}`;
    }
  }

  if (tag === "script" && props.type === "application/ld+json") {
    return `script:ldjson:${index}`;
  }

  return `${tag}:${index}`;
}

function withStableHeadKeys(children: ReactNode): ReactNode {
  return Children.map(children, (child, index) => {
    if (!isValidElement(child) || child.key != null) {
      return child;
    }

    return cloneElement(child, {
      key: buildHeadKey(child, index),
    });
  });
}

export function Helmet({ children }: PropsWithChildren) {
  return <Head>{withStableHeadKeys(children)}</Head>;
}
