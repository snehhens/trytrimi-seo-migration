import type { GetServerSideProps, NextPage } from "next";
import { buildRobotsTxt } from "@/lib/seo/sitemap";

const RobotsPage: NextPage = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  res.write(buildRobotsTxt());
  res.end();

  return { props: {} };
};

export default RobotsPage;
