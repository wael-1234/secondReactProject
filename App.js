import logo from './logo.svg';
import './App.css';
import image from'./imageInSrc.png';
import './style.css';

function App() {
    return (
             <div>
             <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
                 <h1 className="title red">WaelBen Abderrahmen</h1>
                 <br />
                 <img style={{width:'25%',height:'25%'}} src={image} />
                 <br />
                 <img width={'25%'} height={'25%'} src={"imageInPublic.png"}/>
                 </div>
                   <video width={'25%'} height={'25%'} controls>
                   <source src="myVideo.mp4" type="video/mp4" />
                   </video>
                 </div>
               
            );
}


export default App;
