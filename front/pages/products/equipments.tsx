import PageHeading from "../../layouts/PageHeading";
import RightArticle from "../../layouts/RightArticle";
import { sunset } from "../../assets";

const equipments = () => {
  return (
    <section>
      <PageHeading
        intro={{
          heading: "Racking",
          subHeading: `BAH Engineering and Consultant is into the sale of warehouse racking. Drive-in Racking, selective racking, flow through racking, gravity racking, mezzanine racking and stereoscopic racking are all available in our outlet.`,
        }}
        imageUrL="bg-[url(../assets/images/sunset.jpeg)]"
      />
      <RightArticle
        title="Drive-in Racking"
        description={[
          `Drive-in racking systems apply the LIFO (last in, first out) principle for loading and unloading. Drive-through installations are loaded and unloaded according the FIFO (first in, first out) principle. To guide the truck or pallets and to protect the installation we recommend the use of ground rails.`,
          `There are three types of drive-in racks, depending on the load and unload procedure and the accessibility: Single drive-in racking, Double drive-in racking, and Drive through.`,
        ]}
        imageSrc={sunset}
      />
    </section>
  );
};

export default equipments;
