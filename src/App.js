import logo from './logo.svg';
import './App.css';
import Moive from'./images/image2.jpg';
import Song from'./audio/srcSong.mp3';
import video from './video/rrr.mp4';

function App() {
  return (
    <div className="App">
      <div className="mainDiv">
      <h1>Media</h1>

      <p className="mainHeading">***Media Images<br></br> Media Images can be store in 3 ways<br></br>1.Directly by img  address <br></br> 2.By storing in public folder <br></br> 3.by storing image in src folder</p>
      
      <div className="imageDiv">
      <h2>1.Directly by img  address</h2>
      <p>Directly copy image address link from goolge and paste in the Src Folder</p>
      <img className="imgPic" src="https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/vivah-et00001006-18-01-2021-03-02-34.jpg"></img>
      </div>
       
      <div className="imageDiv">
      <h2>2.By storing in public folder</h2>
      <p>for this create file folder in public folder  and save the image from google </p>
      <img className="imgPic" src="./images/image1.webp"></img>
      </div>

      <div className="imageDiv">
      <h2>3.by storing image in src folder</h2>
      <p>for this create file folder in src folder  and save the image from google for this we need to write import for this we need specify the name in import at starting and we need to use {}</p>
       <img  className="imgPic" src={Moive}></img>
      </div>

    </div>

    <div className="audioDiv">
    <h1>Media Audio</h1>

    <p className="mainHeading">***Medio Audio<br></br> Media Audio can be store in 3 ways<br></br>1.Directly by audio  address <br></br> 2.By storing in public folder <br></br> 3.by storing audio in src folder</p>

       <div className="imageDiv">
       <h2>1.Directly by audio address</h2>
       <p>Directly copy audio address link from goolge and paste in the Src Folder</p>
       <audio src="http://services.brninfotech.com/tws/media2/songs/war/jai jai.mp3" controls></audio>
        </div>
 
      <div className="imageDiv">
      <h2>2.By storing audio in public folder</h2>
      <p>for this create file folder in public folder  and save the audio from google </p>
      <audio src="./audio/song.mp3" controls></audio>
     </div>

      <div className="imageDiv">
      <h2>3.by storing audio in src folder</h2>
      <p>for this create file folder in src folder  and save the audio from google for this we need to write import for this we need specify the name in import at starting and we need to use {}</p>
     <audio src={Song} controls></audio>
      </div>
    </div>

    
    <div className="mainDiv">
    <h1>Media Video</h1>

    <p className="mainHeading">***Medio Audio<br></br> Media Audio can be store in 3 ways<br></br>1.Directly by audio  address <br></br> 2.By storing in public folder <br></br> 3.by storing audio in src folder</p>

       <div className="imageDiv">
       <h2>1.Directly by Video address</h2>
       <p>Directly copy Video address link from goolge and paste in the Src Folder</p>
       <video  class="videoDiv"  src="http://services.brninfotech.com/tws/media2/trailers/war.mp4" controls></video>
       </div>
 
      <div className="imageDiv">
      <h2>2.By storing audio in public folder</h2>
      <p>for this create file folder in public folder  and save the audio from google </p>
      <video  class="videoDiv" src="./video/Vivaah.mp4" controls></video>
     </div>

      <div className="imageDiv">
      <h2>3.by storing audio in src folder</h2>
      <p>for this create file folder in src folder  and save the audio from google for this we need to write import for this we need specify the name in import at starting and we need to use {}</p>
      <video class="videoDiv" src={video} controls></video>
      </div>
    </div>
    
  
      <p>Some examples of media</p>

      <div className="mainExampleDiv">
      <h3>Maharaja</h3>
      <div className="poster">
      <h4>Poster</h4>
      <img className="imgExample" src="./images/maharaja.webp"></img>
      </div>
         <div  className="paraExample">
         <h4 className="pExample" >Cast</h4>
         <p className="pExample">Vijay Sethupathi</p>
         <p className="pExample">Mamta Mohandas</p>
         <p className="pExample">Anurag Kashyap</p>
         <p className="pExample">Abhirami</p>
         <audio className="audioExample pexample" src="./audio/kilasa.mp3" controls></audio>
         </div>
      <video className="videoDiv2" src="./video/maharaja.mp4" controls></video>
      </div>

      <div className="mainExampleDiv">
      <h3>Maharaj</h3>
      <div className="poster">
      <h4>Poster</h4>
      <img className="imgExample" src="./images/maharaj.jpg"></img>
      </div>
         <div  className="paraExample">
         <h4 className="pExample" >Cast</h4>
         <p className="pExample">Junaid Khan</p>
         <p className="pExample">Jaideep Ahlawat</p>
         <p className="pExample">Shalini Pandey</p>
         <p className="pExample">Sharvari Wagah</p>
         <audio className="audioExample pexample" src="./audio/haanSong.mp3" controls></audio>
         <audio className="audioExample pexample" src="./audio/maharajaSong1.mp3" controls></audio>
         </div>
      <video className="videoDiv2" src="./video/maharajTrailer.mp4" controls></video>
      </div>
    </div>
  );
}

export default App;
