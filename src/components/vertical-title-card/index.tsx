import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './index.styles';
import {
  TEXT_CONSTANTS,
  VerticalTitleCardProps,
} from '../../common/constants/screen.constants';

/**
 * A vertical card component that displays a logo, title, and subtitle,
 * along with a button that can trigger a refresh action.
 * Provides optional customization of button title and subtitle.
 *
 * @param {string} logo - The URL of the image to display as a logo.
 * @param {string} title - The main title text to display on the card.
 * @param {string} subtitle - The subtitle text to display under the main title.
 * @param {() => void} [onRefresh] - Optional callback function to be called when the button is pressed.
 * @param {string} [buttonTitle='REFRESH'] - Optional title for the button.
 * @param {string} [buttonSubtitle='in App purchase'] - Optional subtitle for the button.
 */
const VerticalTitleCard = ({
  logo,
  title,
  subtitle,
  onRefresh,
  buttonTitle = TEXT_CONSTANTS.BUTTON_TITLE,
  buttonSubtitle = TEXT_CONSTANTS.BUTTON_SUBTITLE,
}: VerticalTitleCardProps) => {
  return (
    <View style={styles.root}>
      <View style={styles.rootContainer}>
        <Image
          source={{ uri: logo }}
          style={styles.imageStyles}
          resizeMode="cover"
          testID="vertical-logo"
        />
        <View style={[styles.columnContainer, styles.textGap]}>
          <Text style={styles.titleStyle}>{title}</Text>
          <Text>{subtitle}</Text>
        </View>
      </View>
      <View style={[styles.columnContainer, styles.buttonStyle]}>
        <TouchableOpacity onPress={onRefresh} style={styles.buttonContainer}>
          <Text style={styles.textDefault}>{buttonTitle}</Text>
        </TouchableOpacity>
        <Text style={styles.buttonSubtitleStyle}>{buttonSubtitle}</Text>
      </View>
    </View>
  );
};
export default VerticalTitleCard;
