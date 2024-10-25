import React from 'react'

export default function ComponentRef({placeholder, ref}) {
  return (
    <input  ref={ref} placeholder={placeholder} type="text" />
  )
}
