import { links } from ".";
import NavLink from "./NavLink";

interface Props {
  isOpen: boolean;
}

const MobileNav = (props: Props) => {
  return (
    <div
      className={`${
        props.isOpen ? "max-h-screen" : "max-h-0"
      } absolute top-32 left-0 h-screen w-full overflow-hidden bg-gradient-to-t from-gray-400 transition-all duration-500 lg:hidden`}
    >
      <div className="mx-auto flex w-4/5 min-w-[340px] flex-col rounded-md bg-white py-7 text-center shadow-2xl">
        {links.map((l) => (
          <NavLink key={l.label} {...l} />
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
