import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Journaling from './Journaling/Journaling';
import Productivity from './Productivity/Productivity';
import StressRed from './StressRed/StressRed';
import Error from './Error';
import Header from './Header';
import './App.css';

const App = () => {
  return (
    <div class="wrapper">
      <BrowserRouter>
      < Header />
        <Routes>
          <Route index element={<Journaling />} />
          <Route path="/home" element={<Journaling />} />
          <Route path="/productivity" element={<Productivity />} />
          <Route path="/stress-reduction" element={<StressRed />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
