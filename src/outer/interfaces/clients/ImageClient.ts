import Axios, {AxiosResponse} from "axios";
import ImageEntity from "../../../inner/models/entities/ImageEntity";
import ClientConfiguration from "../../configurations/ClientConfiguration";
import Content from "../../../inner/models/value_objects/responses/Content";
import CreateOneImageRequest from "../../../inner/models/value_objects/requests/CreateOneImageRequest";

class ImageClient {

  URL: string = ClientConfiguration.imageServiceURL;

  readAll = (): Promise<AxiosResponse<Content<ImageEntity[]>>> => {
    return Axios.get(`${this.URL}`);
  };

  readOneById = (id: string): Promise<AxiosResponse<Content<ImageEntity>>> => {
    return Axios.get(`${this.URL}/${id}`);
  };

  createOne = (tutorial: CreateOneImageRequest): Promise<AxiosResponse<Content<ImageEntity>>> => {
    return Axios.post(`${this.URL}`, tutorial);
  };

  createMany = (entities: CreateOneImageRequest[]): Promise<AxiosResponse<Content<ImageEntity[]>>> => {
    return Axios.post(`${this.URL}/many`, entities);
  };

  updateOneById = (id: string, entity: ImageEntity): Promise<AxiosResponse<Content<ImageEntity>>> => {
    return Axios.put(`${this.URL}/${id}`, entity);
  };

  deleteOneById = (id: string): Promise<AxiosResponse<Content<ImageEntity>>> => {
    return Axios.delete(`${this.URL}/${id}`);
  };

}

export default new ImageClient();
