# API 接口设计文档

## 1. 接口规范

- **基础路径**: `/api/v1`
- **数据格式**: JSON
- **认证方式**: JWT Bearer Token
- **响应格式**:
```json
{
  "code": 200,
  "data": {},
  "message": "success"
}
```

---

## 2. 核心接口

### 2.1 用户认证

| 接口 | 方法 | 说明 |
|------|------|------|
| `/auth/register` | POST | 注册（首次使用） |
| `/auth/login` | POST | 登录 |
| `/auth/logout` | POST | 登出 |
| `/auth/refresh` | POST | 刷新 Token |
| `/auth/profile` | GET | 获取用户信息 |
| `/auth/settings` | PUT | 更新用户配置 |

### 2.2 记录管理（核心）

| 接口 | 方法 | 说明 |
|------|------|------|
| `/entries` | POST | 创建新记录 |
| `/entries` | GET | 获取记录列表 |
| `/entries/:id` | GET | 获取单条记录 |
| `/entries/:id` | PUT | 更新记录 |
| `/entries/:id` | DELETE | 删除记录 |
| `/entries/search` | POST | 语义搜索 |

**创建记录请求示例：**
```json
POST /api/v1/entries
{
  "type": "auto",  // 或指定 memo/bill/diary/photo
  "content": "今天打车花了 35 块去公司",
  "attachments": ["file_key_1"]  // 可选
}
```

**创建记录响应示例：**
```json
{
  "code": 200,
  "data": {
    "id": "uuid",
    "type": "bill",  // AI 自动识别类型
    "title": "交通支出",
    "content": "今天打车花了 35 块去公司",
    "structured_data": {
      "amount": 35,
      "category": "交通",
      "merchant": "网约车"
    },
    "ai_reply": "已记录：交通支出 35 元",
    "created_at": "2026-03-03T10:30:00Z"
  }
}
```

### 2.3 备忘录

| 接口 | 方法 | 说明 |
|------|------|------|
| `/memos` | GET | 获取备忘录列表 |
| `/memos/:id` | GET | 获取单条备忘录 |
| `/memos/:id/remind` | POST | 设置提醒 |
| `/memos/pending` | GET | 获取待提醒事项 |

### 2.4 记账

| 接口 | 方法 | 说明 |
|------|------|------|
| `/bills` | GET | 获取账单列表 |
| `/bills/stats` | GET | 统计信息（日报/月报） |
| `/bills/categories` | GET | 分类统计 |
| `/bills/export` | GET | 导出账单 |

### 2.5 工作日报

| 接口 | 方法 | 说明 |
|------|------|------|
| `/diaries` | GET | 获取日报列表 |
| `/diaries/:date` | GET | 获取指定日期日报 |
| `/diaries/:date/generate` | POST | AI 生成/补充日报 |
| `/diaries/weekly` | GET | 获取周报汇总 |

### 2.6 照片管理

| 接口 | 方法 | 说明 |
|------|------|------|
| `/photos` | GET | 获取照片列表 |
| `/photos/upload` | POST | 上传照片 |
| `/photos/:id/ocr` | GET | 获取 OCR 结果 |
| `/photos/search` | POST | 图片语义搜索 |

### 2.7 知识库

| 接口 | 方法 | 说明 |
|------|------|------|
| `/knowledge` | GET | 获取文档列表 |
| `/knowledge/upload` | POST | 上传文档 |
| `/knowledge/query` | POST | 智能问答 |
| `/knowledge/:id` | DELETE | 删除文档 |

**智能问答示例：**
```json
POST /api/v1/knowledge/query
{
  "question": "我上次去北京是什么时候？",
  "scope": "all"  // 或指定 photos/memos/diaries
}
```

---

## 3. AI 相关接口

### 3.1 对话接口（流式）

```
POST /api/v1/ai/chat
Content-Type: application/json
Accept: text/event-stream

{
  "message": "帮我规划一下周末去上海的行程",
  "context": {...}  // 可选，历史上下文
}
```

**流式响应：**
```
data: {"type": "thinking", "content": "正在分析..."}

data: {"type": "reply", "content": "好的，我来帮你规划"}

data: {"type": "done", "entries_created": [1, 2, 3]}
```

### 3.2 批量处理

```
POST /api/v1/ai/batch
{
  "entries": [
    {"type": "text", "content": "..."},
    {"type": "image", "file_key": "..."}
  ]
}
```

---

## 4. 系统接口

| 接口 | 方法 | 说明 |
|------|------|------|
| `/health` | GET | 健康检查 |
| `/config` | GET | 获取前端配置 |
| `/stats` | GET | 用户数据统计 |

---

## 5. 错误码定义

| 错误码 | 说明 |
|--------|------|
| 200 | 成功 |
| 400 | 请求参数错误 |
| 401 | 未授权 |
| 403 | 禁止访问 |
| 404 | 资源不存在 |
| 500 | 服务器内部错误 |
| 1001 | AI 处理失败 |
| 1002 | 文件上传失败 |
| 1003 | 数据库错误 |

---

## 6. WebSocket 接口

用于实时推送和流式响应：

```
/ws/chat?token=xxx  // AI 对话流
/ws/notify?token=xxx  // 通知推送
```
