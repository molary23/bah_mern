import Image from "next/image";

const Footer = () => {
  return (
    <nav className="bg-white text-black h-12 items-center p-3">
      <div className="flex justify-center items-center">
        Copy&copy; BAH Engineering Consultant 1992 - {new Date().getFullYear()}
      </div>
    </nav>
  );
};

export default Footer;
