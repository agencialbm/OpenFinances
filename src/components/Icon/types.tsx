import { ReactComponent as Logo } from './svg/logo.svg';
import { ReactComponent as IconButtonCard } from './svg/iconButtonCard.svg';
import { ReactComponent as IconFacebook } from './svg/icon-facebook.svg';
import { ReactComponent as IconInstagram } from './svg/icon-instagram.svg';
import { ReactComponent as IconLinkedln } from './svg/icon-linkedln.svg';
import { ReactComponent as IconLBM } from './svg/iconLBM.svg';



const IconsTypes = {
  logo : Logo,
  iconButtonCard : IconButtonCard,
  iconFacebook: IconFacebook,
  iconInstagram: IconInstagram,
  iconLinkedln: IconLinkedln,
  iconLBM: IconLBM
};

export default IconsTypes;

export type IconName =
  | 'logo'
  | 'iconButtonCard'
  | 'iconFacebook'
  | 'iconInstagram'
  | 'iconLinkedln'
  | 'iconLBM'




