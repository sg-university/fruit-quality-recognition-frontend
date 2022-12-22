import Axios, {AxiosResponse} from "axios";
import DetectionEntity from "../../../inner/models/entities/DetectionEntity";
import ClientConfiguration from "../../configurations/ClientConfiguration";
import Content from "../../../inner/models/value_objects/responses/Content";
import CreateOneDetectionRequest from "../../../inner/models/value_objects/requests/CreateOneDetectionRequest";

class DetectionClient {

  URL: string = ClientConfiguration.detectionServiceURL;

  readAll = (): Promise<AxiosResponse<Content<DetectionEntity[]>>> => {
    return Axios.get(`${this.URL}`);
  };

  readOneById = (id: string): Promise<AxiosResponse<Content<DetectionEntity>>> => {
    return Axios.get(`${this.URL}/${id}`);
  };

  createOne = (tutorial: CreateOneDetectionRequest): Promise<AxiosResponse<Content<DetectionEntity>>> => {
    return Axios.post(`${this.URL}`, tutorial);
  };

  createMany = (entities: CreateOneDetectionRequest[]): Promise<AxiosResponse<Content<DetectionEntity[]>>> => {
    return Axios.post(`${this.URL}/many`, entities);
  };

  updateOneById = (id: string, entity: DetectionEntity): Promise<AxiosResponse<Content<DetectionEntity>>> => {
    return Axios.put(`${this.URL}/${id}`, entity);
  };

  deleteOneById = (id: string): Promise<AxiosResponse<Content<DetectionEntity>>> => {
    return Axios.delete(`${this.URL}/${id}`);
  };

}

export default new DetectionClient();
