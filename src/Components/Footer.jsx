import React from 'react'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faFacebook} from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className='row p-5 mt-md-5'>

       <div className="col-md-4">
        <h4 className='mb-3'><FontAwesomeIcon icon={faVideo} className='text-warning me-3'/>Media Player</h4>
        <p style={{textAlign:'justify'}} className='mt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim cum rerum nobis cupiditate perferendis quaerat sit, ab dicta eaque quo ipsam officiis quis corrupti earum? Perspiciatis commodi quisquam maiores reiciendis?</p>
       </div>
       <div className="col-md-1"></div>
       <div className="col-md-2 ">
        <h4>Links</h4>
        <Link to={'/'}><p className='mt-3'>Landing Page</p></Link>
        <Link to={'home'}><p>Home Page</p></Link>
        <Link to={'/watchhistory'}> <p>Watch History Page</p></Link>
       </div>

       <div className="col-md-2">
        <h4>Guides</h4>
       <p className='mt-3'>React</p>
       <p>React Bootstarp</p>
       <p>Bootstrap</p>
       </div>
       
       <div className="col-md-3">
        <h3>Contacts</h3>
        <div className="d-flex mt-3">
          <input type="text" placeholder='email id' className='form-control' />
          <button className='btn btn-warning ms-3'>Subscirbe</button>
        </div>

        <div className='d-flex justify-content-between mt-4'>
        <FontAwesomeIcon icon={faInstagram} size='2xl' />
        <FontAwesomeIcon icon={faFacebook} size='2xl' />
        <FontAwesomeIcon icon={faTwitter} size='2xl' />
        <FontAwesomeIcon icon={faLinkedin} size='2xl' />
        </div>
       </div>
    </div>
  )
}

export default Footer