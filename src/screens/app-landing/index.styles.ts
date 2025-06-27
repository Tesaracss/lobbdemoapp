import { StyleSheet } from 'react-native';

const landingScreenStyles = StyleSheet.create({
  root: {
    margin: 10,
  },
  dateStyles: {
    color: 'grey',
    fontSize: 20,
    fontWeight: '400',
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
    backgroundColor: 'grey',
    borderRadius: 25,
  },
  cardContainer: {
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3, // for Android shadow
    overflow: 'hidden',
    marginVertical: 12,
  },
  imageStyles: {
    width: 400,
    height: 400,
  },
  titleCardContainer: {
    padding: 20,
  },
});

export default landingScreenStyles;
