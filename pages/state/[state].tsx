import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import StateGuide from "@/pages/blog/StateGuide";

interface Props {
  state: string;
}

const StateGuidePage: NextPage<Props> = ({ state }) => <StateGuide />;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const state = params?.state as string;
  if (!state) return { notFound: true };
  return { props: { state }, revalidate: 86400 };
};

export default StateGuidePage;
