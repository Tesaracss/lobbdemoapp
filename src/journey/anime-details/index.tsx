import React, { useContext } from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '../../common/hooks/use-navigation';
import { AnimeContext } from '../../navigation/AppNavigation';
import styles from './index.styles';
import HorizontalTitleCard from '../../components/horizontal-title-card';
import VerticalTitleCard from '../../components/vertical-title-card';
import AnimeHtmlContent from '../../components/html-component';
import ErrorFallback from '../../components/error-fallback';
import { TEXT_CONSTANTS } from '../../common/constants/screen.constants';

/**
 * AnimeDetails component renders the details screen for a selected anime.
 *
 * It utilizes the AnimeContext to fetch the anime details data. If
 * there's an error fetching the data, it displays an error fallback
 * with a retry option. Otherwise, it renders the anime details, including the
 * main image, logo, title, subtitle, and HTML content.
 *
 * The component also provides navigation back to the previous screen
 * via a close button.
 */

const AnimeDetails = () => {
  const navigation = useNavigation();
  const { animeQuery } = useContext(AnimeContext);
  const { data, isError, error, refetch } = animeQuery ?? {};
  const content = data?.content;

  if (isError || !content) {
    return (
      <ErrorFallback
        message={
          error?.message ?? TEXT_CONSTANTS.ERROR_FALLBACK.DEFAULT_MESSAGE
        }
        onRetry={() => refetch?.()}
        testIDPrefix="anime-details"
      />
    );
  }

  return (
    <>
      <ScrollView contentContainerStyle={styles.root}>
        {content?.mainImage && (
          <View style={styles.imageContainer}>
            <ImageBackground
              source={{ uri: content.mainImage }}
              style={styles.backgroundImage}
              resizeMode="cover"
            >
              <View style={styles.overlay}>
                <Text style={styles.tagline}>
                  {TEXT_CONSTANTS.HEADER.TAGLINE}
                </Text>
                <Text style={styles.title}>{TEXT_CONSTANTS.HEADER.TITLE}</Text>
              </View>
            </ImageBackground>
          </View>
        )}

        <View style={styles.titleCardContainer}>
          <HorizontalTitleCard
            testID={'details-screen'}
            logo={content.logo ?? ''}
            title={content.title ?? TEXT_CONSTANTS.ERROR_FALLBACK.NO_TITLE}
            subtitle={content.subTitle ?? ''}
            onRefresh={() => refetch?.()}
          />
        </View>

        {content.text ? (
          <AnimeHtmlContent htmlContent={content.text} />
        ) : (
          <Text style={styles.htmlMissingText}>
            {TEXT_CONSTANTS.ERROR_FALLBACK.NO_DESCRIPTION}
          </Text>
        )}

        <VerticalTitleCard
          logo={content.logo ?? ''}
          title={content.title ?? TEXT_CONSTANTS.ERROR_FALLBACK.NO_TITLE}
          subtitle={content.subTitle ?? ''}
          onRefresh={() => refetch?.()}
        />
      </ScrollView>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.closeButton}
        testID="close-button"
      >
        <Text>✕</Text>
      </TouchableOpacity>
    </>
  );
};

export default AnimeDetails;
