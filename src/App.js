import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Todo from "./components/todo";
import Projects from "./components/pages/projects";
import Tasks from "./components/pages/tasks";
import Calendar from "./components/pages/calendar";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Todo /> */}
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/" element={<Todo />} />

        {/* <Route path="/tasks">
          <Tasks />
        </Route>
        <Route path="/calendar">
          <Calendar />
        </Route>
        <Route path="/">
          <Todo />
        </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
