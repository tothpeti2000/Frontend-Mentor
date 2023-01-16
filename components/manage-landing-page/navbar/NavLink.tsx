import { Link } from ".";

const NavLink = (props: Link) => {
  return (
    <a
      href={props.href}
      className="py-3 font-bold transition-colors hover:text-mlp-darkGrayishBlue md:px-4 lg:px-5 lg:text-sm"
    >
      {props.label}
    </a>
  );
};

export default NavLink;
