import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const HtmlViewer = ({ html }: { html: string }) => {
  return (
    <View style={{ flex: 1 }}>
      <WebView originWhitelist={['*']} source={{ html }} />
    </View>
  );
};

export default HtmlViewer;
