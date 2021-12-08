import { useState } from 'react';
import { getGifs } from '../context/gifsActions';
import { useGifs } from '../context/GifsContext';
import { types } from '../types/types';

export const Header = () => {
  const [term, setTerm] = useState('');
  const { dispatch } = useGifs();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!term) return;

    dispatch({ type: types.startGetGifs });

    const gifs = await getGifs(term);

    dispatch({
      type: types.setGifs,
      payload: gifs,
    });

    setTerm('');
  };

  return (
    <header className='header'>
      <h1 className='header__title'>GifDev</h1>

      <div className='search'>
        <form onSubmit={handleSubmit} className='search__form'>
          <input
            type='text'
            placeholder='Search for gifs'
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <input type='submit' value='Search' />
        </form>
      </div>
    </header>
  );
};
