import type { GetStaticProps, NextPage } from "next";
import SemaglutideGuide from "@/pages/SemaglutideGuide";

const SemaglutideGuidePage: NextPage = () => <SemaglutideGuide />;

export const getStaticProps: GetStaticProps = async () => {
  return { props: {}, revalidate: 86400 };
};

export default SemaglutideGuidePage;
