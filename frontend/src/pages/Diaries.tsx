export default function Diaries() {
  return (
    <div className="space-y-6">
      {/* 页面头部 */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">工作日报</h2>
          <p className="text-sm text-slate-500 mt-1">记录每天的工作成果</p>
        </div>
        <button className="bg-gradient-to-r from-indigo-500 to-sky-500 text-white px-5 py-2.5 rounded-xl font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-200 hover:scale-105 flex items-center gap-2">
          <span className="text-lg">+</span>
          写日报
        </button>
      </div>

      {/* 本周统计 */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
          <p className="text-sm text-slate-500">本周日报</p>
          <p className="text-2xl font-bold text-slate-800 mt-1">0 篇</p>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
          <p className="text-sm text-slate-500">完成任务</p>
          <p className="text-2xl font-bold text-slate-800 mt-1">0</p>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
          <p className="text-sm text-slate-500">工作时长</p>
          <p className="text-2xl font-bold text-slate-800 mt-1">0h</p>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
          <p className="text-sm text-slate-500">连续天数</p>
          <p className="text-2xl font-bold text-slate-800 mt-1">0 天</p>
        </div>
      </div>

      {/* 日报列表 */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100">
          <h3 className="font-semibold text-slate-700">历史日报</h3>
        </div>
        <div className="p-12">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center">
              <span className="text-3xl">📊</span>
            </div>
            <p className="text-slate-500 mb-2">暂无日报记录</p>
            <p className="text-sm text-slate-400">每天花几分钟记录工作成果，见证你的成长</p>
          </div>
        </div>
      </div>

      {/* AI 生成日报 */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg flex-shrink-0">
            <span className="text-2xl">✨</span>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-slate-800 mb-2">AI 帮你写日报</h3>
            <p className="text-sm text-slate-600 mb-4">
              告诉 AI 你今天做了什么，它会自动生成一份结构化的工作日报
            </p>
            <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5 py-2.5 rounded-xl font-medium hover:shadow-lg transition-all duration-200 hover:scale-105">
              尝试 AI 生成
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
