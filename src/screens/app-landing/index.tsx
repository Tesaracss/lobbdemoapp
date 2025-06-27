import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFetchAnimeDetail } from '../../api-service/anime-service';
import styles from './index.styles';
import HorizontalTitleCard from '../../components/horizontal-title-card';
import { useNavigation } from '../../common/hooks/use-navigation'; // custom typed navigation hook
import { Route } from '../../common/constants/navigation.constants';
import { useContext, useEffect } from 'react';
import { AnimeContext } from '../../navigation/AppNavigation';

// App landing screen
const AppLanding = () => {
  const navigation = useNavigation();
  const { data, isLoading, refetch } = useFetchAnimeDetail();
  const { animeData, setAnimeData } = useContext(AnimeContext);

  // ✅ Set data into context when it becomes available
  useEffect(() => {
    if (data) {
      setAnimeData(data);
    }
  }, [data, setAnimeData]);

  const formatDate = () => {
    const date = new Date();

    const parts = new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    }).formatToParts(date);

    const get = (type: string) =>
      parts.find(part => part.type === type)?.value || '';

    return `${get('weekday')} ${get('day')} ${get('month')}`;
  };

  return (
    <SafeAreaView>
      {isLoading && animeData?.content ? (
        <Text>Loading ...</Text>
      ) : (
        <View style={styles.root}>
          <Text style={styles.dateStyles}>{formatDate()}</Text>
          <View style={styles.dayContainer}>
            <View>
              <Text style={styles.dayStyles}>Today</Text>
            </View>
            <View style={styles.vsContainer}>
              <Text style={styles.vsTextStyles}>VS</Text>
            </View>
          </View>
          {/* card */}
          <View style={styles.cardContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate(Route.ANIME_DETAILS)}
            >
              <Image
                source={{ uri: data?.content.mainImage }}
                style={styles.imageStyles}
                resizeMode="cover"
              />
            </TouchableOpacity>

            <View style={styles.titleCardContainer}>
              <HorizontalTitleCard
                logo={animeData?.content.thumbNailImage}
                title={animeData?.content.title}
                subtitle={animeData?.content.subTitle}
                onRefresh={() => refetch()}
              />
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};
export default AppLanding;
