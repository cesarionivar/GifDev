export const getGifs = async (term) => {
  const gifs = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${process.env.NEXT_PUBLIC_GIPHY_API_KEY}&q=${term}`
  ).then((res) => res.json());

  return gifs.data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    imgUrl: gif.images.downsized.url,
  }));
};
