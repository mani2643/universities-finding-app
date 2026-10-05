# 🎓 Universities Finder

A simple and interactive web application that allows users to **search for universities by country** and view the results dynamically.

The project uses the **Hipolabs Universities API**, Axios for API requests, JavaScript for DOM manipulation, and includes a **dark/light theme switcher**.

## ✨ Features

- 🌍 Search universities by country
- 🔎 Fetch university data using an external API
- 📋 Display university names dynamically
- 🎨 Light and dark theme
- 💾 Theme preference saved using `localStorage`
- ✨ Scroll-based animations using `IntersectionObserver`
- ⚡ Asynchronous API requests using `async/await`
- 📱 Simple and responsive interface
- 🚫 Input validation for empty searches

## 🖥️ Live Demo

🔗 **Live Website:**  
`https://universities-finding-app.vercel.app/`

## 🛠️ Technologies Used

- **HTML5** — Page structure
- **CSS3** — Styling, themes, and animations
- **JavaScript (ES6+)** — Application logic and DOM manipulation
- **Axios** — HTTP requests
- **Hipolabs Universities API** — University data
- **LocalStorage API** — Saving the user's theme preference
- **IntersectionObserver API** — Scroll animations

## 🌐 API

This project uses the **Hipolabs Universities API**:

```text
http://universities.hipolabs.com/search?country=
```

For example:

```text
http://universities.hipolabs.com/search?country=India
```

The API returns information such as:

- University name
- Country
- Alpha-2 country code
- State/province
- University website domains
- University web pages

## 📂 Project Structure

```text
universities-finder/
│
├── index.html
├── style.css
├── script.js
├── preview.png
└── README.md
```

## ⚙️ How It Works

### 1. User searches for a country

The form submission is handled using an event listener:

```javascript
form.addEventListener("submit", async (e) => {
    e.preventDefault();
});
```

The application checks whether the input is empty before making an API request.

### 2. Fetch university data

The `getColleges()` function uses Axios to request university data:

```javascript
async function getColleges(country){
    try{
        let res = await axios.get(url + country);
        return res.data;
    }catch(e){
        console.log("error: ",e);
    }
}
```

### 3. Display the results

The returned university data is passed to the `show()` function, which dynamically creates list elements:

```javascript
function show(colArr){
    let list = document.querySelector("#list");

    list.innerHTML = "";

    colArr.forEach((el)=>{
        list.innerHTML += `
            <li>${el.name}</li>
        `;
    });
}
```

### 4. Dark Mode

The application uses `localStorage` to remember the user's theme preference.

```javascript
localStorage.setItem('darkmode','active');
```

When the user returns to the website, their previous theme preference is restored.

### 5. Scroll Animation

`IntersectionObserver` is used to detect when university list items enter the viewport:

```javascript
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
});
```

This allows the university cards/list items to animate as they appear on the screen.

## 🧠 JavaScript Concepts Practiced

This project helped practice:

- DOM Selection
- DOM Manipulation
- Event Listeners
- Form Events
- `async/await`
- Promises
- Axios
- API requests
- JSON data
- `try...catch`
- Array methods
- Template Literals
- `localStorage`
- `IntersectionObserver`
- Conditional Statements
- Dynamic HTML generation

## 🚀 Running the Project Locally

### 1. Clone the repository

```bash
git clone https://github.com/mani2643/universities-finding-app.git
```

### 2. Open the project

```bash
cd universities-finder
```

### 3. Run the project

Open `index.html` in your browser.

For development, you can also use **Live Server** in VS Code.

## 🔮 Future Improvements

Some features that could be added in future versions:

- 🔍 Search by university name
- 📍 Filter universities by state/province
- ⭐ Add favorite universities
- 💾 Save favorite universities using `localStorage`
- 🌐 Display university websites as clickable links
- 📊 Show additional university information
- 🔄 Add loading animations while fetching data
- ❌ Add a proper error message when the API request fails
- 🏫 Add university logos where available
- 📱 Improve mobile UI
- 🔎 Add sorting and filtering options

## ⚠️ Current Limitations

- The application currently displays mainly the **university names**.
- State/province filtering is currently only logged to the console.
- API availability depends on the external Hipolabs API.
- An internet connection is required to retrieve university data.

## 👨‍💻 Author

**Bharath**

This project was built as a JavaScript practice project to improve my understanding of **APIs, Axios, asynchronous JavaScript, DOM manipulation, LocalStorage, and IntersectionObserver**.

---

⭐ If you found this project useful, consider giving the repository a star!
