import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import NotFound from "@/pages/NotFound";

const categoryComponents: Record<string, ComponentType> = {
  semaglutide: dynamic(() => import("@/pages/blog/CategorySemaglutide")),
  tirzepatide: dynamic(() => import("@/pages/blog/CategoryTirzepatide")),
};

interface Props {
  category: string;
}

const BlogCategoryPage: NextPage<Props> = ({ category }) => {
  const Component = categoryComponents[category];
  if (!Component) return <NotFound />;
  return <Component />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(categoryComponents).map((category) => ({
    params: { category },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const category = params?.category as string;
  if (!categoryComponents[category]) return { notFound: true };
  return { props: { category } };
};

export default BlogCategoryPage;
