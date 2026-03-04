import { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import './Layout.css';

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: '/', label: '首页', icon: '🏠' },
    { path: '/memos', label: '备忘录', icon: '📝' },
    { path: '/bills', label: '记账', icon: '💰' },
    { path: '/diaries', label: '日报', icon: '📊' },
    { path: '/photos', label: '照片墙', icon: '📷' },
  ];

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="layout-container">
      {/* 顶部导航栏 */}
      <header className="layout-header">
        <div className="layout-header-content">
          <div className="header-inner">
            {/* Logo */}
            <div className="logo-container">
              <div className="logo-icon">
                <span>✨</span>
              </div>
              <div>
                <h1 className="logo-text">
                  AI 个人助手
                </h1>
                <p className="logo-subtitle">你的智能生活伙伴</p>
              </div>
            </div>

            {/* 用户区 */}
            <div className="user-container">
              <div className="user-info">
                <div className="user-avatar">
                  <span>U</span>
                </div>
                <span className="user-name">User</span>
              </div>
              <button
                onClick={handleLogout}
                className="logout-button"
              >
                退出
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 导航栏 */}
      <nav className="layout-nav">
        <div className="nav-content">
          <div className="nav-inner">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  nav-item
                  ${location.pathname === item.path ? 'nav-item-active' : 'nav-item-default'}
                `}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* 主内容区 - 居中对齐 */}
      <main className="layout-main">
        <Outlet />
      </main>

      {/* 底部输入框 */}
      <footer className="layout-footer">
        <div className="footer-content">
          <div className="footer-wrapper">
            {/* 光晕效果 */}
            <div className="footer-glow"></div>
            {/* 输入框主体 */}
            <div className="footer-input-container">
              <span className="footer-icon">💬</span>
              <input
                type="text"
                placeholder="告诉 AI 助手你想要做什么..."
                className="footer-input"
              />
              <button className="footer-submit">
                发送
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
