import { post } from "../Axios";

export const uploadFiles = async(files) => {
  console.log('files in func: ', files)
  const filesData = new FormData();
  files.forEach((file, index) => {
    filesData.append(`file${index}`, file);
    console.log('form data created for file1: ', file,index,FormData)
  });

  post('/uploads', files)
  post('/uploads', filesData)
  console.log('form data created for file: ', filesData, FormData)
  return filesData; 
}