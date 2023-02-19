import Head from "next/head";
import { JsxAttribute } from "typescript";

function HTMLHead(props: any) {
  const { title, description, keywords } = props.meta;
  const fullTitle = `${title} | BAH Engineering Consultant`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={`${keywords}, other keywords`} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default HTMLHead;
