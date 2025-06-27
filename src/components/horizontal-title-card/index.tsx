import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './index.styles';
import { HorizontalTitleCardProps } from '../../common/constants/screen.constants';

const HorizontalTitleCard = ({
  logo,
  title,
  subtitle,
  onRefresh,
  buttonTitle = 'REFRESH',
  buttonSubtitle = 'in App purchase',
}: HorizontalTitleCardProps) => {
  return (
    <View style={styles.root}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: logo }}
          style={styles.imageStyles}
          resizeMode="cover"
        />
        <View style={[styles.columnContainer, styles.textGap]}>
          <Text style={styles.titleStyle}>{title}</Text>
          <Text style={styles.subtitleStyle}>{subtitle}</Text>
        </View>
      </View>
      <View style={[styles.buttonContainer]}>
        <TouchableOpacity onPress={onRefresh} style={styles.buttonStyle}>
          <Text style={styles.textDefault}>{buttonTitle}</Text>
        </TouchableOpacity>
        <Text style={styles.buttonSubtitleStyle}>{buttonSubtitle}</Text>
      </View>
    </View>
  );
};
export default HorizontalTitleCard;
