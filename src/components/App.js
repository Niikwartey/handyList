import React, { Component } from 'react';
import $ from 'jquery';
import { Container, Grid, Segment, Input, Icon, Image, Loader } from 'semantic-ui-react';
import ListCard from './listing_card.js';
import '../component_styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {listings: null};
  }

  componentDidMount() {
    $.get("/data/listings.json", (data) => {
      const listings = data.map((list_item) => {
        return(
          <Grid.Column>
            <ListCard
              description={list_item.description}
              company={list_item.company}
              imageUrl={list_item.imageUrl}
              price={list_item.price}
            />
          </Grid.Column>
        )
      });

      this.setState({listings});
    });
  }

  render() {
    return(
      <div>
        <Segment id="jumbo-search" padded textAlign="center">
          <div className="jumbotron">
            <h2>What are you looking for?</h2>
            <Input icon={<Icon name='search' inverted color="green" circular link />}
            placeholder='eg. TV Repair, Plumbing etc.' size="huge"/>
          </div>
        </Segment>

        <Segment textAlign="center">
          <Container fluid>
            <Grid doubling columns={4} id="listings" className="container">
              {this.state.listings ||
                <Loader active content="Loading" size='huge' className="jumbo-loader"/>}
            </Grid>
          </Container>
        </Segment>
      </div>
    )
  }
}

export default App;
