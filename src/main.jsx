import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './styles/variables.css';
import './styles/global.css';
import './styles/components/Button.css';
import './styles/components/DateFilter.css';
import './styles/components/NavBar.css';
import './styles/sections/CapPhatToaThuoc.css';
import './styles/sections/DanhSachToaThuocDaDuyet.css';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
