import {DELETE_ONE_DETECTION_BY_ID, DETECT_ONE_IMAGE, FETCH_ALL_DETECTION, UPLOAD_ONE_IMAGE} from './Types';
import DetectionClient from "../interfaces/clients/DetectionClient";
import {AxiosResponse} from "axios/index";
import Content from "../../inner/models/value_objects/responses/Content";
import DetectionEntity from "../../inner/models/entities/DetectionEntity";
import CreateOneDetectionRequest from "../../inner/models/value_objects/requests/CreateOneDetectionRequest";
import CreateOneImageRequest from "../../inner/models/value_objects/requests/CreateOneImageRequest";
import ImageClient from "../interfaces/clients/ImageClient";
import ImageEntity from "../../inner/models/entities/ImageEntity";

const fetchAllDetection = () => (dispatch: any) => {
  DetectionClient
    .readAll()
    .then((response: AxiosResponse<Content<DetectionEntity[]>>) => {
      const content: Content<DetectionEntity[]> = response.data;
      dispatch({type: FETCH_ALL_DETECTION, payload: content.data});
    });
};

const deleteOneDetectionById = (id: string) => (dispatch: any) => {
  DetectionClient
    .deleteOneById(id)
    .then(() => {
      dispatch({type: DELETE_ONE_DETECTION_BY_ID, payload: id});
    });
};

const detectOneImage = (request: CreateOneImageRequest) => (dispatch: any) => {
  ImageClient
    .createOne(request)
    .then((response: AxiosResponse<Content<ImageEntity>>,) => {
      const content: Content<ImageEntity> = response.data;
      dispatch({type: UPLOAD_ONE_IMAGE, payload: content.data});

      const request = new CreateOneDetectionRequest(content.data.id);
      DetectionClient
        .createOne(request)
        .then((response: AxiosResponse<Content<DetectionEntity>>) => {
          const content: Content<DetectionEntity> = response.data;
          dispatch({type: DETECT_ONE_IMAGE, payload: content.data});
        });
    });
};

export {
  fetchAllDetection,
  deleteOneDetectionById,
  detectOneImage
};