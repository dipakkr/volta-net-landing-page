import {
  Banner,
  IssueBoard,
  Compare,
  Benefit,
  Notification,
  ModernTools,
  Features,
  Brand,
  Cta,
} from "@/components/Home";

import PageLayout from "@/layout/PageLayout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Volta</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <PageLayout>
          <Banner />
          <IssueBoard />
          <Compare />
          <Benefit />
          <Notification />
          <ModernTools />
          <Features />
          <Brand />
          <Cta />
        </PageLayout>
      </main>
    </>
  );
}
