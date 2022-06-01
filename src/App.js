import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleRunTraining}>Run training</button>
      </header>
    </div>
  );
}

const handleRunTraining = (event) => {
  console.log('Run training');
  
}
export default App;
