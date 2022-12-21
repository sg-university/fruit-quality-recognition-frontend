class DetectionEntity {
  id: string;
  image_id: string;
  result: string;
  created_at: Date;
  updated_at: Date;

  constructor(id: string, image_id: string, result: string, created_at: Date, updated_at: Date) {
    this.id = id;
    this.image_id = image_id;
    this.result = result;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}

export default DetectionEntity;