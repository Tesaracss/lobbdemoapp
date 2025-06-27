import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLanding from '../screens/app-landing';
import AnimeDetails from '../screens/anime-details';
import { createContext } from 'react';
import { Route } from '../common/constants/navigation.constants';
import { useFetchAnimeDetail } from '../api-service/anime-service';

type AnimeContextType = {
  animeQuery: ReturnType<typeof useFetchAnimeDetail> | undefined;
};
const dummyValue: AnimeContextType = {
  animeQuery: undefined,
};

export const AnimeContext = createContext<AnimeContextType>(dummyValue);
const RootStack = createNativeStackNavigator();

/**
 * This component renders the navigation stack for the app
 *
 * @returns JSX.Element
 */
const AppNavigation = () => {
  const animeQuery = useFetchAnimeDetail();

  return (
    <AnimeContext.Provider value={{ animeQuery }}>
      <RootStack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={Route.APP_LANDING}
      >
        <RootStack.Screen name={Route.APP_LANDING} component={AppLanding} />
        <RootStack.Screen name={Route.ANIME_DETAILS} component={AnimeDetails} />
      </RootStack.Navigator>
    </AnimeContext.Provider>
  );
};
export default AppNavigation;
