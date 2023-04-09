import PageHeading from "../../layouts/PageHeading";
import RightArticle from "../../layouts/RightArticle";
import ParallaxArticle from "../../layouts/ParallaxArticle";
import LeftArticle from "../../layouts/LeftArticle";
import TabNav from "../../layouts/TabNav";
import { sunset } from "../../assets";

const equipments = () => {
  return (
    <section>
      <PageHeading
        intro={{
          heading: "Warehouse Handling Equipments",
          subHeading: `Equipment such as reach trucks, diesel forklifts, liquefied petroleum gas forklifts, narrow aisles, pickers, stackers, manual/semi-electric/electric pallet trucks, weightier pallet trucks are available for sale at BAH Engineering and Consultant.`,
        }}
        imageUrL="bg-[url(../assets/images/sunset.jpeg)]"
      />
      <section className="page__content">
        <RightArticle
          title="Forklifts"
          description={[
            `Diesel forklift trucks are most ideal for applications where they are mainly used outside. When used outside, the exhaust fumes and diesel particles escape easily into the atmosphere and do not cause any local environmental or health and safety issues which can occur when used indoors.`,
            `Although, Catalysts and purifiers on the exhaust can reduce noxious emissions and make diesel forklift trucks acceptable for occasional indoor use. The engines in diesel forklift trucks can be more fuel efficient than LPG forklifts, and can be run on red diesel. Forklift trucks that are powered by LPG have been long popular, mostly due to their suitability for outside and inside use plus the competitive pricing. You'll usually find that the engines in LPG gas Forklift trucks have many similarities to car engines.`,
          ]}
          imageSrc={sunset}
        />
        <ParallaxArticle
          title="Reach Trucks"
          description={[
            `A reach truck is a narrow-aisle, right-angle stacking truck designed for unit load handling with rack interface. These lift trucks are meant to operate in narrow aisles and are best for storing and retrieving pallets in racks.`,
            `They are equipped with a pantograph mechanism and can shelve pallets one or two-deep. This version is known as a deep-reach lift truck. These lift trucks are designed to maximize unit load capacity by narrowing aisles and promoting product throughput. Reach trucks are categorized as Class 2 lift trucks in material handling.`,
          ]}
          imageSrc={sunset}
          type="dual"
          backgroundImage="bg-[url(../assets/images/sunset.jpeg)]"
        />
        <LeftArticle
          title="Narrow Trucks"
          description={[
            `Narrow-aisle trucks are designed to work in areas narrower than 12 feet (144 inches). While they provide more storage space, narrow aisle storage systems require reach trucks and order pickers to operate in much narrower aisle widths.`,
            `Narrow-aisle trucks use electric motors. They work in aisles 8 to 9 1/2 feet wide. They come mostly as stand-up riders. This configuration helps increase productivity and operator comfort.`,
          ]}
          imageSrc={sunset}
        />
        <TabNav
          title="Pallet Trucks"
          pages={["Manual", "Semi Electric", "Electric"]}
          description={[
            `Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus placeat
        assumenda exercitationem recusandae delectus amet sed quisquam fugit,
        facilis quos. Ad voluptates cum laudantium unde sed veritatis totam
        beatae quae.`,
          ]}
          content={[
            {
              imageSrc: sunset,
              text: [
                `Manual Pallet Trucks is manually operated lifter and driving machine.`,
                `It lift up height depend on demand but it range from 3,000 - 6,000mm.`,
              ],
            },
            {
              imageSrc: sunset,
              text: [
                `Semi Electric Pallets Trucks is manually driven machine but lift up with hydraulic system controlled electrically.
`,
              ],
            },
            {
              imageSrc: sunset,
              text: [
                `Electric Pallet truck is electrically controlled with the use of hydraulic to lift palleted goods from one place to other.`,
                `It have WALKIE TYPE that user walk along with machine and RIDER TYPE that the user ride along with the machine which is faster in speed than walkie type.`,
              ],
            },
          ]}
        />
        <RightArticle
          title="Pickers"
          description={[
            `Pickers deliver exceptional versatility, intuitive handling and easy maintenance. With a broad range of capabilities, these forklifts can adapt to a variety of warehouse environments and are designed to help you run a faster, smoother operation.`,
            `The range is divided into series starting with the low-level L-series to meet demands for first and second level order picking. For picking up to 6.3 meters and with elevating forks the M-series is the obvious choice. When it comes to high level order picking the H-series, highest picking height on the market, take order picking to the next level.`,
          ]}
          imageSrc={sunset}
        />
        <TabNav
          title="Stackers"
          pages={["Manual", "Semi Electric", "Electric"]}
          description={[
            "A stacker is a large machine used in bulk material handling. Its function is to pile bulk material such as limestone, ores and cereals on to a stockpile. A reclaimed can be used to recover the material.",
            "Stackers are nominally rated for lifting capacity in tonnage or kilogram. They normally travel with load on a low-level and arrange as necessary into racks or on each other. Stacker can be manually, semi-electric and fully electric. Mostly a large stacker specially made for narrow-aisle can usually move in at least two directions: horizontally along the rail and vertically by lifting (raising and lowering) its boom.",
          ]}
          content={[
            {
              imageSrc: sunset,
              text: [
                `Is stacker that uses human effort to operate both loading and moving of the stacker manually. This type is 1,000kg – 2,000kg with 1,600mm– 3,000mm lifting height.`,
              ],
            },
            {
              imageSrc: sunset,
              text: [
                `Is stacker that uses battery for lifting while movement is manually with 1,000kg – 2,500kg and 1,600mm– 3,000mm lifting height.
`,
              ],
            },
            {
              imageSrc: sunset,
              text: [
                `This is fully control by electrical components on both lifting and movement of the stacker. It lift up to 6,000mm and the loading capacity ranges from 1,000kg – 2,500kg`,
              ],
            },
          ]}
        />
        <ParallaxArticle
          title="Weightier"
          description={[
            `A reach truck is a narrow-aisle, right-angle stacking truck designed for unit load handling with rack interface. These lift trucks are meant to operate in narrow aisles and are best for storing and retrieving pallets in racks.`,
            `They are equipped with a pantograph mechanism and can shelve pallets one or two-deep. This version is known as a deep-reach lift truck. These lift trucks are designed to maximize unit load capacity by narrowing aisles and promoting product throughput. Reach trucks are categorized as Class 2 lift trucks in material handling.`,
          ]}
          imageSrc={sunset}
          type="dual"
          backgroundImage="bg-[url(../assets/images/sunset.jpeg)]"
        />
      </section>
    </section>
  );
};

export default equipments;
