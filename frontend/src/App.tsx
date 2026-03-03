import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Memos from './pages/Memos';
import Bills from './pages/Bills';
import Diaries from './pages/Diaries';
import Photos from './pages/Photos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="memos" element={<Memos />} />
          <Route path="bills" element={<Bills />} />
          <Route path="diaries" element={<Diaries />} />
          <Route path="photos" element={<Photos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
