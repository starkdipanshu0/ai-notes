
# 📝 Notes App

A simple and elegant note-taking web application built with **Next.js 14**, **Drizzle ORM**, **PostgreSQL**, **Clerk for authentication**, and **TailwindCSS** for styling.

## 🚀 Features

- 🔐 User authentication with Clerk
- 🗒️ Create, edit, and view personal notes
- 📋 Each note includes a **title**, **content**, and an AI-generated **summary**
- 📚 Dashboard view of all notes for the logged-in user
- 💾 PostgreSQL database with Drizzle ORM
- 🧠 Clean UI powered by TailwindCSS
- 🧪 Type-safe schema management with Drizzle

---

## 🧱 Tech Stack

| Tech               | Description                                 |
|--------------------|---------------------------------------------|
| **Next.js 14**     | Fullstack React framework                   |
| **Drizzle ORM**    | Type-safe, SQL-friendly ORM for PostgreSQL  |
| **PostgreSQL**     | Relational database                         |
| **Tailwind CSS**   | Utility-first CSS framework                 |
| **Clerk**          | Authentication & user management            |
| **UUID**           | For generating unique IDs for notes         |

---

## 📁 Project Structure
📦 notes-app/ ├── app/ │ ├── dashboard/ → Dashboard page with user notes │ ├── dashboard/notes/ → Dynamic note page ([id].tsx) │ ├── layout.tsx → Root layout │ └── page.tsx → Landing page ├── components/ → Reusable UI components │ ├── ui/ → shadcn/ui based components │ └── navbar.tsx → Navigation bar ├── db/ → Drizzle config and schema ├── lib/ → Utilities and helpers ├── public/ → Static assets ├── styles/ → Tailwind config and global styles ├── .env.local → Environment variables ├── drizzle.config.ts → Drizzle ORM config └── README.md



---

## 🛠️ Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/notes-app.git
cd notes-app
2. Install Dependencies
bash
Copy
Edit
npm install
3. Setup Environment Variables
Create a .env.local file:

env
Copy
Edit
DATABASE_URL=postgres://your_user:your_pass@localhost:5432/your_db
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_FRONTEND_API=...
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
Make sure to configure your PostgreSQL instance and Clerk project.

4. Setup the Database
Run migrations (Drizzle):

bash
Copy
Edit
npx drizzle-kit push
5. Run the Development Server
bash
Copy
Edit
npm run dev
Visit http://localhost:3000 to see your app in action.

✍️ Example Usage
Login using Clerk

Click "Create New Note" to open a new note page

Start writing a note → summary is generated

Return to dashboard to see all notes

⚙️ Commands

Command	Description
npm run dev	Start development server
npm run build	Build for production
npm run start	Start production server
npx drizzle-kit push	Push Drizzle schema changes
📦 Deployment
This app is fully deployable to Vercel, Render, or Railway.

Make sure your environment variables are set in the dashboard

Use PostgreSQL instance from Supabase/Neon/Render

📸 Screenshots
(Add your app screenshots here)

🧑‍💻 Author
Dipanshu Vishwakarma


