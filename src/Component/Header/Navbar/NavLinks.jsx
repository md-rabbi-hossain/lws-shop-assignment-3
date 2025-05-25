// src/components/Header/NavLinks.jsx
const NavLinks = ({ links }) => {
  return (
    <nav className="hidden md:flex space-x-6">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="hover:text-gray-500 transition-colors"
        >
          {link.text}
        </a>
      ))}
    </nav>
  );
};

export default NavLinks;
