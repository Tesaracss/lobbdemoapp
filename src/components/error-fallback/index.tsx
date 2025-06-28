// src/components/error-fallback/ErrorFallback.tsx

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../common/constants/colors.constants';
import { TEXT_CONSTANTS } from '../../common/constants/screen.constants';

type ErrorFallbackProps = {
  message?: string;
  onRetry: () => void;
  testIDPrefix?: string;
};

const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  message = TEXT_CONSTANTS.ERROR_FALLBACK.DEFAULT_MESSAGE,
  onRetry,
  testIDPrefix = 'error',
}) => {
  return (
    <View style={styles.container} testID={`${testIDPrefix}-container`}>
      <Text style={styles.message} testID={`${testIDPrefix}-message`}>
        {message}
      </Text>
      <TouchableOpacity
        onPress={onRetry}
        testID={`${testIDPrefix}-retry-button`}
      >
        <Text style={styles.retry}>
          {TEXT_CONSTANTS.ERROR_FALLBACK.RETRY_BUTTON}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ErrorFallback;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  message: {
    color: colors.red,
    marginBottom: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  retry: {
    color: colors.blue,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
