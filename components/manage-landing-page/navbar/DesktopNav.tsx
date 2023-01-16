import { links } from ".";
import NavLink from "./NavLink";

const DesktopNav = () => {
  return (
    <div className="hidden lg:flex lg:justify-between">
      {links.map((l) => (
        <NavLink key={l.label} {...l} />
      ))}
    </div>
  );
};

export default DesktopNav;
