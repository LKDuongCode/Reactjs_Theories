import React from 'react'
import Form from './components/Form'

export default function App() {
  return (
    <>
    <h2>Các kĩ thuật làm việc với form!</h2>
    {/* 
        2 kĩ thuật chính:
          1. controlled.
          2.uncontrolled (hook useRef)
          3. dùng thư viên formirk (đọc thêm).
        _________________________________________________
        controlled
        trong form sẽ làm việc với:
        1.ô input.
        2. text area
        3. select- option.
    */}
    <Form></Form>
    </>
  )
}
