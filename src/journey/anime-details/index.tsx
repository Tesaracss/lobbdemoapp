// import React, { useContext } from 'react';
// import {
//   View,
//   Text,
//   ScrollView,
//   ImageBackground,
//   TouchableOpacity,
//   ActivityIndicator,
// } from 'react-native';
// import { useNavigation } from '../../common/hooks/use-navigation';
// import { AnimeContext } from '../../navigation/AppNavigation';
// import styles from './index.styles';
// import HorizontalTitleCard from '../../components/horizontal-title-card';
// import VerticalTitleCard from '../../components/vertical-title-card';
// import AnimeHtmlContent from '../../components/html-component';
// import ErrorFallback from '../../components/error-fallback';
// import { TEXT_CONSTANTS } from '../../common/constants/screen.constants';

// const AnimeDetails = () => {
//   const navigation = useNavigation();
//   const { animeQuery } = useContext(AnimeContext);
//   const { data, isLoading, isError, error, refetch } = animeQuery ?? {};

//   const content = data?.content;

//   const renderHeader = () => (
//     <View style={styles.imageContainer}>
//       <ImageBackground
//         source={{ uri: content?.mainImage }}
//         style={styles.backgroundImage}
//         resizeMode="cover"
//       >
//         <View style={styles.overlay}>
//           <Text style={styles.tagline}>{TEXT_CONSTANTS.HEADER.TAGLINE}</Text>
//           <Text style={styles.title}>{TEXT_CONSTANTS.HEADER.TITLE}</Text>
//         </View>
//       </ImageBackground>
//     </View>
//   );

//   const renderTitleCard = () => (
//     <View style={styles.titleCardContainer}>
//       <HorizontalTitleCard
//         logo={content?.logo ?? ''}
//         title={content?.title ?? ''}
//         subtitle={content?.subTitle ?? ''}
//         onRefresh={() => refetch?.()}
//       />
//     </View>
//   );

//   const renderVerticalCard = () => (
//     <VerticalTitleCard
//       logo={content?.logo ?? ''}
//       title={content?.title ?? ''}
//       subtitle={content?.subTitle ?? ''}
//       onRefresh={() => refetch?.()}
//     />
//   );

//   const renderCloseButton = () => (
//     <TouchableOpacity
//       onPress={() => navigation.goBack()}
//       style={styles.closeButton}
//       testID="close-button"
//     >
//       <Text>✕</Text>
//     </TouchableOpacity>
//   );

//   if (isLoading) {
//     return (
//       <View style={styles.loaderContainer} testID="loading-container">
//         <ActivityIndicator size="large" color="#000" />
//         <Text style={styles.loaderText}>{TEXT_CONSTANTS.LOADING}</Text>
//       </View>
//     );
//   }

//   if (isError) {
//     return (
//       <ErrorFallback
//         message={error?.message}
//         onRetry={() => refetch?.()}
//         testIDPrefix="anime-details"
//       />
//     );
//   }

//   return (
//     <>
//       <ScrollView contentContainerStyle={styles.root}>
//         {renderHeader()}
//         {renderTitleCard()}
//         <AnimeHtmlContent htmlContent={content?.text ?? ''} />
//         {renderVerticalCard()}
//       </ScrollView>
//       {renderCloseButton()}
//     </>
//   );
// };

// export default AnimeDetails;

import React, { useContext } from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '../../common/hooks/use-navigation';
import { AnimeContext } from '../../navigation/AppNavigation';
import styles from './index.styles';
import HorizontalTitleCard from '../../components/horizontal-title-card';
import VerticalTitleCard from '../../components/vertical-title-card';
import AnimeHtmlContent from '../../components/html-component';
import ErrorFallback from '../../components/error-fallback';
import { TEXT_CONSTANTS } from '../../common/constants/screen.constants';
import { colors } from '../../common/constants/colors.constants';

const AnimeDetails = () => {
  const navigation = useNavigation();
  const { animeQuery } = useContext(AnimeContext);
  const { data, isLoading, isError, error, refetch } = animeQuery ?? {};
  const content = data?.content;

  if (isLoading) {
    return (
      <View style={styles.loaderContainer} testID="loading-container">
        <ActivityIndicator size="large" color={colors.black} />
        <Text style={styles.loaderText}>{TEXT_CONSTANTS.LOADING}</Text>
      </View>
    );
  }

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
