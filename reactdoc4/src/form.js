import React from "react";
import ReactDOM from "react-dom";

console.log("forms");
let form = (
  <main><form action="">
    <label htmlFor="">name:<input type="text" name="name" /></label>
    <input type="submit" value="send" />
  </form></main>);

ReactDOM.render(form, document.getElementById("form"));
