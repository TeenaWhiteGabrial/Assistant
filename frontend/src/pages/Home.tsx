export default function Home() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">今日概览</h2>

      {/* 统计卡片 */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-sm text-gray-500">今日支出</h3>
          <p className="text-2xl font-bold text-gray-900">¥0</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-sm text-gray-500">待办事项</h3>
          <p className="text-2xl font-bold text-gray-900">0</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-sm text-gray-500">本周记录</h3>
          <p className="text-2xl font-bold text-gray-900">0</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-sm text-gray-500">照片数量</h3>
          <p className="text-2xl font-bold text-gray-900">0</p>
        </div>
      </div>

      {/* 最近记录 */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-4 py-3 border-b">
          <h3 className="font-medium">最近记录</h3>
        </div>
        <div className="p-4">
          <p className="text-gray-500 text-sm">暂无记录，快去添加第一条吧～</p>
        </div>
      </div>
    </div>
  );
}
