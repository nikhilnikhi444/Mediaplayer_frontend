import React, { useEffect, useState } from 'react'
import {Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllCategoryApi, getUploadVideoApi, updateCategoryApi } from '../services/allAPI'
import Category from './Category'

function View({videoUploadStatus,setdragOutVideoStatus}) {
  // js code
  // state to hold videos from backend

  const [video,setVideo] = useState([])

  const [deleteVideoStatus,setDeleteVideoStatus] = useState(false)

  const getvideo = async() =>{
      const response = await getUploadVideoApi()

    setVideo(response.data)
  }
  
  console.log(video);

  useEffect(()=>{
    getvideo()
    setDeleteVideoStatus(false)
  },[videoUploadStatus,deleteVideoStatus])


  const Dragover =(e)=>{
    e.preventDefault()
  }

  const videoDrop = async(e)=>{
    const {categoryId,videoId} =JSON.parse(e.dataTransfer.getData("sharedData"))
    console.log(categoryId,videoId);

    // to get all categories from backend

    const {data} = await getAllCategoryApi()
    console.log(data);

    // get category which have same category id
    let selectedCategory =data.find((item)=>item.id==categoryId)

    let result = selectedCategory.allVideo.filter((item)=>item.id!=videoId)
    
    let reqBody = {
      Category: selectedCategory.Category,
      allVideo: result,
      id:categoryId
    }


    // update the category at the backend

    await updateCategoryApi(categoryId,reqBody)

    setdragOutVideoStatus(true)

  }

  
  

  return (
    <>
    <Row droppable="true" onDragOver={(e)=>Dragover(e)} onDrop={(e)=>videoDrop(e)}>
        {video?.length>0?
        video?.map((item)=>(
         <Col sm={12} md={6} lg={4} xl={3}>
          <VideoCard displayVideo={item} setDeleteVideoStatus={setDeleteVideoStatus}/>
         </Col>
         ))
          
         :
          <h5 className='text-warning mt-5'>No Video Uploaded Yet...</h5>}
    </Row> 
    </>
  )
}

export default View