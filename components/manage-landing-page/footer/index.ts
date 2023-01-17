import { Link } from "../navbar";
import facebookLogo from "../../../public/assets/manage-landing-page/icon-facebook.svg";
import instagramLogo from "../../../public/assets/manage-landing-page/icon-instagram.svg";
import pinterestLogo from "../../../public/assets/manage-landing-page/icon-pinterest.svg";
import twitterLogo from "../../../public/assets/manage-landing-page/icon-twitter.svg";
import youtubeLogo from "../../../public/assets/manage-landing-page/icon-youtube.svg";

export const navLinks: Array<Link[]> = [
  [
    { label: "Home", href: "#home" },
    { label: "Pricing", href: "#pricing" },
    { label: "Products", href: "#products" },
    { label: "About us", href: "#about-us" },
  ],
  [
    { label: "Careers", href: "#careers" },
    { label: "Community", href: "#community" },
    { label: "Privacy policy", href: "#privacy-policy" },
  ],
];

export const socialIcons = [
  facebookLogo,
  instagramLogo,
  pinterestLogo,
  twitterLogo,
  youtubeLogo,
];
