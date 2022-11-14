import React from 'react'

export default function Notify() {
  return (
    <div>
    <form id='bname'>
      <label>
        <input type="text" id='inpbname' placeholder='Business name'/>
      </label>
      would like a bet invite to
      <label>
        <input type="text" id='inpemail' placeholder='@email Address'/>
      </label>
      when its ready!
    </form>
    </div>
  )
}

