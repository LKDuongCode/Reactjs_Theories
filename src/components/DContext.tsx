import React, { useContext } from 'react'
//nhận từ Usecontext
import {SetUseContext} from './UseContext'
export default function DContext() {
    const getData = useContext(SetUseContext);
  return (
    <div>DContext <br />
        <p>name : {getData}</p>
    </div>
  )
}
