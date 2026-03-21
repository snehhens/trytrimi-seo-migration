import type { GetStaticProps, NextPage } from "next";
import TirzepatideProduct from "@/pages/TirzepatideProduct";

const TirzepatidePage: NextPage = () => <TirzepatideProduct />;

export const getStaticProps: GetStaticProps = async () => {
  return { props: {}, revalidate: 3600 };
};

export default TirzepatidePage;
