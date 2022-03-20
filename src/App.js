import './App.css';
import './component/App.css'
import { Route,BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import Main from './component/Main';
import Home from './component/Home';
import Tourism from './component/Tourism';
import Technology from './component/Technology';
import Fitness from './component/Fitness';
import Bollywood from './component/Bollywood';
import Food from './component/Food';
import { ArticleProvider } from './component/ArticleContext';
import Article from './component/Article';

function App() {
  return (
    <ArticleProvider>
    <div className="App">
      <Router>
        <Main/>
        <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="Category/Tourism" element={<Tourism/>}/>
          <Route path="Category/Fitness" element={<Fitness/>}/>
          <Route path="Category/Technology" element={<Technology/>}/>
          <Route path="Category/Bollywood" element={<Bollywood/>}/>
          <Route path="Category/Food" element={<Food/>}/>
          <Route path='/article/:ids' element={<Article />} />
        </Routes>
      </Router>
    </div>
    </ArticleProvider>
  );
}

export default App;