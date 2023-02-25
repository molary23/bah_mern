import {
  AiFillFacebook,
  AiFillSkype,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const SubFooter = () => {
  return (
    <section>
      <div className="flex justify-evenly p-12 h-max gap-x-10 w-11/12 mx-auto">
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
        <div className="footer__center basis-1/3 flex justify-center">
          <div>
            <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
            <a href="/about">About Us</a>
          </div>
        </div>
        <div className="footer__right basis-1/3">
          <h3 className="mb-4 text-xl font-bold">Connect with Us</h3>
          <div className="footer__social flex gap-x-3">
            <AiFillFacebook />
            <AiFillSkype />
            <AiFillLinkedin />
            <AiOutlineWhatsApp />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubFooter;
