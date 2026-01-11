# 🎬 Netflix-Style Movie Search App 🍿

A high-performance, responsive Movie Search application built with **Vanilla JavaScript**. This project demonstrates core frontend engineering skills, featuring a custom **3D Card Flip** animation to reveal deep-dive movie metadata.

## ✨ Key Features

* **Asynchronous Search:** Real-time movie searching powered by the **OMDB API**.
* **Interactive 3D UI:** Custom CSS 3D transforms (`perspective` and `rotateY`) for an immersive "card flip" experience.
* **Dynamic Metadata:** Fetches specific movie details (Plot, Actors, Director) only when requested to optimize performance.
* **Mobile-First Design:** A fully responsive CSS Grid layout that looks great on all devices.
* **Error Handling:** Graceful handling of empty queries and "Movie Not Found" API responses.

## 🛠️ Tech Stack

* **Structure:** HTML5
* **Styling:** CSS3 (Flexbox, Grid, 3D Transforms)
* **Logic:** Vanilla JavaScript (ES6+, Async/Await, Fetch API)
* **Data Source:** [OMDB API](https://www.omdbapi.com/)

## ⚙️ Local Setup

1. **Clone the repository:**
```bash
git clone https://github.com/azgar0053/movie_search.git

```


2. **Add your API Key:**
Open `index.js` and replace `'YOUR_API_KEY'` with your free key from [OMDB API](https://www.omdbapi.com/apikey.aspx).
3. **Run the App:**
Simply open `index.html` in your favorite web browser.

## 💡 Technical Challenges Overcome

* **Managing 3D State:** Ensuring the 3D flip animation stayed smooth across different browser engines by using `backface-visibility: hidden`.
* **Optimizing API Calls:** Implementing a two-step fetch process—one for the general search list and a secondary targeted fetch for specific movie details—to keep the initial load fast.

## 📖 Tutorial & Overview

* **Watch the Step-by-Step Tutorial:**
* **Read the Project Walkthrough:** 

---

*Created as part of the [Free JS Projects](https://freejsprojects.com) collection.*
