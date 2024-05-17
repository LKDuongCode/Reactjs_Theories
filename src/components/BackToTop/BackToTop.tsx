import React, { useEffect, useState } from "react";
import "./BacktoTop.css";
export default function BackToTop() {
  //state to show and hide
  let [statusBtn, setStatusBtn] = useState<boolean>(false);
  let handleScroll = () => {
    if (window.scrollY > 200) {
      setStatusBtn(true);
    } else {
      setStatusBtn(false);
    }
  };
  //// using in JS:
  // window.addEventListener('scroll',()=>{
  //     console.log(window.scrollY);
  //     if(window.scrollY > 200){
  //       setStatusBtn(true);
  //     }
  //     else{
  //       setStatusBtn(false);
  //     }
  // })

  // using useEffect
  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  },[]);
  // In useEffect, when init event from client, require remove it when cpn unmount

  let handleBackTop = ()=>{
    // Go to top page when clicked button
    window.scrollTo({
      top:0,
      behavior:"smooth",
    })
  }
  return (
    <div>{statusBtn && <button onClick={handleBackTop} className="btn-backTop">Back</button>}</div>
  );
}
