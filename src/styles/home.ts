import styled from "styled-components"

export const Content = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0rem 1.8rem 2.5rem;
  display: grid;
  margin-top: -100rem;
  color: #FFFFFF;

  h1 {
    font-size: 5.3rem;
    padding-bottom: 0.3rem;
  }

  p {
    font-size: 1.1rem;
    filter: brightness(0.75);
  }

  strong { 
    display: flex;
    padding-top: 7rem;

    h3 {
      padding-left: 0.75rem;
      font-size: 1.5rem;
      font-weight: 300;
    }
    filter: brightness(0.75);
  }

  
  section {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    padding-top: 3.5rem;
    
    a {
      text-decoration: none;
      display: contents;
    }
  }

  button {
    background: #FFFFFF;
    font-size: 1.7rem;
    padding: 2rem 3rem 2rem;
    margin-top: 2.25rem;
    margin-left: auto;
    margin-right: auto;
    border: none;
    border-radius: 0.375rem;
    cursor: pointer;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.85);
    }
  }

`

