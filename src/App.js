import Home from "./components/content/Home.jsx";
import Nav from "./components/navigation/Nav.jsx";

export default function App() {
  return (
    <div className="flex h-screen bg-bggame">
      <Nav />
      <Home />
    </div>
  );
}
