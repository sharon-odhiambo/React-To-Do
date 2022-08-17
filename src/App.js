import './App.css';
import Header from './components/functionBased/Header';
import TodoContainer from './components/classBased/ToDoContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <TodoContainer />
    </div>
  );
}

export default App;
