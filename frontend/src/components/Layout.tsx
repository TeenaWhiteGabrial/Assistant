import { useState } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 w-full">
      {/* 顶部导航栏 */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm w-full">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <span className="text-white text-xl">✨</span>
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent">
                  AI 个人助手
                </h1>
                <p className="text-xs text-slate-500 hidden sm:block">你的智能生活伙伴</p>
              </div>
            </div>

            {/* 用户区 */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 bg-slate-100 rounded-full px-3 py-1.5">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-sky-500 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">U</span>
                </div>
                <span className="text-sm text-slate-600 font-medium">User</span>
              </div>
              <button
                onClick={handleLogout}
                className="text-sm text-slate-500 hover:text-red-500 transition-colors px-3 py-1.5 rounded-lg hover:bg-slate-100"
              >
                退出
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* 导航栏 */}
      <nav className="bg-white/60 backdrop-blur-sm border-b border-slate-200/50 sticky top-16 z-40 w-full">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-hide">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium
                  transition-all duration-200 whitespace-nowrap flex-shrink-0
                  ${
                    location.pathname === item.path
                      ? 'bg-gradient-to-r from-indigo-500 to-sky-500 text-white shadow-md shadow-indigo-500/25'
                      : 'text-slate-600 hover:bg-white hover:text-slate-900'
                  }
                `}
              >
                <span>{item.icon}</span>
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* 主内容区 - 居中对齐 */}
      <main className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-40">
        <Outlet />
      </main>

      {/* 底部输入框 */}
      <footer className="fixed bottom-6 left-0 right-0 px-4 z-40">
        <div className="w-full max-w-2xl mx-auto">
          <div className="relative">
            {/* 光晕效果 */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-sky-500 rounded-2xl blur-xl opacity-40"></div>
            {/* 输入框主体 */}
            <div className="relative bg-white rounded-2xl p-2 flex items-center gap-2 shadow-2xl">
              <span className="text-slate-400 px-3">💬</span>
              <input
                type="text"
                placeholder="告诉 AI 助手你想要做什么..."
                className="flex-1 bg-transparent py-3 text-slate-700 placeholder-slate-400 focus:outline-none text-sm sm:text-base"
              />
              <button className="bg-gradient-to-r from-indigo-500 to-sky-500 text-white px-5 py-2.5 rounded-xl font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-200 hover:scale-105 text-sm">
                发送
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* 隐藏滚动条样式 */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
