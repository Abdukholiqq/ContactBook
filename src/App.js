import logo from "./logo.svg";
import "./App.css"; 
import Form from "./Components/Form";

function App() {
  return (
    <div className="App">
      <header className="d-flex justify-content-center  gap-5 bg-dark text-light p-5">       
        <h1>Contact Book</h1>
      </header>
      <Form></Form>
    </div>
  );
}

export default App;
