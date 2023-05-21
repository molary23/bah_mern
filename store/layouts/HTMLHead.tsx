import Head from "next/head";
import { useRouter } from "next/router";

export default function HTMLHead() {
  const router = useRouter(),
    pathname = router.pathname;

  let MetaTags = {
    title: "",
    description: "",
    keywords: "",
  };

  return (
    <Head>
      <title>{MetaTags?.title}</title>
      <meta name="description" content={MetaTags?.description} />
      <meta name="keywords" content={`${MetaTags?.keywords}, other keywords`} />
      <meta name="robots" content="noindex, nofollow" />
      {/*<link rel="icon" href={`${SITE_CONSTANTS.image}/favicon.png`} />*/}
    </Head>
  );
}
