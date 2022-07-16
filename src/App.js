import "./App.css";
import FileUpload from "../src/components/FileUpload";
const App = () => (
  <div className="container mt-4">
    <h4 className="diplay-4 text-center mb-4">
      <i className="fab fa-react"></i>React File upload
    </h4>

    <FileUpload />
  </div>
);

export default App;
