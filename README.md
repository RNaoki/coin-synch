First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Second, run the json server inside the json-server folder (src/app/api/json-server):

```bash
npx json-server-auth -p 4000 db.json
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
