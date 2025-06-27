import React from 'react';
import { View, useWindowDimensions } from 'react-native';
import RenderHTML from 'react-native-render-html';

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

  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingVertical: 12,
        backgroundColor: '#fff',
      }}
    >
      <RenderHTML
        contentWidth={width}
        source={{ html: htmlContent }}
        tagsStyles={{
          p: {
            fontSize: 18,
            color: '#808080',
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
        }}
      />
    </View>
  );
};

export default AnimeHtmlContent;
