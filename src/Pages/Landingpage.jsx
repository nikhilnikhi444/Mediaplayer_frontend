import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landingpage() {
  return (
    <>
     <div className='row p-5 my-5'>
       <div className="col-md-1"></div>

        <div className="col-md-5 p-3">
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{textAlign:'justify'}} className='mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima molestias magnam in iste? Quasi asperiores illo, magnam reiciendis animi at repellat id, odit delectus saepe minus tempora, vitae ipsum? Quod, consectetur repellendus. Cupiditate, doloremque atque. Doloremque accusantium velit laboriosam explicabo alias quod error porro voluptatibus voluptate expedita consequuntur deleniti tempore ipsum aperiam neque animi, inventore dolorum impedit, commodi id est nesciunt maxime magnam! Voluptate, optio nostrum quo commodi iste aliquam?</p>
          <Link to={'/home'}><button className='btn btn-warning mt-4'>Get Started</button></Link>
        </div>

        <div className="col-md-1"></div>

        <div className="col-md-5 p-3 d-flex justify-content-center align-items-center">
          <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="image" className='w-75' />
        </div>
     </div>
     <div className='mt-5 mb-5 py-5'>
   <h3 className='my-5 text-center'>Features</h3>
       <Row className='mb-5 mt-md-5 pt-0 p-4'>
  
       
        <Col md={1}></Col>
        <Col md={3} className='p-5 p-md-0' >
        <Card style={{ width: '100%' }} className='p-4'>
        <Card.Img variant="top" src="https://i.pinimg.com/originals/53/b5/55/53b555c98e73777b01a4d25a0a5d2b77.gif" style={{width:'100%', height:'300px'}}  />
        <Card.Body>
          <Card.Title>Managing Videos</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          
        </Card.Body>
      </Card>
        </Col>
        <Col md={4} className='d-flex justify-content-center' ><Card style={{ width: '80%' }} className='p-4'>
        <Card.Img variant="top" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8cfdf879936425.5cd284d4e4dd3.gif" style={{width:'100%', height:'300px'}} />
        <Card.Body>
          <Card.Title>Categorized Video</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          
        </Card.Body>
      </Card></Col>
        <Col md={3}  className='p-5 p-md-0'><Card style={{ width: '100%' }} className='p-4'  >
        <Card.Img variant="top" src="https://i.pinimg.com/originals/88/4a/40/884a408310b28171aa1018f77dee2602.gif" style={{width:'100%', height:'300px'}} />
        <Card.Body>
          <Card.Title>Watch History</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          
        </Card.Body>
      </Card></Col>
        <Col md={1}></Col>
       </Row>
     </div>

     <div className='row pt-0 pt-md-5 pb-5'>
     <div className="col-md-1"></div>
     <div className="col-md-10 border p-4 rounded border-2">
      <Row>
        <Col md={6} className='p-3'>
        <h2 className='text-warning mb-5'>Simple Fast and PowerFul</h2>
        <p style={{textAlign:'justify'}}><span className='fs-4'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quod adipisci tempore, soluta atque at consequuntur aliquid aut omnis consequatur incidunt repellendus nobis ipsum dolorum facilis porro qui odio accusamus.</p>
        <p style={{textAlign:'justify'}} className='mt-3'><span className='fs-4'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi totam repellendus earum suscipit nemo quod, eligendi id consectetur molestias fugit eaque, vero autem neque minus ea animi ipsam. Incidunt, illum?</p>
        <p style={{textAlign:'justify'}} className='mt-3'><span className='fs-4'>Play Everything</span>: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, architecto deserunt nemo nam ab commodi amet, sequi quasi a debitis quibusdam explicabo molestias ullam omnis illum beatae blanditiis. Vitae, autem?</p>
        </Col>
        <Col md={6} className='p-3'>
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/hJBHSmyqv0Y" title="Humraah Full Song | Malang | Aditya R K, Disha P Anil K Kunal K | Sachet T | Mohit S | Fusion P" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Col>
      </Row>
     </div>
     <div className="col-md-1"></div>


     </div>
    </>
  )
} 

export default Landingpage