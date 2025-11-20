# Interactive Card Game

## Project Overview

This project is an **interactive, animated card game interface** built using **HTML, CSS, and JavaScript**. It features dynamic score displays, flipping cards, animated headers, floating action buttons, and particle effects for a visually engaging experience. The interface is responsive and supports a **dark theme** toggle.

---

## Features

* **Animated Header** with pulsing background circles
* **Score Display** that updates dynamically with animations
* **Control Panel** with interactive buttons and hover effects
* **Flippable Cards** with front and back sides, each card having unique colors and icons
* **Loading Spinner** animation for waiting states
* **Floating Action Button (FAB)** for quick actions
* **Particle Effects** for visual feedback on interactions
* **Dark Theme Support** toggled via `body.dark-theme`
* Fully **responsive** design for mobile and desktop

---

## Technologies Used

* **HTML5** – Semantic structure
* **CSS3** – Transitions, animations, gradients, and responsive layout
* **JavaScript** – (Optional, for card flipping, score updates, and interactions)

---

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/interactive-card-game.git
```

2. **Open `index.html`** in your browser

```bash
cd interactive-card-game
open index.html
```

3. **CSS and JS Files**

* `styles.css` – Contains all styling and animations
* `script.js` – (Optional) Contains interactive logic for cards, buttons, score updates

---

## Usage

* Hover over buttons to see scale and shadow animations
* Click cards to flip and reveal content on the back
* The score display updates with a pulsing animation when points change
* Toggle dark theme by adding/removing `dark-theme` class on `<body>`

---

## File Structure

```
interactive-card-game/
│
├─ index.html          # Main HTML file
├─ styles.css          # External CSS with all animations and layout
├─ script.js           # (Optional) JavaScript for interactions
└─ README.md           # Project documentation
```

---

## Key Animations

* `slideDown` – Header slides down on page load
* `fadeIn` – Subtle fade-in effect for elements
* `pulse` – Used for score updates and background circles
* `spin` – Spinner animation
* `float` – Floating action button animation
* `bounce` – Icon bounce animation
* `explode` – Particle effect animation

---

## Responsive Design

* Grid-based card layout adjusts to smaller screens
* Header and subtitle font sizes scale for mobile
* Buttons and controls wrap for smaller devices

---

## Contribution

1. Fork the repository
2. Create your feature branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature-name`)
5. Open a Pull Request

---

## License

This project is open-source and available under the **MIT License**.
