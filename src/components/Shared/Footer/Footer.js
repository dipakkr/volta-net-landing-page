import Link from "next/link";
import { BsTwitter, BsGithub } from "react-icons/bs";

const Footer = () => {
  const fullYear = new Date().getFullYear();

  return (
    <footer className="relative z-10">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 md:flex md:items-center md:justify-between md:py-12 lg:px-8">
        <div className="flex items-center justify-center gap-4 md:order-3">
          <BsTwitter
            size={20}
            className="cursor-pointer text-gray-400 hover:text-gray-200"
          />
          <BsGithub
            size={20}
            className="cursor-pointer text-gray-400 hover:text-gray-200"
          />
        </div>
        <ul className="mt-4 flex items-center justify-center gap-x-4 overflow-x-auto md:order-2 md:mt-0 lg:gap-x-6">
          <li>
            <Link href="/" className="text-gray-400 hover:text-gray-50">
              Guide
            </Link>
          </li>
          <li>
            <Link href="/" className="text-gray-400 hover:text-gray-50">
              Changelog
            </Link>
          </li>
          <li>
            <Link href="/" className="text-gray-400 hover:text-gray-50">
              Pricing
            </Link>
          </li>
          <li className="hidden sm:block">
            <Link href="/" className="text-gray-400 hover:text-gray-50">
              Download
            </Link>
          </li>
          <li>
            <Link href="/" className="text-gray-400 hover:text-gray-50">
              Terms
            </Link>
          </li>
          <li>
            <Link href="/" className="text-gray-400 hover:text-gray-50">
              Status
            </Link>
          </li>
        </ul>
        <div className="mt-4 md:order-1 md:mt-0">
          <p className="u-text-gray-700 text-center text-sm">
            {" "}
            © {fullYear} Xplainerr.{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
