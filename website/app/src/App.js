import { BrowserRouter, Routes, Route } from "react-router-dom";
import Characters from './pages/Characters';
import History from './pages/History';
import Home from './pages/Home';
import News from './pages/News';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/news" exact element={<News/>} />
        <Route path="/characters" exact element={<Characters/>} />
        <Route path="/history" element={<History/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;