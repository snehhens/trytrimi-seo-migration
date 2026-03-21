import type { GetStaticProps, NextPage } from "next";
import PrivacyPolicy from "@/pages/PrivacyPolicy";

const PrivacyPolicyPage: NextPage = () => <PrivacyPolicy />;

export const getStaticProps: GetStaticProps = async () => {
  return { props: {}, revalidate: 86400 };
};

export default PrivacyPolicyPage;
