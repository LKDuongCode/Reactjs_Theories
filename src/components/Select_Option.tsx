import React, { useState } from 'react'

export default function Select_Option() {
    const [sele,setSele] = useState<string>('');
    const handleChange = (e:React.ChangeEvent<HTMLSelectElement>)=>{
        setSele(e.target.value)
    }
    console.log(' giá trị được chọn : ', sele);
  return (
    <div>
        <select name="" id="" onChange={handleChange}>
            <option value="nam">Nam</option>   
            <option value="nữ">Nữ</option>
            <option selected value="khác">Khác</option>   
        </select>
    </div>
  )
}
