# Docker Desktop 安装指南（Windows）

## 第一步：下载 Docker Desktop

### 下载地址
https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe

### 或者手动下载
1. 访问：https://www.docker.com/products/docker-desktop/
2. 点击 "Download for Windows"
3. 选择 "Docker Desktop for Windows (Intel/AMD)"

---

## 第二步：安装 Docker Desktop

1. 双击运行下载的 `.exe` 文件
2. 如果提示 "This WSL 2 distro is out of date"，点击 **Update** 和 **OK**
3. 勾选 **Use WSL 2 instead of Hyper-V**（推荐）
4. 点击 **OK** 开始安装
5. 安装完成后点击 **Restart** 或 **Close**

---

## 第三步：启动 Docker Desktop

1. 打开 Docker Desktop 应用
2. 第一次启动可能需要几分钟
3. 接受服务条款
4. 等待底部状态栏显示 **"Engine running"**

---

## 第四步：验证安装

打开一个新的终端（PowerShell 或 Git Bash），运行：

```bash
docker --version
docker ps
```

如果能看到版本信息和空列表，说明安装成功！

---

## 第五步：运行 PostgreSQL

### 方法一：使用脚本（推荐）

```bash
# 在项目根目录运行
bash setup-postgres-docker.sh
```

### 方法二：手动运行

```bash
# 拉取镜像（带 pgvector）
docker pull pgvector/pgvector:pg15

# 启动容器
docker run -d \
  --name postgres \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=assistant \
  -p 5432:5432 \
  -v postgres_data:/var/lib/postgresql/data \
  pgvector/pgvector:pg15
```

---

## 常见问题

### Q: 提示 "WSL 2 内核更新"？

A: 访问以下链接下载安装：
https://learn.microsoft.com/zh-cn/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package

下载 `wsl2_kernel.msi` 并安装。

### Q: 提示 "虚拟化未启用"？

A: 需要在 BIOS 中开启虚拟化：
1. 重启电脑，按 F2/Del 进入 BIOS
2. 找到 **Virtualization Technology** 或 **Intel VT-x**
3. 设置为 **Enabled**
4. 保存退出（通常按 F10）

### Q: Docker Desktop 启动后一直显示 "Starting"？

A: 尝试：
1. 关闭 Docker Desktop
2. 以管理员身份运行 PowerShell
3. 运行：`wsl --shutdown`
4. 重新启动 Docker Desktop

### Q: 容器启动失败？

A: 查看日志：
```bash
docker logs postgres
```

---

## 管理 PostgreSQL 容器

```bash
# 查看容器状态
docker ps

# 停止容器
docker stop postgres

# 启动容器
docker start postgres

# 重启容器
docker restart postgres

# 删除容器（会删除数据！）
docker rm -f postgres

# 查看数据卷
docker volume ls

# 删除数据卷（谨慎！）
docker volume rm postgres_data
```

---

## 连接 PostgreSQL

### 方式一：使用 psql（Docker 内）

```bash
docker exec -it postgres psql -U postgres -d assistant
```

### 方式二：使用 pgAdmin

1. 下载：https://www.pgadmin.org/download/
2. 添加服务器：
   - Host: localhost
   - Port: 5432
   - Username: postgres
   - Password: postgres

### 方式三：使用 VS Code 插件

安装 "PostgreSQL" 插件，然后添加连接。

---

## 配置项目

容器启动后，编辑 `backend\.env`：

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/assistant?schema=public"
```

然后运行：

```bash
cd backend
npx prisma migrate dev --name init
```
