# Talk to the HTTPS 🤖

Talk to the HTTPS is an innovative tool that transforms any article into an interactive conversational experience. By simply prepending `ttthttps.vercel.app/` to any article's URL, users can engage with an AI chatbot that answers questions and discusses the content in real time. Enhance your reading experience with dynamic, AI-powered conversations!

## Features

AI Chatbot Interface: Seamlessly integrates with any article for real-time Q&A and discussion.
Contextual Understanding: Provides relevant responses based on the content of the article.
Easy Integration: Just prepend `ttthttps.vercel.app/` to any article URL to start chatting.
Intuitive Design: User-friendly interface for a smooth and engaging experience.

## Tech Stack

- Next.js
- TypeScript
- Upstash
- Qstash
- Tailwind CSS

Try it Out!

Experience Talk to the HTTPS live at [ttthttps.vercel.app](https://ttthttps.vercel.app). Transform your reading into an interactive experience!

To run a development instance locally, clone this repository, install dependencies with npm, and set up a `.env` file with the following keys:

```env
# Upstash Vector
UPSTASH_VECTOR_REST_URL=
UPSTASH_VECTOR_REST_TOKEN=

# Qstash
QSTASH_TOKEN=

# Upstash Redis
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
```

Then, run the development server with:

```sh
npm run dev
```

## Contributing

Contributions are welcome to enhance Talk to the HTTPS. To contribute, please fork the repository and submit a pull request with your improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.
