import React, {Dispatch, useEffect} from 'react';
import DetectionEntity from "../../../../inner/models/entities/DetectionEntity";
import RelationshipUsecase from "../../../../inner/usecases/detection/RelationshipUseCase";
import RelationshipUseCase from "../../../../inner/usecases/detection/RelationshipUseCase";
import {deleteOneDetectionById, fetchAllDetection} from "../../../actions/Detections";
import {fetchAllImage} from "../../../actions/Images";
import {useDispatch, useSelector} from "react-redux";
import {HomePageState} from "../../../reducers/HomePageReducer";

const DetectionListComponent = (props: any) => {
  const dispatch: Dispatch<any> = useDispatch();
  const {
    detections,
    images
  }: HomePageState = useSelector((state: any) => state.homePageReducer);

  useEffect(() => {
    dispatch(fetchAllDetection());
    dispatch(fetchAllImage());
  }, []);

  const handleOnClickDelete = (entity: DetectionEntity) => {
    dispatch(deleteOneDetectionById(entity.id));
  };

  const handleOnClickDetail = (entity: DetectionEntity) => {
    //  show detail modal
  };

  const getTopOneFromResult = (result: string): string => {
    const data = JSON.parse(result);
    const sortedData = Object.entries(data[0])
      .sort((a: any, b: any): number => {
        return b[1] - a[1];
      });
    return JSON.stringify(sortedData[0]);
  };

  return (
    <div className="tutorial-list component">
      <table className="table">
        <thead>
        <tr>
          <th>Image</th>
          <th>File Name</th>
          <th>Result</th>
          <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {
          detections && detections.reverse().map((detection: DetectionEntity, index: number) => {
            return (<tr key={index}>
                <td>
                  <img className=""
                       src={
                         `data:image/jpeg;base64,${RelationshipUseCase.getOneImage(detection, images)?.file}`
                       }
                  />
                </td>
                <td>{RelationshipUsecase.getOneImage(detection, images)?.file_name}</td>
                <td>{getTopOneFromResult(detection.result)}</td>
                <td>
                  <div className="btn btn-info me-2" onClick={() => handleOnClickDetail(detection)}>
                    Detail
                  </div>
                  <div className="btn btn-danger" onClick={() => handleOnClickDelete(detection)}>
                    Delete
                  </div>
                </td>
              </tr>
            );
          })
        }
        </tbody>
      </table>
    </div>
  );
};

export default DetectionListComponent;