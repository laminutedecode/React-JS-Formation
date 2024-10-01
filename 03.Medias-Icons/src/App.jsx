
import './App.css'
import img1 from './assets/image-01.jpg'
import { IoMenu } from "react-icons/io5";
import Video from './assets/video-01.mp4'

function App() {


  return (
    <>
      <img src={img1} style={{width: "150px"}} alt="" />
      <IoMenu />
    <video src={Video} controls loop width={500}></video>
    </>
  )
}

export default App
