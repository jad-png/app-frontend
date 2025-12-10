This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## Project Architecture

```sh

my-personal-project/
├── app/
│   ├── layout.tsx            # Root layout (Global providers like AuthProvider)
│   ├── page.tsx              # Landing page
│   └── (auth)/               # Auth Routes (Pages)
│       ├── login/
│       │   └── page.tsx      # Uses <LoginForm />
│       └── register/
│           └── page.tsx      # Uses <RegisterForm />
│
├── components/               # Global UI (Atoms)
│   └── ui/
│       ├── Button.tsx
│       ├── Input.tsx
│       └── Card.tsx
│
├── features/
│   └── auth/                 # The Auth Feature Module
│       ├── types/
│       │   └── index.ts      # Interfaces (User, LoginResponse, LoginDTO)
│       │
│       ├── api/              # API Layer (Bridge to Nest.js)
│       │   └── authService.ts # Functions: login(), register(), logout()
│       │
│       ├── components/       # Auth-specific UI
│       │   ├── LoginForm.tsx
│       │   └── RegisterForm.tsx
│       │
│       ├── hooks/            # Logic & State
│       │   └── useAuth.ts    # Custom hook calling authService
│       │
│       └── context/          # Global State
│           └── AuthContext.tsx
│
└── lib/
    └── axios.ts              # Configured Axios instance (baseURL, interceptors)

```