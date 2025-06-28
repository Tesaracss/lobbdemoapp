import { fireEvent, render, screen } from '@testing-library/react-native';
import AppLAnding from './index';
import { Route } from '../../common/constants/navigation.constants';

// mock's required for the app

// mock navigate hook
const mockNavigate = jest.fn();
jest.mock('../../common/hooks/use-navigation', () => ({
  useNavigation: jest.fn(() => ({
    navigate: mockNavigate,
  })),
}));

// mock anime data
const mockDetails = {
  content: {
    thumbNailImage:
      'https://i0.wp.com/www.kearipan.com/wp-content/uploads/2022/07/black-clover-anime.jpg',
    mainImage:
      'https://upload.wikimedia.org/wikipedia/en/6/69/Black_Clover%2C_volume_1.jpg',
    userName: 'Pawan Kumar ',
    subTitle: 'There are many variations of passages',
    text: '<html>  \n<head>   \n<title> Black Clover </title>  \n</head>  \n<body> tc.\n</p>\n</body>    \n</html> ',
    id: 3,
    logo: 'https://i.pinimg.com/736x/51/a4/bd/51a4bd7a1df81792b78c04635754d153.jpg',
    title: 'Black Clover',
  },
};

// mock the context values
const mockRefreshDetails = jest.fn();
let mockError = false;
let mockLoading = false;
jest.mock('../../navigation/AppNavigation', () => 'AnimeContext');
jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: jest.fn(() => ({
    animeQuery: {
      data: mockDetails,
      isLoading: mockLoading,
      refetch: mockRefreshDetails,
      isError: mockError,
    },
  })),
}));

// tets suite
describe("UT's for the landing screen ", () => {
  it('test if the app renders correctly with out any error', () => {
    render(<AppLAnding />);
    // expect the date string to be present in screen
    expect(screen.getByTestId('date-text')).toBeTruthy();
    // expect the main image to be present in the screen
    expect(screen.getByTestId('main-image')).toBeTruthy();
    // expect the bottom refresh card to be present
    expect(screen.getByTestId('landing-refresh-card')).toBeTruthy();
    expect(screen.getByTestId('landing-refresh-card-logo')).toBeTruthy();
    expect(screen.getByTestId('landing-refresh-card-title')).toBeTruthy();
    expect(
      screen.getByText('There are many variations of passages'),
    ).toBeTruthy();
    expect(screen.getByText('Black Clover')).toBeTruthy();
  });

  it('test the refresh button is working', () => {
    render(<AppLAnding />);
    // press the refresh button
    fireEvent.press(screen.getByTestId('landing-refresh-card-button'));
    // expect the refresh function to be called
    expect(mockRefreshDetails).toHaveBeenCalled();
    expect(mockRefreshDetails).toHaveBeenCalledTimes(1);
  });

  it('click on the card should navigate to details screen', () => {
    render(<AppLAnding />);
    // press the card
    fireEvent.press(screen.getByTestId('image-card'));
    expect(mockNavigate).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith(Route.ANIME_DETAILS);
  });

  it('check error message', () => {
    // making query to return error
    mockError = true;
    render(<AppLAnding />);
    // expect the error message
    expect(screen.getByText('Something went wrong')).toBeTruthy();
  });

  it(' check loading message', () => {
    // making query to return error
    mockError = false;
    // set loading true
    mockLoading = true;
    render(<AppLAnding />);
    // expect the error message
    expect(screen.getByText('Loading...')).toBeTruthy();
  });
});
