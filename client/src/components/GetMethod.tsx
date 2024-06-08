import React, { useEffect, useState } from "react";

type Student = {
  id: number;
  name: string;
  dateOfBirth: string;
  email: string;
};

export default function GetMethod() {
  const [students, setStudents] = useState<Student[]>([]);
  const [typeSubmit, setTypeSubmit] = useState<string>("add");
  const [inputValue, setInputValue] = useState<string>("");

  const [student, setStudent] = useState<Student>({
    id: Math.ceil(Math.random() * 1000000),
    name: "",
    dateOfBirth: "",
    email: "",
  });

  const loadData = () => {
    // Khi sử dụng fetch mà không định nghĩa HTTP request thì mặc định nó
    // sẽ là GET
    fetch(`http://localhost:8080/students?name_like=${inputValue}`)
      .then((response: Response) => response.json()) // Bước ép kiểu dữ liệu
      .then((data: Student[]) => setStudents(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    loadData();
  }, [inputValue]);

  /**
   * Hàm xóa thông tin một sinh viên theo id
   * @param id Id của sinh viên cần xóa
   */
  const handleDelete = (id: number) => {
    // Gọi API xóa
    fetch(`http://localhost:8080/students/${id}`, {
      method: "DELETE",
    })
      .then((response: Response) => {
        // Kiểm tra response trả về để thực hiện các logic tiếp theo
        if (response.ok) {
          // Load lại trang
          loadData();
          // Đóng modal xác nhận xóa
        }
      })
      .catch((error) => console.log(error));
  };

  // Hàm lấy giá trị trong Form
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Lấy ra name và value trong input
    const { name, value } = e.target;

    // Cập nhật lại state cho student
    setStudent({
      ...student,
      [name]: value,
    });
  };

  // Reset giá trị trong form
  const reset = () => {
    setStudent({
      id: Math.ceil(Math.random() * 1000000),
      name: "",
      dateOfBirth: "",
      email: "",
    });
  };

  // Hàm submit hàm
  const handleSubmit = (e: React.FormEvent) => {
    // Ngăn chặn hành vi load lại trang
    e.preventDefault();

    // 1. Validate dữ liệu

    // 2. Nếu valiadate ok thì Gửi dữ liệu lên server
    // Nếu typeSubmit là add sẽ thêm mới dữ liệu
    if (typeSubmit === "add") {
      fetch("http://localhost:8080/students", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(student),
      })
        .then((response: Response) => {
          if (response.ok) {
            // Đóng form

            // Load lại dữ liệu
            loadData();

            // Reset giá trị trị trong form
            reset();
          }
        })
        .catch((error) => console.log(error));
    } else {
      // Nếu typeSubmit là update sẽ tiến hành cập nhật dữ liệu
      fetch(`http://localhost:8080/students/${student.id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(student),
      }).then((response: Response) => {
        if (response.ok) {
          // Đóng form

          // Reset form
          reset();

          // Load lại dữ liệu
          loadData();

          // Cập nhật lại cho form
          setTypeSubmit("add");
        }
      });
    }

    // 2.1 Nếu gửi thành công: Đóng form, reset giá trị, load lại dữ liệu

    // 2.2. Nếu thất bại sẽ báo lỗi cho người dùng
  };

  // Hàm lấy thông tin chi tiết một bản ghi theo id
  const handleGetInfo = (id: number) => {
    // Cập nhật lại typeSubmit
    setTypeSubmit("update");

    // Gọi API lấy thông tin chi tiết sinh viên
    fetch(`http://localhost:8080/students/${id}`)
      .then((response: Response) => response.json()) // Bước ép kiểu dữ liệu
      .then((data: Student) => setStudent(data))
      .catch((error) => console.log(error));
  };

  // Hàm cập nhật dữ liệu

  return (
    <>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
      />{" "}
      <br />
      <div style={{ display: "flex", gap: 30 }}>
        <table border={1} style={{ width: "50%" }}>
          <thead>
            <tr>
              <th>STT</th>
              <th>Name</th>
              <th>DateOfBirth</th>
              <th>Email</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student: Student, index: number) => (
              <tr>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.dateOfBirth}</td>
                <td>{student.email}</td>
                <td>
                  <button onClick={() => handleGetInfo(student.id)}>Sửa</button>
                  <button onClick={() => handleDelete(student.id)}>Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <form onSubmit={handleSubmit}>
          <h3>Form thêm mới</h3>
          <div>
            <label htmlFor="">Name</label>
            <input
              value={student.name}
              onChange={handleChange}
              name="name"
              type="text"
            />
          </div>
          <br></br>
          <div>
            <label htmlFor="">Date of birth</label>
            <input
              value={student.dateOfBirth}
              onChange={handleChange}
              name="dateOfBirth"
              type="date"
            />
          </div>
          <br></br>
          <div>
            <label htmlFor="">Email</label>
            <input
              value={student.email}
              onChange={handleChange}
              name="email"
              type="text"
            />
          </div>
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
