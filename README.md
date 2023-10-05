This is a [Next.js](https://nextjs.org/) project bootstrapped with `create-next-app`.

## A few things to know

The `main` branch is the one depoyed in production via netlify (@milstan's account). For now it also uses the zapier account ([accounts@leadbay.ai](mailto:accounts@leadbay.ai)) to automate the form submissions :

- Whenever someone submits with his e-mail to request access, the \[Netlify Form\](<https://www.netlify.com/products/forms/">https://www.netlify.com/products/forms/>) feature triggers an e-mail to the subscriber and adds it to the Folk CRM base (@milstan's account on this one too)
- As we have 2 actions for this one trigger, we need to have a pro Zapier account. Needs to be updated in the future. My researches lead me to do this all in the landing page Next.js app, but there are other solutions. For now, Zapier still needs to be used in order to access Folk's API.

The `scf` branch is a PoC for the Sales Champions Comunity :

- Still the same Next.js app, this one needs he mockup to be released by design.
- Uses Airtable Database as a source to display champions carrousel via Airtable API. I'll leave my API key alive for now, but be sure to switch to a new account by dupplicating the project as the was just for test purpose (which is why the API key is published directly in the .env on the github repo)

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

Open <http://localhost:3000> with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses `next/font` to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
