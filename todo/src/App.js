import { BrowserRouter, Route } from "react-router-dom";
import Achieve from "./components/Achieve";
import Active from "./components/Active";
import AllTodo from "./components/AllTodo";
import Header from "./components/Header";
import Completed from "./components/Completed";
import TodoModal from "./components/TodoModal";
import TodoMenus from "./components/TodoMenus";

function App() {
  return (
    <div className="App">
      <Header /><br />
      <TodoModal /><br />

      <BrowserRouter>
        <TodoMenus />
        <Route path="/" exact component={AllTodo} />
        <Route path="/active" exact component={Active} />
        <Route path="/completed" exact component={Completed} />
        <Route path="/acheive" exact component={Achieve} />
      </BrowserRouter>

    </div>
  );
}

export default App;
