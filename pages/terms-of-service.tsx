import type { GetStaticProps, NextPage } from "next";
import TermsOfService from "@/pages/TermsOfService";

const TermsOfServicePage: NextPage = () => <TermsOfService />;

export const getStaticProps: GetStaticProps = async () => {
  return { props: {}, revalidate: 86400 };
};

export default TermsOfServicePage;
