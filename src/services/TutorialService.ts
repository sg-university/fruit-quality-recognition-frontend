import Axios, {AxiosResponse} from "axios";
import {Tutorial} from "../models/Tutorial";

class TutorialService {

  URL = process.env.REACT_APP_API_URL_TUTORIAL

  readAll(): Promise<AxiosResponse<Tutorial[]>> {
    return Axios.get(`${this.URL}`)
  }

  readOneById(id: string): Promise<AxiosResponse<Tutorial>> {
    return Axios.get(`${this.URL}/${id}`)
  }

  createOne(tutorial: Tutorial): Promise<AxiosResponse<Tutorial>> {
    return Axios.post(`${this.URL}`, tutorial)
  }

  updateOneById(id: string, entity: Tutorial): Promise<AxiosResponse<Tutorial>> {
    return Axios.put(`${this.URL}/${id}`, entity)
  }

  deleteOneById(id: string): Promise<AxiosResponse<Tutorial>> {
    return Axios.delete(`${this.URL}/${id}`)
  }

}

