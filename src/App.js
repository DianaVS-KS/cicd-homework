import logo from './logo.svg';
import './App.css';
import photo from './images/FotoCV.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={photo} className="cv-img" alt="Photo Diana"></img>
        <h1>
          Diana Ximena Villalvazo Salas
        </h1>
        <h3>Education</h3>
        <p><b>August 2019 - March 2020</b><br></br>
        Cloud Computing Diploma<br></br>
        Universidad Anáhuac del Sur (Online)</p>
        <p><b>August 2013 - May 2017</b><br></br>
        Bachelor Degree in Actuarial Mathematics<br></br>
        Universidad Autónoma de Yucatán</p>
        <h3>Professional Experience</h3>
        <p><b>Grupo Brisa del Caribe</b><br></br>
          Head of Business Intelligence</p>
        <p><b>IntegraQ</b><br></br>
          Software Developer</p>
        <p><b>IRStrat</b><br></br>
          IT Deputy Manager</p>
        <a
          className="App-link"
          href="https://dianavs-ks.github.io/Portfolio/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Full Resume
        </a>
      </header>
    </div>
  );
}

export default App;
