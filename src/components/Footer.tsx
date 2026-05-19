import { SOCIAL_MEDIA_LINKS } from "../constants";

const Footer = () => {
  return (
    <footer id="footer" className="pb-8 mt-20">
      <ul className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
          >
            {link.icon}
          </a>
        ))}
      </ul>

      <p className="mt-8 text-center tracking-tighter text-neutral-500">
        &copy; VMMJr. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
