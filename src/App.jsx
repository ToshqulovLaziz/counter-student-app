import React, {Fragment} from "react";
import Counter from "./components/Counter";
import Student from "./components/Student";
import News from "./components/News";
const App = () => {
  return (
    <Fragment>
      <Counter/>
      <Student/>
      <News/>
    </Fragment>
  )
}

export default App;