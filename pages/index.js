import { useEffect } from 'react';
import Head from 'next/head';
import { Header } from '../components/Header';
import { Gifs } from '../components/Gifs';
import { getGifs } from '../context/gifsActions';
import { useGifs } from '../context/GifsContext';
import { types } from '../types/types';

export default function Home({ gifs }) {
  const { dispatch } = useGifs();

  useEffect(() => {
    dispatch({ type: types.setGifs, payload: gifs });
  }, [gifs]);

  return (
    <div className='container'>
      <Head>
        <title>GifDev</title>
        <meta
          name='description'
          content='App to search for gif and share with others'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='app'>
        <Header />

        <Gifs />
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const gifs = await getGifs('react');

  return {
    props: {
      gifs,
    },
  };
};
