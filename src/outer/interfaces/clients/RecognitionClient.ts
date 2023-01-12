import Axios, {AxiosResponse} from "axios";
import RecognitionEntity from "../../../inner/models/entities/RecognitionEntity";
import ClientConfiguration from "../../configurations/ClientConfiguration";
import Content from "../../../inner/models/value_objects/responses/Content";
import CreateOneRecognitionRequest from "../../../inner/models/value_objects/requests/CreateOneRecognitionRequest";

class RecognitionClient {

  URL: string = ClientConfiguration.recognitionServiceURL;

  readAll = (): Promise<AxiosResponse<Content<RecognitionEntity[]>>> => {
    return Axios.get(`${this.URL}`);
  };

  readOneById = (id: string): Promise<AxiosResponse<Content<RecognitionEntity>>> => {
    return Axios.get(`${this.URL}/${id}`);
  };

  createOne = (tutorial: CreateOneRecognitionRequest): Promise<AxiosResponse<Content<RecognitionEntity>>> => {
    return Axios.post(`${this.URL}`, tutorial);
  };

  createMany = (entities: CreateOneRecognitionRequest[]): Promise<AxiosResponse<Content<RecognitionEntity[]>>> => {
    return Axios.post(`${this.URL}/many`, entities);
  };

  updateOneById = (id: string, entity: RecognitionEntity): Promise<AxiosResponse<Content<RecognitionEntity>>> => {
    return Axios.put(`${this.URL}/${id}`, entity);
  };

  deleteOneById = (id: string): Promise<AxiosResponse<Content<RecognitionEntity>>> => {
    return Axios.delete(`${this.URL}/${id}`);
  };

}

export default new RecognitionClient();
