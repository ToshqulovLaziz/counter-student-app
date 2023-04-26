import React, {Fragment} from "react";

const Row = (props) => {
    return (
      <Fragment>
        <th scope="row">{props.student.id}</th>
        <td>
          {props.student?.name} {props.student?.surname}
        </td>
        <td>{props.student?.date}</td>
        <td>{props.student?.select}</td>
        <td>
          <button
            className="btn btn-success"
            type="button"
            onClick={() => props.updateStudent(props.index)}
          >
            Edit
          </button>
        </td>
        <td>
          <button
            className="btn btn-danger"
            type="button"
            onClick={() => props.deleteStudent(props.student.id)}
          >
            Delete
          </button>
        </td>
      </Fragment>
    );
    }
    
    export default Row;