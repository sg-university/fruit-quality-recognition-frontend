import DetectionEntity from "../../models/entities/DetectionEntity";
import ImageEntity from "../../models/entities/ImageEntity";

class RelationshipUseCase {
  getManyDetections = (image: ImageEntity, detections: DetectionEntity[]): DetectionEntity[] | undefined => {
    return detections.filter(detection => detection.image_id === image.id);
  };
}

export default new RelationshipUseCase();