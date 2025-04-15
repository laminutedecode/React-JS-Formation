// npm i react-query axios
import { ReactQueryDevtools } from 'react-query/devtools';

import './App.css'

function App() {


  return (
    <>
     <h1>Hello</h1>
     <ReactQueryDevtools initialIsOpen={false} />
     <MyComposant />
    </>
  )
}

export default App
