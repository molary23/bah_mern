import LeftArticle from "../../layouts/LeftArticle";
import RightArticle from "../../layouts/RightArticle";
import ParallaxArticle from "../../layouts/ParallaxArticle";
import Equipments from "../../components/Equipments";
import { RegularObject } from "../../util/Types";

export default function spares(props: RegularObject) {
  const SITE_URL = props?.siteURL;
  return (
    <Equipments
      intro={{
        heading: "Spares",
        subHeading: `Spare parts are an important feature of logistics engineering and supply chain management, often comprising dedicated spare parts management systems. Forklift Tires, Controllers and batteries are part of what our company sells`,
      }}
      imageUrL="bg-[url(https://bahengineeringconsultant.com//images/home_power.jpg)]"
      subHeading="Spare parts are an important feature of logistics engineering and supply chain management, often comprising dedicated spare parts management systems. Forklift Tires, Controllers and batteries are part of what our company sells"
      elements={
        <>
          <LeftArticle
            title="Forklift Batteries"
            description={[
              `A forklift battery actually has two functions: the first function is to provide a power source to the forklift; and the second, and lesser known function, is to provide mass as a counterweight, which aids the forklift’s lifting capacity. An industrial forklift battery is typically comprised of the following components: battery case, battery cells, battery bars and battery cables.`,
            ]}
            imageSrc={`${SITE_URL}forklift_battery.jpg`}
            imageAlt="Forklift Batteries"
          />
          <ParallaxArticle
            title="Forklift Tires"
            description={[
              `All forklifts need tires to operate, but the types of tires and layout of tires on the forklift can vary significantly. Forklifts that use four tires are capable of lifting heavy loads and are versatile for many applications. Three-wheel forklifts are ideal for indoor environments where space is limited and the ability to turn and maneuver efficiently is important.`,
              `There are two main types of forklift tires: Cushion Tires – Generally used for forklifts operating indoors, where surfaces are flat, smooth and consistent. Pneumatic/ Solid Tires – Pneumatic/ solid tire forklifts are generally used for operating outdoors, where surfaces can be uneven, rough or variable.`,
            ]}
            imageSrc={`${SITE_URL}forklift_tire.jpg`}
            imageAlt="Forklift Tires"
            type="dual"
            backgroundImage="bg-[url(https://bahengineeringconsultant.com//images/home_power.jpg)]"
          />
          <RightArticle
            title="Forklift Controller"
            description={[
              `This forklift controller is designed to meet the standards established by the OEM [Original Equipment Manufacturer] – providing superior performance during service or component wear. The forklift controller is an equipment use to control the forklift to enable it lift trucks and move materials.`,
            ]}
            imageSrc={`${SITE_URL}forklift_controller.jpg`}
            imageAlt="Forklift Controller"
          />
          <LeftArticle
            title="Forklift Contactors"
            description={[
              `Forklift Contactors BAH Engineering Consultant offers a wide range Contactors suitable for use in forklift trucks as well as pallet trucks, reach trucks and counterbalance trucks. Our firm sells contactors which are compact, of superior quality and reliable performance. The contactors have smooth performance, high functionality, and consume less power.`,
            ]}
            imageSrc={`${SITE_URL}forklift_contactor.jpg`}
            imageAlt="Forklift Contractors"
          />
        </>
      }
    />
  );
}
