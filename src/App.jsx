import "./components/data.jsx";
import Button from "./components/Button.jsx";
import "./App.css";
import buttons from "./components/data.jsx";

function App() {
  let items = buttons.map(button => 
    <Button key={button.id} title={button.title} class={button.className}></Button>
  )
  return (
    <>
      <div className="container">
        <div className="display">
          <div className="solving">1 * 10</div>
          <div className="output"> = 10</div>
        </div>
        <div className="calculations">
          {items}
        </div>
      </div>
    </>
  );
}

export default App;
