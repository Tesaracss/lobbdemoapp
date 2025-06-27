/**
 * This file contains the services related to authentication
 */

import { useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { ServiceKey } from '../common/constants/screen.constants';
import { Endpoints } from '../common/constants/endpoint.constants';

//types...
type AddAuthRes = {
  token: 'string';
};

// this is used to add a new auth for a customer
export const useAddAuth = () => {
  return useQuery<AddAuthRes, AxiosError<Error>>({
    queryKey: [ServiceKey.ADD_AUTH],
    queryFn: () =>
      axios
        .post<AddAuthRes>(Endpoints.AUTHORIZATION_TOKEN, {
          email: 'hemanth@lobb.in',
        })
        .then(res => res.data), // post to api
  });
};
