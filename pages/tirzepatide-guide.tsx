import type { GetStaticProps, NextPage } from "next";
import TirzepatideGuide from "@/pages/TirzepatideGuide";

const TirzepatideGuidePage: NextPage = () => <TirzepatideGuide />;

export const getStaticProps: GetStaticProps = async () => {
  return { props: {}, revalidate: 86400 };
};

export default TirzepatideGuidePage;
