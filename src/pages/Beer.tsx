
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import { BeerDescription } from "../store/modules/beers/types";
import { Content } from "../styles/beer";

interface IParams {
  id: string;
}

export function Beer() {

  const { id } = useParams<IParams>();
  const [beer, setBeer] = useState<BeerDescription[]>([]);

  useEffect(() => {
    api.get(`/${id}`)
      .then(response => {
        setBeer(response.data)
      })
  }, [id]);

  return (
    <Content>
      {beer.map(props => (
        <div key={props.id}>
          <h1>{props.name}</h1>
          <h4>Desde {props.first_brewed}</h4>
          <p>{props.description}</p>
          <h3>Food pairing</h3>
          <section>
            {props.food_pairing?.map(incredient => (
              <div key={incredient}>
                {incredient}
              </div>
            ))}
          </section>
        </div>
      ))}
    </Content>
  )
}