import './Home.css';

export default function Home() {
  const stats = [
    { label: '今日支出', value: '¥0.00', icon: '💰', color: 'emerald' },
    { label: '待办事项', value: '0', icon: '✅', color: 'blue' },
    { label: '本周记录', value: '0', icon: '📝', color: 'violet' },
    { label: '照片数量', value: '0', icon: '📷', color: 'orange' },
  ];

  return (
    <div className="space-y-6">
      {/* 页面标题 */}
      <div className="page-header">
        <div>
          <h2 className="page-title">今日概览</h2>
          <p className="page-subtitle">
            {new Date().toLocaleDateString('zh-CN', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              weekday: 'long'
            })}
          </p>
        </div>
        <div className="text-right">
          <p className="page-subtitle">早上好</p>
          <p className="page-title" style={{ fontSize: '18px' }}>User 👋</p>
        </div>
      </div>

      {/* 统计卡片 */}
      <div className="home-stats-grid">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="home-stat-card"
          >
            <div className={`stat-corner-decor ${stat.color}`}></div>
            <div className="stat-content">
              <div className={`stat-icon-box ${stat.color}`}>
                <span>{stat.icon}</span>
              </div>
              <p className="stat-label">{stat.label}</p>
              <p className="stat-value">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* AI 快捷指令 */}
      <div className="ai-quick-section">
        <h3 className="ai-quick-title">
          <span className="ai-quick-icon">✨</span>
          AI 快捷指令
        </h3>
        <div className="quick-actions-grid">
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
              className="quick-action-btn"
            >
              <span className="quick-action-icon">{cmd.icon}</span>
              <span className="quick-action-text">{cmd.text}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 最近记录 */}
      <div className="recent-card">
        <div className="recent-header">
          <h3 className="recent-title">
            <span className="recent-indicator"></span>
            最近记录
          </h3>
          <button className="recent-view-all">
            查看全部
          </button>
        </div>
        <div className="recent-body">
          <div className="text-center">
            <div className="recent-empty-icon">
              <span>📭</span>
            </div>
            <p className="recent-empty-text">暂无记录</p>
            <p className="recent-empty-subtext">使用底部输入框快速添加第一条记录</p>
          </div>
        </div>
      </div>
    </div>
  );
}
