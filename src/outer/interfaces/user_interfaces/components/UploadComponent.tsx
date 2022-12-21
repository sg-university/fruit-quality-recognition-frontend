import React, {Dispatch, useState} from 'react';
import {uploadOneImage} from "../../../actions/Images";
import {useDispatch} from "react-redux";
import CreateOneImageRequest from "../../../../inner/models/value_objects/requests/CreateOneImageRequest";
import {detectOneImage} from "../../../actions/Detections";
import Resizer from "react-image-file-resizer";

const UploadComponent = (props: any) => {
  const dispatch: Dispatch<any> = useDispatch();
  const [files, setFiles] = useState<File[]>([]);

  const handleOnChangeFile = (e: any) => {
    if (e.target.files) {
      setFiles([...e.target.files]);
    }
  };

  const resizeFile = (file: File) => new Promise<string>(resolve => {
    Resizer.imageFileResizer(file, 224, 224, 'JPEG', 100, 0,
      (uri: any) => {
        resolve(uri.replace(/^.*,/, ''));
      }, 'base64');
  });

  const handleOnClickUpload = () => {
    files.forEach(async file => {
      const request: CreateOneImageRequest = new CreateOneImageRequest(
        file.name,
        await resizeFile(file)
      );
      dispatch(detectOneImage(request));
    });
  };

  return (
    <div className="upload component">
      <input multiple type="file" accept="image/*" onChange={handleOnChangeFile}/>
      <div className="btn btn-success" onClick={() => handleOnClickUpload()}>Upload</div>
    </div>
  );
};

export default UploadComponent;