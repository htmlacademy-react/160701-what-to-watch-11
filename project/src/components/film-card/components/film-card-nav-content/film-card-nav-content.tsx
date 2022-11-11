import { TFilm } from 'src/types/films';
import DetailsTab from './components/tabs/details-tab/details-tab';
import OverviewTab from './components/tabs/overview-tab/overview-tab';
import ReviewsTab from './components/tabs/reviews-tab/reviews-tab';

const TabsNames = {
  Overview: 'Overview',
  Details: 'Details',
  Reviews: 'Reviews',
} as const;

type TFilmCardNavContent = {
  current: string;
  film: TFilm;
};

const FilmCardNavContent = ({ current: currentTab, film }: TFilmCardNavContent) => {
  switch (currentTab) {
    case TabsNames.Overview:
      return <OverviewTab film={film} />;
    case TabsNames.Details:
      return <DetailsTab film={film} />;
    case TabsNames.Reviews:
      return <ReviewsTab film={film} />;
    default:
      return null;
  }
};

export default FilmCardNavContent;
