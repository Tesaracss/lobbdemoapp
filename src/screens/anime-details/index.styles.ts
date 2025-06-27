import { StyleSheet } from 'react-native';

const animeDetailScreenStyles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f5f5f5', // fallback bg
  },
  overlayContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    // flex: 1,
    height: '60%',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start', // aligns inner content like overlay, close button
  },
  tagline: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffffaa', // semi-transparent white
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 35,
    fontWeight: '700',
    color: 'white',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 20,
    backgroundColor: 'white',
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
    paddingVertical: 10,
    borderBottomColor: '#D9D9D9',
    borderBottomWidth: 2,
  },
});

export default animeDetailScreenStyles;
