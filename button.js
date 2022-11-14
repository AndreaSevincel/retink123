import React from 'react'

function clickMe() {
    alert('you clicked me!');
}

export default function button() {
  return (

    <div>
        <button onClick={clickMe}>
            Button
        </button>

    </div>


  )
}
