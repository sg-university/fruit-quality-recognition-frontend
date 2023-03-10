import RecognitionEntity from "../../models/entities/RecognitionEntity";
import ImageEntity from "../../models/entities/ImageEntity";

class RelationshipUseCase {
  getManyRecognitions = (image: ImageEntity, recognitions: RecognitionEntity[]): RecognitionEntity[] | undefined => {
    return recognitions.filter(recognition => recognition.image_id === image.id);
  };
}

export default new RelationshipUseCase();