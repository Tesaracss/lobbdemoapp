import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './index.styles';
import { useNavigation } from '../../common/hooks/use-navigation';
import HorizontalTitleCard from '../../components/horizontal-title-card';
import VerticalTitleCard from '../../components/vertical-title-card';
import { useFetchAnimeDetail } from '../../api-service/anime-service';
import { useContext, useEffect } from 'react';
import { AnimeContext } from '../../navigation/AppNavigation';

const AnimeDetails = () => {
  const navigation = useNavigation();
  const { data: refreshedData, refetch } = useFetchAnimeDetail();
  const { animeData, setAnimeData } = useContext(AnimeContext);

  // ✅ Set data into context when it becomes available
  useEffect(() => {
    if (refreshedData) {
      setAnimeData(refreshedData);
    }
  }, [refreshedData, setAnimeData]);

  return (
    <ScrollView contentContainerStyle={styles.root}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={{ uri: animeData?.content?.mainImage }}
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          {/* Close Button */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.closeButton}
          >
            <Text>✕</Text>
          </TouchableOpacity>

          {/* Overlay Content */}
          <View style={styles.overlay}>
            <Text style={styles.tagline}>MAJOR UPDATE</Text>
            <Text style={styles.title}>
              Only I Can Call My{'\n'}Dream Stupid!
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.titleCardContainer}>
        <HorizontalTitleCard
          logo={animeData?.content.logo ?? ''}
          title={animeData?.content.title ?? ''}
          subtitle={animeData?.content.subTitle ?? ''}
          onRefresh={() => refetch()}
        />
      </View>
      <VerticalTitleCard
        logo={animeData?.content?.logo ?? ''}
        title={animeData?.content.title ?? ''}
        subtitle={animeData?.content.subTitle ?? ''}
        onRefresh={() => refetch()}
      />
    </ScrollView>
  );
};
export default AnimeDetails;
