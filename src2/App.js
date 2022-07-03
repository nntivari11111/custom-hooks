
import './App.css';
import { TestComponents } from './components/TestComponents';
import { UseTimeout } from './Hooks/UseTimeout';

function App() {

const ready = UseTimeout();

  return (
    <div className="App">
     <h2>Timeout</h2>
     <h4>{ready ? "Ready" : "Not-Ready"}</h4>
     <TestComponents/>
    </div>
  );
}

export default App;
