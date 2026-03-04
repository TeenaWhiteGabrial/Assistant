export default function Home() {
  const stats = [
    { label: '今日支出', value: '¥0.00', icon: '💰', color: 'from-emerald-500 to-teal-500' },
    { label: '待办事项', value: '0', icon: '✅', color: 'from-blue-500 to-cyan-500' },
    { label: '本周记录', value: '0', icon: '📝', color: 'from-violet-500 to-purple-500' },
    { label: '照片数量', value: '0', icon: '📷', color: 'from-orange-500 to-pink-500' },
  ];

  return (
    <div className="space-y-6">
      {/* 页面标题 */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">今日概览</h2>
          <p className="text-sm text-slate-500 mt-1">
            {new Date().toLocaleDateString('zh-CN', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              weekday: 'long'
            })}
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-slate-500">早上好</p>
          <p className="text-lg font-semibold text-slate-700">User 👋</p>
        </div>
      </div>

      {/* 统计卡片 */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="group relative bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${stat.color} opacity-10 rounded-bl-full`}></div>
            <div className="relative">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-md mb-3`}>
                <span className="text-2xl">{stat.icon}</span>
              </div>
              <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
              <p className="text-2xl font-bold text-slate-800 mt-1">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* AI 快捷指令 */}
      <div className="bg-gradient-to-r from-indigo-50 to-sky-50 rounded-2xl p-6 border border-indigo-100">
        <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
          <span className="text-xl">✨</span>
          AI 快捷指令
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { text: '记录一笔支出 50 元', icon: '💸' },
            { text: '提醒我明天开会', icon: '⏰' },
            { text: '写一份工作日报', icon: '📝' },
            { text: '分析本月消费情况', icon: '📊' },
            { text: '上传一张照片', icon: '🖼️' },
            { text: '创建一个旅行计划', icon: '✈️' },
          ].map((cmd, index) => (
            <button
              key={index}
              className="flex items-center gap-3 bg-white hover:bg-white/90 rounded-xl px-4 py-3 text-sm text-slate-600 hover:text-slate-800 transition-all duration-200 border border-slate-100 hover:shadow-md"
            >
              <span className="text-lg flex-shrink-0">{cmd.icon}</span>
              <span className="truncate">{cmd.text}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 最近记录 */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-semibold text-slate-800 flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            最近记录
          </h3>
          <button className="text-sm text-indigo-500 hover:text-indigo-600 font-medium">
            查看全部
          </button>
        </div>
        <div className="p-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 flex items-center justify-center">
              <span className="text-3xl">📭</span>
            </div>
            <p className="text-slate-500 mb-2">暂无记录</p>
            <p className="text-sm text-slate-400">使用底部输入框快速添加第一条记录</p>
          </div>
        </div>
      </div>
    </div>
  );
}
