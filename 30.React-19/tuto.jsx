import React from "react";
import {useFormStatus} from 'react-dom'

export default function Button() {

  const {pending} = useFormStatus()

  return <button disabled={pending} type="submit" >Submit</button>;
}
