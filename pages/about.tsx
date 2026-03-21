import type { GetStaticProps, NextPage } from "next";
import About from "@/pages/About";

const AboutPage: NextPage = () => <About />;

export const getStaticProps: GetStaticProps = async () => {
  return { props: {}, revalidate: 86400 };
};

export default AboutPage;
