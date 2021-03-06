import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (

    <div>
      <Link to="/"><p>Main</p></Link>
      <Link to="/article"><p>article</p></Link>
      <Link to="/write">write</Link>
      

    </div>
  );
}
export default Main;