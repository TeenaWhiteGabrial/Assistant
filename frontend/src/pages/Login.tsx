export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
        <div>
          <h2 className="text-center text-3xl font-bold text-gray-900">
            AI 个人助手
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            登录或注册账号
          </p>
        </div>
        <form className="mt-8 space-y-6">
          <input
            type="text"
            placeholder="用户名"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="密码"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-500 py-2 text-white font-medium hover:bg-blue-600"
          >
            登录 / 注册
          </button>
        </form>
      </div>
    </div>
  );
}
