import DetectionEntity from "../../models/entities/DetectionEntity";
import ImageEntity from "../../models/entities/ImageEntity";

class RelationshipUseCase {
  getOneImage = (detection: DetectionEntity, images: ImageEntity[]): ImageEntity | undefined => {
    return images.find(image => image.id === detection.image_id);
  };

}

export default new RelationshipUseCase();