import axios from 'axios';
const BASE_URL = 'https://media.merriam-webster.com';
const BASE_URL_L = 'https://dictionaryapi.com/api/v3/';
const BASE_URL_S =
  'https://dictionaryapi.com/api/v3/references/sd4/json/test?key=a01de200-ecf0-4c98-aec8-c7c91d42e95c';

export const getWorldLearn = async (world: string) => {
  try {
    const response = await axios.get(
      `${BASE_URL_L}references/learners/json/${world}?key=10d629f5-79b3-4e14-bb87-8003b16f1fad`
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getWorldSchool = async (world: string) => {
  try {
    const response = await axios.get(BASE_URL_S);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getAudio = async (trackName: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/audio/prons/en/us/mp3/c/can_1_02.mp3`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
// если audioначинается с «bix», подкаталог должен быть «bix»,
// если audioначинается с «gg», подкаталог должен быть «gg»,
// если audioначинается с цифры или знака препинания (например, «_»), подкаталог должен быть «числом»,
// в противном случае подкаталог равен первой букве audio.
