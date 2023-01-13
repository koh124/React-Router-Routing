import React from "react";
import { Link } from "react-router-dom";

const Props = ({is_admin, user}) => {
  return (
    <>
      <h1>Props{is_admin === 'true' ? '\nyou are ' + user : ''}</h1>
      <Link to="/archives"><button class="btn btn-danger">Archives</button></Link>
    </>
  );
}

export default Props;
