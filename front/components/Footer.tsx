import Image from "next/image";

const Footer = () => {
  return (
    <nav className="bg-zinc-600 text-white h-12 items-center p-3">
      <div className="flex justify-center items-center">
        Copy&copy; BAH Engineering Consultant 1992 - {new Date().getFullYear()}
      </div>
    </nav>
  );
};

export default Footer;
