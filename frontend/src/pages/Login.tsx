import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/');
    }, 1000);
  };

  return (
    <div className="login-container">
      {/* 背景装饰 */}
      <div className="login-background">
        <div className="login-background-decor"></div>
      </div>

      <div className="login-card">
        {/* Logo */}
        <div className="login-logo">
          <div className="login-logo-icon">
            <span>✨</span>
          </div>
          <h2 className="login-title">
            AI 个人助手
          </h2>
          <p className="login-subtitle">
            登录开启你的智能生活
          </p>
        </div>

        {/* 登录表单 */}
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label className="form-label">
              用户名
            </label>
            <div className="input-wrapper">
              <span className="input-icon">
                👤
              </span>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="请输入用户名"
                className="form-input"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">
              密码
            </label>
            <div className="input-wrapper">
              <span className="input-icon">
                🔒
              </span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="请输入密码"
                className="form-input"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="submit-button"
          >
            {isLoading ? (
              <span className="loading-spinner">
                <span className="spinner"></span>
                <span>登录中...</span>
              </span>
            ) : (
              '登录 / 注册'
            )}
          </button>
        </form>

        {/* 底部分割线 */}
        <div className="form-divider">
          <div className="form-divider-line"></div>
          <div className="form-divider-text">
            <span>温馨提示</span>
          </div>
        </div>

        {/* 底部提示 */}
        <p className="form-footer">
          首次登录将自动创建账号
        </p>
      </div>

      {/* 底部装饰 */}
      <p className="login-footer">
        powered by AI · 让生活和工作效率翻倍
      </p>
    </div>
  );
}
