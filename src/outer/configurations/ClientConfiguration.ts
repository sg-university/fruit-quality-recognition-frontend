class ClientConfiguration {
  imageServiceURL: string;
  recognitionServiceURL: string;

  constructor() {
    this.imageServiceURL = process.env.REACT_APP_API_URL_IMAGE || "";
    this.recognitionServiceURL = process.env.REACT_APP_API_URL_RECOGNITION || "";

    if (this.imageServiceURL === "") {
      throw new Error("Image service URL is not set");
    }

    if (this.recognitionServiceURL === "") {
      throw new Error("Recognition service URL is not set");
    }
  }
}

export default new ClientConfiguration();