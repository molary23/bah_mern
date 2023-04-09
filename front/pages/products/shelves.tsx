import { sunset } from "../../assets";
import LeftArticle from "../../layouts/LeftArticle";
import PageHeading from "../../layouts/PageHeading";
import RightArticle from "../../layouts/RightArticle";

export default function shelves() {
  return (
    <section>
      <PageHeading
        intro={{
          heading: "Shelves",
          subHeading: `We are into the production of shelves and cabinets ranging from light
          duty shelves, middle duty shelves and cabinets. Shelves from our
          company can be used in homes, business, stores, or elsewhere to hold
          items that are being displayed, stored, or offered for sale`,
        }}
        imageUrL="bg-[url(../assets/images/sunset.jpeg)]"
      />
      <section className="page__content">
        <LeftArticle
          title="Light Duty Shelves"
          description={[
            `It is the ideal shelf system to store products that are not too heavy and do not take up a lot of space with light and medium duty shelving systems. It can adapt to any kind of storage space thanks to its easily adjustable eye gaps. A strong and rigid material is used in this system.`,
            `Light duty shelving systems provide easy access to your products and give your storage space a stylish look. It can be converted into mezzanine (deck) platforms in storage environments with high altitude. Quality being the utmost priority, we manufacture and supply an extensive range of Light Duty shelves.`,
          ]}
          imageSrc={sunset}
        />
        <RightArticle
          title="Middle Duty Shelves"
          description={[
            `Middle Duty Shelves are absolute storage system perfect for warehouse and industrial applications. These characteristically include automotive and other spare hardware, parts, bulk retail, and common purposes carton and archive storage. The Middle Duty Storage Shelves can be configured to accommodate a wide range of storage requirements. These shelves are suitable for storage of small boxes and cartons. Further, these shelves are available with adjustable shelving system along with the load bearing capacity up to 1.2 ton per level.`,
            `The features are light weight, good durability, superb accuracy, fine finishing, very long lasting, superior strength, and easy to install and assemble.`,
          ]}
          imageSrc={sunset}
        />
        <LeftArticle
          title="Cabinets"
          description={[
            `A cabinet is a box-shaped piece of furniture with doors and/or drawers for storing miscellaneous items. Some cabinets stand-alone while others are built in to a wall or are attached to it like a medicine cabinet. Cabinets are typically made of wood (solid or with veneers or artificial surfaces), coated steel (common for medicine cabinets), or synthetic materials.`,
            `Commercial grade cabinets, which differ in the materials used, are called casework, case goods, or case furniture. We make wonderful cabinets for domestic and industrial purposes.`,
          ]}
          imageSrc={sunset}
        />
      </section>
    </section>
  );
}
