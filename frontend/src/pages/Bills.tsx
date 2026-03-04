import { useState } from 'react';
import './Bills.css';

export default function Bills() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  const categories = [
    { name: '餐饮', icon: '🍜', color: 'orange' },
    { name: '交通', icon: '🚗', color: 'blue' },
    { name: '购物', icon: '🛍️', color: 'pink' },
    { name: '娱乐', icon: '🎬', color: 'purple' },
    { name: '其他', icon: '📦', color: 'slate' },
  ];

  return (
    <div className="space-y-6">
      {/* 页面头部 */}
      <div className="page-header-actions">
        <div>
          <h2 className="page-title">记账本</h2>
          <p className="page-subtitle">记录每一笔收支</p>
        </div>
        <button className="btn-primary">
          <span className="btn-icon">+</span>
          记一笔
        </button>
      </div>

      {/* 统计卡片 */}
      <div className="photos-stats-grid">
        <div className="stat-card-gradient emerald">
          <p className="stat-label">本月收入</p>
          <p className="stat-value">¥0.00</p>
        </div>
        <div className="stat-card-gradient red">
          <p className="stat-label">本月支出</p>
          <p className="stat-value">¥0.00</p>
        </div>
        <div className="stat-card-gradient blue">
          <p className="stat-label">结余</p>
          <p className="stat-value">¥0.00</p>
        </div>
      </div>

      {/* 分类快速查看 */}
      <div className="categories-section">
        <h3 className="categories-title">支出分类</h3>
        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category.name} className="category-item">
              <div className={`category-icon ${category.color}`}>
                <span>{category.icon}</span>
              </div>
              <p className="category-name">{category.name}</p>
              <p className="category-value">¥0</p>
            </div>
          ))}
        </div>
      </div>

      {/* 账单列表 */}
      <div className="bills-card">
        <div className="bills-header">
          <h3 className="bills-title">本月账单</h3>
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(Number(e.target.value))}
            className="month-selector"
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
        <div className="card-body center">
          <div className="empty-circle-icon emerald">
            <span>💰</span>
          </div>
          <p className="empty-state-text">暂无账单记录</p>
          <p className="empty-state-subtext">开始记账，追踪你的每一笔收支</p>
        </div>
      </div>
    </div>
  );
}
