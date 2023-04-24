import Head from "next/head";
import { HTMLMetaTag } from "../util/HTMLMetaTag";
import { useRouter } from "next/router";
import { SITE_CONSTANTS } from "../util/constants";

export default function HTMLHead() {
  const router = useRouter(),
    pathname = router.pathname;

  let MetaTags = {
    title: "",
    description: "",
    keywords: "",
  };

  if (pathname === "/") {
    MetaTags = HTMLMetaTag?.home;
  } else if (pathname === "/about") {
    MetaTags = HTMLMetaTag?.about;
  } else if (pathname === "/contact") {
    MetaTags = HTMLMetaTag?.contact;
  } else if (pathname === "/products/shelves") {
    MetaTags = HTMLMetaTag?.shelves;
  } else if (pathname === "/products/racking") {
    MetaTags = HTMLMetaTag?.racking;
  } else if (pathname === "/products/equipments") {
    MetaTags = HTMLMetaTag?.equipments;
  } else if (pathname === "/products/spares") {
    MetaTags = HTMLMetaTag?.spares;
  } else if (pathname === "/products/power") {
    MetaTags = HTMLMetaTag?.power;
  } else if (pathname === "/products/pallets") {
    MetaTags = HTMLMetaTag?.pallets;
  } else if (pathname === "/services/maintenance") {
    MetaTags = HTMLMetaTag?.maintenance;
  } else if (pathname === "/services/logistics") {
    MetaTags = HTMLMetaTag?.logistics;
  } else if (pathname === "/services/consultancy") {
    MetaTags = HTMLMetaTag?.consultancy;
  } else if (pathname === "/services/distilled-water") {
    MetaTags = HTMLMetaTag?.water;
  }

  return (
    <Head>
      <title>{MetaTags?.title}</title>
      <meta name="description" content={MetaTags?.description} />
      <meta name="keywords" content={`${MetaTags?.keywords}, other keywords`} />
      <link rel="icon" href={`${SITE_CONSTANTS.image}/favicon.png`} />
    </Head>
  );
}
