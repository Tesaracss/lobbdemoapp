import { StyleSheet } from 'react-native';
import { colors } from '../../common/constants/colors.constants';

const titleCardStyles = StyleSheet.create({
  root: {
    backgroundColor: colors.lightGrey,
    paddingVertical: 15,
  },
  imageStyles: { width: 100, height: 100, borderRadius: 10, margin: 10 },
  columnContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginHorizontal: 50,
    alignItems: 'center',
  },
  textGap: {
    gap: 3,
    marginBottom: 7,
  },
  buttonStyle: {
    marginTop: 10,
  },
  rootContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: colors.blue,
    borderRadius: 17,
  },
  textDefault: {
    color: colors.white,
    fontWeight: '400',
    paddingHorizontal: 15,
    paddingVertical: 5,
    fontSize: 13,
  },
  buttonSubtitleStyle: {
    fontSize: 10,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: '700',
  },
});

export default titleCardStyles;
