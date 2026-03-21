import type { GetServerSideProps, NextPage } from "next";
import { buildImageSitemapXml } from "@/lib/seo/sitemap";

const ImageSitemapPage: NextPage = () => null;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  res.write(buildImageSitemapXml());
  res.end();

  return { props: {} };
};

export default ImageSitemapPage;
