import type { GetStaticProps, NextPage } from "next";
import ImportantSafetyInformation from "@/pages/ImportantSafetyInformation";

const ImportantSafetyInformationPage: NextPage = () => <ImportantSafetyInformation />;

export const getStaticProps: GetStaticProps = async () => {
  return { props: {}, revalidate: 86400 };
};

export default ImportantSafetyInformationPage;
