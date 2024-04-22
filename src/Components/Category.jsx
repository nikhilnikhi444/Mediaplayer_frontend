import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Col,Row } from 'react-bootstrap';
import VideoCard from './VideoCard';
import { addCategoryApi, deleteCategoryApi, updateCategoryApi } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAllCategoryApi } from '../services/allAPI';
import { getAVideo } from '../services/allAPI';


function Category({dragOutVideoStatus, setdragOutVideoStatus}) {
  const [show, setShow] = useState(false);
  const [CategoryName,setCategoryName] = useState("")
  const [allcategory,setAllCategory] = useState([])
  const [addCategoryStatus,setaddCategoryStatus] = useState(false)
  const [deleteCategoryStatus,setDeleteCategoryStatus] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(CategoryName);

  // function to add category
  const handleAddCategory = async()=>{
    let reqBody ={
      Category : CategoryName,
      allVideo:[]
    }

    if(allcategory.length==0){
      const result = await addCategoryApi(reqBody)
      console.log(result);
      if(result.status>=200 && result.status<300){
        toast.success('Category Added successfully')
        setCategoryName("")
        handleClose()
        setaddCategoryStatus(true)
      }else{
        toast.error('Something went wrong')
      }
    }else{
     const existingCategory= allcategory.find(item=>item.Category==CategoryName)
     if(existingCategory){
       toast.warning('Category Already Exists')
       setCategoryName("")
       handleClose()
     }else{
      const result = await addCategoryApi(reqBody)
      console.log(result);
      if(result.status>=200 && result.status<300){
        toast.success('Category Added successfully')
        setCategoryName("")
        handleClose()
        setaddCategoryStatus(true)
      }else{
        toast.error('Something went wrong')
      }
     }
    }
   /*  const result = await addCategoryApi(reqBody)
    console.log(result);
    if(result.status>=200 && result.status<300){
      toast.success('Category Added successfully')
      setCategoryName("")
      handleClose()
      setaddCategoryStatus(true)
    }else{
      toast.error('Something went wrong')
    } */
  } 
  
  // function to get all categories
 const getAllcatgory = async()=>{
  const result = await getAllCategoryApi()

  setAllCategory(result.data);
  
 }
 // function to delete category

 const handleDelete = async(id)=>{
  const result = await deleteCategoryApi(id)
  console.log(result);
  if(result.status>=200 && result.status<300){
     setDeleteCategoryStatus(true)
  }else{
    toast.error('Something went wrong')
  }
 }

 console.log(allcategory);
useEffect(()=>{
  getAllcatgory()
  setaddCategoryStatus(false)
  setDeleteCategoryStatus(false)
  setdragOutVideoStatus(false)
},[addCategoryStatus,deleteCategoryStatus,dragOutVideoStatus])


// function to prevent data lose

const dragover=(e)=>{
  e.preventDefault()
}

// function to drop

const videoDrop = async(e,categoryId)=>{
  console.log('inside the drop function');
  console.log(`category id is ${categoryId}`);
  const videoId = e.dataTransfer.getData("videoId")
  console.log(videoId);

// api to get the details of the video dragged

  const {data}= await getAVideo(videoId)
  console.log(data);

  const selectedCategory = allcategory.find(item=>item.id==categoryId)
  
  if(selectedCategory.allVideo.find(item=>item.id==data.id)){
    toast.error('Video Already Exists')
  }else{
    selectedCategory.allVideo.push(data)
  }
  await updateCategoryApi(categoryId,selectedCategory)
  getAllcatgory()
  
}

//  function to send the details of card to view

 const dragStart =(e,categoryId,videoId)=>{
  console.log(categoryId);
  console.log(videoId);
  let sharedData ={
    categoryId,
    videoId
  }
  e.dataTransfer.setData("sharedData",JSON.stringify(sharedData) )
 }
 
  return (
   <>
      <div className='d-flex justify-content-center align-items-center mt-5 mt-md-0 mb-5'>
        <button className='btn btn-warning w-100'    onClick={handleShow}>Add New Category</button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><FontAwesomeIcon className='text-warning' icon={faPen} />Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='my-3 border rounded p-4' >
            <label htmlFor="cname" className='mb-3'>Category Name</label>
            <input id='cname' type="text" placeholder='Enter Category name' className='form-control' onChange={(e)=>setCategoryName(e.target.value)}/>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleAddCategory}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

         
     {allcategory?.length > 0?
     allcategory?.map((cat)=>(
      <div className="border border-secondary w-100 p-3 rounded mt-3" droppable="true" onDragOver={(e)=>dragover(e)} onDrop={(e)=>videoDrop(e,cat.id)}>
      <div className="d-flex justify-content-between align-items-center">
          <p>{cat.Category}</p> 
          <button className='btn btn-danger' onClick={(id)=>handleDelete(cat.id)}><FontAwesomeIcon icon={faTrash} /></button>
      </div>
      <Row>
      {cat.allVideo?.length>0?
      cat.allVideo?.map((card)=>(
      <Col sm={12} draggable onDragStart={(e)=>dragStart(e,cat.id,card.id)}> 
        <VideoCard displayVideo={card} isPresent={true}/> 
      </Col>)):null}
     </Row>
     </div>
     ))

    :<p className='text-warning mt-5'>No Category Added Yet..!</p>}
    <ToastContainer theme='colored' position='top-center' autoClose={2000} />
   </>
  )
}

export default Category