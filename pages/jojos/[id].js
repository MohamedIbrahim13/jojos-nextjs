import Head from "next/head";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((jojo) => {
    return {
      params: {
        id: jojo.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: {
      jojo: data,
    },
  };
};

const Details = ({ jojo }) => {
  return (
    <>
      <Head>
        <title>Jojo List | Single Jojo</title>
        <meta name="keywords" content="jojos" />
      </Head>
      <div>
        <h1>{jojo.name}</h1>
        <p>{jojo.email}</p>
        <p>{jojo.website}</p>
        <p>{jojo.address.city}</p>
      </div>
    </>
  );
};

export default Details;
