import PageHeading from "../../layouts/PageHeading";
import LeftArticle from "../../layouts/LeftArticle";
import RightArticle from "../../layouts/RightArticle";
import { sunset } from "../../assets";
import PageSubIntro from "../../layouts/PageSubIntro";

const meta = {
  title: "Pallet",
  description: "This is BAH Engineering Consultant about page",
  keywords: "Racking, shelves product",
};

export default function pallets() {
  return (
    <section>
      <PageHeading
        intro={{
          heading: "Pallets",
          subHeading: `We also produce/sell pallets – wooden pallets, plastic pallets, steel pallets, foldable pallets – which we are highly confident you will be satisfied with.`,
        }}
        imageUrL="bg-[url(../assets/images/sunset.jpeg)]"
      />
      <section className="page__content">
        <PageSubIntro
          heading=" We can help you design and construct any type of Pallets. We can help
          you design and construct any type of Pallets. We can help you design
          and construct any type of Pallets."
        />

        <LeftArticle
          title="Wooden Pallets"
          description={[
            `Wooden pallets typically consist of three or four stringers that support several deck-boards, on top of which goods are placed.`,
            `In a pallet measurement, the first number is the stringer length and the second is the deck-board length. Square or nearly square pallets help a load resist tipping.`,
          ]}
          imageSrc={sunset}
        />
        <RightArticle
          title="Plastic Pallets"
          description={[
            `Plastic pallets are increasingly popular in a number of applications and depending upon which type of job you are talking about; the requirements of the pallet can vary.`,
            `Plastic pallets are more durable. These pallets are ideal for carrying heavy cargo during shipping and being moved around via forklift in a warehouse. Furthermore, they are more-able to withstand weather elements in between transport.`,
          ]}
          imageSrc={sunset}
        />
        <LeftArticle
          title="Steel Pallets"
          description={[
            `Our company, BAH Engineering Consultant, design and manufacture steel pallet which are used for material handling in automobile, pharmaceutical, paint & plastic industry and for domestic purpose too. Owing to their customized design, they can be lifted from all the four sides.`,
            `Therefore, these pallets are highly convenient for warehousing activities. These pallets have the capability to withstand heavy load without any causing damage. These steel pallets are anti-corrosive and fabricated using high grade steel.`,
          ]}
          imageSrc={sunset}
        />

        <RightArticle
          title="Foldable Pallets"
          description={[
            `Foldable pallets have supreme strength, easy to install, and top class quality. The pallets sometimes come with steel reinforcement, and it is foldable for convenience during transportation.`,
            `The pallet structure is available of 800×600 mm and 1200×800 mm and many other dimensions.`,
          ]}
          imageSrc={sunset}
        />
      </section>
    </section>
  );
}
