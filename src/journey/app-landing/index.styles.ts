import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../common/constants/colors.constants';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const landingScreenStyles = StyleSheet.create({
  root: {
    margin: 20,
  },
  dateStyles: {
    color: colors.grey,
    fontSize: 13,
    fontWeight: '500',
  },
  dayContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayStyles: {
    fontSize: 30,
    fontWeight: '700',
  },
  vsTextStyles: {
    fontSize: 20,
    fontWeight: '700',
    padding: 7,
  },
  vsContainer: {
    backgroundColor: colors.gainsboro,
    borderRadius: 25,
  },
  cardContainer: {
    borderRadius: 20,
    backgroundColor: colors.white,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3, // for Android shadow
    overflow: 'hidden',
    marginVertical: 12,
  },
  imageStyles: {
    width: '100%',
    height: SCREEN_WIDTH * 0.9, // Makes height proportional to screen width
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  titleCardContainer: {
    padding: 20,
  },
});

export default landingScreenStyles;
