import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Characters from "./components/characters/Characters";
import Episodes from "./components/episodes/Episodes";
import Locations from './components/locations/Locations';
import Navbar from "./components/Navbar/Navbar";
import Todo from "./components/todo/Todo";

const App = () => {
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Characters />} />
              <Route path="locations" element={<Locations />} />
              <Route path="episodes" element={<Episodes />} />
              <Route path="todo" element={<Todo />} />
            </Route>
          </Routes>
        </BrowserRouter>
      );
}

export default App;