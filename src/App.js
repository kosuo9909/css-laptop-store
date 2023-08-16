import './App.css';
import MacBooks from './components/MacBooks';
import NavBar from './components/NavBar';
import RightSlidersPanel from './components/RightSlidersPanel';

function App() {
  return (
    <div className='app-wrapper'>
      <NavBar />
      <div className='main-aside-group'>
        <MacBooks />
        <RightSlidersPanel />
      </div>
    </div>
  );
}

export default App;
