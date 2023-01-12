import RecognitionEntity from "../../inner/models/entities/RecognitionEntity";

import {DELETE_ONE_RECOGNITION_BY_ID, DETECT_MANY_IMAGE, FETCH_ALL_RECOGNITION, FETCH_ALL_IMAGE,} from "../actions/Types";
import ImageEntity from "../../inner/models/entities/ImageEntity";

type HomePageState = {
  recognitions: RecognitionEntity[],
  images: ImageEntity[]
}

const initialState: HomePageState = {
  recognitions: [],
  images: []
};

const homePageReducer = (state: HomePageState = initialState, action: any) => {
  const {type, payload} = action;
  switch (type) {
    case FETCH_ALL_IMAGE:
      return {...state, images: payload};
    case FETCH_ALL_RECOGNITION:
      return {...state, recognitions: payload};
    case DELETE_ONE_RECOGNITION_BY_ID:
      return {...state, recognitions: state.recognitions.filter((recognition: RecognitionEntity) => recognition.id !== payload)};
    case DETECT_MANY_IMAGE:
      return {
        ...state,
        recognitions: [...state.recognitions, ...payload.recognitionData],
        images: [...state.images, ...payload.imageData]
      };
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
