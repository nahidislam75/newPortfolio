import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nevber from './Nevber/Nevber';
import Blog from './Blog/Blog';
import Poster from './Poster/Poster';

function App() {
  return (
    <div className='backColor'>
      <Nevber></Nevber>
      <Poster></Poster>
      <Blog></Blog>
    </div>
  );
}

export default App;
