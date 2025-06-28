// import {
//   ImageBackground,
//   ScrollView,
//   Text,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import styles from './index.styles';
// import { useNavigation } from '../../common/hooks/use-navigation';
// import HorizontalTitleCard from '../../components/horizontal-title-card';
// import VerticalTitleCard from '../../components/vertical-title-card';
// import { useContext } from 'react';
// import { AnimeContext } from '../../navigation/AppNavigation';
// import AnimeHtmlContent from '../../components/html-component';

// const AnimeDetails = () => {
//   const navigation = useNavigation();
//   const { animeQuery } = useContext(AnimeContext);
//   const animeData = animeQuery?.data;

//   return (
//     <>
//       <ScrollView contentContainerStyle={styles.root}>
//         <View style={styles.imageContainer}>
//           <ImageBackground
//             source={{ uri: animeData?.content?.mainImage }}
//             style={styles.backgroundImage}
//             resizeMode="cover"
//           >
//             {/* Overlay Content */}
//             <View style={styles.overlay}>
//               <Text style={styles.tagline}>MAJOR UPDATE</Text>
//               <Text style={styles.title}>
//                 Only I Can Call My{'\n'}Dream Stupid!
//               </Text>
//             </View>
//           </ImageBackground>
//         </View>
//         <View style={styles.titleCardContainer}>
//           <HorizontalTitleCard
//             logo={animeData?.content.logo ?? ''}
//             title={animeData?.content.title ?? ''}
//             subtitle={animeData?.content.subTitle ?? ''}
//             onRefresh={() => animeQuery?.refetch()}
//           />
//         </View>
//         <AnimeHtmlContent htmlContent={animeData?.content.text ?? ''} />
//         <VerticalTitleCard
//           logo={animeData?.content?.logo ?? ''}
//           title={animeData?.content.title ?? ''}
//           subtitle={animeData?.content.subTitle ?? ''}
//           onRefresh={() => animeQuery?.refetch()}
//         />
//       </ScrollView>
//       {/* Close Button */}
//       <TouchableOpacity
//         onPress={() => navigation.goBack()}
//         style={styles.closeButton}
//       >
//         <Text>✕</Text>
//       </TouchableOpacity>
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

const AnimeDetails = () => {
  const navigation = useNavigation();
  const { animeQuery } = useContext(AnimeContext);
  const { data, isLoading, isError, error, refetch } = animeQuery ?? {};

  const content = data?.content;

  const renderHeader = () => (
    <View style={styles.imageContainer}>
      <ImageBackground
        source={{ uri: content?.mainImage }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <Text style={styles.tagline}>{TEXT_CONSTANTS.HEADER.TAGLINE}</Text>
          <Text style={styles.title}>{TEXT_CONSTANTS.HEADER.TITLE}</Text>
        </View>
      </ImageBackground>
    </View>
  );

  const renderTitleCard = () => (
    <View style={styles.titleCardContainer}>
      <HorizontalTitleCard
        logo={content?.logo ?? ''}
        title={content?.title ?? ''}
        subtitle={content?.subTitle ?? ''}
        onRefresh={() => refetch?.()}
      />
    </View>
  );

  const renderVerticalCard = () => (
    <VerticalTitleCard
      logo={content?.logo ?? ''}
      title={content?.title ?? ''}
      subtitle={content?.subTitle ?? ''}
      onRefresh={() => refetch?.()}
    />
  );

  const renderCloseButton = () => (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.closeButton}
      testID="close-button"
    >
      <Text>✕</Text>
    </TouchableOpacity>
  );

  if (isLoading) {
    return (
      <View style={styles.loaderContainer} testID="loading-container">
        <ActivityIndicator size="large" color="#000" />
        <Text style={styles.loaderText}>{TEXT_CONSTANTS.LOADING}</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <ErrorFallback
        message={error?.message}
        onRetry={() => refetch?.()}
        testIDPrefix="anime-details"
      />
    );
  }

  return (
    <>
      <ScrollView contentContainerStyle={styles.root}>
        {renderHeader()}
        {renderTitleCard()}
        <AnimeHtmlContent htmlContent={content?.text ?? ''} />
        {renderVerticalCard()}
      </ScrollView>
      {renderCloseButton()}
    </>
  );
};

export default AnimeDetails;
