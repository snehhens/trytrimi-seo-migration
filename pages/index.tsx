import type { GetStaticProps, NextPage } from "next";
import Index from "@/pages/Index";

const HomePage: NextPage = () => <Index />;

export const getStaticProps: GetStaticProps = async () => {
  return { props: {}, revalidate: 3600 };
};

export default HomePage;
