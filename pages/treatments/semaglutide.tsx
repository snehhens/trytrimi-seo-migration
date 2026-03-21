import type { GetStaticProps, NextPage } from "next";
import SemaglutideProduct from "@/pages/SemaglutideProduct";

const SemaglutidePage: NextPage = () => <SemaglutideProduct />;

export const getStaticProps: GetStaticProps = async () => {
  return { props: {}, revalidate: 3600 };
};

export default SemaglutidePage;
