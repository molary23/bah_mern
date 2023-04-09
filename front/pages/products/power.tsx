import LeftArticle from "../../layouts/LeftArticle";
import RightArticle from "../../layouts/RightArticle";
import { sunset } from "../../assets";
import ParallaxArticle from "../../layouts/ParallaxArticle";
import Equipments from "../../components/Equipments";

const power = () => {
  return (
    <Equipments
      intro={{
        heading: "Power",
        subHeading: `Explore a new source of Power`,
      }}
      imageUrL="bg-[url(../assets/images/sunset.jpeg)]"
      elements={
        <>
          <LeftArticle
            title="Solar Panels"
            description={[
              `Solar panels absorb sunlight as a source of energy to generate electricity. A photovoltaic (PV) module is a packaged, connected assembly of typically 6x10 photovoltaic solar cells. Photovoltaic modules constitute the photovoltaic array of a photovoltaic system that generates and supplies solar electricity in commercial and residential applications.`,
              `Solar panel is very good. Since you will be meeting some of your energy needs with the electricity your solar system has generated, your energy bills will drop. How much you save on your bill will be dependent on the size of the solar system and your electricity or heat usage.`,
            ]}
            imageSrc={sunset}
          />

          <ParallaxArticle
            title="Controllers"
            description={[
              `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum at inventore, nemo repellendus ut eum iure architecto suscipit reiciendis itaque dolorum fugit, molestiae explicabo distinctio, tempore veniam saepe ipsam nesciunt.
`,
            ]}
            imageSrc={sunset}
            type="dual"
            backgroundImage="bg-[url(../assets/images/sunset.jpeg)]"
          />
          <RightArticle
            title="Inverters"
            description={[
              `An inverter is an electronic device or circuitry that changes direct current (DC) to alternating current (AC). The input voltage, output voltage and frequency, and overall power handling depend on the design of the specific device or circuitry.`,
              `The inverter does not produce any power; the power is provided by the DC source. A power inverter can be entirely electronic or may be a combination of mechanical effects (such as a rotary apparatus) and electronic circuitry.`,
            ]}
            imageSrc={sunset}
          />
          <LeftArticle
            title="Energy Saving Bulbs"
            description={[
              `Energy Saving Bulbs are majorly Light Emitting Diode (LED) and Compact Fluorescent Lights (CFL) bulbs have revolutionized energy-efficient lighting. CFLs are simply miniature versions of full-sized fluorescents. They screw into standard lamp sockets, and give off light that looks similar to the common incandescent bulbs — not like the fluorescent lighting we associate with factories and schools.`,
              `LEDs are small, very efficient solid bulbs. New LED bulbs are grouped in clusters with diffuser lenses, which have broadened the applications for LED use in the home. LED technology is advancing rapidly, with many new bulb styles available.`,
            ]}
            imageSrc={sunset}
          />

          <RightArticle
            title="DC Bulbs"
            description={[
              `DC light bulb has the advantage of being very energy efficient. A smaller solar panel or wind generator can be used to run a DC lighting system than would be required for an AC system. Also, since DC lighting can be powered directly from the battery bank, the added expense of installing an inverter is not necessary.`,
              `The DC Light Bulbs are good for remote and self-standing power supplies, such as DC batteries, cars, solar off grid systems and more. DC lighting has the advantage of being very energy efficient.`,
            ]}
            imageSrc={sunset}
          />
        </>
      }
    />
  );
};

export default power;
