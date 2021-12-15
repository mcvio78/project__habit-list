import { NavLinkLarge, ParagraphLarge } from '../components/Typography';

export const Auth = (): JSX.Element => (
  <>
    <ParagraphLarge txtSdw it>
      Authentication Page
    </ParagraphLarge>
    <NavLinkLarge to="/" txtSdw it>
      Home
    </NavLinkLarge>
    <NavLinkLarge to="/auth" txtClr="red" txtSdw it>
      Sign In
    </NavLinkLarge>
  </>
);
