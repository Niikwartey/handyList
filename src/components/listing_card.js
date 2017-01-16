import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const ListCard = (props) => {
  return(
    <Card>
      <Image src={props.imageUrl}/>
      <Card.Content>
        <Card.Header>
          {props.description}
        </Card.Header>
        <Card.Meta>
          Offered by: <a href="#">{props.company}</a>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra className="price">
        <span className="original-price">${props.price.original}</span>
        <span className="member-price">${props.price.discounted}</span>
      </Card.Content>
      <a className="ui inverted orange bottom attached button" href="#">
        View Offer
      </a>
    </Card>
  );
}

export default ListCard;
