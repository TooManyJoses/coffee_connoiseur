import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Banner from "../components/Banner/banner";
import Card from "../components/Card/card";
import mockData from "../data/mock-stores.json";

export default function Home() {
  const handleOnBannerButtonClick = () => {
    console.log("Clleeeeekkk");
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <link rel="icon" href="/Graphicloads-Food-Drink-Coffee-bean.ico" />
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText={"View stores nearby"}
          handleOnClick={handleOnBannerButtonClick}
        />
        <div className={styles.coffeeImage}>
          <Image src="/static/banner.png" width={700} height={250} />
        </div>
        <div className={styles.cardLayout}>
          {mockData.map((store) => <Card
            name={store.name}
            imgUrl={store.imgUrl}
            href={`/coffee-store/${store.id}`}
            className={styles.card}
          />)}
        </div>
      </main>
    </div>
  );
}
