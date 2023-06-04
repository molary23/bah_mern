import LeftArticle from "../../layouts/LeftArticle";
import RightArticle from "../../layouts/RightArticle";
import Equipments from "../../components/Equipments";
import { RegularObject } from "../../util/Types";
import { useOutletContext } from "react-router-dom";

export default function Pallets(props: RegularObject) {
  const SITE_URL = useOutletContext();
  return (
    <Equipments
      intro={{
        heading: "Pallets",
        subHeading: `We also produce/sell pallets – wooden pallets, plastic pallets, steel pallets, foldable pallets – which we are highly confident you will be satisfied with.`,
      }}
      imageUrL="bg-[url(https://bahengineeringconsultant.com/images/home_power.jpg)]"
      subHeading="We can help you design and construct any type of Pallets. We can help
          you design and construct any type of Pallets. We can help you design
          and construct any type of Pallets."
      elements={
        <>
          <LeftArticle
            title="Wooden Pallets"
            description={[
              `Wooden pallets typically consist of three or four stringers that support several deck-boards, on top of which goods are placed.`,
              `In a pallet measurement, the first number is the stringer length and the second is the deck-board length. Square or nearly square pallets help a load resist tipping.`,
            ]}
            imageSrc={`${SITE_URL}wooden_pallet.jpg`}
            imageAlt="Wooden Pallets"
          />
          <RightArticle
            title="Plastic Pallets"
            description={[
              `Plastic pallets are increasingly popular in a number of applications and depending upon which type of job you are talking about; the requirements of the pallet can vary.`,
              `Plastic pallets are more durable. These pallets are ideal for carrying heavy cargo during shipping and being moved around via forklift in a warehouse. Furthermore, they are more-able to withstand weather elements in between transport.`,
            ]}
            imageSrc={`${SITE_URL}plastic_pallet.jpg`}
            imageAlt="Plastic Pallets"
          />
          <LeftArticle
            title="Steel Pallets"
            description={[
              `Our company, BAH Engineering Consultant, design and manufacture steel pallet which are used for material handling in automobile, pharmaceutical, paint & plastic industry and for domestic purpose too. Owing to their customized design, they can be lifted from all the four sides.`,
              `Therefore, these pallets are highly convenient for warehousing activities. These pallets have the capability to withstand heavy load without any causing damage. These steel pallets are anti-corrosive and fabricated using high grade steel.`,
            ]}
            imageSrc={`${SITE_URL}steel_pallet.jpg`}
            imageAlt="Steel Pallets"
          />

          <RightArticle
            title="Foldable Pallets"
            description={[
              `Foldable pallets have supreme strength, easy to install, and top class quality. The pallets sometimes come with steel reinforcement, and it is foldable for convenience during transportation.`,
              `The pallet structure is available of 800×600 mm and 1200×800 mm and many other dimensions.`,
            ]}
            imageSrc={`${SITE_URL}foldable_pallet.jpg`}
            imageAlt="Foldable Pallets"
          />
        </>
      }
    />
  );
}
