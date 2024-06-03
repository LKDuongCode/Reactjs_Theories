import { useState } from "react"


export default function HoverEffect() {
    let [hover,setHover] = useState<boolean>(false);
    let dropDown = (dropDownStatus: React.MouseEvent) =>{
        return dropDownStatus? true :false;
    }
  return (
    <div>
        <button onMouseEnter={dropDown}>Hover Me</button>
    </div>
  )
}
