import { useState } from 'react';
import Button from '../components/Button';
import '../styles/components/Button.css';
import {
  danhSachBenhNhanCapPhat,
  chiTietBenhNhan,
  chiTietToaThuoc,
} from '../constants';

const formatMoney = (n) => (n ? n.toLocaleString('vi-VN') : '');

const CapPhatToaThuoc = () => {
  const [fromDate, setFromDate] = useState('2026-05-13');
  const [toDate, setToDate] = useState('2026-05-13');
  const [status, setStatus] = useState('cho');
  const [search, setSearch] = useState('');
  const [selectedId, setSelectedId] = useState(2);
  const [selectedPrescId, setSelectedPrescId] = useState(null);

  const filtered = danhSachBenhNhanCapPhat.filter(
    (p) =>
      p.hoTen.toLowerCase().includes(search.toLowerCase()) ||
      p.maBN.includes(search)
  );

  const selectedPatient = chiTietBenhNhan;

  return (
    <div className="cap-phat">
      {/* Toolbar */}
      <div className="cap-phat__toolbar">
        <span className="label-inline">Ngày: </span>
        <input
          type="date"
          className="field-input field-input--date"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
        />
        <span className="label-inline">~</span>
        <input
          type="date"
          className="field-input field-input--date"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
        />
        <Button className="cap-phat_btn-find"> <i class="ri-reset-left-line"></i>  F5 - Tìm</Button>
        <div className="cap-phat__radio-group">
          <label className="cap-phat__radio">
            <input
              type="radio"
              name="status"
              value="cho"
              checked={status === 'cho'}
              onChange={() => setStatus('cho')}
            />
            Chờ phát thuốc
          </label>
          <label className="cap-phat__radio">
            <input
              type="radio"
              name="status"
              value="da"
              checked={status === 'da'}
              onChange={() => setStatus('da')}
            />
            Đã phát
          </label>
        </div>
      </div>

      {/* Body */}
      <div className="cap-phat__body">
        {/* Left panel */}
        <div className="cap-phat__left">
          <div className="cap-phat__search-bar">
            <input
              className="field-input field-input--flex"
              placeholder="Tìm kiếm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button onClick={() => setSearch('')}>Clear</Button>
          </div>

          <div className="cap-phat__table-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  <th>C.Phát</th>
                  <th>Đối tượng</th>
                  <th>Họ tên</th>
                  <th>Mã BN</th>
                  <th>Phái</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((p) => {
                  const isSelected = p.id === selectedId;
                  return (
                    <tr
                      key={p.id}
                      className={`cap-phat__patient-row${isSelected ? ' cap-phat__patient-row--selected' : ''
                        }`}
                      onClick={() => setSelectedId(p.id)}
                    >
                      <td>
                        <span className="cap-phat__dispense-icon" title="Cấp phát">
                          <i className="ri-file-edit-line"></i>
                        </span>
                      </td>
                      <td>{p.doiTuong}</td>
                      <td>{p.hoTen}</td>
                      <td>{p.maBN}</td>
                      <td>{p.phai}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="cap-phat__status-bar">Tổng: {filtered.length}</div>
        </div>

        {/* Right panel */}
        <div className="cap-phat__right">
          <div className="cap-phat__section-title">Thông tin bệnh nhân</div>

          <div className="cap-phat__patient-info">
            <div className="cap-phat__info-grid">
              <div className="cap-phat__avatar">
                <img src="/images/User.ico" alt="User Avatar" />
              </div>
              <div className="cap-phat__bhyt">BHYT {selectedPatient.bhytPct}%</div>
              <div className="cap-phat__info-col">
                <div className="cap-phat__info-row">
                  <span className="cap-phat__info-label">Mã bn</span>
                  <span className="cap-phat__info-value cap-phat__info-value--bold">: {selectedPatient.maBN}</span>
                </div>
                <div className="cap-phat__info-row">
                  <span className="cap-phat__info-label">Họ tên</span>
                  <span className="cap-phat__info-value cap-phat__info-value--bold">
                    : {selectedPatient.hoTen}
                  </span>
                </div>
                <div className="cap-phat__info-row">
                  <span className="cap-phat__info-label">Giới tính</span>
                  <span className="cap-phat__info-value cap-phat__info-value--bold">: {selectedPatient.gioiTinh}</span>
                </div>
                <div className="cap-phat__info-row">
                  <span className="cap-phat__info-label">Năm sinh</span>
                  <span className="cap-phat__info-value cap-phat__info-value--bold">: {selectedPatient.ngaySinh}</span>
                </div>
                <div className="cap-phat__info-row">
                  <span className="cap-phat__info-label">Tuổi</span>
                  <span className="cap-phat__info-value cap-phat__info-value--bold">: {selectedPatient.tuoi}</span>
                </div>
                <div className="cap-phat__info-row">
                  <span className="cap-phat__info-label">Địa chỉ</span>
                  <span className="cap-phat__info-value">: {selectedPatient.diaChi}</span>
                </div>
              </div>

              <div className="cap-phat__info-col">
                <div className="cap-phat__info-row">
                  <span className="cap-phat__info-label">Số thẻ</span>
                  <span className="cap-phat__info-value">: {selectedPatient.soThe}</span>
                </div>
                <div className="cap-phat__info-row">
                  <span className="cap-phat__info-label">Từ ngày</span>
                  <span className="cap-phat__info-value">: {selectedPatient.tuNgay}</span>
                  <span className="cap-phat__info-value" style={{ marginLeft: 8 }}>
                    Đến ngày :{selectedPatient.denNgay}
                  </span>
                </div>
                <div className="cap-phat__info-row">
                  <span className="cap-phat__info-label">Nơi ĐK KCB</span>
                  <span className="cap-phat__info-value">: {selectedPatient.noiDKKCB}</span>
                </div>
                <div className="cap-phat__info-row">
                  <span className="cap-phat__info-label">Tổng chi phí</span>
                  <span className="cap-phat__info-value">: {selectedPatient.tongChiPhi}</span>
                </div>
                <div className="cap-phat__info-row">
                  <span className="cap-phat__info-label">BHYT Trả</span>
                  <span className="cap-phat__info-value">: {selectedPatient.bhytTra}</span>
                </div>
                <div className="cap-phat__info-row">
                  <span className="cap-phat__info-label">Bệnh nhân trả</span>
                  <span className="cap-phat__info-value">: {selectedPatient.benhNhanTra}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="cap-phat__section-title">Chi tiết toa thuốc</div>

          <div className="cap-phat__presc-wrapper">
            <table className="data-table">
              <thead>
                <tr>
                  {[
                    'Mã thuốc', 'Hoạt chất', 'Tên thuốc', 'ĐVT', 'DV Kê toa',
                    'S', 'Tr', 'Ch', 'Tối', 'SL', 'Cách dùng',
                    'Đơn giá', 'Tổng', 'Đối tượng', 'Kho',
                  ].map((h) => (
                    <th key={h}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {chiTietToaThuoc.map((item) => {
                  const isSel = selectedPrescId === item.id;
                  return (
                    <tr
                      key={item.id}
                      className={`cap-phat__presc-row${isSel ? ' cap-phat__presc-row--selected' : ''
                        }`}
                      onClick={() => setSelectedPrescId(item.id)}
                    >
                      <td>{item.maThuoc}</td>
                      <td>{item.hoatChat}</td>
                      <td>{item.tenThuoc}</td>
                      <td>{item.dvt}</td>
                      <td>{item.dvKeToa}</td>
                      <td className="center">{item.s}</td>
                      <td className="center">{item.tr}</td>
                      <td className="center">{item.ch}</td>
                      <td className="center">{item.toi}</td>
                      <td className="center">{item.sl}</td>
                      <td>{item.cachDung}</td>
                      <td className="right">{formatMoney(item.donGia)}</td>
                      <td className="right">{formatMoney(item.tong)}</td>
                      <td>{item.doiTuong}</td>
                      <td>{item.kho}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="cap-phat__footer">
            <span>Khoản: {chiTietToaThuoc.length}</span>
            <span className="cap-phat__footer-total">
              {formatMoney(chiTietToaThuoc.reduce((s, i) => s + i.tong, 0))}
            </span>
          </div>

          <div className="cap-phat__action-bar">
            <Button className="cap-phat__btn-print" disabled>
              <i className="ri-printer-line"></i> In toa đã phát
            </Button>
            <Button className="cap-phat__btn-print" disabled>
              <i className="ri-printer-line"></i> In Ph. xuất NT
            </Button>
            <label className="cap-phat__a5-label">
              <input type="checkbox" /> In A5
            </label>
            <div className="cap-phat__action-spacer" />
            <Button variant="danger" className="cap-phat__btn-cancel" disabled>
              <i className="ri-close-circle-line"></i> Hủy cấp phát
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapPhatToaThuoc;
