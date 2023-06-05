import { useEffect, useState } from "react";
import {
  AiFillFacebook,
  AiFillSkype,
  AiFillLinkedin,
  AiOutlineWhatsApp,
  AiOutlineVerticalAlignTop,
} from "react-icons/ai";

export default function SubFooter() {
  const [show, setShow] = useState(false),
    handleScroll = () => {
      window.scrollTo(0, 0);
    },
    handleShow = () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

  useEffect(() => {
    window.addEventListener("scroll", handleShow, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, []);

  return (
    <section className="bg-zinc-500 text-white theme__section">
      <div className="flex flex-col sm:flex-row gap-y-8 justify-evenly py-24 h-max gap-x-10 w-11/12 mx-auto">
        <div className="footer-left basis-1/3">
          <h2 className="mb-8 text-2xl font-bold">
            BAH Engineering Consultant
          </h2>
          <h3 className="mb-4 text-xl text-justify">
            We are guided by philosophy of excellent services and aims to
            achieve the highest standard of Engineering support services for
            clients.
          </h3>
          <p className="text-justify">
            We are guided by philosophy of excellent services and aims to
            achieve the highest standard of Engineering support services for
            clients.
          </p>
        </div>
        <div className="footer__center basis-1/3 flex sm:justify-center">
          <div className="">
            <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
            <ul className="footer__quick__links">
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/showroom">e-Showroom</a>
              </li>
              <li>
                {" "}
                <a href="/products/equipments">Equipments</a>
              </li>
              <li>
                {" "}
                <a href="/consultancy">Consultancy</a>
              </li>
              <li>
                <a href="/pallets">Pallets</a>
              </li>
              <li>
                <a href="/logistics">Logistics</a>
              </li>
              <li>
                <a href="/power">Power</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__right basis-1/3">
          <h3 className="mb-4 text-xl font-bold">Connect with Us</h3>
          <div className="footer__social flex gap-x-3">
            <a
              href="https://facebook.com/bah-engineering-consultant"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiFillFacebook />
            </a>
            <a href="skype:name?chat" target="_blank" rel="noreferrer noopener">
              <AiFillSkype />
            </a>
            <a
              href="https://www.linkedin.com/company/bahengine/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="htpps://wa.me/+2348032448088"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineWhatsApp />
            </a>
          </div>
        </div>
      </div>
      <div
        className={`fixed right-5 bottom-8 z-9999 bg-primary p-3 scrollMe cursor-pointer ${
          show ? "" : "hidden"
        }`}
        onClick={handleScroll}
      >
        <AiOutlineVerticalAlignTop />
      </div>
    </section>
  );
}
