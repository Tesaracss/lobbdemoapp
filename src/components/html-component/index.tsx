import React from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import RenderHTML from 'react-native-render-html';
import { colors } from '../../common/constants/colors.constants';

/**
 * Renders a HTML content with a given width, which is determined by the device screen width.
 *
 * @param {{ htmlContent: string }} props
 * @prop {string} htmlContent The html content to render
 *
 * @returns {React.ReactElement}
 */
const AnimeHtmlContent = ({ htmlContent }: { htmlContent: string }) => {
  const { width } = useWindowDimensions();

  const tagStyles = {
    p: {
      fontSize: 18,
      color: colors.grey,
      lineHeight: 24,
      marginBottom: 12,
    },
    body: {
      margin: 0,
      padding: 0,
    },
    html: {
      margin: 0,
      padding: 0,
    },
  };

  return (
    <View style={styles.container}>
      <RenderHTML
        contentWidth={width}
        source={{ html: htmlContent }}
        tagsStyles={tagStyles}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.white,
  },
});

export default AnimeHtmlContent;
