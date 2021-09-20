import Head from "next/head";
import Image from "next/image";

import { PrismaClient } from "@prisma/client";
import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <h1>Welcome to our Blog</h1>

      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const posts = await prisma.post.findMany({});

  return { props: { posts } };
}
