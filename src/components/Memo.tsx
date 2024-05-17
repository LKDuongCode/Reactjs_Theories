import React,{memo} from 'react'
interface Props {
  count:number;
  name:string;
  increase:Function;
}
function Memo(props:Props) {
  let {count} = props;
  let {name} = props;
  return (
    <div>
      {/* Memo  là gì?Và để làm gì?

      - Là HOC <higher order cpn> - hàm bậc cao trong js.
      - Trong cpn App, mỗi khi cpn re-render hoặc render lần đầu hoặc re-render thì các cpn con sẽ render
      và điều đó không cần thiết.
      ==> công dụng :
                    - Kiểm tra xem có props( giá trị truyền vào từ cha đến con) nào thay đổi hay không, nếu props thay đổi thì cpn sẽ render
                    nếu không thì không render. (bên App) ==> chỉ cần 1 props thay đổi thì cpn chứa props đó sẽ render theo 
                    chứ không phải tất cả. 

      */}
    </div>
  )
}
export default memo(Memo); //không cần được gọi lại trong App vì ko cần