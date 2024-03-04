import { useState } from "react";
import "./input.css";

/* type InputSearchProps {
    state:()=> void
  }
 */
export default function InputSearch() {
  return (
    <input
      className="inputField"
      type="text"
      placeholder="search"
      /* onChange={(e) => setState(e.target.value)} */
    />
  );
}
