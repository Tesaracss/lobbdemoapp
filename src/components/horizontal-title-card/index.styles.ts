import { StyleSheet } from 'react-native';

const horizontalTileCardStyles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageStyles: { width: 60, height: 60, borderRadius: 10, marginRight: 10 },
  columnContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  textGap: {
    gap: 1,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  buttonStyle: {
    backgroundColor: '#D9D9D9',
    borderRadius: 17,
  },
  textDefault: {
    color: '#0000CD',
    fontWeight: '700',
    paddingHorizontal: 10,
    paddingVertical: 3,
    fontSize: 13,
  },
  buttonSubtitleStyle: {
    fontSize: 7,
    fontWeight: '400',
  },
  titleStyle: {
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'left',
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginLeft: 2,
  },
  subtitleStyle: {
    fontSize: 10,
    fontWeight: '600',
    color: 'grey',
  },
});

export default horizontalTileCardStyles;
