import type { GetStaticProps, NextPage } from "next";
import FAQ from "@/pages/FAQ";

const FAQPage: NextPage = () => <FAQ />;

export const getStaticProps: GetStaticProps = async () => {
  return { props: {}, revalidate: 86400 };
};

export default FAQPage;
