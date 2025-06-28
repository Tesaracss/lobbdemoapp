import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './index.styles';
import HorizontalTitleCard from '../../components/horizontal-title-card';
import { useNavigation } from '../../common/hooks/use-navigation'; // custom typed navigation hook
import { Route } from '../../common/constants/navigation.constants';
import { useContext } from 'react';
import { AnimeContext } from '../../navigation/AppNavigation';
import { formatDate } from '../../utils/dateformat';
import ErrorFallback from '../../components/error-fallback';
import { TEXT_CONSTANTS } from '../../common/constants/screen.constants';

// App landing screen
const AppLanding = () => {
  const navigation = useNavigation();
  const { animeQuery } = useContext(AnimeContext);
  const animeData = animeQuery?.data;
  const isLoading = animeQuery?.isLoading;
  const isError = animeQuery?.isError;

  return (
    <SafeAreaView>
      {isLoading ? (
        <Text>{TEXT_CONSTANTS.LOADING}</Text>
      ) : isError ? (
        <ErrorFallback
          message={animeQuery?.error?.message}
          onRetry={() => animeQuery?.refetch?.()}
          testIDPrefix="anime-details"
        />
      ) : (
        <View style={styles.root}>
          <Text style={styles.dateStyles} testID="date-text">
            {formatDate()}
          </Text>
          <View style={styles.dayContainer}>
            <View>
              <Text style={styles.dayStyles}>{TEXT_CONSTANTS.TODAY}</Text>
            </View>
            <View style={styles.vsContainer}>
              <Text style={styles.vsTextStyles}>{TEXT_CONSTANTS.VS}</Text>
            </View>
          </View>
          {/* card */}
          <View style={styles.cardContainer}>
            <TouchableOpacity
              testID="image-card"
              onPress={() => navigation.navigate(Route.ANIME_DETAILS)}
            >
              <Image
                testID="main-image"
                source={{ uri: animeData?.content.mainImage }}
                style={styles.imageStyles}
                resizeMode="cover"
              />
            </TouchableOpacity>

            <View style={styles.titleCardContainer}>
              <HorizontalTitleCard
                testID={'landing-refresh-card'}
                logo={animeData?.content.thumbNailImage ?? ''}
                title={animeData?.content.title ?? ''}
                subtitle={animeData?.content.subTitle ?? ''}
                onRefresh={() => animeQuery?.refetch()}
              />
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};
export default AppLanding;
