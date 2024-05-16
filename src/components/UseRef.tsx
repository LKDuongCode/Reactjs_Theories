import React, { useEffect, useRef, useState } from 'react'

export default function UseRef() {
    const [count,setCount] = useState<number>(0);
    const useRef1 = useRef(0); // bên trong có current mặc định.
    let focusInput = useRef<HTMLInputElement>(null);
    console.log(useRef1);
    let index:number = 0;
    let handleClick = ()=>{
        index ++;
        setCount(count +1)
        useRef1.current = useRef1.current +1; //có tăng lên mặc dù bị re-render. 
    }
    console.log(' giá trị index', index);
    
    //focus vào ô input.
    useEffect(()=>{
        focusInput.current?.focus();
    },[])
  return (
    <div>
        {/* 
            useRef là một hook được cung cấp.
            Cách dùng : import và dùng.
            kết quả trả về của useRef là một đối tượng và trong đối tượng đó có 1 thuộc tính mặc định.
            công dụng :  1. không bị gán lại giá trị ban đầu khi re-render. (không tạo ra referentype)
                         2. tự động focus vào ô input khi vào trang, dùng ref kết hợp với useEffect. ref vào ô mình muốn
        */}
        <label htmlFor="">Your name: </label>
        <input ref = {focusInput} type="text" placeholder='Name...'/>
        <br />
        <label htmlFor="">Your email: </label>
        <input type="text" placeholder='Email...' />
        <button>Login</button>
        <br />
        <button onClick={handleClick}>Click</button>
    </div>
  )
}
