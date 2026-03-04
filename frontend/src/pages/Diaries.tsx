import './Diaries.css';

export default function Diaries() {
  return (
    <div className="space-y-6">
      {/* 页面头部 */}
      <div className="page-header-actions">
        <div>
          <h2 className="page-title">工作日报</h2>
          <p className="page-subtitle">记录每天的工作成果</p>
        </div>
        <button className="btn-primary">
          <span className="btn-icon">+</span>
          写日报
        </button>
      </div>

      {/* 本周统计 */}
      <div className="diaries-stats-grid">
        <div className="stat-card">
          <p className="stat-label">本周日报</p>
          <p className="stat-value">0 篇</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">完成任务</p>
          <p className="stat-value">0</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">工作时长</p>
          <p className="stat-value">0h</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">连续天数</p>
          <p className="stat-value">0 天</p>
        </div>
      </div>

      {/* 日报列表 */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">历史日报</h3>
        </div>
        <div className="card-body center">
          <div className="empty-circle-icon violet">
            <span>📊</span>
          </div>
          <p className="empty-state-text">暂无日报记录</p>
          <p className="empty-state-subtext">每天花几分钟记录工作成果，见证你的成长</p>
        </div>
      </div>

      {/* AI 生成日报 */}
      <div className="ai-generate-card">
        <div className="ai-generate-content">
          <div className="ai-generate-icon">
            <span>✨</span>
          </div>
          <div className="ai-generate-text">
            <h3 className="ai-generate-title">AI 帮你写日报</h3>
            <p className="ai-generate-desc">
              告诉 AI 你今天做了什么，它会自动生成一份结构化的工作日报
            </p>
            <button className="ai-generate-btn">
              尝试 AI 生成
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
