import './Photos.css';

export default function Photos() {
  return (
    <div className="space-y-6">
      {/* 页面头部 */}
      <div className="page-header-actions">
        <div>
          <h2 className="page-title">照片墙</h2>
          <p className="page-subtitle">珍藏每一个美好瞬间</p>
        </div>
        <button className="btn-primary">
          <span className="btn-icon">+</span>
          上传
        </button>
      </div>

      {/* 统计信息 */}
      <div className="photos-stats-grid">
        <div className="stat-card">
          <p className="stat-label">照片总数</p>
          <p className="stat-value">0</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">存储空间</p>
          <p className="stat-value">0 MB</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">本月上传</p>
          <p className="stat-value">0</p>
        </div>
      </div>

      {/* 照片网格 */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">所有照片</h3>
          <div className="flex items-center gap-2">
            <button className="tool-btn">
              <span>🗂️</span>
            </button>
            <button className="tool-btn">
              <span>🔍</span>
            </button>
          </div>
        </div>
        <div className="card-body center">
          <div className="empty-circle-icon pink">
            <span className="text-4xl">📷</span>
          </div>
          <p className="empty-state-text">暂无照片</p>
          <p className="empty-state-subtext">上传你的第一张照片，AI 会自动识别内容并添加标签</p>
          <button className="btn-primary" style={{ marginTop: '16px' }}>
            <span>📤</span>
            <span>上传照片</span>
          </button>
        </div>
      </div>

      {/* AI 功能介绍 */}
      <div className="features-grid">
        <div className="feature-card amber">
          <div className="feature-icon-box">
            <span>🔍</span>
          </div>
          <h4 className="feature-title">OCR 文字识别</h4>
          <p className="feature-description">自动提取图片中的文字内容</p>
        </div>
        <div className="feature-card sky">
          <div className="feature-icon-box">
            <span>🏷️</span>
          </div>
          <h4 className="feature-title">智能标签</h4>
          <p className="feature-description">AI 自动生成照片描述和标签</p>
        </div>
        <div className="feature-card violet">
          <div className="feature-icon-box">
            <span>💬</span>
          </div>
          <h4 className="feature-title">语义搜索</h4>
          <p className="feature-description">用自然语言查找照片</p>
        </div>
      </div>
    </div>
  );
}
