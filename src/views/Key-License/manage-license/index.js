


import { Fragment, useState } from "react";
import { Progress } from "reactstrap";
import { CiCircleAlert } from "react-icons/ci";

// ** Third Party Components
import Select from 'react-select'
import Cleave from 'cleave.js/react'
import { useForm, Controller } from 'react-hook-form'
import 'cleave.js/dist/addons/cleave-phone.us'
import { useDropzone } from 'react-dropzone'
import { FileText, X, DownloadCloud } from 'react-feather'

import avatar from '../../../assets/images/kyc-process/15.png'
import {CgSoftwareUpload} from "react-icons/cg"

// ** Utils
import { selectThemeColors } from '@utils'

import {
  Row,
  Col,
  Form,
  Card,
  Input,
  Label,
  Button,
  CardBody,
  CardTitle,
  CardHeader,
  FormFeedback,
  Badge,
  Alert,
  Table,
  ListGroupItem,
  ListGroup
} from "reactstrap";
import { useTranslation } from "react-i18next";




const License = () =>{

  const {t} = useTranslation();
    const LicenseData = [
        {
    
        name: "Name",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        action : "Request for update",
    
    },
    {
    
        name: "Expiry",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        action : "Request for update",
    
    },
    {
    
        name: "Users Capacity",
        details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        action : "Request for update",
    
    },
    
    ]

    const [files, setFiles] = useState([])

    const { getRootProps, getInputProps } = useDropzone({
      onDrop: acceptedFiles => {
        setFiles([...files, ...acceptedFiles.map(file => Object.assign(file))])
      }
    })
    const renderFilePreview = file => {
      if (file.type.startsWith('image')) {
        return <img className='rounded' alt={file.name} src={URL.createObjectURL(file)} height='28' width='28' />
      } else {
        return <FileText size='28' />
      }
    }
  
    const handleRemoveFile = file => {
      const uploadedFiles = files
      const filtered = uploadedFiles.filter(i => i.name !== file.name)
      setFiles([...filtered])
    }
  
    const renderFileSize = size => {
      if (Math.round(size / 100) / 10 > 1000) {
        return `${(Math.round(size / 100) / 10000).toFixed(1)} mb`
      } else {
        return `${(Math.round(size / 100) / 10).toFixed(1)} kb`
      }
    }
  
    const onSubmit = data => console.log(data);
    // ** Hooks
    const defaultValues = {
      lastName: '',
      firstName: ''
    }
    const {
      control,
      setError,
      handleSubmit,
      formState: { errors }
    } = useForm({ defaultValues })
  
    
  
    const fileList = files.map((file, index) => (
      <ListGroupItem key={`${file.name}-${index}`} className='d-flex align-items-center justify-content-between'>
        <div className='file-details d-flex align-items-center'>
          <div className='file-preview me-1'>{renderFilePreview(file)}</div>
          <div>
            <p className='file-name mb-0'>{file.name}</p>
            <p className='file-size mb-0'>{renderFileSize(file.size)}</p>
          </div>
        </div>
        <Button color='danger' outline size='sm' className='btn-icon' onClick={() => handleRemoveFile(file)}>
          <X size={14} />
        </Button>
      </ListGroupItem>
    ))
  
  
    const handleRemoveAllFiles = () => {
      setFiles([])
    }


    return(

<Fragment>

<Card>
        <CardTitle className="m-2 " tag="h4" >
        {t("License Details")}
        </CardTitle>
        <Table responsive>
          <thead style={{color: "rgba(51, 48, 60, 0.87)"}}>
            <tr>
              <th>{t("ACTION")}</th>
              <th>{t("DETAILS")}</th>
              <th> {t("ACTION")}</th>
            </tr>
          </thead>
          <tbody>
          {LicenseData.map(({name, details , action}) => (          
              <tr>
           <td>{name}</td>
           
          
           <td>{details}</td>
        
         
            <td>{action}</td>
         

                </tr>
                ))}
               

          </tbody>
        </Table>
       
      </Card>

      <Card>     
         <div>   
        <div className='py-2 my-25'>  
     
                <h5 style={{marginLeft: "15px", fontSize: "20px"}}> {t("Upload License")}</h5>
        </div>   
        <CardBody>
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <div className='text-center py-5 rounded-3' style={{border: '1px dashed rgba(51, 48, 60, 0.12) '}}>
          {/* <div className='d-flex align-items-center justify-content-center flex-column border dashed py-5'> */}
          
            <CgSoftwareUpload size={30} className='bg-primary text-white border rounded-2'/>
            <h5 className="my-1" style={{color: "rgba(77, 75, 85, 0.6)"}}>{t("Drop files here or click to upload")}</h5>
            <p className='text-secondary'>
              {t("Drop files here or click")}{' '}
              <a href='/' onClick={e => e.preventDefault()}>
                {t("browse")}
              </a>{' '}
              {t("thorough your machine")}
            </p>
          </div>
          {/* </div> */}
        </div>
        {files.length ? (
          <Fragment>
            <ListGroup className='my-2'>{fileList}</ListGroup>
            <div className='d-flex justify-content-end'>
              <Button className='me-1' color='danger' outline onClick={handleRemoveAllFiles}>
                Remove All
              </Button>
              <Button color='primary'>Upload Files</Button>
            </div>
          </Fragment>
        ) : null}
      </CardBody>
      {/* <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
           <div className=' ' style={{ borderStyle:"dashed", borderRadius:"10px", color: "#F2EDEC", height: "250px",  margin: "30px"}}>
    <div  style={{paddingLeft: "50%", paddingTop:"45px", color:"grey"}} >
             <div className='border border-light' style={{borderRadius: "5px", width: "50px", height: "45px" ,paddingTop: "5px",paddingLeft:"10px", backgroundColor: "rgb(234, 234, 234)"}}>  <TbUpload className='text-secondary'  size={30}/> </div>
              
              
               
     </div>
     <h2 style={{color: "#33303CDE", paddingLeft: "37%", paddingTop: "30px"}}>Drop files here or click to upload.</h2>
     </div>
     
        </div> */}
     </div>
     </Card>
</Fragment>

    )
}


export default License