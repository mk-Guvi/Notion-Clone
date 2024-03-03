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

### Scripts Explanations

pull - script will pull all the changes from the db to our local schema files
generate - script will generate the migrations
drop - script will drop the migrations that we dont want to push
check -script will keep upto date with our local schema files

### External Steps/scripts 

I utilized the Stripe query within Supabase to integrate the required Stripe tables. This involved enhancing the query by including email and updated_at fields. Additionally, I adjusted the user table's permissions to ensure visibility to all users.

yarn pull to fetch the stripe tables to local
yarn generate to update the tables

### Referred base Repo 

[WebProdigies-cypress](https://github.com/webprodigies/webprodigies-cypress/tree/main)

### Packages Used 

npm i drizzle-orm postgres dotenv
npm i drizzle-kit -D
