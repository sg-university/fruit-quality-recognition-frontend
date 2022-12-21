class ImageEntity {
  id: string;
  file_name: string;
  file: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(id: string, fileName: string, file: string, created_at: Date, updated_at: Date) {
    this.id = id;
    this.file_name = fileName;
    this.file = file;
    this.createdAt = created_at;
    this.updatedAt = updated_at;
  }
}

export default ImageEntity;