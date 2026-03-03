# AI 个人助手

一个以 AI 为核心、多端互通的个人智能助手。

## 快速开始

### 环境要求

- Node.js >= 20
- PostgreSQL >= 15
- 阿里百炼 API Key

### 安装步骤

1. **安装 PostgreSQL**
   - 下载：https://www.postgresql.org/download/windows/
   - 创建数据库：`assistant`

2. **配置后端**
   ```bash
   cd backend
   # 编辑 .env 文件，配置数据库连接和 API Key
   npx prisma migrate dev --name init
   npm run start:dev
   ```

3. **启动前端**
   ```bash
   cd frontend
   npm run dev
   ```

4. **访问应用**
   - 前端：http://localhost:5173
   - 后端 API: http://localhost:3000/api/v1

## 技术栈

**后端**
- NestJS + TypeScript
- Prisma ORM
- PostgreSQL + pgvector
- 阿里百炼 AI

**前端**
- React + TypeScript
- Vite
- TailwindCSS
- React Router
- Zustand (状态管理)
- TanStack Query (数据获取)

## 功能规划

- [x] 项目脚手架
- [ ] 用户认证
- [ ] AI 对话输入
- [ ] 备忘录
- [ ] 记账
- [ ] 工作日报
- [ ] 照片管理
- [ ] 知识库

## 文档

- [项目规划](./docs/项目规划.md)
- [数据库设计](./docs/数据库设计.md)
- [API 设计](./docs/API 设计.md)
- [前端设计](./docs/前端设计.md)
- [技术栈入门](./docs/技术栈入门.md)
- [项目启动](./docs/项目启动.md)
