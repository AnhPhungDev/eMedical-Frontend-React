import { useState } from 'react';
import NavBar from './components/NavBar';
import CapPhatToaThuoc from './sections/CapPhatToaThuoc';
import DanhSachToaThuocDaDuyet from './sections/DanhSachToaThuocDaDuyet';

const App = () => {
  const [activeTab, setActiveTab] = useState('danhSach');

  const renderContent = () => {
    switch (activeTab) {
      case 'capPhat':
        return <CapPhatToaThuoc />;
      case 'danhSach':
        return <DanhSachToaThuocDaDuyet />;
      default:
        return (
          <div className="app-shell__placeholder">
            e-Medical — Hệ thống Quản lý Y tế
          </div>
        );
    }
  };

  return (
    <div className="app-shell">
      <div className="app-shell__content">{renderContent()}</div>
      <NavBar activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default App;
