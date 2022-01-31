import './App.css';
import truck from './images/iconTruck.png';
import wolt from './images/wolt.png';
import linkedin from './images/linkedinW.png';
import github from './images/githubW.png';
import Form from './component/Form';


function App() {
  return (
    <div className="App">
       <div><img src={wolt} className="Wolt-logo" />
        <p className="title">Delivery Fee Calculator</p>
       </div>

      <div className="wrap">
        <img src={truck} className="App-logo" />

        <Form></Form>

        <h4 className="fee" id="fee"></h4>
      </div>

      <footer>
       <p>by Samir KAMAR</p>
       <a href="https://www.linkedin.com/in/samir-kamar"><img src={linkedin}  className="Wolt-logo" /></a> 
        <a href="https://github.com/k-samir"><img src={github}  className="Wolt-logo" /></a>
      </footer>
    </div>
  );
}

export default App;
