import dynamic from "next/dynamic";

const BackgroundRemoverPage = dynamic(() => import("@/pages/BackgroundRemover"), {
  ssr: false,
});

export default BackgroundRemoverPage;
