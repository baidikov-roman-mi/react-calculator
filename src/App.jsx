import removeLogo from "../public/delete-icon.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="display">
          <div className="solving">12 + 1 - 1 * 10</div>
          <div className="output"> = 120</div>
        </div>
        <div className="calculations">
          <div className="clearAll">Ac</div>
          <div className="remove">
            <img src={removeLogo} alt="remove" />
          </div>
          <div className="divide">/</div>
          <div className="multiply">*</div>
          <div className="number">1</div>
          <div className="number">2</div>
          <div className="number">3</div>
          <div className="minus">-</div>
          <div className="number">4</div>
          <div className="number">5</div>
          <div className="number">6</div>
          <div className="plus">+</div>
          <div className="number">7</div>
          <div className="number">8</div>
          <div className="number">9</div>
          <div className="number">0</div>
          <div className="number">00</div>
          <div className="dot">.</div>
          <div className="equals">=</div>
        </div>
      </div>
    </>
  );
}

export default App;
