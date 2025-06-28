import { StyleSheet } from 'react-native';
import { colors } from '../../common/constants/colors.constants';

const horizontalTileCardStyles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // flexWrap: 'wrap', // Allows wrapping to avoid overflow
  },
  imageStyles: {
    width: '100%',
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  columnContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  textGap: {
    gap: 1,
    width: '55%',
    paddingLeft: 8,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '20%',
  },
  buttonStyle: {
    backgroundColor: colors.border,
    borderRadius: 17,
  },
  textDefault: {
    color: colors.button,
    fontWeight: '700',
    paddingHorizontal: 10,
    paddingVertical: 3,
    fontSize: 11,
  },
  buttonSubtitleStyle: {
    fontSize: 7,
    fontWeight: '400',
  },
  titleStyle: {
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'left',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginLeft: 2,
    width: '25%',
  },
  subtitleStyle: {
    fontSize: 10,
    fontWeight: '600',
    color: colors.grey,
  },
});

export default horizontalTileCardStyles;
