import config from 'react-native-config';

// get base url from the env files
const BASE_URL = config.BASE_URL;

// all the api endpoints used in the app
export const Endpoints = {
  AUTHORIZATION_TOKEN: `${BASE_URL}/prod/generateToken`,
  GET_ANIME_DETAILS: `${BASE_URL}/prod/getContent`,
};
