import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLanding from '../screens/app-landing';
import AnimeDetails from '../screens/anime-details';
import { createContext, useState } from 'react';
import { AnimeDetailsData } from '../common/constants/screen.constants';
import { Route } from '../common/constants/navigation.constants';

type AnimeContextType = {
  animeData: AnimeDetailsData | null;
  setAnimeData: (data: AnimeDetailsData) => void;
};
const dummyValue: AnimeContextType = {
  animeData: {
    content: {
      thumbNailImage: '',
      mainImage: '',
      userName: '',
      subTitle: '',
      text: '',
      logo: '',
      title: '',
      id: '',
    },
  },
  setAnimeData: () => {}, // placeholder if needed
};

export const AnimeContext = createContext<AnimeContextType>(dummyValue);
const RootStack = createNativeStackNavigator();

const AppNavigation = () => {
  const [animeData, setAnimeData] = useState<AnimeDetailsData>({
    content: {
      thumbNailImage: '',
      mainImage: '',
      userName: '',
      subTitle: '',
      text: '',
      logo: '',
      title: '',
      id: '',
    },
  });
  return (
    <AnimeContext.Provider value={{ animeData, setAnimeData }}>
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
