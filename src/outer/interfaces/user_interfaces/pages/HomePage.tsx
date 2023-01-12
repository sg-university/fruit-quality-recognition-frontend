import RecognitionListComponent from "../components/RecognitionListComponent";
import UploadComponent from "../components/UploadComponent";
import "./styles/HomePageStyle.scss";

const HomePage = () => {
  return (
    <div className="home page m-4">
      <div className="title mb-4">
        <h1>
          Fruit Quality Recognition
        </h1>
        <text>
          Recognition System to recognize the quality of six fruits, namely apple, banana, guava, lime, orange, and
          pomegranate.
        </text>
      </div>

      <div className="process mb-4">
        <h2>
          Uploads
        </h2>
        <UploadComponent/>
      </div>

      <div className="recognition">
        <h2>
          Recognitions
        </h2>
        <RecognitionListComponent/>
      </div>
    </div>
  );
};

export default HomePage;