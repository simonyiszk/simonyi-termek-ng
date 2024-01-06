# simonyi-termek-ng

Stack:

- TypeScript
- Next.js
- NextAuth.js
- Prisma
- tRPC
- Zod
- Tailwind CSS
- ESLint
- Bun

## Before project setup

- Install Bun: [install page](https://bun.sh/docs/installation)
- Install FNM (Fast Node Manager): [install page](https://github.com/Schniz/fnm#installation)

## Project setup

Install dependencies:

```bash
bun install
```

Start dev server:

```bash
bun run dev
```

## Utility scripts

Prototype schema (without actual migration):

```bash
bun run db:push
bun run db:push --force-reset
```

Migrate database

```bash
bun run db:migrate
bun run db:migrate:dev --name <NAME_OF_MIGRATION>
```

Generate database

```bash
bun run db:generate 
```

Seed db with test data:

```bash
bun run db:seed
```
