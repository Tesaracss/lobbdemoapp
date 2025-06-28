import { Dimensions, StyleSheet } from 'react-native';
import { colors } from '../../common/constants/colors.constants';

const screenHeight = Dimensions.get('window').height;

const animeDetailScreenStyles = StyleSheet.create({
  root: {
    backgroundColor: colors.primary, // fallback bg
    paddingBottom: '35%',
  },
  overlayContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    height: screenHeight * 0.6, // 60% of screen height
    width: '100%',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start', // aligns inner content like overlay, close button
  },
  tagline: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.semiTransparentWhite, // semi-transparent white
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 35,
    fontWeight: '700',
    color: colors.white,
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 20,
    backgroundColor: colors.gainsboro,
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 40,
    left: 20,
    right: 20,
    zIndex: 10,
  },
  titleCardContainer: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderBottomColor: colors.border,
    borderBottomWidth: 2,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loaderText: {
    marginTop: 10,
    fontSize: 16,
    color: colors.loader,
  },
});

export default animeDetailScreenStyles;
