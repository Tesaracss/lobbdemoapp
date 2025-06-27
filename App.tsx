/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, View } from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// initialize queryclient
const queryClient = new QueryClient();

function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <QueryClientProvider client={queryClient}>
        {/* root navigation */}
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </QueryClientProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
