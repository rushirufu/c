import useFetch from "@/hooks/usehooks-ts";
import { GetStaticProps, NextPage } from "next";
import pokeApi from "../api/Pokemons";

export interface Pokemons {
  count: number;
  next: string;
  previous: string;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}

const index: NextPage = (props: any) => {
  console.log(props);

  return (
    <>
      {}
      <h1>Hola</h1>
      <ul>
        <li>{pokemons.map}</li>
      </ul>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (props: any) => {
  const { data } = await pokeApi.get("/pokemon?limit=151");

  return {
    props: {
      pokemons: data.results,
    }, // will be passed to the page component as props
  };
};

export default index;
