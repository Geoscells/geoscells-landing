<p align="center">
    <img src="assets/logo.svg" alt="Oleksii Sapon - CV repo logo" style="width:128px;height:128px;"/>
</p>
<p align="center">
    <h1 align="center">GEOSCELLS-LANDING</h1>
</p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/Sass-CC6699.svg?style=flat&logo=Sass&logoColor=white" alt="Sass">
	<img src="https://img.shields.io/badge/i18next-26A69A.svg?style=flat&logo=i18next&logoColor=white" alt="i18next">
	<br>
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/Prettier-F7B93E.svg?style=flat&logo=Prettier&logoColor=black" alt="Prettier">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

##  Quick Links

> - [ Overview](#-overview)
> - [ Features](#-features)
> - [ Repository Structure](#-repository-structure)
> - [ Getting Started](#-getting-started)
>   - [ Installation](#-installation)
>   - [ Building (for production)](#-building-for-production)
>   - [ Running geoscells-landing](#-running-geoscells-landing)


---

##  Overview

The landing page for hte Geoscells. It's built on React and Next.js w/ RSC (React Server Components), making it SEO friendly.

---

##  Features

|    |   Feature         | Description                                                                                                                       |
|----|-------------------|-----------------------------------------------------------------------------------------------------------------------------------|
| ⚙️  | **Architecture**  | This project uses a modern frontend architecture, with Next.js as the framework, and React for the UI components.                 |
| 🔩 | **Code Quality**  | Code quality is maintained with ESLint for linting, Prettier for code formatting, and Typescript for static type checking.        |
| 📄 | **Documentation** | Lack of detailed documentation is evident, but code is self explanatory with clear filename and folder structure.                 |
| 🔌 | **Integrations**  | Main integration is with i18next for internationalisation support and sharp for image processing.                                 |
| 🧩 | **Modularity**    | Modularity is ensured through use of reusable React components. Typescript interfaces & types are well-defined.                   |
| ⚡️  | **Performance**   | Thanks to Next.js, the website benefits from SSG/SSR improving first-page load times.                                             |
| 🛡️ | **Security**      | The security should be handled externally.                                                                                        |
| 📦 | **Dependencies**  | Key dependencies include Next.js, React, i18next for i18n, classnames for CSS classes, and sharp for image handling.              |
| 🚀 | **Scalability**   | The project is built on Next.js which is well-suited for scalability due to its server-side rendering and static site generation. |


---

##  Repository Structure

Limited deep dive into the repository structure is possible due to the large number of files and directories. However, the following is a high-level overview of the repository structure:

```sh
└── geoscells-landing/
    ├── .env.example
    ├── .eslintrc.json
    ├── .nvmrc
    ├── .prettierignore
    ├── .prettierrc.js
    ├── jsconfig.json
    ├── next.config.mjs
    ├── package-lock.json
    ├── package.json
    ├── src
    │   ├── LngInterface.ts
    │   ├── app
    │   │   └── [lng]
    │   ├── components
    │   │   ├── ActiveResearchItem
    │   │   ├── BackToTopButton
    │   │   ├── ButtonLink
    │   │   ├── CollabOptionItem
    │   │   ├── ContentWrapper
    │   │   ├── Footer
    │   │   ├── Header
    │   │   ├── Logo
    │   │   ├── PreviewSection
    │   │   ├── PrincipleItem
    │   │   └── TeamMember
    │   ├── fonts
    │   │   ├── Gilroy-Bold.ttf
    │   │   ├── Gilroy-Regular.ttf
    │   │   ├── Gilroy-SemiBold.ttf
    │   │   └── index.ts
    │   ├── i18n
    │   │   ├── @types
    │   │   ├── index.ts
    │   │   ├── locales
    │   │   └── settings.ts
    │   ├── middleware.ts
    │   └── styles
    │       ├── functions.scss
    │       ├── global.scss
    │       └── variables.scss
    └── tsconfig.json
```

---

##  Getting Started

***Requirements***

Ensure you have the following dependencies installed on your system:

* **Node.js**: `version 20.11.0`

###  Installation

1. Clone the geoscells-landing repository:

```sh
git clone https://github.com/alexiuscrow/geoscells-landing
```

2. Change to the project directory:

```sh
cd geoscells-landing
```

3. Install the dependencies:

```sh
npm install
```

###  Building (for production)

Before running in production mode, build the project:

```sh
npm run build
```

###  Running geoscells-landing

Use the following command to run geoscells-landing:

```sh
npm run start
```


