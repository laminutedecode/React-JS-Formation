import {useState} from 'react'


export function useIncrement({initial = 0, max = Infinity, min = -Infinity }){
  const [state, setState] = useState(initial);
  const increment = ()=> setState(val => val < max ? val + 1 : val)
  const decrement = ()=> setState(val => val > min ? val + -1 : val)
  return {
    count: state,
    increment: increment,
    decrement: decrement
  }
}