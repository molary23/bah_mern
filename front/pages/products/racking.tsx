import PageHeading from "../../layouts/PageHeading";
import LeftArticle from "../../layouts/LeftArticle";
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
      <section className="page__content">
        <LeftArticle
          title="Drive-in Racking"
          description={[
            `Drive-in racking systems apply the LIFO (last in, first out) principle for loading and unloading. Drive-through installations are loaded and unloaded according the FIFO (first in, first out) principle. To guide the truck or pallets and to protect the installation we recommend the use of ground rails.`,
            `There are three types of drive-in racks, depending on the load and unload procedure and the accessibility: Single drive-in racking, Double drive-in racking, and Drive through.`,
          ]}
          imageSrc={sunset}
        />
        <ParallaxArticle
          title="Selective Racking"
          description={[
            `Selective racking is one of the most common types of racking system for warehouses. It has the lowest storage capacity of pallet and also has the lowest cost per square meter when it comes to racking.`,
            `However, when it comes to high volume storage that is greater than 3000 pallets, it is often considered to be the most expensive solution.`,
          ]}
          imageSrc={""}
          type="single"
          backgroundImage="bg-[url(../assets/images/sunset.jpeg)]"
        />
        <LeftArticle
          title="Flow Through Racking"
          description={[
            `Specially constructed lanes of gravity inclined tracks stacked side by side and on top of each other within a pallet rack framework form a solid block of storage that is fed in from one end and unloaded at the other. Consistent loads are stored in each lane, for the same SKU. Automatic rotation is provided rack utilization is often at 90%.`,
            `Wide range of pallets can be accommodated at the design stage; and the flow through racking can secure and safe handling as the pallet truck does not enter the rack.`,
          ]}
          imageSrc={sunset}
        />
        <ParallaxArticle
          title="Gravity Racking"
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
        <LeftArticle
          title="Mezzanine Racking"
          description={[
            `A mezzanine storage system can help solve the problem of unutilized empty space in your warehouse. Mezzanine storage systems also easily pay for themselves by doubling or tripling available storage space without the need for expensive building expansions. Free-standing mezzanines provide additional work areas or storage space by utilizing the wasted air space in your warehouse or manufacturing facility.`,
            `Mezzanine storage increases your cubic space while freeing up valuable floor space for other use. Structural steel mezzanines can be configured in a wide range of sizes, floor types, and construction styles to fit almost any space or application, which can also be reconfigured or added on to at a later date.`,
          ]}
          imageSrc={sunset}
        />
        <ParallaxArticle
          title="Stereoscopic Racking"
          description={[
            `Our main objective is centered on the need to provide additional services to the customers and inject a new innovation into the growing economy in Nigeria.`,
            `It was during this period we found out that most client buy wrong equipments for use on the stock racking system and we now fel t to normalize this for future clients that passes through us.`,
          ]}
          imageSrc={sunset}
          type="dual"
          backgroundImage="bg-[url(../assets/images/sunset.jpeg)]"
        />
      </section>
    </section>
  );
};

export default racking;
