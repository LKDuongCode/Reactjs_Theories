
import "./header.css"
export default function Header() {
  // tạo đối tượng để style
  const styleInline: any = {
    textAlign:"center",
    color:"white"
  }
  // render ra một giá trị
  const name:string = 'Nguyen Van A';

  return (
    <>
    <header className="header" style={styleInline}>Header</header>
    <h3>Họ và tên: {name}</h3>
    </>
  )
}
