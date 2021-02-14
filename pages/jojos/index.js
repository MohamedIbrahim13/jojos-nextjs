import styles from "../../styles/Jojos.module.css";
import Link from "next/link";
import Head from "next/head";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      jojos: data,
    },
  };
};

const Jojos = ({ jojos }) => {
  return (
    <>
      <Head>
        <title>Jojo List | Jojos</title>
        <meta name="keywords" content="jojos" />
      </Head>
      <div>
        <h1>All Jojos</h1>
        {jojos.map((jojo) => (
          <Link href={`/jojos/${jojo.id}`} key={jojo.id}>
            <a className={styles.single}>
              <h3>{jojo.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Jojos;
