import React, {Fragment} from "react";
import Row from "../Student-row";
const Student = () => {
    const [students,setStudents] = React.useState([]);
    const [selectedIndex,setSelectedIndex] = React.useState(-1);

    const addStudent = (evt) => {
        evt.preventDefault();

        const [user_name, sur_name, date, select] = evt.target.elements;

        const newStudent = {
            id: students.length + 1,
            name: user_name.value.trim(),
            surname: sur_name.value.trim(),
            date: date.value.trim(),
            select: select.value.trim(),
        }
        // console.log(newStudent);
        if (selectedIndex >= 0) {
          students[selectedIndex] = newStudent;
          setSelectedIndex(-1);
        } else {
          setStudents([...students, newStudent]);
        }
        evt.target.reset();
        user_name.focus();
    }
    const deleteStudent = (id) => {
      const fillterStudends = students.filter((student) => student.id !== id);
      setStudents([...fillterStudends])
    }
    const updateStudent = (index) => {
      // console.log(index);
      setSelectedIndex(index);
    };
    // console.log(students)
    return (
      <Fragment>
        <div className="container">
          <div className="col-12">
            <div className="d-flex justify-content-between">
              <div className="col-3 my-5 me-5">
                <div className="card">
                  <div className="card-header">
                    <h3 className="text-center">Add Student</h3>
                  </div>
                  <div className="card-body">
                    <form onSubmit={(evt) => addStudent(evt)}>
                      <input
                        className="form-control"
                        type="text"
                        name="user_name"
                        placeholder="Username"
                        defaultValue={students[selectedIndex]?.name}
                      />
                      <input
                        className="form-control my-3"
                        type="text"
                        name="sur_name"
                        placeholder="Surname"
                        defaultValue={students[selectedIndex]?.surname}
                      />
                      <input
                        className="form-control mb-3"
                        type="date"
                        name="date"
                        defaultValue={students[selectedIndex]?.date}
                      />
                      <select className="form-select mb-3" name="select">
                        <option
                          hidden
                          defaultValue={students[selectedIndex]?.select}
                        ></option>
                        <option value="grand">Grand</option>
                        <option value="kontrakt">Kontrakt</option>
                      </select>
                      <button className="btn btn-primary w-100" type="submit">
                        Add
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-9 my-5">
                <div className="card">
                  <div className="card-body">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">№</th>
                          <th scope="col">Ism Familiya</th>
                          <th scope="col">Tug'ilgan sana</th>
                          <th scope="col">O'qish turi</th>
                          <th scope="col">Amal</th>
                        </tr>
                      </thead>
                      <tbody>
                        {students.length > 0 &&
                          students.map((student, index) => (
                            <tr className="mb-3" key={index}>
                              <Row
                                student={student}
                                index={index}
                                deleteStudent={deleteStudent}
                                updateStudent={updateStudent}
                              />
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
}

export default Student;