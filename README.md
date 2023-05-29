## Nano Stores + Astro + Liveblocks demo

This demo shows you how to make a [Nano Stores](https://github.com/nanostores/nanostores) store collaborative with [Liveblocks](https://liveblocks.io/) in [Astro](https://astro.build).

### Set up Liveblocks

- Install all dependencies with `npm install`
- Create an account on [liveblocks.io](https://liveblocks.io/dashboard)
- Copy your **public** key from the [dashboard](https://liveblocks.io/dashboard/apikeys)
- Create an `.env.local` file and add your **public** key as the `NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY` environment
  variable
- Run `npm run dev` and go to [http://localhost:3000](http://localhost:3000)
