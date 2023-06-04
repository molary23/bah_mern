import { useLocation } from "react-router-dom";
import { HTMLMetaTag } from "../util/HTMLMetaTag";
import { useEffect } from "react";

export default function HTMLHead() {
  const router = useLocation(),
    pathname = router.pathname;

  useEffect(() => {
    let description = document.querySelector("meta[name='description']"),
      keywords = document.querySelector("meta[name='keywords']");
    description && document.head.removeChild(description);
    keywords && document.head.removeChild(keywords);

    let metaTags = { title: "", description: "", keywords: "" };

    if (pathname === "/") {
      metaTags = HTMLMetaTag?.home;
    } else if (pathname === "/about") {
      metaTags = HTMLMetaTag?.about;
    } else if (pathname === "/contact") {
      metaTags = HTMLMetaTag?.contact;
    } else if (pathname === "/products/shelves") {
      metaTags = HTMLMetaTag?.shelves;
    } else if (pathname === "/products/racking") {
      metaTags = HTMLMetaTag?.racking;
    } else if (pathname === "/products/equipments") {
      metaTags = HTMLMetaTag?.equipments;
    } else if (pathname === "/products/spares") {
      metaTags = HTMLMetaTag?.spares;
    } else if (pathname === "/products/power") {
      metaTags = HTMLMetaTag?.power;
    } else if (pathname === "/products/pallets") {
      metaTags = HTMLMetaTag?.pallets;
    } else if (pathname === "/services/maintenance") {
      metaTags = HTMLMetaTag?.maintenance;
    } else if (pathname === "/services/logistics") {
      metaTags = HTMLMetaTag?.logistics;
    } else if (pathname === "/services/consultancy") {
      metaTags = HTMLMetaTag?.consultancy;
    } else if (pathname === "/services/distilled-water") {
      metaTags = HTMLMetaTag?.water;
    }

    let descriptionMeta = document.createElement("meta"),
      keywordsMeta = document.createElement("meta");
    descriptionMeta.setAttribute("name", "description");
    keywordsMeta.setAttribute("name", "keywords");
    descriptionMeta.content =
      metaTags?.description ||
      "A one stop place for your Warehouse handling equipment purchase and maintenace. We install and maintain industrial shelves, cabinets and racking system";
    keywordsMeta.content =
      metaTags?.keywords ||
      "Consulting, Engineering, Energy saving Bulbs, Warehouse Equipments";
    document.head.appendChild(descriptionMeta);
    document.head.appendChild(keywordsMeta);
    document.title = metaTags?.title || "BAH Engineering Consultant";
  }, [pathname]);

  return null;
}
