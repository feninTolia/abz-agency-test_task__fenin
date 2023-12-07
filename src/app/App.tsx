import './App.css';
import Home from '../pages/Home';
import Header from '../widgets/Header/Header';

function App() {
  return (
    <>
      <Header />
      <div className="root-layout">
        <Home />
      </div>
    </>
  );
}

export default App;
