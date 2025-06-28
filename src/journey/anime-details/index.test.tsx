import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import AnimeDetails from './index';

// mock's required for the app

// mock navigate hook
const mockNavigate = jest.fn();
jest.mock('../../common/hooks/use-navigation', () => ({
  useNavigation: jest.fn(() => ({
    navigate: mockNavigate,
    goBack: mockNavigate,
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

// mock html content
jest.mock('../../components/html-component', () => 'AnimeHtmlContent');

describe('AnimeDetails component', () => {
  it('renders correctly', () => {
    render(<AnimeDetails />);
  });

  it('displays anime details when data is available', () => {
    render(<AnimeDetails />);
    // expect the text content to be displayed
    expect(screen.getAllByText('Black Clover')).toBeTruthy();
    expect(screen.getByTestId('vertical-logo')).toBeTruthy();
    expect(screen.getByTestId('details-screen')).toBeTruthy();
    expect(screen.getByTestId('details-screen-logo')).toBeTruthy();
    expect(screen.getByTestId('details-screen-title')).toBeTruthy();
  });

  it('closes the screen when close button is pressed', () => {
    render(<AnimeDetails />);
    // press back button
    fireEvent.press(screen.getByTestId('close-button'));
    // expect the close function to be called
    expect(mockNavigate).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledTimes(1);
  });

  it('refreshes the screen when refresh button is pressed', () => {
    render(<AnimeDetails />);
    // press refresh button
    fireEvent.press(screen.getByTestId('details-screen-button'));
    // expect the refresh function to be called
    expect(mockRefreshDetails).toHaveBeenCalled();
    expect(mockRefreshDetails).toHaveBeenCalledTimes(1);
  });
});
