import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Script src="/sc.js" strategy="lazyOnload"></Script> */}
      <nav className={styles.mainnav}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to hunting coder</h1>
        <p>A blog by hunting coder by hunting coder</p>

        <div className={styles.blogs}>
          <h2>Popular Blogs</h2>
          <div className={styles.blogItem}>
            <h3>How to Learn Javascript in 2022</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              porro maiores similique aperiam dicta minus delectus dolorem quae
              sit fugiat!
            </p>
          </div>
          <div className="blogItem">
            <h3>How to Learn Javascript in 2022</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              porro maiores similique aperiam dicta minus delectus dolorem quae
              sit fugiat!
            </p>
          </div>
          <div className="blogItem">
            <h3>How to Learn Javascript in 2022</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              porro maiores similique aperiam dicta minus delectus dolorem quae
              sit fugiat!
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
