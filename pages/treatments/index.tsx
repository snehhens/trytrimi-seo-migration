import type { GetStaticProps, NextPage } from "next";
import Treatments from "@/pages/Treatments";

const TreatmentsPage: NextPage = () => <Treatments />;

export const getStaticProps: GetStaticProps = async () => {
  return { props: {}, revalidate: 3600 };
};

export default TreatmentsPage;
