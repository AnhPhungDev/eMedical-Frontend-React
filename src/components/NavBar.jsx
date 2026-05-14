const TABS = [
  { id: 'home', label: <><i className="ri-home-8-line"></i> e-Medical</>, druoc: false },
  { id: 'danhSach', label: 'Dược | Danh sách toa thuốc đã duyệt', druoc: true },
  { id: 'capPhat', label: 'Dược | Cấp Phát Toa Thuốc', druoc: true },
];

const NavBar = ({ activeTab, onTabChange }) => {
  return (
    <div className="navbar">
      {TABS.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <div
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={[
              'navbar__tab',
              isActive && 'navbar__tab--active',
              tab.druoc && 'navbar__tab--druoc',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            {tab.label}
          </div>
        );
      })}
    </div>
  );
};

export default NavBar;
