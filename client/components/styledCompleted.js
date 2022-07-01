import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";

function Completed(props) {
  return (
    <div>
      {/* <BrowserRouter> */}
      <Link to="/">back to app</Link>
      <Main2 />

      {/* <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  )
}


export default Completed
