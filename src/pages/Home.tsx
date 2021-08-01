import { useEffect, useState } from "react";

import { IBeer } from "../store/modules/beers/types";

import { Content } from "../styles/home"
import { BeerCard } from "../components/BeerCard"
import { getBeers } from "../services/api";

import twitter from "../assests/twitter.svg"
import { Link } from "react-router-dom";

export function Home() {

  const [beers, setBeers] = useState<IBeer[]>([]);

  const [perPages, setPages] = useState(10);

  useEffect(() => {
    getBeers(perPages)
      .then(response => {
        setBeers(response.data)
      })
  }, [perPages]);

  function handleLoadMoreBeers() {
    setPages(perPages + 10)
  }

  return (
    <Content>
      <h1>Meet our beer</h1>
      <p>We are a group of multi-skilled individuals who are entrepreneurial by nature<br /> and live to make digital products and services that people love
        to use.</p>

      <strong>
        <img src={twitter} alt="Twitter" />
        <h3>Lastest beers from ours  tonels</h3>
      </strong>

      <section>
        {beers.map(beer => (
          <Link to={`/beer/${beer.id}`} key={beer.id}>
            <BeerCard
              id={beer.id}
              image_url={beer.image_url}
              name={beer.name}
              tagline={beer.tagline}
              brewers_tips={beer.brewers_tips}
            />
          </Link>
        ))}
      </section>
      <button
        type="button"
        onClick={handleLoadMoreBeers}
      >
        LOAD MORE
      </button>

    </Content>
  )
}
