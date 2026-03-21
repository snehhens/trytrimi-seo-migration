import type { GetStaticProps, NextPage } from "next";
import Blog from "@/pages/Blog";

const BlogIndexPage: NextPage = () => <Blog />;

export const getStaticProps: GetStaticProps = async () => {
  return { props: {}, revalidate: 3600 };
};

export default BlogIndexPage;
