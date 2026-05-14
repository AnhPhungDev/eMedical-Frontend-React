import { useState } from 'react';
import DateFilter from '../components/DateFilter';
import { danhSachToaThuocDaDuyet } from '../constants';

const DanhSachToaThuocDaDuyet = () => {
  const [fromDate, setFromDate] = useState('2026-05-13');
  const [toDate, setToDate] = useState('2026-05-13');
  const [rows, setRows] = useState(danhSachToaThuocDaDuyet);
  const [checked, setChecked] = useState({});
  const [dongY, setDongY] = useState({});

  const handleHuy = (id) => {
    setRows((prev) => prev.filter((r) => r.id !== id));
  };

  const toggleChecked = (id, field) => {
    if (field === 'capPhat') {
      setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
    } else {
      setDongY((prev) => ({ ...prev, [id]: !prev[id] }));
    }
  };

  return (
    <div className="danh-sach">
      <DateFilter
        label="Từ ngày :"
        fromDate={fromDate}
        toDate={toDate}
        onFromChange={setFromDate}
        onToChange={setToDate}
      />

      <div className="danh-sach__table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th className="center">Cấp phát</th>
              <th className="center">Đồng Ý</th>
              <th>Đối tượng</th>
              <th>Mã bệnh nhân</th>
              <th>Họ và Tên</th>
              <th className="center">Năm sinh</th>
              <th className="center">Giới tính</th>
              <th>Địa chỉ</th>
              <th>User duyệt toa thuốc</th>
              <th>Phòng khám</th>
              <th className="center">Hủy</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="danh-sach__row">
                <td className="center">
                  <input
                    type="checkbox"
                    checked={!!checked[row.id]}
                    onChange={() => toggleChecked(row.id, 'capPhat')}
                  />
                </td>
                <td className="center">
                  <input
                    type="checkbox"
                    checked={!!dongY[row.id]}
                    onChange={() => toggleChecked(row.id, 'dongY')}
                  />
                </td>
                <td>{row.doiTuong}</td>
                <td>{row.maBN}</td>
                <td>{row.hoTen}</td>
                <td className="center">{row.namSinh}</td>
                <td className="center">{row.gioiTinh}</td>
                <td className="danh-sach__address-cell">{row.diaChi}</td>
                <td>{row.userDuyet}</td>
                <td>{row.phongKham}</td>
                <td className="center">
                  <button
                    title="Hủy"
                    onClick={() => handleHuy(row.id)}
                    className="danh-sach__cancel-btn"
                  >
                    ✕
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="danh-sach__footer">{rows.length}</div>
    </div>
  );
};

export default DanhSachToaThuocDaDuyet;
