import React from "react";

const User = props => {
  return (
    <React.Fragment>
      <tr>
        <td>{props.data.firstName}</td>
        <td>{props.data.lastName}</td>
        <td>{props.data.campus}</td>
        <td>{props.data.role}</td>
        {props.data.linkedin ? (
          <td>
            {" "}
            <a href={props.data.linkedin}>LinkedIn</a>
          </td>
        ) : (
          <td></td>
        )}
      </tr>
    </React.Fragment>
  );
};

export default User;
