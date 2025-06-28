import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../../common/constants/colors.constants';
import { TEXT_CONSTANTS } from '../../common/constants/screen.constants';

// type for ErrorFallback props
type ErrorFallbackProps = {
  message?: string;
  onRetry: () => void;
  testIDPrefix?: string;
};

/**
 * ErrorFallback is a component that displays an error message and a retry button.
 * @example
 * <ErrorFallback onRetry={() => console.log('retry')} />
 */
const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  // default message if none is provided
  message = TEXT_CONSTANTS.ERROR_FALLBACK.DEFAULT_MESSAGE,
  onRetry,
  testIDPrefix = 'error',
}) => {
  return (
    <>
      {/*container for the error message and retry button */}
      <View style={styles.container} testID={`${testIDPrefix}-container`}>
        {/* display the error message */}
        <Text style={styles.message} testID={`${testIDPrefix}-message`}>
          {message}
        </Text>
        {/* retry button */}
        <TouchableOpacity
          onPress={onRetry}
          testID={`${testIDPrefix}-retry-button`}
        >
          <Text style={styles.retry}>
            {TEXT_CONSTANTS.ERROR_FALLBACK.RETRY_BUTTON}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ErrorFallback;

// styles for the component
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
