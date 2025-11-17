Bitume Google Task – React News App

A responsive React News Application built with Vite, Tailwind CSS, Material UI, and the NewsData.io API.
The app displays live news updates, allows users to search for stories, and filter by categories such as Business, Technology, Sports, Entertainment, Health, and more.

Features:

1.Search news by keyword

2.Browse news by category

3.Default country news set to Nigeria (NG)

4.Loading state while fetching articles

5.Error handling when API fails

6.Fully responsive (mobile-friendly UI)

7.“Read More” button opens articles in a new tab

8.Shows news image, source, title, date, description, etc.

Tech Stack:

React (Vite)

Tailwind CSS

Material UI (MUI)

NewsData.io API

Netlify for deployment

Installation & Setup:
1. Clone the repo
git clone https://github.com/ayodele20011709/bitume-google-task.git
cd bitume-google-task

2. Install dependencies
npm install

3. Create an .env file

Create a file named .env in the root folder:

VITE_NEWS_API_KEY=your_newsdata_api_key_here


Replace your_newsdata_api_key_here with your actual API key.

4. Start development server
npm run dev


Visit:

http://localhost:5173

Deployment (Netlify):
1. Add an Environment Variable in Netlify:

Site Settings → Build & Deploy → Environment → Add Variable

Key: VITE_NEWS_API_KEY
Value: your_api_key_here

2. Deploy build folder

Vite build command:

npm run build


This generates a dist/ folder.

On Netlify, choose Deploy folder → dist.

Project Structure:

project-folder/
│  .env
│  .gitignore
│  eslint.config.js
│  index.html
│  package.json
│  package-lock.json
│  postcss.config.js
│  README.md
│  tailwind.config.js
│  vite.config.js
│
├── public/
│    └── (optional images, icons)
│
└── src/
     │  App.jsx
     │  App.css
     │  index.css
     │  main.jsx
     │
     ├── assets/
     │     └── (images, icons, fonts)
     │
     └── components/
            Home.jsx
            Navbar.jsx
            Newsfeed.jsx


Usage:

Select a category from the navbar

Use the search bar to find specific news

Click Read More to view the full article

Page automatically loads top news for Nigeria by default

Status:

The application is complete with:

News feed

Search functionality

Category filter

Loading + error states

API integration

Mobile responsiveness

 Author:

 Lawal Ganiyat Kofoworola
