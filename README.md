# Wenny - Modern Next.js Template

A comprehensive Next.js template with Redux Toolkit, RTK Query, Axios, Tailwind CSS, Sass, and modern development tools.

## 🚀 Features

### Core Technologies

- **Next.js 15** - Latest App Router with Server Components
- **TypeScript** - Full type safety
- **React 19** - Latest React features

### State Management & API

- **Redux Toolkit** - Predictable state container
- **RTK Query** - Data fetching and caching
- **Axios** - HTTP client with interceptors

### Styling

- **Tailwind CSS** - Utility-first CSS framework
- **Sass** - CSS preprocessor for advanced styling
- **CSS Modules** - Component-scoped styling

### Development Tools

- **ESLint** - Code linting with Next.js config
- **Prettier** - Code formatting
- **Husky** - Git hooks for code quality
- **Lint-staged** - Pre-commit linting
- **TypeScript** - Static type checking

## 📦 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Initialize git (if not already initialized)
git init

# Install Husky hooks
npm run prepare
```

### Development

```bash
# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 🏗️ Project Structure

```
wenny/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with Redux Provider
│   ├── page.tsx           # Home page with examples
│   └── globals.css        # Global styles with Tailwind
├── components/            # React components
│   └── examples/          # Example components
├── lib/                   # Core library code
│   ├── redux/            # Redux setup
│   │   ├── store.ts      # Redux store configuration
│   │   ├── hooks.ts      # Typed Redux hooks
│   │   ├── provider.tsx  # Redux Provider component
│   │   └── slices/       # Redux slices
│   │       ├── counterSlice.ts  # Counter state example
│   │       └── apiSlice.ts      # RTK Query API setup
│   └── axios/            # Axios setup
│       └── axiosInstance.ts  # Configured Axios instance
├── styles/               # SCSS modules
│   └── example.module.scss
├── .husky/              # Git hooks
├── .eslintrc.json       # ESLint configuration
├── .prettierrc          # Prettier configuration
├── tailwind.config.ts   # Tailwind configuration
└── tsconfig.json        # TypeScript configuration
```

## 🎯 Key Files

### Redux Setup

- `lib/redux/store.ts` - Redux store with RTK Query middleware
- `lib/redux/hooks.ts` - Typed useDispatch and useSelector hooks
- `lib/redux/slices/counterSlice.ts` - Example Redux slice
- `lib/redux/slices/apiSlice.ts` - RTK Query API endpoints

### Axios Setup

- `lib/axios/axiosInstance.ts` - Configured Axios with interceptors
  - Request interceptor for authentication
  - Response interceptor for error handling
  - Helper functions (get, post, put, del)

## 📝 Scripts

```bash
npm run dev          # Start development server
npm run build        # Create production build
npm start            # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
npm run type-check   # Run TypeScript type checking
```

## 🎨 Styling

### Tailwind CSS

Use utility classes directly in your JSX:

```tsx
<div className="bg-blue-500 text-white p-4 rounded-lg">Hello Tailwind!</div>
```

### Sass Modules

Create `.module.scss` files for component-specific styles:

```scss
// styles/example.module.scss
.container {
  padding: 2rem;

  .title {
    font-size: 2rem;

    &:hover {
      color: blue;
    }
  }
}
```

```tsx
import styles from "@/styles/example.module.scss";

<div className={styles.container}>
  <h1 className={styles.title}>Hello Sass!</h1>
</div>;
```

## 🔄 Redux Usage

### Using Redux Slices

```tsx
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { increment, decrement } from "@/lib/redux/slices/counterSlice";

function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}
```

### Using RTK Query

```tsx
import { useGetPostsQuery } from "@/lib/redux/slices/apiSlice";

function Posts() {
  const { data, isLoading, error } = useGetPostsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <div>
      {data?.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
```

## 🌐 Axios Usage

### Using Axios Instance

```tsx
import { axiosInstance, get, post } from "@/lib/axios/axiosInstance";

// Direct instance usage
const response = await axiosInstance.get("/endpoint");

// Helper functions
const data = await get<DataType>("/endpoint");
const newData = await post<DataType>("/endpoint", { key: "value" });
```

## 🛠️ Configuration

### Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
```

### Customize Axios

Edit `lib/axios/axiosInstance.ts` to customize:

- Base URL
- Timeout
- Headers
- Interceptors

### Customize Redux

Edit `lib/redux/store.ts` to add more slices or middleware.

## 🔒 Git Hooks

Husky is configured to run:

- **Pre-commit**: Lint and format staged files
- Automatic with `git commit`

## 🤝 Contributing

1. Create a new branch
2. Make your changes
3. Ensure all lints pass
4. Submit a pull request

## 📄 License

MIT

## 🙏 Acknowledgments

Built with:

- [Next.js](https://nextjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)

---

Happy coding! 🎉
