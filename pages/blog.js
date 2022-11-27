import Link from "next/link";
import React from "react";
import styles from "../styles/blog.module.css";

const Blog = () => {
  return (
    <main className={styles.main}>
      <div className={styles.blogs}>
        <h2>Popular Blogs</h2>
        <div className={styles.blogItem}>
          <Link href={"/blogpost/learn-javascript"}>
            <h3>How to Learn Javascript in 2022</h3>
          </Link>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            porro maiores similique aperiam dicta minus delectus dolorem quae
            sit fugiat!
          </p>
        </div>
        <div className={styles.blogItem}>
          <h3>How to Learn Javascript in 2022</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            porro maiores similique aperiam dicta minus delectus dolorem quae
            sit fugiat!
          </p>
        </div>
        <div className={styles.blogItem}>
          <h3>How to Learn Javascript in 2022</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
            porro maiores similique aperiam dicta minus delectus dolorem quae
            sit fugiat!
          </p>
        </div>
      </div>
    </main>
  );
};

export default Blog;
