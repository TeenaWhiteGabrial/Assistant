import { Outlet, Link, useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: '首页' },
    { path: '/memos', label: '备忘录' },
    { path: '/bills', label: '记账' },
    { path: '/diaries', label: '日报' },
    { path: '/photos', label: '照片墙' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航栏 */}
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">AI 个人助手</h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">用户</span>
            </div>
          </div>
        </div>
      </header>

      {/* 中部导航 */}
      <nav className="bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  px-3 py-4 text-sm font-medium border-b-2
                  ${
                    location.pathname === item.path
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }
                `}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* 主内容区 */}
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>

      {/* 底部快速输入框 */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="告诉 AI 助手你想要做什么..."
              className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="rounded-lg bg-blue-500 px-6 py-2 text-white font-medium hover:bg-blue-600">
              发送
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
