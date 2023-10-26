import axios from 'axios';

const BASE_URL = 'https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5';

export const getWorld = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getAudio = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
