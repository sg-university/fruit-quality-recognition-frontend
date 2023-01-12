import RecognitionEntity from "../../models/entities/RecognitionEntity";
import ImageEntity from "../../models/entities/ImageEntity";

class RelationshipUseCase {
  getOneImage = (recognition: RecognitionEntity, images: ImageEntity[]): ImageEntity | undefined => {
    return images.find(image => image.id === recognition.image_id);
  };

}

export default new RelationshipUseCase();