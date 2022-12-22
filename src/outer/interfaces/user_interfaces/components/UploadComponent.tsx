import React, {Dispatch, useState} from 'react';
import {useDispatch} from "react-redux";
import CreateOneImageRequest from "../../../../inner/models/value_objects/requests/CreateOneImageRequest";
import {detectManyImage} from "../../../actions/Detections";
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

  const handleOnClickUpload = async () => {
    const request: CreateOneImageRequest[] = await Promise.all(
      files.map(async (file: File) => new CreateOneImageRequest(file.name, await resizeFile(file)))
    );
    dispatch(detectManyImage(request));
  };

  return (
    <div className="upload component">
      <input multiple type="file" accept="image/*" onChange={handleOnChangeFile}/>
      <div className="btn btn-success my-3" onClick={() => handleOnClickUpload()}>Upload</div>
    </div>
  );
};

export default UploadComponent;