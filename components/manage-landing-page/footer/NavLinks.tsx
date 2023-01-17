import { navLinks } from ".";

const NavLinks = () => {
  return (
    <>
      {navLinks.map((linkGroup, idx) => (
        <div key={idx} className="flex flex-col">
          {linkGroup.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mb-3 text-sm text-mlp-veryLightGrey transition-colors last:mb-0 hover:text-mlp-darkGrayishBlue lg:mb-5"
            >
              {link.label}
            </a>
          ))}
        </div>
      ))}
    </>
  );
};

export default NavLinks;
