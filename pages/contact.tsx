import type { GetStaticProps, NextPage } from "next";
import Contact from "@/pages/Contact";

const ContactPage: NextPage = () => <Contact />;

export const getStaticProps: GetStaticProps = async () => {
  return { props: {}, revalidate: 86400 };
};

export default ContactPage;
