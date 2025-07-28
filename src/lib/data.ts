export const predefinedElements: ReadmeElement[] = [
  {
    id: "readme__title-description",
    title: "Title & Description",
    content: `# Your Project Name

A modern, customizable project template designed to streamline development and documentation. Ideal for developers, startups, and open-source enthusiasts looking to create professional projects with ease.

> Empowering creators to build and share with confidence.
`,
  },
  {
    id: "readme__table-of-contents",
    title: "Table of Contents",
    content: `## 📑 Table of Contents

- [🚀 Introduction](#-introduction)
- [⚙️ Installation](#-installation)
- [✨ Features](#-features)
- [📦 Usage](#-usage)
- [📡 API](#-api)
- [🛠 Tech Stack](#-tech-stack)
- [📷 Screenshots](#-screenshots)
- [🔗 Demo](#-demo)
- [🤝 Contributing](#-contributing)
- [📬 Contact](#-contact)
- [📝 License](#-license)
`,
  },
  {
    id: "readme__introduction",
    title: "Introduction",
    content: `## 👋 Introduction

Welcome to [Your Project Name]! This project is crafted to simplify development with a modern, scalable architecture. Whether you're building an open-source tool, a SaaS product, or a personal portfolio, this template has you covered.

Created by [Your Name], a developer passionate about clean code and user-friendly documentation.
`,
  },
  {
    id: "readme__installation",
    title: "Installation Instructions",
    content: `## 🚀 Installation

Kickstart your project with these steps:

1. **Clone the repository**

   \`\`\`bash
   git clone https://github.com/your-username/your-repo.git
   \`\`\`

2. **Navigate to the project directory**

   \`\`\`bash
   cd your-repo
   \`\`\`

3. **Install dependencies**

   \`\`\`bash
   npm install
   \`\`\`
   > Use \`yarn\` or \`pnpm\` if preferred.

4. **Set up environment variables**

   Copy \`.env.example\` to \`.env\` and configure (see [Environment Variables](#-environment-variables)).

5. **Launch the development server**

   \`\`\`bash
   npm run dev
   \`\`\`

6. **Start building**

   Customize the codebase and documentation to fit your needs.
`,
  },
  {
    id: "readme__features",
    title: "Features",
    content: `## ✨ Features

- 🧩 **Modular Architecture**: Easily extend and customize components
- 🎨 **Sleek Design**: Modern UI with TailwindCSS for rapid styling
- ⚡ **Blazing Fast**: Optimized for performance with Vite and Next.js
- 🔒 **Secure**: JWT-based authentication for protected routes
- 📚 **Rich Documentation**: Pre-built templates for professional READMEs
- 🌐 **Community-Driven**: Open for contributions and feedback
`,
  },
  {
    id: "readme__api-reference",
    title: "API Reference",
    content: `## 📡 API Reference

> Base URL: \`http://localhost:5000/api\`

### 🔐 Authentication Routes

#### 🧾 Register New User

\`\`\`http
POST /api/register
\`\`\`

| Parameter   | Type     | Description                |
| :---------- | :------- | :------------------------- |
| \`email\`   | \`string\` | **Required**. User's email |
| \`password\` | \`string\` | **Required**. User's password |

**Request Body:**
\`\`\`json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
\`\`\`

#### 🧾 Login and Get JWT

\`\`\`http
POST /api/login
\`\`\`

| Parameter   | Type     | Description                |
| :---------- | :------- | :------------------------- |
| \`email\`   | \`string\` | **Required**. User's email |
| \`password\` | \`string\` | **Required**. User's password |

**Request Body:**
\`\`\`json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
\`\`\`

### 📝 Resource Routes (Protected – Requires JWT)

> 🔒 Include the token in the \`Authorization\` header:  
\`Bearer your_jwt_token_here\`

#### 🧾 Get All Resources

\`\`\`http
GET /api/resources/
\`\`\`

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| None      | -        | Retrieves all resources for the authenticated user |

#### 🧾 Create a New Resource

\`\`\`http
POST /api/resources/
\`\`\`

| Parameter     | Type     | Description                |
| :------------ | :------- | :------------------------- |
| \`title\`     | \`string\` | **Required**. Title of the resource |
| \`description\` | \`string\` | **Optional**. Description of the resource |
| \`status\`    | \`string\` | **Optional**. Status (e.g., "pending") |

**Request Body:**
\`\`\`json
{
  "title": "Sample Resource",
  "description": "Description of the resource",
  "status": "pending"
}
\`\`\`

#### 🧾 Update a Resource by ID

\`\`\`http
PUT /api/resources/\${id}
\`\`\`

| Parameter     | Type     | Description                       |
| :------------ | :------- | :-------------------------------- |
| \`id\`        | \`string\` | **Required**. ID of resource to update |
| \`title\`     | \`string\` | **Optional**. Updated title |
| \`description\` | \`string\` | **Optional**. Updated description |
| \`status\`    | \`string\` | **Optional**. Updated status |

**Request Body:**
\`\`\`json
{
  "title": "Updated Resource",
  "description": "Updated description",
  "status": "completed"
}
\`\`\`

#### 🧾 Delete a Resource by ID

\`\`\`http
DELETE /api/resources/\${id}
\`\`\`

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| \`id\`    | \`string\` | **Required**. ID of resource to delete |
`,
  },
  {
    id: "readme__tech-stack",
    title: "Tech Stack",
    content: `## 🛠️ Tech Stack

### 🧩 Frontend
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

### ⚙️ Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

### 🚀 DevOps & Tooling
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black)
`,
  },
  {
    id: "readme__usage-examples",
    title: "Usage / Examples",
    content: `## 🚀 Usage / Examples

### Basic Component Usage

\`\`\`tsx
import { YourComponent } from 'your-project';

function App() {
  return <YourComponent title="Welcome" />;
}
\`\`\`

### API Request Example

\`\`\`bash
curl -X POST http://localhost:5000/api/resources/ \\
  -H "Authorization: Bearer your_jwt_token_here" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "Sample Resource",
    "description": "Description of the resource",
    "status": "pending"
  }'
\`\`\`

> Explore more in the [API Reference](#-api-reference).
`,
  },
  {
    id: "readme__env-variables",
    title: "Environment Variables",
    content: `## 🛠️ Environment Variables

Create a \`.env\` file in the project root:

\`\`\`env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
API_KEY=your_api_key_here
\`\`\`

> ⚠️ Ensure \`.env\` is added to \`.gitignore\` to protect sensitive information.
`,
  },
  {
    id: "readme__screenshots",
    title: "Screenshots",
    content: `## 📸 Screenshots

![App Screenshot](https://images.unsplash.com/photo-1501673618753-48ce9418287b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

> *Replace with your project's actual screenshots to showcase the interface.*
`,
  },
{
  id: "readme__demo",
  title: "Live Demo",
  content: `## 🚀 Live Demo

Experience it in action:  
🔗 [Open Live App](https://your-app-link.com)

Preview snapshot:  
![📸 Demo Preview](https://via.placeholder.com/600x400?text=Live+Demo)

---

`,
},  {
  id: "readme__contributing",
  title: "Contributing",
  content: `## 🤝 Contributing

Contributions make the community better! Here's how you can help:

1. 🍴 Fork this repo
2. 📦 Create a feature branch  
   \`git checkout -b feature/your-awesome-feature\`
3. 🛠️ Make your changes and commit  
   \`git commit -m "feat: add your awesome feature"\`
4. 🚀 Push to GitHub  
   \`git push origin feature/your-awesome-feature\`
5. 📝 Open a Pull Request — we’ll review it together

Please read our [CONTRIBUTING.md](./CONTRIBUTING.md) and [Code of Conduct](./CODE_OF_CONDUCT.md) before contributing.

> Let's build something great together! 💫

---
`,
},  {
    id: "readme__contact",
    title: "Contact",
    content: `## 📬 Contact

Questions or feedback? Reach out:

<p align="left">
  <a href="https://github.com/your-username" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-100000?style=flat-square&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="https://linkedin.com/in/your-profile" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="mailto:your.email@example.com" target="_blank">
    <img src="https://img.shields.io/badge/Email-D14836?style=flat-square&logo=gmail&logoColor=white" alt="Email" />
  </a>
  <a href="https://x.com/your_username" target="_blank">
    <img src="https://img.shields.io/badge/X-000000?style=flat-square&logo=x&logoColor=white" alt="X" />
  </a>
  <a href="https://your-portfolio.com" target="_blank">
    <img src="https://img.shields.io/badge/Portfolio-121212?style=flat-square&logo=vercel&logoColor=white" alt="Portfolio" />
  </a>
</p>
`,
  },
  {
  id: "readme__faq",
  title: "FAQ",
  content: `## ❓ FAQ

<details>
  <summary><strong>🚀 How do I set up the project?</strong></summary>
  <br />
  Head to the [Installation](#-installation) section to clone the repo, install dependencies, and run the dev server.
</details>

<details>
  <summary><strong>🔐 Why is my API request unauthorized?</strong></summary>
  <br />
  Make sure you're sending a valid JWT token in the <code>Authorization</code> header as:  
  <code>Bearer your_jwt_token_here</code>.
</details>

<details>
  <summary><strong>💼 Can I use this for commercial projects?</strong></summary>
  <br />
  Absolutely! This project uses the MIT License, so commercial use is permitted.  
  See [License](#-license) for more details.
</details>

---

`,
},
 {
  id: "readme__roadmap",
  title: "Roadmap",
  content: `## 🚧 Roadmap

What's done, what's cooking:

- ✅ Project scaffold & setup  
- ✅ Core features live  
- 🔜 Advanced customization  
- 🔜 Automated testing integration  
- 🔜 Multi-format export (Markdown, PDF)  
- ⏳ v1.0 release prep

---

`,
},
 {
  id: "readme__license",
  title: "License",
  content: `## 📄 License

This project is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).  
Feel free to use, modify, and distribute with attribution.

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)

---
`,
},  {
    id: "readme__acknowledgements",
    title: "Acknowledgements",
    content: `## 🙏 Acknowledgements

- [React](https://reactjs.org/) for a powerful frontend framework
- [Next.js](https://nextjs.org/) for seamless server-side rendering
- [TailwindCSS](https://tailwindcss.com/) for utility-first styling
- [Node.js](https://nodejs.org/) for the runtime environment
- [Express.js](https://expressjs.com/) for the API
- [MongoDB](https://www.mongodb.com/) for data storage
- [Awesome README](https://github.com/matiassingers/awesome-readme) for inspiration
`,
  },
  {
  id: "readme__badges",
  title: "Badges",
  content: `## 🏅 Badges

Make your README pop with these helpful status indicators:

<p align="left">
  <a href="https://choosealicense.com/licenses/mit/">
    <img alt="MIT License" src="https://img.shields.io/badge/License-MIT-green.svg?style=flat-square" />
  </a>
  <a href="https://github.com/your-username/your-repo/actions">
    <img alt="Build Status" src="https://img.shields.io/github/actions/workflow/status/your-username/your-repo/ci.yml?label=Build&style=flat-square" />
  </a>
  <a href="https://github.com/your-username/your-repo/issues">
    <img alt="Contributions Welcome" src="https://img.shields.io/badge/Contributions-Welcome-brightgreen.svg?style=flat-square" />
  </a>
  <a href="https://github.com/your-username/your-repo/pulls">
    <img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" />
  </a>
</p>

> ✅ Keep these up to date to show your project is alive and contributor-friendly!
`,
},
  {
    id: "readme__social-links",
    title: "Social Links",
    content: `## 🔗 Social Links

<p align="left">
  <a href="https://github.com/your-username" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-100000?style=flat-square&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="https://linkedin.com/in/your-profile" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="mailto:your.email@example.com" target="_blank">
    <img src="https://img.shields.io/badge/Email-D14836?style=flat-square&logo=gmail&logoColor=white" alt="Email" />
  </a>
  <a href="https://x.com/your_username" target="_blank">
    <img src="https://img.shields.io/badge/X-000000?style=flat-square&logo=x&logoColor=white" alt="X" />
  </a>
  <a href="https://your-portfolio.com" target="_blank">
    <img src="https://img.shields.io/badge/Portfolio-121212?style=flat-square&logo=vercel&logoColor=white" alt="Portfolio" />
  </a>
</p>
`,
  },
  {
    id: "readme__github-stats",
    title: "GitHub Stats",
    content: `## 📊 GitHub Stats

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=your-username&show_icons=true&theme=dracula&hide_border=true" alt="GitHub Stats" />
  <br />
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=your-username&theme=dracula&hide_border=true" alt="GitHub Streak" />
  <br />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=your-username&layout=compact&theme=dracula&hide_border=true" alt="Top Languages" />
</p>
`,
  },
  {
    id: "readme__quote",
    title: "Quote or Motto",
    content: `## ✨ Quote I Live By

> *"Code is poetry, documentation is prose. Both matter."*  
> — Your Name
`,
  },
  {
    id: "readme__visitor-counter",
    title: "Visitor Counter",
    content: `## 👁️ Visitor Counter

<p align="left">
  <img src="https://komarev.com/ghpvc/?username=your-username&style=flat-square&color=0e75b6&label=Profile+Views" alt="Visitor Counter" />
</p>
`,
  },
 {
  id: "readme__color-reference",
  title: "Color Reference",
  content: `## 🎨 Color Reference

A quick peek at the color palette used across the project:

| Preview | Name             | Hex Code    |
|--------:|------------------|-------------|
| ![dark](https://via.assets.smashingmagazine.com/color-swatch/1a1a2e.svg) | **Primary Dark**     | \`#1a1a2e\` |
| ![light](https://via.assets.smashingmagazine.com/color-swatch/f5f5f5.svg) | **Light Background** | \`#f5f5f5\` |
| ![blue](https://via.assets.smashingmagazine.com/color-swatch/3b82f6.svg) | **Accent Blue**      | \`#3b82f6\` |
| ![purple](https://via.assets.smashingmagazine.com/color-swatch/9333ea.svg) | **Accent Purple**    | \`#9333ea\` |

> These colors help keep the design consistent and accessible ✨
`,
}
,
  {
    id: "readme__feedback",
    title: "Feedback",
    content: `## 💬 Feedback

Have ideas or found a bug? We’d love your input!

- **Submit an Issue**: [GitHub Issues](https://github.com/your-username/your-repo/issues)  
- **Email**: [your.email@example.com](mailto:your.email@example.com)
`,
  },
  {
    id: "readme__support",
    title: "Support",
    content: `## 🛠️ Support

Need help or have questions? We’ve got you covered:

- 📬 **Email**: [your.email@example.com](mailto:your.email@example.com)  
- 💬 **Discord**: [Join the community](https://discord.gg/your-invite-link)  
- 📚 **Docs**: Visit the [FAQ](#-faq) or [Usage](#-usage)
`,
  },
  {
    id: "readme__skills",
    title: "Skills",
    content: `## 🧠 Skills

### 💻 Frontend
![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![Tailwind](https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)

### 🛠️ Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)

### ⚙️ Tools
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000?style=flat-square&logo=vercel&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white)
`,
  },
  {
    id: "readme__changelog",
    title: "Changelog",
    content: `## 📝 Changelog

Track key changes and feature milestones:

- **v1.0.0** _(TBD)_
  - 🚀 Initial release with core functionality

- **v0.2.0** _(TBD)_
  - 🔧 Added API support and route enhancements

- **v0.1.0** _(TBD)_
  - 🏗️ Project scaffolding and basic setup

> For detailed logs, see [CHANGELOG.md](./CHANGELOG.md).

---

`,
  },
  {
    id: "readme__code-of-conduct",
    title: "Code of Conduct",
    content: `## 🤝 Code of Conduct

We are committed to fostering an inclusive and respectful community. Please read our [Code of Conduct](./CODE_OF_CONDUCT.md) to understand the expectations for all contributors and users.
`,
  },
  {
  id: "readme__folder-structure",
  title: "Folder Structure",
  content: `## 📁 Folder Structure

Here's how the project is organized:

\`\`\`
.
├── public/              # Static files (images, icons, videos, etc.)
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page-level components / routes
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Utility functions/helpers
│   ├── lib/             # API clients, constants, or shared logic
│   └── styles/          # Global and modular styles
├── .env                 # Environment variables
├── .gitignore           # Git ignored files
├── package.json         # Project metadata and dependencies
└── README.md            # You're reading it!
\`\`\`

> 🧠 Keep things modular — structure should scale as your app grows.
`,
}

];
