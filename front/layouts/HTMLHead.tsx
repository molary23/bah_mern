import Head from "next/head";
import { JsxAttribute } from "typescript";

function HTMLHead(props: any) {
  const { title, description, keywords } = props.meta;

  return (
    <Head>
      <title>{title} | BAH Engineering Consultant</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={`${keywords}, other keywords`} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default HTMLHead;
