import React, { Fragment, useEffect, useState } from "react";
import { TbUpload } from "react-icons/tb";
import {
   Button,
   Card,
   Progress,
   CardBody,
   ListGroup,
   ListGroupItem,
} from "reactstrap";
import { useDropzone } from "react-dropzone";
import { FileText, X } from "react-feather";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RegisterUserAsync, handleChange } from "../../../redux/slices/auth/registerSlice";
import { uploadFiles } from "../../../utility/uploaders";

const Upload = () => {
   const [files, setFiles] = useState([]);

   const { t } = useTranslation();
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { proceeded, accountData, personalData } = useSelector((state) => state.register);

   useEffect(() => {
      if (!proceeded) navigate("/register/account-details");
   }, []);

   console.log('files: ', files)

   const { getRootProps, getInputProps } = useDropzone({
      onDrop: (acceptedFiles) => {
         setFiles([
            ...files,
            ...acceptedFiles.map((file) => Object.assign(file)),
         ]);
      },
   });

   const renderFilePreview = (file) => {
      if (file.type.startsWith("image")) {
         return (
            <img
               className="rounded"
               alt={file.name}
               src={URL.createObjectURL(file)}
               height="28"
               width="28"
            />
         );
      } else {
         return <FileText size="28" />;
      }
   };

   const handleRemoveFile = (file) => {
      const uploadedFiles = files;
      const filtered = uploadedFiles.filter((i) => i.name !== file.name);
      setFiles([...filtered]);
   };

   const renderFileSize = (size) => {
      if (Math.round(size / 100) / 10 > 1000) {
         return `${(Math.round(size / 100) / 10000).toFixed(1)} mb`;
      } else {
         return `${(Math.round(size / 100) / 10).toFixed(1)} kb`;
      }
   };

   const fileList = files.map((file, index) => (
      <ListGroupItem
         key={`${file.name}-${index}`}
         className="d-flex align-items-center justify-content-between"
      >
         <div className="file-details d-flex align-items-center">
            <div className="file-preview me-1">{renderFilePreview(file)}</div>
            <div>
               <p className="file-name mb-0">{file.name}</p>
               <p className="file-size mb-0">{renderFileSize(file.size)}</p>
            </div>
         </div>
         <Button
            color="danger"
            outline
            size="sm"
            className="btn-icon"
            onClick={() => handleRemoveFile(file)}
         >
            <X size={14} />
         </Button>
      </ListGroupItem>
   ));

   const handleRemoveAllFiles = () => {
      setFiles([]);
   };

   const handleSubmit = async() => {
      console.log('sadgsadgsadgs')
      const myFiles = await uploadFiles(files);
      console.log('rendered files: ', myFiles)
      const res = dispatch(RegisterUserAsync([{...accountData, ...personalData}, {files: myFiles}]))
      if(res.status) {
         dispatch(handleChange())
         // navigate('/verify-email');
      } 
   }

   return (
      <div className="py-1 mt-3">
         <div>
            <div>
               <CardBody>
                  <div {...getRootProps({ className: "dropzone" })}>
                     <input {...getInputProps()} />
                     <div
                        className=" py-5"
                        style={{
                           borderStyle: "dashed",
                           borderRadius: "10px",
                           color: "#F2EDEC",
                           height: "250px",
                        }}
                     >
                        <div className="gap-1 p-2 w-100 text-center ">
                           <div className="d-flex justify-content-center">
                              <div className="bg-primary p-1 rounded ">
                                 <TbUpload className="text-white" size={30} />
                              </div>
                           </div>

                           <h5 className="upload_pdf_heading py-2 ">
                              {t("Drag and Drop here or click to upload")}
                           </h5>
                           <p className="pdf_upload_desc ">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor.
                           </p>
                        </div>
                     </div>
                  </div>
                  {files.length ? (
                     <Fragment>
                        <ListGroup className="my-2">{fileList}</ListGroup>
                        <div className="d-flex justify-content-end">
                           <Button
                              className="me-1"
                              color="danger"
                              outline
                              onClick={handleRemoveAllFiles}
                           >
                              {t("Remove All")}
                           </Button>
                        </div>
                     </Fragment>
                  ) : null}
               </CardBody>
               <div className="d-flex justify-content-between mt-3">
                  <div>
                     <button
                        type="button"
                        class="btn border border-primary text-primary"
                        onClick={() => navigate(-1)}
                     >
                        {t("Previous")}
                     </button>
                  </div>
                  <button class="btn btn-primary" onClick={handleSubmit}>
                     {t("Next")}
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Upload;
