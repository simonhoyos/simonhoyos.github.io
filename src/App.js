import React, { Component } from 'react';
import styled from 'styled-components'
import './App.css';
import { Nav } from "./components/Nav";
import { Section } from './components/Section';
import { Home } from "./components/Home";

const AppContainer = styled.div`
  display: grid;

  @media screen and (min-width: 960px) {
    grid-template-columns: 250px auto;
  }
`;

class App extends Component {
  render() {
    return (
      <AppContainer className="App">
        <Nav />
        <main>
          <Home />
          <Section
            title="experience"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quasi ducimus iste quod labore, praesentium harum, amet neque doloribus cumque atque qui vero perferendis unde fugit et. Pariatur, dolores similique!"
          />
          <Section
            title="projects"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quasi ducimus iste quod labore, praesentium harum, amet neque doloribus cumque atque qui vero perferendis unde fugit et. Pariatur, dolores similique!"
          />
        </main>
      </AppContainer>
    );
  }
}

export default App;
