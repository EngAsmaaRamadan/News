<div align="center">

# 📰 News App

### An interactive news application that fetches live news from News API with advanced filtering, smart pagination, and full keyboard navigation support

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)

![Status](https://img.shields.io/badge/status-active-success?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)

</div>

---

## 🎬 Live Demo

> 🔗 **[Click here to try the app](#)**  
> _(Replace `#` with your GitHub Pages / Netlify / Vercel link)_

---

## 📌 Overview

**News App** is a practice project built to master working with **external APIs**, fetching data from outside sources, processing it, and displaying it interactively.

The app pulls live news from the **free News API** across 5 categories, with the ability to filter by **search** and **category** together, plus a fully-featured **pagination system** and **keyboard navigation**.

> ⚠️ **Important:** The project must be run on a **Live Server** with an **internet connection** to fetch data from the API.
>
> 💡 The free News API has a **limited number of requests** — if the limit is reached, a friendly alert will notify you.

---

## 📸 Screenshots

<div align="center">

### 🖥️ Main View
![Main View](./images/main.png)

### 🔍 Filtering + Pagination
![Filtering](./images/filter.png)

### ⌨️ Keyboard Navigation Demo
![Keyboard Demo](./images/keyboard-demo.gif)

</div>

> 📁 _Create an `images/` folder in your repo and drop your screenshots + a GIF demo there.  
> A short GIF showing keyboard navigation and pagination in action makes a HUGE difference._

---

## ✨ Features

### 🔍 Filtering & Search
- 📂 Fetch news from **5 categories**: `Business` · `Health` · `Sports` · `Science` · `Technology`
- 🔎 Filter data by **Search** and **Category** combined at the same time
- 🚫 Friendly **Alert** when there are no matching results for the search + category

### 📄 Advanced Pagination System
- 🔢 **Dynamic page numbers** generated based on the amount of available data
- 📊 Each page shows an **equal number of cards**, except the last page which may show fewer
- 🖱️ Clicking any page number instantly opens that page
- ⏮️⏭️ **Next** and **Prev** buttons for navigation
- 🔒 **Prev** is disabled on the first page, **Next** is disabled on the last page — enforced for both **Click** and **Keyboard**
- 🔄 **Loop Navigation**:
  - On the last page, pressing `→` wraps back to the **first page**
  - On the first page, pressing `←` jumps to the **last page**

### ⌨️ Keyboard Navigation
- 🎯 Press any number on the keyboard to activate that page and open it
- ➡️ `Right Arrow` moves to the next page
- ⬅️ `Left Arrow` moves to the previous page
- 🎨 The active color follows the currently selected button automatically

### ⚡ Performance Optimization
- 🧠 **Smart Filtering:** If the category and search haven't changed, the filter button won't fire a new request
- ♻️ **No Redundant Requests:** Clicking the current page again won't trigger a new request — data is already cached
- 🛡️ Reduces server load and prevents wasting the API limit unnecessarily
- 🔔 **Alert** appears when the allowed number of requests is exhausted

### 🗓️ Additional Features
- 📅 **Dynamic date display** — updates automatically based on when the project is run, no manual edits needed
- 📱 Fully responsive design using **Bootstrap**

---

## 🧩 Card Content

Each news item is displayed as a card containing:

| Element | Description |
|---------|-------------|
| 🖼️ **Image** | News thumbnail |
| 📝 **Title** | News headline |
| 📄 **Description** | Short summary of the news |
| 🔗 **Button** | Link to the original article to read more |

---

## 🛠️ Technologies Used

<div align="center">

| Technology | Purpose |
|------------|---------|
| **HTML5** | Page structure |
| **CSS3** | Styling and layout |
| **Bootstrap** | Responsive design & UI components |
| **Pure JavaScript** | App logic, DOM manipulation, events |
| **jQuery** | Simplified DOM handling & event binding |
| **News API** | Data source (free tier) |
| **Icons** | UI icons |

</div>

---

## ⚙️ How to Run

1. **Clone** the repository:
   ```bash
   git clone https://github.com/your-username/news-app.git
