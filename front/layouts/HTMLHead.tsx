import Head from "next/head";
import { HTMLMetaTag } from "../util/HTMLMetaTag";
import { useRouter } from "next/router";

function HTMLHead() {
  const router = useRouter(),
    pathname = router.pathname;

  let MetaTags = {
    title: "",
    description: "",
    keywords: "",
  };

  if (pathname === "/products/shelves") {
    MetaTags = HTMLMetaTag?.shelves;
  } else if (pathname === "/products/racking") {
    MetaTags = HTMLMetaTag?.racking;
  } else if (pathname === "/about") {
    MetaTags = HTMLMetaTag?.about;
  }

  return (
    <Head>
      <title>{MetaTags?.title}</title>
      <meta name="description" content={MetaTags?.description} />
      <meta name="keywords" content={`${MetaTags?.keywords}, other keywords`} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default HTMLHead;
