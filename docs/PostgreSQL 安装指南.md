# PostgreSQL 安装指南（Windows）

## 方法一：使用图形化安装包（推荐新手）

### 1. 下载安装包

访问：https://www.enterprisedb.com/downloads/postgres-postgresql-downloads

下载 **PostgreSQL 15.x** 或更高版本

### 2. 安装步骤

1. 双击运行安装程序
2. 点击 **Next**
3. 选择安装组件（全选）
4. 选择安装位置（默认即可）
5. **设置密码**（重要！记住这个密码）
6. Port 保持 **5432**
7. 点击 **Next** 开始安装
8. 完成

### 3. 验证安装

打开 **pgAdmin 4**（安装时会自动安装），如果能打开说明安装成功。

### 4. 创建数据库

1. 在 pgAdmin 中，展开 **Servers** → **PostgreSQL 15**
2. 输入密码（刚才设置的）
3. 右键 **Databases** → **Create** → **Database**
4. 输入名称：`assistant`
5. 点击 **Save**

---

## 方法二：使用 Docker（如果你熟悉 Docker）

```bash
docker run -d \
  --name postgres \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=assistant \
  -p 5432:5432 \
  -v postgres_data:/var/lib/postgresql/data \
  postgres:15
```

---

## 配置项目

安装完成后，编辑 `backend\.env` 文件：

```env
DATABASE_URL="postgresql://postgres:你的密码@localhost:5432/assistant?schema=public"
```

---

## 关于 pgvector

pgvector 是 PostgreSQL 的向量扩展，用于 AI 语义搜索。

**暂时可以不安装**，等我们需要用语义搜索功能时再安装。

如果你现在就想安装，可以参考：
https://github.com/pgvector/pgvector#windows

或者使用已预装 pgvector 的 PostgreSQL 发行版：
- https://github.com/zalando/pg_quarantine
- 或使用 Docker 镜像：`pgvector/pgvector:pg15`

---

## 测试连接

1. 打开 pgAdmin 4
2. 连接到 PostgreSQL（输入密码）
3. 如果能看到 `assistant` 数据库，说明配置成功
