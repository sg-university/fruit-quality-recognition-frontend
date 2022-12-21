import DetectionListComponent from "../components/DetectionListComponent";
import UploadComponent from "../components/UploadComponent";
import "./styles/HomePageStyle.scss";

const HomePage = () => {
  return (
    <div className="home page m-4">
      <div className="title mb-4">
        <h1>
          Fruit Quality Detection
        </h1>
        <text>
          Recognition System to detect the quality of six fruits, namely apple, banana, guava, lime, orange, and
          pomegranate.
        </text>
      </div>

      <div className="process mb-4">
        <h2>
          Uploads
        </h2>
        <UploadComponent/>
      </div>

      <div className="detection">
        <h2>
          Detections
        </h2>
        <DetectionListComponent/>
      </div>
    </div>
  );
};

export default HomePage;