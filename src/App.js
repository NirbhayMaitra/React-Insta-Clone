import logo from "./logo.svg";
import "./App.css";
import AppRouter from "./routers/AppRouter";
import 'bootstrap/dist/css/bootstrap.min.css';
import PostContext from "./contexts/PostContext";

function App() {
  return (
    <PostContext>
  <div className="app-container">
    <AppRouter />
  </div>;
  </PostContext>
  )
}

export default App;
