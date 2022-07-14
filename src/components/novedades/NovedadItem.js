import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const NovedadItem = (props)=>{
    const { title, subtitle, imagen, body} = props;

    return(
        <Row xs={1} md={2} className="d-flex g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card className="d-flex w-100">
              <Card.Img variant="top" src={imagen} />
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Subtitle>{subtitle}</Card.Subtitle>
                <Card.Text  dangerouslySetInnerHTML={{ __html: body}} >

                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row> 

    
/*     <Card className="d-flex col-6" style={{ width: '460px' }}>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <h1>{title}</h1>
        <Card.Title>{subtitle}</Card.Title>
        <Card.Text dangerouslySetInnerHTML={{ __html: body}} >
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> */
 
/*  
        <div className='novedades'>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <img src={imagen} alt=""/>
            <div dangerouslySetInnerHTML={{ __html: body}} />
            <hr/>
        </div>
 */
    );
}

export default NovedadItem;