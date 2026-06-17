# BiciSmartIoT Landing Page

Official landing page for BiciSmartIoT.

This repository contains the public marketing website used to present the platform, its features, pricing plans, and contact information. The landing page is completely independent from the main application and only redirects users to the frontend when they choose to access the platform.

---

## Project Structure

```text
src/
├── app/
├── components/
│   ├── landing/
│   └── ui/
├── context/
└── config/
```

### Main Sections

* Hero
* Features
* Why Us
* Pricing Plans
* FAQ
* Contact
* Call To Action (CTA)
* Footer

---

## Frontend Redirection

The landing page does not contain authentication, dashboards, or business logic.

Users are redirected to the main application through the Call To Action buttons.

The destination URL is configured through an environment variable.

---

## Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_APP_URL=https://your-frontend-domain.com
```

Example:

```env
NEXT_PUBLIC_APP_URL=https://front-end-1c8.pages.dev
```

This variable is used by the landing page CTA buttons to redirect users to the application login page:

```text
${NEXT_PUBLIC_APP_URL}/login
```

---

## Installation

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Build

Create a production build:

```bash
npm run build
```

Start production server:

```bash
npm run start
```

---

## Technologies

* Next.js 16
* React 19
* TypeScript
* Tailwind CSS
* Lucide React

---

## Related Repositories

### Landing Page

Public marketing website.

### Frontend Application

Main application containing:

* Authentication
* User profiles
* Fleet management
* Active rides
* Dashboard
* Business functionality

The landing page should remain independent from the frontend application.
