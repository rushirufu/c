import useFetch from "@/hooks/usehooks-ts";
import Image from "next/image";
import { GetStaticProps, NextPage } from "next";
import { PokemonSmall, PokemonsListResponse } from "@/interfaces/pokemon-list";
import { Avatar, Card, Skeleton } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  FacebookFilled,
  SettingOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import pokeApi from "@/services/Pokemons";
import { useState } from "react";

const { Meta } = Card;

interface Props {
  pokemons: PokemonSmall[];
}

const GetStaticProps: NextPage<Props> = ({ pokemons }) => {
  const [loading, setLoading] = useState(true);

  const onChange = (checked: boolean) => {
    setLoading(!checked);
  };
  console.log(pokemons);
  return (
    <>
      <Card style={{ width: 300, marginTop: 16 }}>
        <Meta
          avatar={
            <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
          }
          title="Card title"
          description="This is the description"
        />
      </Card>
      <Card
        style={{ width: 300, marginTop: 16 }}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Skeleton loading={loading} avatar active>
          <Meta
            avatar={
              <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
            }
            title="Card title"
            description="This is the description"
          />
        </Skeleton>
      </Card>
      <Card title="Card title" bordered={false} style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>

      <Card
        size="small"
        title="Small size card"
        extra={<a href="#">More</a>}
        style={{ width: 300 }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>

      <h1>{pokemons[0].id}</h1>
      <h1>{pokemons[0].name}</h1>
      <h1>{pokemons[0].url}</h1>
      <h1>{pokemons[0].img}</h1>
      <ul>
        {pokemons.map(({ id, name, img }) => (
          <li key={id}>
            {name}
            <img src={img} alt="pokemon" width={100} height={100} />
          </li>
        ))}
      </ul>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (props: any) => {
  const { data } = await pokeApi.get<PokemonsListResponse>(
    "/pokemon?limit=151"
  );
  const result: PokemonSmall[] = data.results.map((pokemon, i) => ({
    ...pokemon,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
    id: i + 1,
  }));

  return {
    props: {
      pokemons: result,
    }, // will be passed to the page component as props
  };
};

export default GetStaticProps;
