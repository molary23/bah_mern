import PageSubIntro from "../layouts/PageSubIntro";
import PageHeading from "../layouts/PageHeading";
import { EquipmentProps } from "../util/Types";

export default function Equipments(props: EquipmentProps) {
  return (
    <section>
      <PageHeading intro={props?.intro} imageUrL={props?.imageUrL} />
      {props?.subHeading && <PageSubIntro heading={props?.subHeading} />}
      <section className="page__content">{props?.elements}</section>
    </section>
  );
}
