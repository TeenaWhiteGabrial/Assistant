import { useState } from 'react';

export default function Bills() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  const categories = [
    { name: '餐饮', icon: '🍜', color: 'from-orange-400 to-red-400' },
    { name: '交通', icon: '🚗', color: 'from-blue-400 to-cyan-400' },
    { name: '购物', icon: '🛍️', color: 'from-pink-400 to-rose-400' },
    { name: '娱乐', icon: '🎬', color: 'from-purple-400 to-violet-400' },
    { name: '其他', icon: '📦', color: 'from-slate-400 to-gray-400' },
  ];

  return (
    <div className="space-y-6">
      {/* 页面头部 */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">记账本</h2>
          <p className="text-sm text-slate-500 mt-1">记录每一笔收支</p>
        </div>
        <button className="bg-gradient-to-r from-indigo-500 to-sky-500 text-white px-5 py-2.5 rounded-xl font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-200 hover:scale-105 flex items-center gap-2">
          <span className="text-lg">+</span>
          记一笔
        </button>
      </div>

      {/* 统计卡片 */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl p-5 text-white shadow-lg shadow-emerald-500/30">
          <p className="text-sm opacity-80">本月收入</p>
          <p className="text-2xl font-bold mt-1">¥0.00</p>
        </div>
        <div className="bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl p-5 text-white shadow-lg shadow-red-500/30">
          <p className="text-sm opacity-80">本月支出</p>
          <p className="text-2xl font-bold mt-1">¥0.00</p>
        </div>
        <div className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl p-5 text-white shadow-lg shadow-blue-500/30">
          <p className="text-sm opacity-80">结余</p>
          <p className="text-2xl font-bold mt-1">¥0.00</p>
        </div>
      </div>

      {/* 分类快速查看 */}
      <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
        <h3 className="font-semibold text-slate-700 mb-4">支出分类</h3>
        <div className="flex justify-between gap-2">
          {categories.map((category) => (
            <div key={category.name} className="text-center flex-1">
              <div className={`w-12 h-12 mx-auto rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-md mb-2`}>
                <span className="text-xl">{category.icon}</span>
              </div>
              <p className="text-xs text-slate-600 font-medium">{category.name}</p>
              <p className="text-xs text-slate-400 mt-0.5">¥0</p>
            </div>
          ))}
        </div>
      </div>

      {/* 账单列表 */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-semibold text-slate-700">本月账单</h3>
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(Number(e.target.value))}
            className="text-sm bg-slate-100 border-0 rounded-lg px-3 py-1.5 text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
          >
            {['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'].map(
              (month, index) => (
                <option key={month} value={index}>
                  {month}
                </option>
              )
            )}
          </select>
        </div>
        <div className="p-12">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center">
              <span className="text-3xl">💰</span>
            </div>
            <p className="text-slate-500 mb-2">暂无账单记录</p>
            <p className="text-sm text-slate-400">开始记账，追踪你的每一笔收支</p>
          </div>
        </div>
      </div>
    </div>
  );
}
