import { useState } from 'react';
import './Memos.css';

export default function Memos() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-6">
      {/* 页面头部 */}
      <div className="page-header-actions">
        <div>
          <h2 className="page-title">备忘录</h2>
          <p className="page-subtitle">记录生活中的点点滴滴</p>
        </div>
        <button className="btn-primary">
          <span className="btn-icon">+</span>
          新建
        </button>
      </div>

      {/* 搜索框 */}
      <div className="search-container">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="搜索备忘录..."
          className="search-input"
        />
      </div>

      {/* 空状态 */}
      <div className="empty-dashed">
        <div className="empty-dashed-icon">
          <span>📝</span>
        </div>
        <h3 className="empty-dashed-title">暂无备忘录</h3>
        <p className="empty-dashed-desc">
          创建一个备忘录，记录重要事项和想法
        </p>
        <button className="btn-primary">
          创建第一个备忘录
        </button>
      </div>
    </div>
  );
}
