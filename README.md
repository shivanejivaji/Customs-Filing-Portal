# Customs Filing Portal

A modern, responsive web application designed for customs brokers to manage their daily customs filing operations. Built with **React** and **Tailwind CSS**.

## Overview

The Customs Filing Portal provides customs brokers with an intuitive interface to manage their clients' customs filings, track submission status, and maintain customer relationships. The application focuses on usability for professionals who may not be highly technical, offering a clean and straightforward user experience.

### Features

Login & Register forms with toggle support
Dashboard Summary Cards (Pending, Approved, Completed, Customers)
Shipment/Project Status List with tracking and color-coded status badges
Icon support via `lucide-react`
Responsive design for all screen sizes (mobile, tablet, desktop)

### Tech Stack

- [React](https://reactjs.org/) – UI library
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework
- [Lucide React](https://lucide.dev/) – Icon library
- (Optional) [Shadcn UI](https://ui.shadcn.com/) – UI components

### Installation

git clone https://github.com/shivanejivaji/Customs-Filing-Portal.git

npm install
npm start
npm install lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

Then configure tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

### How to Run Project
-npm start
You can now view customs-filing-portal in the browser.      

  Local:            http://localhost:3000        
  On Your Network:  http://192.168.56.1:3000 

### Add Tailwind to index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

### Customization

You can add more dashboard widgets/cards via DashboardCards.jsx.
Add or edit rows in StatusList.jsx for your own tracking items.
Modify color schemes easily via Tailwind classes.

**Screenshots**
*Login Page*
![image](https://github.com/user-attachments/assets/63b715a5-c40d-41b8-aad2-56e1d24da04a)

*Register Page*
![image](https://github.com/user-attachments/assets/fbf5c806-97cf-443b-a50b-eaea7cbaf764)

*Dashboard Page*
![image](https://github.com/user-attachments/assets/7c443175-ed46-408e-960b-8eba023deef4)

*Help Page*
![image](https://github.com/user-attachments/assets/3bc0f390-0443-4d78-ac5d-a0437d75abff)

## Author
Made by Jivaji Shivane
Feel free to reach out or contribute!
