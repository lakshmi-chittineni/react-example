// import logo from './logo.svg';
import "./App.css";

function App() {
  return (
    <div className="App">
      <form>
        <div>
        <input type="text" placeholder="enter your name" />
        </div>
        <div>    
           <input type="number" placeholder="enter your mobile number" />
       </div>
       <div>
        <input type="email" placeholder="enter your email" />
        </div>
        <div>
        <input type="password" placeholder="password" />
        </div>
        <div>
        <button type="submit" >submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
