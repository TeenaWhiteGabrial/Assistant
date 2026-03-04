import { useState } from 'react';

export default function Memos() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      {/* 页面头部 */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">备忘录</h2>
          <p className="text-sm text-slate-500 mt-1">记录生活中的点点滴滴</p>
        </div>
        <button className="bg-gradient-to-r from-indigo-500 to-sky-500 text-white px-5 py-2.5 rounded-xl font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-200 hover:scale-105 flex items-center gap-2">
          <span className="text-lg">+</span>
          新建
        </button>
      </div>

      {/* 搜索框 */}
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="搜索备忘录..."
          className="w-full bg-white border border-slate-200 rounded-xl pl-12 pr-4 py-3 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
        />
      </div>

      {/* 空状态 */}
      <div className="bg-white rounded-2xl p-12 text-center border-2 border-dashed border-slate-200">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
          <span className="text-4xl">📝</span>
        </div>
        <h3 className="text-lg font-semibold text-slate-700 mb-2">暂无备忘录</h3>
        <p className="text-slate-500 text-sm mb-6">
          创建一个备忘录，记录重要事项和想法
        </p>
        <button className="bg-gradient-to-r from-indigo-500 to-sky-500 text-white px-6 py-2.5 rounded-xl font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-200 hover:scale-105">
          创建第一个备忘录
        </button>
      </div>
    </div>
  );
}
