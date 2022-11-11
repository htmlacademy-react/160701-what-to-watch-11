import { Helmet } from 'react-helmet-async';

import { PageTitles } from 'src/const';

const AddReviewPage = () => (
  <Helmet>
    <title>{PageTitles.AddReview}</title>
  </Helmet>
);
export default AddReviewPage;
