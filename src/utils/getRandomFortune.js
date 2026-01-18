import data from "../data/fortunes.json";

const getRandomFortune = () => {
  const randomIndex = Math.floor(Math.random() * data.fortunes.length);
  return data.fortunes[randomIndex].text;
};

export default getRandomFortune;
