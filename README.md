This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Dependencies and steps : 

-  npx create-next-app@latest .
-  yarn add drizzle-orm postgres dotenv
-  yarn add drizzle-kit -D
-  yarn generate //For migrations
-  npm run pull //After running the stripe query in supabase
-  npx shadcn-ui@latest init
-  yarn add next-themes
-  npx shadcn-ui@latest add button
-  npx shadcn-ui@latest add card
-  npx shadcn-ui@latest add avatar
-  npx shadcn-ui@latest add navigation-menu
-  yarn add @supabase/auth-helpers-nextjs @supabase/supabase-js
-  npx shadcn-ui@latest add form
-  npx shadcn-ui@latest add input
-  npx shadcn-ui@latest add separator
-  npx shadcn-ui@latest add alert


## SCRIPTS :

- "push": "drizzle-kit push:pg" //Pushes the schema from local to live
- "pull": "drizzle-kit introspect:pg " //Pulls the schema from live to local
- "generate": "drizzle-kit generate:pg" // Initiates the migrations
- "drop": "drizzle-kit drop" // removes a migration
- "check": "drizzle-kit check:pg" //checks the schema
- "up": "drizzle-kit up:pg" // keeps the schema upto date
-  "migrate": "npm run src/lib/supabase/migration.ts" // As we have added the migration script inside the db file itself we no need to run this