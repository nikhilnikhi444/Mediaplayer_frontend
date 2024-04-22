import React, { useState } from 'react'
import Add from '../Components/Add'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import View from '../Components/View'
import Category from '../Components/Category'
import { Link } from 'react-router-dom'

function Home() {
  const [videoUploadStatus,setVideoUploadStatus] = useState({})
  const [dragOutVideoStatus,setdragOutVideoStatus]=useState(false)

  return (
    <>
    <div className='container my-5 d-flex'>
       <Add setVideoUploadStatus={setVideoUploadStatus}/>
      <Link to={'/watchhistory'} style={{textDecoration:'none'}}  className='ms-auto me-5'> <h5 ><span id='watch'>Watch history </span><FontAwesomeIcon icon={faClockRotateLeft} className='ms-2'/></h5></Link>
      
    </div>

    <div className="row mt-5 p-4">
      <div className="col-md-9">
        <h4>All Videos</h4>
        <View videoUploadStatus={videoUploadStatus} setdragOutVideoStatus={setdragOutVideoStatus}/>
      </div>
      <div className="col-md-3 px-4">
        <Category dragOutVideoStatus={dragOutVideoStatus} setdragOutVideoStatus={setdragOutVideoStatus}/>
      </div>
    </div>

    </>
  )
}

export default Home