import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/blogPost.module.css";

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Title of the page {slug}</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          fuga itaque eaque. Ad modi animi, recusandae perferendis vitae
          temporibus vel incidunt, quis, error alias hic ipsa quia quibusdam?
          Omnis recusandae ad iusto repudiandae voluptas maxime impedit ipsa,
          nobis incidunt tempore.
        </p>
      </main>
    </div>
  );
};

export default Slug;
