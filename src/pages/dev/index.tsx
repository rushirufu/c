import useFetch from "@/hooks/usehooks-ts";
import Image from 'next/image'
import { GetStaticProps, NextPage } from "next";
import pokeApi from "../api/Pokemons";
import { PokemonSmall, PokemonsListResponse } from "@/interfaces/pokemon-list";

interface Props {
  pokemons: PokemonSmall[]
}

const index: NextPage<Props> = ({ pokemons }) => {
  console.log(pokemons);
  return (
    <>
    <h1>{pokemons[0].id}</h1>
    <h1>{pokemons[0].name}</h1>
    <h1>{pokemons[0].url}</h1>
    <h1>{pokemons[0].img}</h1>
    <ul>
      {
        pokemons.map(({id,name,img}) => (
          <li key={id}>
            {name}
          <img src={img} alt="pokemon" width={100} height={100}/>
          </li>
        ))
      }
    </ul>
    {/* <Image
      src={pokemons[0].url}
      alt="Vercel Logo"
      width={100}
      height={100}
      priority
    /> */}
    {/* <img src={pokemons[0].url} name={pokemons[0].name} /> */}

      <ul>
      </ul>
      {/* <h1>Hola {pokemons[0].name}</h1> */}
      <ul>
      {/* {
        pokemons.map(({id,name,img})) => (
          <li key={id}> {name} </li>
        ))
      } */}
      </ul>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (props: any) => {
  const { data } = await pokeApi.get<PokemonsListResponse>("/pokemon?limit=151");
  const result: PokemonSmall[] = data.results.map((pokemon, i) => ({
    ...pokemon,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`,
    id: i + 1
  }));

  return {
    props: {
      pokemons: result,
    }, // will be passed to the page component as props
  };
};

export default index;
