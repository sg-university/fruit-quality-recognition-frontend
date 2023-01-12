import {DELETE_ONE_RECOGNITION_BY_ID, DETECT_MANY_IMAGE, FETCH_ALL_RECOGNITION, UPLOAD_MANY_IMAGE} from './Types';
import RecognitionClient from "../interfaces/clients/RecognitionClient";
import {AxiosResponse} from "axios/index";
import Content from "../../inner/models/value_objects/responses/Content";
import RecognitionEntity from "../../inner/models/entities/RecognitionEntity";
import CreateOneRecognitionRequest from "../../inner/models/value_objects/requests/CreateOneRecognitionRequest";
import CreateOneImageRequest from "../../inner/models/value_objects/requests/CreateOneImageRequest";
import ImageClient from "../interfaces/clients/ImageClient";
import ImageEntity from "../../inner/models/entities/ImageEntity";

const fetchAllRecognition = () => (dispatch: any) => {
  RecognitionClient
    .readAll()
    .then((response: AxiosResponse<Content<RecognitionEntity[]>>) => {
      const content: Content<RecognitionEntity[]> = response.data;
      dispatch({type: FETCH_ALL_RECOGNITION, payload: content.data});
    });
};

const deleteOneRecognitionById = (id: string) => (dispatch: any) => {
  RecognitionClient
    .deleteOneById(id)
    .then(() => {
      dispatch({type: DELETE_ONE_RECOGNITION_BY_ID, payload: id});
    });
};

const recognizeManyImage = (request: CreateOneImageRequest[]) => (dispatch: any) => {
  ImageClient
    .createMany(request)
    .then((response: AxiosResponse<Content<ImageEntity[]>>) => {
      const contentImage: Content<ImageEntity[]> = response.data;
      dispatch({type: UPLOAD_MANY_IMAGE, payload: contentImage.data});

      const request: CreateOneRecognitionRequest[] = contentImage.data.map(
        (image: ImageEntity) => new CreateOneRecognitionRequest(image.id)
      );
      RecognitionClient
        .createMany(request)
        .then((response: AxiosResponse<Content<RecognitionEntity[]>>) => {
          const contentRecognition: Content<RecognitionEntity[]> = response.data;
          dispatch({
            type: DETECT_MANY_IMAGE,
            payload: {recognitionData: contentRecognition.data, imageData: contentImage.data}
          });
        });
    });
};

export {
  fetchAllRecognition,
  deleteOneRecognitionById,
  recognizeManyImage
};