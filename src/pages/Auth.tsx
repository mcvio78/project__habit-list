import { Link } from 'react-router-dom';

import { ParagraphLarge } from '../components/Typography';

export const Auth = (): JSX.Element => (
  <>
    <ParagraphLarge txtSdw it>
      Authentication Page
    </ParagraphLarge>
    <Link to="/">Home</Link>
  </>
);
