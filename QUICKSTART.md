# Wenny Template - Quick Start Guide

## 🎉 What You Just Got

A production-ready Next.js template with:

- **Redux Toolkit** for state management
- **RTK Query** for data fetching
- **Axios** with interceptors for API calls
- **Tailwind CSS** for utility-first styling
- **Sass** for advanced CSS preprocessing
- **Husky** + **Lint-staged** for automated code quality
- **ESLint** + **Prettier** for code standards

## 🚀 Getting Started

### 1. Install Dependencies (Already Done)

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the demo page with:

- Redux counter example
- RTK Query data fetching example
- Tailwind CSS styling examples
- Sass module styling examples

### 3. Build for Production

```bash
npm run build
npm start
```

## 📝 Available Scripts

| Command                | Description                  |
| ---------------------- | ---------------------------- |
| `npm run dev`          | Start development server     |
| `npm run build`        | Build for production         |
| `npm start`            | Start production server      |
| `npm run lint`         | Run ESLint                   |
| `npm run format`       | Format code with Prettier    |
| `npm run format:check` | Check code formatting        |
| `npm run type-check`   | Run TypeScript type checking |

## 🎯 What's Included

### Redux Setup

- Store configured with Redux Toolkit
- Example counter slice (`lib/redux/slices/counterSlice.ts`)
- RTK Query API slice (`lib/redux/slices/apiSlice.ts`)
- Typed hooks (`lib/redux/hooks.ts`)
- Redux Provider wrapper (`lib/redux/provider.tsx`)

### Axios Setup

- Pre-configured instance (`lib/axios/axiosInstance.ts`)
- Request interceptor for authentication
- Response interceptor for error handling
- Helper functions: `get()`, `post()`, `put()`, `del()`

### Styling

- **Tailwind CSS** - Already configured and ready to use
- **Sass Modules** - Example in `styles/example.module.scss`
- Global styles in `app/globals.css`

### Code Quality Tools

- **Husky** - Git hooks automatically run on commit
- **Lint-staged** - Only lints staged files
- **ESLint** - Next.js recommended config + Prettier integration
- **Prettier** - Consistent code formatting

## 🔥 Quick Examples

### Using Redux

```tsx
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { increment } from "@/lib/redux/slices/counterSlice";

function MyComponent() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return <button onClick={() => dispatch(increment())}>Count: {count}</button>;
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

### Using Axios

```tsx
import { get, post } from "@/lib/axios/axiosInstance";

// GET request
const data = await get<MyDataType>("/api/endpoint");

// POST request
const result = await post<ResultType>("/api/endpoint", {
  key: "value",
});
```

### Using Tailwind CSS

```tsx
<div className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600">
  Styled with Tailwind!
</div>
```

### Using Sass Modules

```tsx
import styles from "@/styles/example.module.scss";

<div className={styles.card}>
  <h1 className={styles.title}>Hello Sass!</h1>
</div>;
```

## 🎨 Customization

### Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_API_URL=https://your-api.com
```

### Modify Redux Store

Add more slices in `lib/redux/slices/` and register them in `lib/redux/store.ts`

### Modify Axios Config

Edit `lib/axios/axiosInstance.ts` to customize:

- Base URL
- Timeout
- Headers
- Interceptors

### Modify Tailwind Config

Edit `tailwind.config.ts` to add custom colors, fonts, etc.

## 🔒 Git Hooks

Husky is configured to automatically run before each commit:

1. Lints your code with ESLint
2. Formats your code with Prettier
3. Only processes staged files (fast!)

Try making a commit to see it in action:

```bash
git add .
git commit -m "Your message"
```

## 📦 Project Structure

```
wenny/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with Redux
│   ├── page.tsx           # Demo page
│   └── globals.css        # Global styles
├── components/            # React components
│   └── examples/          # Example components
├── lib/                   # Core library code
│   ├── redux/            # Redux setup
│   │   ├── store.ts      # Store configuration
│   │   ├── hooks.ts      # Typed hooks
│   │   ├── provider.tsx  # Provider component
│   │   └── slices/       # Redux slices
│   └── axios/            # Axios setup
│       └── axiosInstance.ts
├── styles/               # SCSS modules
└── .husky/              # Git hooks
```

## 🚀 Next Steps

1. **Remove Demo Code** - Clear out the example counter and API calls from `app/page.tsx`
2. **Add Your API** - Update `lib/redux/slices/apiSlice.ts` with your endpoints
3. **Create Components** - Build your UI components in `components/`
4. **Add Routes** - Create new pages in `app/`
5. **Style It** - Use Tailwind + Sass to make it beautiful
6. **Deploy** - Deploy to Vercel, Netlify, or your preferred platform

## 💡 Tips

- Use `useAppDispatch` and `useAppSelector` instead of the default Redux hooks
- RTK Query automatically caches API responses and handles loading states
- Axios interceptors are great for adding auth tokens to all requests
- Combine Tailwind for utilities and Sass modules for complex components
- The pre-commit hooks will keep your code clean automatically

## 📚 Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [Redux Toolkit Docs](https://redux-toolkit.js.org/)
- [RTK Query Tutorial](https://redux-toolkit.js.org/tutorials/rtk-query)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Axios Docs](https://axios-http.com/docs/intro)

---

Built with ❤️ - Happy Coding! 🎉
