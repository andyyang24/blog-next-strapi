import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home({ posts }) {
  return (
    <div>
      {/* loop over the posts and show list */}
      {posts &&
        posts.map((post) => (
          <div key={post.id}>
            <Link href={`/${encodeURIComponent(post.slug)}`}>
              <a>
                <h2>{post.title}</h2>
              </a>
            </Link>
            <div>{post.user.username}</div>
          </div>
        ))}
    </div>
  );
}

export async function getStaticProps() {
  //get posts from Strapi api
  const res = await fetch("http://localhost:1337/posts");

  const posts = await res.json();

  return {
    props: { posts },
  };
}
