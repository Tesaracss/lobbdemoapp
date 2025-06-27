import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './index.styles';
import { VerticalTitleCardProps } from '../../common/constants/screen.constants';

const VerticalTitleCard = ({
  logo,
  title,
  subtitle,
  onRefresh,
  buttonTitle = 'REFRESH',
  buttonSubtitle = 'in App purchase',
}: VerticalTitleCardProps) => {
  return (
    <View style={styles.root}>
      <View style={styles.rootContainer}>
        <Image
          source={{ uri: logo }}
          style={styles.imageStyles}
          resizeMode="cover"
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
