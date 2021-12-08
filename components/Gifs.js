import { useGifs } from '../context/GifsContext';
import { GifItem } from './GifItem';

export const Gifs = () => {
  const {
    state: { loading, gifs },
  } = useGifs();

  if (loading) {
    return <h1>Loading....</h1>;
  }

  return (
    <section className='gifs'>
      {gifs.map((gif) => (
        <GifItem key={gif.id} {...gif} />
      ))}
    </section>
  );
};
