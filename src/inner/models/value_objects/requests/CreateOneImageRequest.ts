class CreateOneImageRequest {
  file_name: string;
  file: string;

  constructor(file_name: string, file: string) {
    this.file_name = file_name;
    this.file = file;
  }
}

export default CreateOneImageRequest;