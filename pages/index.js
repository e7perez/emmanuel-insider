import Head from "next/head";
import Header from "../components/Header"
import Landing from "../components/Landing"
export default function Home() {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Emmanuel Insider tells the global tech, finance, markets, media, healthcare, and strategy stories you want to know."
        />
        <meta
          name="keywords"
          content="stocks, cryptocurrency, bitcoin, technology, business, investing"
        />
        <link rel="manifest" href="/favicon_package/site.webmanifest" />
        <title>Emmanuel Insider</title>
      </Head>
      <Header />
      <Landing />
    </div>
  )
}
