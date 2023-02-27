import PageHeading from "../../layouts/PageHeading";
import LeftArticle from "../../layouts/LeftArticle";
import RightArticle from "../../layouts/RightArticle";
import { sunset } from "../../assets";
import ParallaxArticle from "../../layouts/ParallaxArticle";

const meta = {
  title: "Racking",
  description: "This is BAH Engineering Consultant about page",
  keywords: "Racking, shelves product",
};

const racking = () => {
  return (
    <section>
      <PageHeading
        intro={{
          heading: "Racking",
          subHeading: `BAH Engineering and Consultant is into the sale of warehouse racking. Drive-in Racking, selective racking, flow through racking, gravity racking, mezzanine racking and stereoscopic racking are all available in our outlet.`,
        }}
        imageUrL="bg-[url(../assets/images/sunset.jpeg)]"
      />
      <LeftArticle
        title="Light Duty Shelves"
        description={[
          `It is the ideal shelf system to store products that are not too heavy and do not take up a lot of space with light and medium duty shelving systems. It can adapt to any kind of storage space thanks to its easily adjustable eye gaps. A strong and rigid material is used in this system.`,
          `Light duty shelving systems provide easy access to your products and give your storage space a stylish look. It can be converted into mezzanine (deck) platforms in storage environments with high altitude. Quality being the utmost priority, we manufacture and supply an extensive range of Light Duty shelves.`,
        ]}
        imageSrc={sunset}
      />
      <ParallaxArticle
        title="Gravity"
        description={[
          `Gravity Racking is a storage system that relies on gravity flow to
            load, organize, and retrieve stored cartons or pallets within a
            warehouse. Maximizing space and efficiency, gravity flow racks will
            save your business money, improve your productivity, and increase
            safety for your employees.`,
          `Gravity racks act as non-powered, downward-sloped storage conveyors,
            which allow for all subsequent pallets or cartons to move to the
            forefront, once the preceding item has been removed, otherwise known
            as first in first out (FIFO) racking.`,
        ]}
        imageSrc={""}
        type="single"
        backgroundImage="bg-[url(../assets/images/sunset.jpeg)]"
      />
      <RightArticle
        title="Middle Duty Shelves"
        description={[
          `Middle Duty Shelves are absolute storage system perfect for warehouse and industrial applications. These characteristically include automotive and other spare hardware, parts, bulk retail, and common purposes carton and archive storage. The Middle Duty Storage Shelves can be configured to accommodate a wide range of storage requirements. These shelves are suitable for storage of small boxes and cartons. Further, these shelves are available with adjustable shelving system along with the load bearing capacity up to 1.2 ton per level.`,
          `The features are light weight, good durability, superb accuracy, fine finishing, very long lasting, superior strength, and easy to install and assemble.`,
        ]}
        imageSrc={sunset}
      />
      <ParallaxArticle
        title="Gravity"
        description={[
          `Gravity Racking is a storage system that relies on gravity flow to
            load, organize, and retrieve stored cartons or pallets within a
            warehouse. Maximizing space and efficiency, gravity flow racks will
            save your business money, improve your productivity, and increase
            safety for your employees.`,
          `Gravity racks act as non-powered, downward-sloped storage conveyors,
            which allow for all subsequent pallets or cartons to move to the
            forefront, once the preceding item has been removed, otherwise known
            as first in first out (FIFO) racking.`,
        ]}
        imageSrc={sunset}
        type="dual"
        backgroundImage="bg-[url(../assets/images/sunset.jpeg)]"
      />
    </section>
  );
};

export default racking;
