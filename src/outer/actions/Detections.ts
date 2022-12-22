import {DELETE_ONE_DETECTION_BY_ID, DETECT_MANY_IMAGE, FETCH_ALL_DETECTION, UPLOAD_MANY_IMAGE} from './Types';
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

const detectManyImage = (request: CreateOneImageRequest[]) => (dispatch: any) => {
  ImageClient
    .createMany(request)
    .then((response: AxiosResponse<Content<ImageEntity[]>>) => {
      const contentImage: Content<ImageEntity[]> = response.data;
      dispatch({type: UPLOAD_MANY_IMAGE, payload: contentImage.data});

      const request: CreateOneDetectionRequest[] = contentImage.data.map(
        (image: ImageEntity) => new CreateOneDetectionRequest(image.id)
      );
      DetectionClient
        .createMany(request)
        .then((response: AxiosResponse<Content<DetectionEntity[]>>) => {
          const contentDetection: Content<DetectionEntity[]> = response.data;
          dispatch({
            type: DETECT_MANY_IMAGE,
            payload: {detectionData: contentDetection.data, imageData: contentImage.data}
          });
        });
    });
};

export {
  fetchAllDetection,
  deleteOneDetectionById,
  detectManyImage
};