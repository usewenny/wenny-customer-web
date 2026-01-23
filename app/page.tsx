"use client";

import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import {
  increment,
  decrement,
  reset,
  incrementByAmount,
} from "@/lib/redux/slices/counterSlice";
import {
  useGetPostsQuery,
  useGetUsersQuery,
} from "@/lib/redux/slices/apiSlice";
import styles from "@/styles/example.module.scss";

export default function Home() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  // RTK Query example
  const {
    data: posts,
    isLoading: postsLoading,
    error: postsError,
  } = useGetPostsQuery();
  const { data: users, isLoading: usersLoading } = useGetUsersQuery();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to Wenny 🎉
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            A modern Next.js template with all the tools you need
          </p>
        </header>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className={styles.card}>
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              ⚡ Next.js 15
            </h3>
            <p className="text-gray-600">
              Latest App Router with Server Components
            </p>
          </div>
          <div className={styles.card}>
            <h3 className="text-xl font-semibold mb-2 text-purple-600">
              🔄 Redux Toolkit
            </h3>
            <p className="text-gray-600">Predictable state management</p>
          </div>
          <div className={styles.card}>
            <h3 className="text-xl font-semibold mb-2 text-green-600">
              📡 RTK Query
            </h3>
            <p className="text-gray-600">Powerful data fetching & caching</p>
          </div>
          <div className={styles.card}>
            <h3 className="text-xl font-semibold mb-2 text-red-600">
              🌐 Axios
            </h3>
            <p className="text-gray-600">HTTP client with interceptors</p>
          </div>
          <div className={styles.card}>
            <h3 className="text-xl font-semibold mb-2 text-yellow-600">
              🎨 Tailwind CSS
            </h3>
            <p className="text-gray-600">Utility-first CSS framework</p>
          </div>
          <div className={styles.card}>
            <h3 className="text-xl font-semibold mb-2 text-pink-600">
              💅 Sass
            </h3>
            <p className="text-gray-600">CSS preprocessor for styling</p>
          </div>
        </div>

        {/* Counter Demo */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Redux Counter Demo
          </h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <button
              onClick={() => dispatch(decrement())}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg transition"
            >
              -
            </button>
            <span className="text-4xl font-bold text-gray-900 dark:text-white min-w-[100px] text-center">
              {count}
            </span>
            <button
              onClick={() => dispatch(increment())}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition"
            >
              +
            </button>
          </div>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => dispatch(incrementByAmount(5))}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition"
            >
              +5
            </button>
            <button
              onClick={() => dispatch(reset())}
              className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded transition"
            >
              Reset
            </button>
          </div>
        </div>

        {/* RTK Query Demo */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            RTK Query Demo
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Posts */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                Posts {postsLoading && "(Loading...)"}
              </h3>
              {postsError && (
                <p className="text-red-500">Error loading posts</p>
              )}
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {posts?.slice(0, 5).map((post) => (
                  <div
                    key={post.id}
                    className="p-3 bg-gray-50 dark:bg-gray-700 rounded"
                  >
                    <p className="font-semibold text-sm text-gray-800 dark:text-gray-200">
                      {post.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Users */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                Users {usersLoading && "(Loading...)"}
              </h3>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {users?.map((user) => (
                  <div
                    key={user.id}
                    className="p-3 bg-gray-50 dark:bg-gray-700 rounded"
                  >
                    <p className="font-semibold text-sm text-gray-800 dark:text-gray-200">
                      {user.name}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {user.email}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-600 dark:text-gray-400">
          <p>Built with ❤️ using Wenny Template</p>
        </footer>
      </div>
    </div>
  );
}
