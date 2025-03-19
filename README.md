# 📸 Image Slider  

A simple, responsive image slider with auto-slide functionality and manual navigation using JavaScript, HTML, and CSS.  

## 🚀 Features  

✅ **Automatic Image Sliding** – Images transition every 3 seconds.  
✅ **Manual Navigation** – Use left (`<`) and right (`>`) buttons to switch images.  
✅ **Smooth Transitions** – CSS animations create a sleek, smooth effect.  
✅ **Responsive Design** – The slider adapts to various screen sizes.  
✅ **Lightweight & Fast** – Minimal dependencies ensure quick loading.  

---

## 📂 Project Structure  

```
IMAGE-SLIDER/
│── css/
│   ├── style.css       # Stylesheet for the slider (styling, animations)
│── images/             # Folder containing slider images
│── js/
│   ├── app.js          # JavaScript logic for image transitions
│── index.html          # Main HTML file (UI layout)
│── 404.html            # Custom error page (optional)
│── favicon.ico         # Website icon
│── icon.png            # Apple touch icon
│── icon.svg            # Scalable website icon
│── LICENSE.txt         # License information
│── package.json        # Dependencies and scripts
│── robots.txt          # SEO & indexing settings
│── site.webmanifest    # Web app manifest file
│── webpack.common.js   # Webpack configuration (if applicable)
│── webpack.config.dev.js   # Webpack dev config
│── webpack.config.prod.js  # Webpack production config
```

---

## 📜 How It Works  

1️⃣ **HTML (`index.html`)**  
- Defines the slider structure using `<div>` elements for images and navigation buttons.  
- Uses `<img>` tags inside `.slider` for the images.  
- Buttons (`.prev`, `.next`) allow manual navigation.  

2️⃣ **CSS (`css/style.css`)**  
- Styles the slider container with flexbox for centering.  
- Adds smooth **transition effects** for image sliding.  
- Handles responsive design for smaller screens.  

3️⃣ **JavaScript (`js/app.js`)**  
- Selects all images inside `.slider`.  
- Implements `nextSlide()` and `prevSlide()` functions for navigation.  
- Uses `setInterval()` to automatically slide images every 3 seconds.  
- Updates the `transform` property to shift the images horizontally.  

---

## 🛠 Setup & Usage  

### ✅ Run Locally  

1️⃣ **Clone the repository**  
```sh
git clone https://github.com/yourusername/image-slider.git
```

2️⃣ **Open the project folder**  
```sh
cd image-slider
```

3️⃣ **Open `index.html` in a browser**  
Just double-click `index.html` or use Live Server (VS Code extension).  

### 🎨 Customize  

- Add more images inside `.slider` in `index.html`.  
- Modify the `style.css` for different animations or colors.  
- Adjust `setInterval()` timing in `app.js` to change auto-slide speed.  

---

## ❌ Troubleshooting  

❓ **Images not sliding?**  
✅ Ensure `app.js` is linked correctly in `index.html`:  
```html
<script src="js/app.js"></script>
```

❓ **Images not loading?**  
✅ Check that the images exist inside the `/images/` folder.  
✅ Verify the correct path in `index.html`, e.g.:  
```html
<img src="images/your-image.png" alt="Image">
```

❓ **Slider is not centered?**  
✅ Ensure `style.css` contains `display: flex; justify-content: center; align-items: center;`.  

❓ **Buttons not working?**  
✅ Make sure `onclick="prevSlide()"` and `onclick="nextSlide()"` exist in `index.html`.  

---

## 📜 License  

This project is licensed under the **MIT License** – free to use and modify.  

---

## 🤝 Contributing  

Want to improve this project? Contributions are welcome!  

1️⃣ Fork the repo  
2️⃣ Create a new branch (`git checkout -b feature-newFeature`)  
3️⃣ Commit your changes (`git commit -m "Added new feature"`)  
4️⃣ Push the branch (`git push origin feature-newFeature`)  
5️⃣ Open a **Pull Request** 🎉  

---
