import React, { useEffect,useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { deleteVideoHistoryApi, getAllVideoHistoryApi} from '../services/allAPI'

function Watchhistory() {
 const [videoHistory,setVideoHistory] = useState([])
 const [deleteVideoStatus,setdeleteVideoStatus] = useState(false)
  
  // function to delete a video history
 const handleDelete = async (id) =>{
  const response  =await deleteVideoHistoryApi(id)
  console.log(response);
  setdeleteVideoStatus(true)
 }

// function to get all videos from backend
const getAllVideos = async()=>{
  const response = await getAllVideoHistoryApi()
  
  setVideoHistory(response.data)
}

console.log(videoHistory);

 useEffect(()=>{
  getAllVideos()
  setdeleteVideoStatus(false)
 },[deleteVideoStatus])



  return (
    <>
    <div className="d-flex align-item-center mx-4 mb-5 mt-5">
      <h4>Watch History</h4>
     <Link to={'/home'}  style={{textDecoration:'none'}} className='ms-auto'> <h5 ><FontAwesomeIcon className='me-3'  icon={faArrowLeft} /><span id='back'>Back Home</span><FontAwesomeIcon icon={faHouse} /></h5></Link>
    </div>
     
     <div className='row mx-4 mt-5'>
      <div className="col-md-1"></div>
      <div className="col-md-10 p-4" style={{overflowX:'auto'}}>
       { videoHistory?.length>0?
       <table className='table table bordered'>
          <thead>
            <tr>
              <th>#</th>
              <th>CAPTION</th>
              <th>URL</th>
              <th>TIME STAMP</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
           {videoHistory?.map((item,index)=>(<tr>
              <td>{index+1}</td>
              <td>{item?.caption}</td>
              <td><a href={item?.url} target='_blank'>{item?.url}</a></td>
              <td>{item?.timeStamp}</td>
              <td><FontAwesomeIcon icon={faTrash} className='btn btn-danger' onClick={()=>handleDelete(item?.id)} /></td>
            </tr>))}
          </tbody>
        </table>: <p className='text-warning mt-5 fs-5'>watch history is clean...</p> }
      </div>
      <div className="col-md-1"></div>
     </div>

    </>
  )
}

export default Watchhistory