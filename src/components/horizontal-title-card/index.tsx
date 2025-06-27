import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './index.styles';
import { HorizontalTitleCardProps } from '../../common/constants/screen.constants';

/**
 * A horizontal card component that displays a logo, title, and subtitle,
 * along with a button that can trigger a refresh action.
 * Provides optional customization of button title and subtitle.
 *
 * @param {string} logo - The URL of the image to display as a logo.
 * @param {string} title - The main title text to display on the card.
 * @param {string} subtitle - The subtitle text to display under the main title.
 * @param {() => void} [onRefresh] - Optional callback function to be called when the button is pressed.
 * @param {string} [buttonTitle='REFRESH'] - Optional title for the button.
 * @param {string} [buttonSubtitle='in App purchase'] - Optional subtitle for the button.
 * @param {string} [testID=''] - Optional test identifier for the component.
 */
const HorizontalTitleCard = ({
  logo,
  title,
  subtitle,
  onRefresh,
  buttonTitle = 'REFRESH',
  buttonSubtitle = 'in App purchase',
  testID = '',
}: HorizontalTitleCardProps) => {
  // function to get the test id's prefixed with the provided testId
  const getTestIdPrefix = (id = '') => {
    return testID.concat(['-', id].join(''));
  };

  return (
    <View style={styles.root} testID={testID}>
      <View style={styles.imageContainer}>
        <Image
          testID={getTestIdPrefix('logo')}
          source={{ uri: logo }}
          style={styles.imageStyles}
          resizeMode="cover"
        />
        <View style={[styles.columnContainer, styles.textGap]}>
          <Text style={styles.titleStyle} testID={getTestIdPrefix('title')}>
            {title}
          </Text>
          <Text style={styles.subtitleStyle}>{subtitle}</Text>
        </View>
      </View>
      <View style={[styles.buttonContainer]}>
        <TouchableOpacity
          onPress={onRefresh}
          style={styles.buttonStyle}
          testID={getTestIdPrefix('button')}
        >
          <Text style={styles.textDefault}>{buttonTitle}</Text>
        </TouchableOpacity>
        <Text style={styles.buttonSubtitleStyle}>{buttonSubtitle}</Text>
      </View>
    </View>
  );
};
export default HorizontalTitleCard;
