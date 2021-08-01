
import { IBeer } from "../../store/modules/beers/types";
import { Content } from "./styles";



export function BeerCard(props: IBeer) {



  return (
    <Content >
      <section>
        <img src={props.image_url} alt={props.name} />
        <h3>{props.name}</h3>
        <h5>{props.tagline}</h5>
        <p>{props.brewers_tips}</p>
      </section>
    </Content>
  )
}