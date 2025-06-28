//this export contains the service keys used in mutation as query hooks
export const enum ServiceKey {
  ADD_AUTH = 'add-auth',
  ANIME_LIST = 'anime-list',
}

//types...
export type AnimeDetailsData = {
  content: {
    thumbNailImage: string;
    mainImage: string;
    userName: string;
    subTitle: string;
    text: string;
    logo: string;
    title: string;
    id: string;
  };
};

export type VerticalTitleCardProps = {
  logo: string;
  title: string;
  onRefresh?: () => void;
  subtitle: string;
  buttonSubtitle?: string;
  buttonTitle?: string;
};

export type HorizontalTitleCardProps = {
  logo: string;
  title: string;
  onRefresh?: () => void;
  subtitle: string;
  buttonSubtitle?: string;
  buttonTitle?: string;
  testID?: string;
};

export type AnimeItem = {
  content: {
    logo: string;
    title: string;
    subTitle: string;
    mainImage: string;
  };
};

export const TEXT_CONSTANTS = {
  LOADING: 'Loading...',
  TODAY: 'Today',
  VS: 'VS',
  BUTTON_TITLE: 'REFRESH',
  BUTTON_SUBTITLE: 'in App purchase',
  ERROR_FALLBACK: {
    DEFAULT_MESSAGE: 'Something went wrong',
    RETRY_BUTTON: 'Retry',
  },
  HEADER: {
    TAGLINE: 'MAJOR UPDATE',
    TITLE: 'Only I Can Call My\nDream Stupid!',
  },
};
