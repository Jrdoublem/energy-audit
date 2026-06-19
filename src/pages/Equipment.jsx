import React, { useState } from 'react';
import AppLayout from '../layouts/AppLayout';
import {
  ChevronDownIcon,
  ClipboardIcon,
  CompressorIcon,
  CoolingTowerIcon,
  DropletIcon,
  FlameIcon,
  GearIcon,
  LightningIcon,
  PlusIcon,
  SearchIcon,
  SnowflakeIcon,
} from '../components/icons';

const CATEGORIES = [
  { key: 'all', label: 'ALL', icon: ClipboardIcon },
  { key: 'chiller', label: 'Chiller', icon: SnowflakeIcon },
  { key: 'compressor', label: 'Compressor', icon: CompressorIcon },
  { key: 'pump', label: 'Pump', icon: DropletIcon },
  { key: 'boiler', label: 'Boiler', icon: FlameIcon },
  { key: 'cooling', label: 'Cooling Tower', icon: CoolingTowerIcon },
  { key: 'electrical', label: 'Electrical', icon: LightningIcon },
];

const INITIAL_EQUIPMENT = [
  { id: 'CH-03', category: 'chiller', brandModel: 'Carrier 30XA', building: 'อาคาร A', factory: 'โรงงาน A', owner: 'สมชาย ใจดี' },
  { id: 'CH-02', category: 'chiller', brandModel: 'Trane CVHF', building: 'อาคาร A', factory: 'โรงงาน A', owner: 'สมชาย ใจดี' },
  { id: 'CH-01', category: 'chiller', brandModel: 'Daikin EWAD', building: 'อาคาร B', factory: 'โรงงาน A', owner: 'สมหญิง รักดี' },
];

const FORM_FIELDS = [
  { key: 'id', label: 'รหัสอุปกรณ์', placeholder: 'เช่น CH-01' },
  { key: 'factory', label: 'ชื่อโรงงาน บริษัท', placeholder: '' },
  { key: 'building', label: 'แผนก/อาคาร', placeholder: '' },
  { key: 'brandModel', label: 'ยี่ห้อ/รุ่น', placeholder: '' },
  { key: 'installDate', label: 'วันที่ติดตั้ง', placeholder: '' },
  { key: 'owner', label: 'ผู้รับผิดชอบ', placeholder: '' },
];

function Equipment() {
  const [equipment, setEquipment] = useState(INITIAL_EQUIPMENT);
  const [category, setCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [mode, setMode] = useState('list');
  const [form, setForm] = useState({});

  const activeCategory = CATEGORIES.find((c) => c.key === category);

  const filtered = equipment.filter((item) => {
    if (category !== 'all' && item.category !== category) return false;
    if (search && !item.id.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const openAddForm = () => {
    setForm(category !== 'all' ? { category } : {});
    setMode('add');
  };

  const cancelAddForm = () => {
    setForm({});
    setMode('list');
  };

  const handleSave = () => {
    if (!form.id) return;
    setEquipment((prev) => [...prev, { ...form, category: form.category || category }]);
    setForm({});
    setMode('list');
  };

  return (
    <AppLayout
      title={
        <>
          <span className="flex lg:hidden items-center gap-2.5">
            <span className="w-1.5 h-6 rounded-full bg-[#4988C4]"></span>
            อุปกรณ์
          </span>
          <span className="hidden lg:flex flex-col gap-2">
            <span className="inline-flex items-center gap-3">
              <span className="w-2 h-8 rounded-full bg-[#4988C4]"></span>
              อุปกรณ์
            </span>
            <span className="text-base font-medium text-blue-100/80 pl-5">ทะเบียนและจัดการอุปกรณ์ทั้งหมด</span>
          </span>
        </>
      }
    >
      <div className="flex gap-3 lg:gap-4">
        <div className="flex flex-col gap-1.5 bg-[#FFFCF5] rounded-2xl p-2 shadow-sm shrink-0 h-fit">
          {CATEGORIES.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              type="button"
              title={label}
              onClick={() => {
                setCategory(key);
                setMode('list');
              }}
              className={`w-10 h-10 lg:w-11 lg:h-11 rounded-xl flex items-center justify-center transition-colors ${
                category === key ? 'bg-[#0F2854] text-white' : 'text-[#1C4D8D]/70 hover:bg-white'
              }`}
            >
              <Icon className="w-5 h-5" />
            </button>
          ))}
          <div className="h-px bg-[#BDE8F5] my-1"></div>
          <button
            type="button"
            title="เพิ่มทะเบียนอุปกรณ์"
            onClick={openAddForm}
            className="w-10 h-10 lg:w-11 lg:h-11 rounded-xl flex items-center justify-center text-[#1C4D8D]/70 hover:bg-white transition-colors"
          >
            <PlusIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 bg-[#DDF1F3] rounded-2xl shadow-sm p-4 lg:p-6 min-w-0">
          {mode === 'list' ? (
            <>
              <div className="flex items-center gap-2 mb-4">
                <p className="text-base font-bold text-[#0F2854]">ทะเบียนอุปกรณ์</p>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white text-[#1C4D8D]">
                  {activeCategory.label}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 mb-4">
                <div className="relative flex-1 min-w-0">
                  <SearchIcon className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="ค้นหา เช่น หมวดหมู่ รหัสอุปกรณ์..."
                    className="w-full pl-10 pr-3.5 py-2.5 rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#4988C4]"
                  />
                </div>
                <button
                  type="button"
                  onClick={openAddForm}
                  className="shrink-0 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-[#0F2854] hover:bg-[#1C4D8D] text-white text-sm font-semibold transition-colors"
                >
                  <PlusIcon className="w-4 h-4" />
                  เพิ่มทะเบียนอุปกรณ์
                </button>
              </div>

              <p className="text-sm text-[#0F2854]/70 mb-3">
                {category === 'all' ? 'อุปกรณ์ทั้งหมด' : `รายการ ${activeCategory.label}`}({filtered.length})
              </p>

              {filtered.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-white/60">
                  <GearIcon className="w-10 h-10 mb-2" />
                  <p className="text-sm text-[#1C4D8D]/60">ไม่พบอุปกรณ์</p>
                </div>
              ) : (
                <div className="space-y-2.5">
                  {filtered.map((item) => {
                    const ItemIcon = CATEGORIES.find((c) => c.key === item.category)?.icon || ClipboardIcon;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        className="w-full flex items-center justify-between gap-3 bg-white rounded-2xl shadow-sm p-4 hover:shadow-md text-left transition-shadow"
                      >
                        <div className="min-w-0">
                          <p className="flex items-center gap-1.5 font-bold text-[#0F2854]">
                            <ItemIcon className="w-4 h-4 text-[#4988C4] shrink-0" />
                            {item.id}
                          </p>
                          <p className="text-xs text-gray-400 break-words mt-0.5">
                            {item.brandModel}/{item.building}
                          </p>
                          <p className="text-xs text-gray-400 break-words">
                            {item.factory} · {item.owner}
                          </p>
                        </div>
                        <span className="w-7 h-7 rounded-full bg-[#4988C4] text-white flex items-center justify-center shrink-0">
                          <ChevronDownIcon className="w-3.5 h-3.5 -rotate-90" />
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </>
          ) : (
            <>
              <div className="flex items-center justify-between gap-3 mb-4">
                <p className="text-base font-bold text-[#0F2854]">
                  เพิ่มทะเบียนอุปกรณ์{category !== 'all' ? ` ${activeCategory.label}` : ''}
                </p>
                <button
                  type="button"
                  onClick={cancelAddForm}
                  className="text-sm font-medium text-red-500 hover:underline shrink-0"
                >
                  ยกเลิกการเพิ่ม
                </button>
              </div>
              <div className="space-y-3 max-w-md">
                {FORM_FIELDS.map((f) => (
                  <div key={f.key}>
                    <label className="text-xs text-[#1C4D8D]/70 mb-1 block">{f.label}</label>
                    <input
                      value={form[f.key] || ''}
                      onChange={(e) => setForm((p) => ({ ...p, [f.key]: e.target.value }))}
                      placeholder={f.placeholder}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#4988C4]"
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={handleSave}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0F2854] hover:bg-[#1C4D8D] text-white font-semibold transition-colors mt-2"
                >
                  บันทึกข้อมูล
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </AppLayout>
  );
}

export default Equipment;
