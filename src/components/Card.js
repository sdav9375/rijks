import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const ArtCard = (props) => (
  <Card>
    <Image src={props.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.title}</Card.Header>
    </Card.Content>
  </Card>
)

export default ArtCard;