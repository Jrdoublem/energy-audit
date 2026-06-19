import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import companyLogo from '../assets/Logo.png';
import {
  BellIcon,
  ChevronDownIcon,
  ClipboardIcon,
  ClockIcon,
  DocumentIcon,
  GearIcon,
  HomeIcon,
  PlusIcon,
} from '../components/icons';

function getInitialCollapsed() {
  return localStorage.getItem('sidebarCollapsed') === 'true';
}

const NOTIFICATIONS = [
  { title: 'CH-01 ประสิทธิภาพต่ำกว่าเกณฑ์', time: '10 นาทีที่แล้ว' },
  { title: 'CH-02 ควรตรวจสอบเร็วๆนี้', time: '2 ชั่วโมงที่แล้ว' },
];

const navItems = [
  { to: '/home', label: 'หน้าหลัก', icon: HomeIcon },
  { to: '/equipment', label: 'อุปกรณ์', icon: ClipboardIcon },
  { to: '/history', label: 'ประวัติ', icon: ClockIcon },
  { to: '/reports', label: 'รายงาน', icon: DocumentIcon },
  { to: '/settings', label: 'ตั้งค่า', icon: GearIcon },
];

function AppLayout({ title, actions, children }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(getInitialCollapsed);

  const toggleCollapsed = () => {
    setCollapsed((v) => {
      localStorage.setItem('sidebarCollapsed', String(!v));
      return !v;
    });
  };

  return (
    <div className="w-full font-sans relative overflow-x-hidden">
      <div className="fixed inset-0 z-0 bg-shell-gradient">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-full h-[150%] top-[-25%] bg-tech-grid animate-grid-pan opacity-80 lg:opacity-40"></div>
        </div>
      </div>

      {/* Desktop sidebar */}
      <aside
        className={`hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0 lg:left-0 bg-[#0F2854] text-white px-4 py-7 z-30 transition-[width] duration-200 ${
          collapsed ? 'lg:w-20' : 'lg:w-64'
        }`}
      >
        <button
          type="button"
          onClick={toggleCollapsed}
          className="absolute -right-3 top-10 w-7 h-7 rounded-full bg-[#1C4D8D] hover:bg-[#4988C4] border-2 border-[#0F2854] flex items-center justify-center text-white transition-colors"
        >
          <ChevronDownIcon className={`w-3.5 h-3.5 transition-transform ${collapsed ? '-rotate-90' : 'rotate-90'}`} />
        </button>

        <div className={`flex items-center gap-3 mb-7 ${collapsed ? 'justify-center px-0' : 'px-2'}`}>
          <img src={companyLogo} alt="Logo" className="w-10 h-10 object-contain shrink-0 drop-shadow" />
          {!collapsed && (
            <div className="min-w-0">
              <div className="text-xl font-extrabold tracking-wide leading-tight">ENGINSPECT</div>
              <div className="text-xs text-blue-200/60 leading-tight">Energy Audit System</div>
            </div>
          )}
        </div>

        <div className="h-px bg-white/10 mb-5"></div>

        <nav className="flex flex-col gap-1.5">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              title={collapsed ? label : undefined}
              className={({ isActive }) =>
                `group relative flex items-center gap-3.5 px-3.5 py-3 rounded-xl text-[15px] font-medium transition-colors ${
                  collapsed ? 'justify-center' : ''
                } ${isActive ? 'bg-white text-[#0F2854]' : 'text-[#BDE8F5] hover:bg-white/10'}`
              }
            >
              <Icon className="w-6 h-6 shrink-0" />
              {!collapsed && label}
              {collapsed && (
                <span className="pointer-events-none absolute left-full ml-2 whitespace-nowrap bg-[#0F2854] text-white text-xs font-medium px-2.5 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-40">
                  {label}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => navigate('/equipment')}
          title={collapsed ? 'เพิ่มการตรวจวัดใหม่' : undefined}
          className={`mt-6 mx-1 flex items-center justify-center gap-2 px-3 py-3.5 rounded-xl bg-[#4988C4] hover:bg-[#3c79b3] text-white text-base font-semibold transition-colors ${
            collapsed ? 'mx-0' : ''
          }`}
        >
          <PlusIcon className="w-5 h-5 shrink-0" />
          {!collapsed && 'เพิ่มการตรวจวัดใหม่'}
        </button>

        <div className="flex-1"></div>

        <div className="relative">
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-left ${
              collapsed ? 'justify-center px-0' : ''
            }`}
          >
            <span className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4988C4] to-[#1C4D8D] flex items-center justify-center text-base font-bold shrink-0">
              ส
            </span>
            {!collapsed && (
              <>
                <div className="min-w-0 flex-1">
                  <p className="text-[15px] font-semibold truncate">สมชาย ใจดี</p>
                  <p className="text-xs text-blue-200/60 truncate">Admin</p>
                </div>
                <ChevronDownIcon className="w-4 h-4 text-blue-200/60 shrink-0" />
              </>
            )}
          </button>
          {menuOpen && (
            <>
              <div className="fixed inset-0 z-30" onClick={() => setMenuOpen(false)}></div>
              <div className="absolute left-0 bottom-full mb-2 w-48 bg-white rounded-xl shadow-xl overflow-hidden z-40 text-sm">
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    navigate('/settings');
                  }}
                  className="w-full text-left px-4 py-2.5 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  โปรไฟล์
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    navigate('/settings');
                  }}
                  className="w-full text-left px-4 py-2.5 text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  ตั้งค่า
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    navigate('/login');
                  }}
                  className="w-full text-left px-4 py-2.5 text-red-500 hover:bg-gray-50 transition-colors"
                >
                  ออกจากระบบ
                </button>
              </div>
            </>
          )}
        </div>
      </aside>

      <div
        className={`flex flex-col items-center lg:items-stretch relative z-10 transition-[margin] duration-200 ${
          collapsed ? 'lg:ml-20' : 'lg:ml-64'
        }`}
      >
        <div className="w-full max-w-md lg:max-w-none flex items-center justify-between gap-4 pt-8 pb-4 px-6 lg:px-10 lg:pt-8 lg:pb-4">
          <h1 className="text-2xl lg:text-3xl font-extrabold text-white drop-shadow shrink-0">{title}</h1>
          {actions && <div className="hidden lg:flex flex-1 items-center justify-end gap-3">{actions}</div>}
          <div className="flex items-center gap-2 shrink-0">
            <div className="relative">
              <button
                type="button"
                onClick={() => setNotifOpen((v) => !v)}
                className="relative w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <BellIcon className="w-5 h-5" />
                {NOTIFICATIONS.length > 0 && (
                  <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-red-500 ring-2 ring-[#0F2854]"></span>
                )}
              </button>
              {notifOpen && (
                <>
                  <div className="fixed inset-0 z-30" onClick={() => setNotifOpen(false)}></div>
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl overflow-hidden z-40 text-sm">
                    <div className="px-4 py-2.5 text-xs font-bold text-gray-400 border-b border-gray-100">การแจ้งเตือน</div>
                    {NOTIFICATIONS.map((n) => (
                      <button
                        key={n.title}
                        type="button"
                        onClick={() => {
                          setNotifOpen(false);
                          navigate('/equipment');
                        }}
                        className="w-full text-left px-4 py-2.5 hover:bg-gray-50 transition-colors border-b border-gray-50 last:border-0"
                      >
                        <p className="text-gray-700 font-medium">{n.title}</p>
                        <p className="text-xs text-gray-400 mt-0.5">{n.time}</p>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
            <div className="relative group lg:hidden">
              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                className="flex items-center gap-2.5 p-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#4988C4] to-[#1C4D8D] ring-2 ring-white/30 flex items-center justify-center text-white text-sm font-bold shrink-0">
                  ส
                </span>
            </button>
            <span className="pointer-events-none absolute right-0 top-full mt-2 whitespace-nowrap bg-[#0F2854] text-white text-xs font-medium px-2.5 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-40">
              สมชาย ใจดี
            </span>
            {menuOpen && (
              <>
                <div className="fixed inset-0 z-30" onClick={() => setMenuOpen(false)}></div>
                <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-xl overflow-hidden z-40 text-sm">
                  <button
                    type="button"
                    onClick={() => {
                      setMenuOpen(false);
                      navigate('/settings');
                    }}
                    className="w-full text-left px-4 py-2.5 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    โปรไฟล์
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setMenuOpen(false);
                      navigate('/settings');
                    }}
                    className="w-full text-left px-4 py-2.5 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    ตั้งค่า
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setMenuOpen(false);
                      navigate('/login');
                    }}
                    className="w-full text-left px-4 py-2.5 text-red-500 hover:bg-gray-50 transition-colors"
                  >
                    ออกจากระบบ
                  </button>
                </div>
              </>
            )}
            </div>
          </div>
        </div>

        <div className="w-full max-w-md lg:max-w-none lg:flex-1 px-5 lg:px-10 pt-6 lg:pt-2 pb-24 lg:pb-12">
          {children}
        </div>
      </div>

      {/* Mobile bottom nav */}
      <div className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-full max-w-md px-5 z-20">
        <nav className="bg-white rounded-2xl shadow-2xl flex items-center justify-between px-1.5 py-2">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 py-2 px-2 rounded-xl text-[11px] font-medium transition-colors ${
                  isActive ? 'bg-[#0F2854] text-white' : 'text-gray-400'
                }`
              }
            >
              <Icon className="w-5 h-5" />
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default AppLayout;
