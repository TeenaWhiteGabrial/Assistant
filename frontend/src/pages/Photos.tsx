export default function Photos() {
  return (
    <div className="space-y-6">
      {/* 页面头部 */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">照片墙</h2>
          <p className="text-sm text-slate-500 mt-1">珍藏每一个美好瞬间</p>
        </div>
        <button className="bg-gradient-to-r from-indigo-500 to-sky-500 text-white px-5 py-2.5 rounded-xl font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-200 hover:scale-105 flex items-center gap-2">
          <span className="text-lg">+</span>
          上传
        </button>
      </div>

      {/* 统计信息 */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
          <p className="text-sm text-slate-500">照片总数</p>
          <p className="text-2xl font-bold text-slate-800 mt-1">0</p>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
          <p className="text-sm text-slate-500">存储空间</p>
          <p className="text-2xl font-bold text-slate-800 mt-1">0 MB</p>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
          <p className="text-sm text-slate-500">本月上传</p>
          <p className="text-2xl font-bold text-slate-800 mt-1">0</p>
        </div>
      </div>

      {/* 照片网格 */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-semibold text-slate-700">所有照片</h3>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">
              <span>🗂️</span>
            </button>
            <button className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">
              <span>🔍</span>
            </button>
          </div>
        </div>
        <div className="p-12">
          <div className="text-center">
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center">
              <span className="text-4xl">📷</span>
            </div>
            <p className="text-slate-500 mb-2">暂无照片</p>
            <p className="text-sm text-slate-400 mb-6">上传你的第一张照片，AI 会自动识别内容并添加标签</p>
            <button className="bg-gradient-to-r from-indigo-500 to-sky-500 text-white px-6 py-2.5 rounded-xl font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-200 hover:scale-105 inline-flex items-center gap-2">
              <span>📤</span>
              <span>上传照片</span>
            </button>
          </div>
        </div>
      </div>

      {/* AI 功能介绍 */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-5 border border-amber-100">
          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-md mb-3">
            <span className="text-xl">🔍</span>
          </div>
          <h4 className="font-semibold text-slate-800 mb-1">OCR 文字识别</h4>
          <p className="text-sm text-slate-600">自动提取图片中的文字内容</p>
        </div>
        <div className="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-2xl p-5 border border-sky-100">
          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-md mb-3">
            <span className="text-xl">🏷️</span>
          </div>
          <h4 className="font-semibold text-slate-800 mb-1">智能标签</h4>
          <p className="text-sm text-slate-600">AI 自动生成照片描述和标签</p>
        </div>
        <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-5 border border-violet-100">
          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-md mb-3">
            <span className="text-xl">💬</span>
          </div>
          <h4 className="font-semibold text-slate-800 mb-1">语义搜索</h4>
          <p className="text-sm text-slate-600">用自然语言查找照片</p>
        </div>
      </div>
    </div>
  );
}
