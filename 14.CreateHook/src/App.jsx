//Site: https://usehooks.com/ et https://usehooks-ts.com/

import './App.css';
import { useIncrement } from './hooks/useIncrement';
import useSize from './hooks/useSize'
import MyComposant from './components/MyComposant'

function App() {
  
  const {count, increment, decrement} = useIncrement({
    initial: 0,
    max: 10,
    min: 0
  })

  const widthSize = useSize();
  if(widthSize > 880){  
  console.log("Descktop");
  }else {
    console.log('Mobil and Tablet')
}


  return (
    <div className="App">
     <div>
      <p>Compteur: {count}</p>
      <button onClick={increment}>+</button>
      <button  onClick={decrement}>-</button>
      </div>
     <p>La width du navigateur est de :  {widthSize}px</p>
      <MyComposant />
     
    </div>
  );

};
export default App;

