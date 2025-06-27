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
import { useContext } from 'react';
import { AnimeContext } from '../../navigation/AppNavigation';
import AnimeHtmlContent from '../../components/html-component';

const AnimeDetails = () => {
  const navigation = useNavigation();
  const { animeQuery } = useContext(AnimeContext);
  const animeData = animeQuery?.data;

  return (
    <>
      <ScrollView contentContainerStyle={styles.root}>
        <View style={styles.imageContainer}>
          <ImageBackground
            source={{ uri: animeData?.content?.mainImage }}
            style={styles.backgroundImage}
            resizeMode="cover"
          >
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
            onRefresh={() => animeQuery?.refetch()}
          />
        </View>
        <AnimeHtmlContent htmlContent={animeData?.content.text ?? ''} />
        <VerticalTitleCard
          logo={animeData?.content?.logo ?? ''}
          title={animeData?.content.title ?? ''}
          subtitle={animeData?.content.subTitle ?? ''}
          onRefresh={() => animeQuery?.refetch()}
        />
      </ScrollView>
      {/* Close Button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.closeButton}
      >
        <Text>✕</Text>
      </TouchableOpacity>
    </>
  );
};
export default AnimeDetails;
