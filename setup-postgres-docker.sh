# PostgreSQL + pgvector Docker 安装脚本
# 使用方法：bash ./setup-postgres-docker.sh

# 停止并删除旧容器（如果有）
docker stop postgres 2>/dev/null || true
docker rm postgres 2>/dev/null || true

# 拉取带有 pgvector 的 PostgreSQL 镜像
echo "正在拉取 PostgreSQL 15 + pgvector 镜像..."
docker pull pgvector/pgvector:pg15

# 启动容器
echo "正在启动 PostgreSQL 容器..."
docker run -d \
  --name postgres \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=assistant \
  -p 5432:5432 \
  -v postgres_data:/var/lib/postgresql/data \
  pgvector/pgvector:pg15

# 等待容器启动
echo "等待 PostgreSQL 启动..."
sleep 3

# 验证
echo ""
echo "=== PostgreSQL 安装完成 ==="
echo ""
echo "容器状态："
docker ps --filter name=postgres

echo ""
echo "连接信息："
echo "  主机：localhost"
echo "  端口：5432"
echo "  数据库：assistant"
echo "  用户：postgres"
echo "  密码：postgres"
echo ""
echo "项目配置：在 backend/.env 中设置："
echo '  DATABASE_URL="postgresql://postgres:postgres@localhost:5432/assistant?schema=public"'
echo ""
