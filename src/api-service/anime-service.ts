import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import {
  AnimeDetailsData,
  ServiceKey,
} from '../common/constants/screen.constants';
import config from 'react-native-config';
import { Endpoints } from '../common/constants/endpoint.constants';

type AnimeDetailsRes = AnimeDetailsData;

/**
 * This is a hook used to fetch the anime details
 */
export const useFetchAnimeDetail = () => {
  return useQuery<AnimeDetailsRes, Error>({
    queryKey: [ServiceKey.ANIME_LIST],
    queryFn: () =>
      axios
        .get<AnimeDetailsRes>(Endpoints.GET_ANIME_DETAILS, {
          headers: {
            Authorization: `Bearer ${config.TOKEN}`,
          },
        })
        .then(res => res.data),
  });
};
