import React,{useState} from 'react'
interface User{
    name:string;
    email:string;
    id:1,
}
export default function Input() {
    const [user,setUser] = useState<User>({
        name:'',
        email:'',
        id:1,
    });
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        let name = e.target.name;
        let value = e.target.value;
        setUser({...user,[name]:value});
    }
    console.log('giá trị name:',user);
  return (
    <div>
        <label htmlFor="">Use Name: </label>
        <input type="text" 
        onChange={handleChange}
        name='name'
        />
        <br />
        <label htmlFor="">Email:</label>
        <input type="text"
        onChange={handleChange}
        name='email'
        />
    </div>
  )
}
