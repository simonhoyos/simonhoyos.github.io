import React, { Component, createRef } from 'react';
import styled from 'styled-components';
import { SectionHeader } from "./SectionHeader";
import { Grid } from "../components/Grid";

const Container = styled.div`
  overflow: scroll;
  padding: 5px;
  -webkit-overflow-scrolling: touch;
`;

class CardContainer extends Component {
  state = {
    isScrollable: false,
  }

  scrollableRef = createRef();

  componentDidMount() {
    const { scrollWidth, offsetWidth } = this.scrollableRef.current;
    const isScrollable = scrollWidth > offsetWidth + 15;

    this.setState({
      isScrollable,
    });
  }

  render() {
    return (
      <>
        <SectionHeader isScrollable={this.state.isScrollable}>
          {this.props.title}
        </SectionHeader>
        <Container>
          <Grid ref={this.scrollableRef}>
            {this.props.children}
          </Grid>
        </Container>
      </>
    );
  }
}

export { CardContainer };
