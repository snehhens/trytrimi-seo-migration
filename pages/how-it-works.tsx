import type { GetStaticProps, NextPage } from "next";
import HowItWorks from "@/pages/HowItWorks";

const HowItWorksPage: NextPage = () => <HowItWorks />;

export const getStaticProps: GetStaticProps = async () => {
  return { props: {}, revalidate: 86400 };
};

export default HowItWorksPage;
