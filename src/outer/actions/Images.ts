import {FETCH_ALL_IMAGE, UPLOAD_ONE_IMAGE} from './Types';
import ImageClient from "../interfaces/clients/ImageClient";
import {AxiosResponse} from "axios/index";
import Content from "../../inner/models/value_objects/responses/Content";
import ImageEntity from "../../inner/models/entities/ImageEntity";
import CreateOneImageRequest from "../../inner/models/value_objects/requests/CreateOneImageRequest";

const fetchAllImage = () => (dispatch: any) => {
  ImageClient
    .readAll()
    .then((response: AxiosResponse<Content<ImageEntity[]>>) => {
      const content: Content<ImageEntity[]> = response.data;
      dispatch({type: FETCH_ALL_IMAGE, payload: content.data});
    });
};

const uploadOneImage = (request: CreateOneImageRequest) => (dispatch: any) => {
  ImageClient
    .createOne(request)
    .then((response: AxiosResponse<Content<ImageEntity>>) => {
      const content: Content<ImageEntity> = response.data;
      dispatch({type: UPLOAD_ONE_IMAGE, payload: content.data});
    });
};

export {
  fetchAllImage,
  uploadOneImage
};