import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { uploadVideoApi } from '../services/allAPI';

function Add({setVideoUploadStatus}) {
    const [show, setShow] = useState(false);
    // state to store video details
    const [video,setVideo]=useState({
      caption:"",
      imageUrl:"",
      embedLink:""
    })

    console.log(video);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getEmbedLink =(e)=>{
      const text =e.target.value
      // console.log(text);


      if(text.startsWith('https://youtu.be/')){
        const link = `https://www.youtube.com/embed/${text.slice(17,28)}`
        setVideo({...video,embedLink:link})
      }
      else{
        const link =`https://www.youtube.com/embed/${text.slice(-11)}`
        setVideo({...video,embedLink:link})
      }
    }

    // function to upload the values details
    const handleUpload =async()=>{
      const {caption,imageUrl,embedLink} =video

      if(!caption || !imageUrl || !embedLink){
        toast.info('please fill the form completely')
      }
      else{

        const response = await uploadVideoApi(video)
        console.log(response);
         if(response.status>=200 && response.status<300){
           toast.success('Video Uploaded successfully')
           setVideoUploadStatus(response.data)
           setVideo({
            caption:"",
            imageUrl:"",
            embedLink:""
           })
           handleClose()
         }else{
          console.log(response);
          toast.error('Something went wrong')
         }
        
         
      }
    }
  
  return (
  <>
        <div>
            <h5>Upload New Video <FontAwesomeIcon onClick={handleShow} icon={faCloudArrowUp} className='ms-2' /></h5>
        </div>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><FontAwesomeIcon icon={faFilm} className='me-2 text-warning' />Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p>Please Fill The Following Details</p>
            <form className='mt-3 border p-3 rounded'>
                <div className='mb-3'>
                    <input type="text" className='form-control ' placeholder='Enter Video Caption'  onChange={(e)=>setVideo({...video,caption:e.target.value})} />
                </div>
                <div className='mb-3'>
                    <input type="text" className='form-control ' placeholder='Enter Image Url' onChange={(e)=>setVideo({...video,imageUrl:e.target.value})} />
                </div>
                <div className='mb-3'>
                    <input type="text" className='form-control ' placeholder='Enter Youtube Video Link' onChange={(e)=>getEmbedLink(e)}  />
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer> 
      </Modal>

      <ToastContainer theme='colored' position='top-center' autoClose={2000} />
  </>
  )
}

export default Add


/* 
https://youtu.be/xnzA2TnOMIU?si=8Nx4eSCRbneeBnBp */

/* 
<iframe width="706" height="397" src="https://www.youtube.com/embed/xnzA2TnOMIU" title="Periyone Song - Malayalam | The GoatLife | Aadujeevitham | A.R. Rahman |Jithin Raj | Rafeeq Ahammed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */