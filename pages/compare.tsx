import type { GetStaticProps, NextPage } from "next";
import Compare from "@/pages/Compare";

const ComparePage: NextPage = () => <Compare />;

export const getStaticProps: GetStaticProps = async () => {
  return { props: {}, revalidate: 3600 };
};

export default ComparePage;
