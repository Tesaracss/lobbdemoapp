import { AnimeItem } from './screen.constants';
import { RouteProp } from '@react-navigation/native';

// contains all the screen names
export enum Route {
  APP_LANDING = 'appLanding',
  ANIME_DETAILS = 'animeDetails',
}

// navigation/types.ts

export type RootStackParamList = {
  ANIME_DETAILS: { data: AnimeItem };
};

export type AnimeDetailsRouteProp = RouteProp<
  RootStackParamList,
  'ANIME_DETAILS'
>;
