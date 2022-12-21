class ClientConfiguration {
  imageServiceURL: string;
  detectionServiceURL: string;

  constructor() {
    this.imageServiceURL = process.env.REACT_APP_API_URL_IMAGE || "";
    this.detectionServiceURL = process.env.REACT_APP_API_URL_DETECTION || "";

    if (this.imageServiceURL === "") {
      throw new Error("Image service URL is not set");
    }

    if (this.detectionServiceURL === "") {
      throw new Error("Detection service URL is not set");
    }
  }
}

export default new ClientConfiguration();