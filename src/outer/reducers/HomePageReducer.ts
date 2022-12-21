import DetectionEntity from "../../inner/models/entities/DetectionEntity";

import {
  DELETE_ONE_DETECTION_BY_ID,
  DETECT_ONE_IMAGE,
  FETCH_ALL_DETECTION,
  FETCH_ALL_IMAGE,
  UPLOAD_ONE_IMAGE
} from "../actions/Types";
import ImageEntity from "../../inner/models/entities/ImageEntity";

type HomePageState = {
  detections: DetectionEntity[],
  images: ImageEntity[]
}

const initialState: HomePageState = {
  detections: [],
  images: []
};

const homePageReducer = (state: HomePageState = initialState, action: any) => {
  const {type, payload} = action;
  switch (type) {
    case FETCH_ALL_IMAGE:
      return {...state, images: payload};
    case UPLOAD_ONE_IMAGE:
      return {...state, images: [...state.images, payload]};

    case FETCH_ALL_DETECTION:
      return {...state, detections: payload};
    case DELETE_ONE_DETECTION_BY_ID:
      return {...state, detections: state.detections.filter((detection: DetectionEntity) => detection.id !== payload)};
    case DETECT_ONE_IMAGE:
      return {...state, detections: [...state.detections, payload]};
    default:
      return state;
  }
};

export {
  homePageReducer
};

export type {
  HomePageState
};
