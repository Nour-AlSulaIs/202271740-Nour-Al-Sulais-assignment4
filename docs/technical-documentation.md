# Technical Documentation – Assignment 4 (Final Project)

## 1. Project Overview

This project is a fully responsive personal portfolio web application developed using HTML, CSS, and JavaScript.

It represents the final stage of development, combining all previously implemented features with additional enhancements, improved design, and better user interaction.

The main goal is to showcase technical skills through a polished and interactive web application.

---

## 2. Project Structure

The project follows a clean and organized structure:

- **index.html** → Main structure and content  
- **css/styles.css** → Styling, layout, and responsive design  
- **js/script.js** → Interactivity and dynamic functionality  
- **assets/** → Images and media files  
- **docs/** → Documentation files  

This structure improves maintainability, readability, and scalability.

---

## 3. Technologies Used

- HTML5  
- CSS3  
  - Flexbox (layout alignment)  
  - CSS Grid (projects layout)  
  - Media Queries (responsive design)  
- JavaScript  
  - DOM manipulation  
  - Event handling  
  - Async/Await (API integration)  
- Responsive Design principles  

---

## 4. Responsive Design Implementation

The website is fully responsive and adapts to different screen sizes:

- Desktop  
- Tablet  
- Mobile  

Techniques used:

- Flexbox for layout alignment (About, Contact sections)  
- CSS Grid for project cards  
- Media queries for layout adjustments  
- Max-width containers for better readability  

Testing was performed using browser DevTools and screen resizing.

---

## 5. State Management (Dark/Light Mode)

Theme switching is implemented using JavaScript:

- A button toggles the `light-mode` class on the `<body>`  
- CSS applies different styles for dark and light modes  
- `localStorage` stores the user's preference  
- The selected theme persists across page reloads  

This improves user experience and personalization.

---

## 6. Navigation System

- Navigation is implemented using anchor links (`#section-id`)  
- Smooth scrolling is enabled using CSS (`scroll-behavior`)  
- Active section highlighting is handled using JavaScript  
- The current section is detected based on viewport position  

This ensures accurate navigation and improves usability.

---

## 7. Interactive Features

### Show More / Show Less

- Each project card contains short and full descriptions  
- JavaScript toggles visibility dynamically  
- Button text updates based on state  

### Skills Sphere

- A 3D rotating sphere displays skills  
- Implemented using CSS transforms and JavaScript animation  
- Rotation is controlled and optimized for performance  

---

## 8. Contact Form and Validation

The contact section includes:

- Name input  
- Email input (HTML validation)  
- Message textarea  

Functionality:

- Required fields validation  
- JavaScript prevents page reload (`event.preventDefault()`)  
- Success message displayed to the user  
- Form resets after submission  

---

## 9. API Integration — Advice Feature

An external API is used to fetch dynamic advice.

### Implementation

- `fetch()` is used to request data  
- Data is parsed using `response.json()`  
- Advice text is displayed dynamically  

### Error Handling

- Fallback message shown if request fails  
- Prevents application crashes  

---

## 10. Countdown Timer (Complex Logic)

A graduation countdown timer was implemented.

### Functionality

- A target date is defined  
- Current time is updated continuously  
- Time difference is calculated and converted into:
  - Days
  - Hours
  - Minutes
  - Seconds  

- Updated every second using `setInterval()`

### Logic

- Uses mathematical calculations for time conversion  
- Stops and displays a message when countdown ends  

---

## 11. Performance Optimization

- Images use `loading="lazy"`  
- Code cleaned and optimized  
- Efficient DOM manipulation  
- Responsive design improves performance across devices  

---

## 12. UI/UX Considerations

The design focuses on clarity and usability:

- Clean and consistent layout  
- Clear navigation structure  
- Interactive elements (buttons, animations, API content)  
- Real-time feedback (countdown, form messages)  
- Consistent color system across dark and light modes  

---

## 13. Testing & Validation

The application was tested to ensure reliability:

- Responsive behavior across devices  
- Dark/Light mode functionality  
- API data loading and error handling  
- Countdown timer accuracy  
- Form validation and submission  

All major features were verified using browser testing tools.