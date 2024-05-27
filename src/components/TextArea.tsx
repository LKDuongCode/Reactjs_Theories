
import React, {useState} from 'react' 
export default function TextArea() {
    const [text,setText] = useState<string>('')
    const handleChange = (e:React.ChangeEvent<HTMLTextAreaElement>)=>{
        setText(e.target.value)
    }
    console.log(text);
  return (
    <div>
        <label htmlFor="">TextArea: </label>
        <textarea name="" id="" onChange={handleChange}>
            
        </textarea>
    </div>
  )
}
