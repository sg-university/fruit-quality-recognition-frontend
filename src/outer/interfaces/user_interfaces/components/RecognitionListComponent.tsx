import React, {Dispatch, useEffect, useState} from 'react';
import RecognitionEntity from "../../../../inner/models/entities/RecognitionEntity";
import RelationshipUsecase from "../../../../inner/usecases/recognition/RelationshipUseCase";
import RelationshipUseCase from "../../../../inner/usecases/recognition/RelationshipUseCase";
import {deleteOneRecognitionById, fetchAllRecognition} from "../../../actions/Recognitions";
import {fetchAllImage} from "../../../actions/Images";
import {useDispatch, useSelector} from "react-redux";
import {HomePageState} from "../../../reducers/HomePageReducer";
import ModalComponent from "./ModalComponent";
import {Modal} from "react-bootstrap";

const RecognitionListComponent = (props: any) => {
  const dispatch: Dispatch<any> = useDispatch();
  const {
    recognitions,
    images
  }: HomePageState = useSelector((state: any) => state.homePageReducer);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentRecognition, setCurrentRecognition] = useState<RecognitionEntity | null>(null);

  useEffect(() => {
    dispatch(fetchAllRecognition());
    dispatch(fetchAllImage());
  }, []);

  const handleOnClickDelete = (entity: RecognitionEntity) => {
    dispatch(deleteOneRecognitionById(entity.id));
  };

  const handleOnClickDetail = (entity: RecognitionEntity) => {
    setIsModalOpen(true);
    setCurrentRecognition(entity);
    console.log(entity, isModalOpen);
  };

  const handleOnCloseModal = () => {
    setIsModalOpen(false);
  };

  const getListFromResult = (result: string): [string, any][] => {
    const data = JSON.parse(result);
    const sortedData = Object.entries(data[0])
      .sort((a: any, b: any): number => {
        return b[1] - a[1];
      });
    return sortedData;
  };

  const getTopNFromResult = (result: string, n: number): [string, number][] => {
    const resultList: [string, any][] = getListFromResult(result);
    const topN: [string, number][] = resultList.splice(0, n);
    return topN;
  };

  return (
    <div className="tutorial-list component">
      <ModalComponent show={isModalOpen} onHide={() => handleOnCloseModal()}>
        <Modal.Header>
          <h2>
            Detail
          </h2>
        </Modal.Header>
        <Modal.Body>
          <table className="table table-hover">
            <thead>
            <tr>
              <th scope="col">Label</th>
              <th scope="col">Confidence Score</th>
            </tr>
            </thead>
            <tbody>
            {
              currentRecognition && getListFromResult(currentRecognition.result).map((item: any, index: number) => {
                  return (
                    <tr key={index}>
                      <td>{item[0]}</td>
                      <td>{item[1]}</td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </Modal.Body>
      </ModalComponent>
      <table className="table table-hover">
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
          recognitions && recognitions.map((recognition: RecognitionEntity, index: number) => {
            return (<tr key={index}>
                <td>
                  <img className=""
                       src={
                         `data:image/jpeg;base64,${RelationshipUseCase.getOneImage(recognition, images)?.file}`
                       }
                  />
                </td>
                <td>{RelationshipUsecase.getOneImage(recognition, images)?.file_name}</td>
                <td>
                  <table className="table table-hover">
                    <thead>
                    <tr>
                      <th scope="col">Label</th>
                      <th scope="col">Confidence Score</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                      getTopNFromResult(recognition.result, 3).map((item: any, index: number) => {
                        return (
                          <tr key={index}>
                            <td>{item[0]}</td>
                            <td>{item[1]}</td>
                          </tr>
                        );
                      })
                    }
                    </tbody>
                  </table>
                </td>
                <td>
                  <div className="d-flex flex-column">
                    <div className="btn btn-info me-2" onClick={() => handleOnClickDetail(recognition)}>
                      Detail
                    </div>
                    <div className="btn btn-danger my-3" onClick={() => handleOnClickDelete(recognition)}>
                      Delete
                    </div>
                  </div>
                </td>
              </tr>
            );
          }).reverse()
        }
        </tbody>
      </table>
    </div>
  );
};

export default RecognitionListComponent;