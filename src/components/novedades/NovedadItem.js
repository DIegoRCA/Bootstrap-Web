import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const NovedadItem = (props)=>{
   const { title, subtitle, imagen, body} = props;

    return(
        <Row  className="d-flex">
        {Array.from({ length: 1 }).map((_, _idx) => (
          <Col className='d-flex'>
            <Card className="d-flex my-2">
              <Card.Img variant="top"  src={imagen} className="pt-4" />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className='my-2 text-secondary'>{subtitle}</Card.Subtitle>
                <Card.Text  dangerouslySetInnerHTML={{ __html: body}} >

                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row> 
    );
}

export default NovedadItem;