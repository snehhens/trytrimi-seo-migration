import type { GetStaticProps, NextPage } from "next";
import RefundPolicy from "@/pages/RefundPolicy";

const RefundPolicyPage: NextPage = () => <RefundPolicy />;

export const getStaticProps: GetStaticProps = async () => {
  return { props: {}, revalidate: 86400 };
};

export default RefundPolicyPage;
