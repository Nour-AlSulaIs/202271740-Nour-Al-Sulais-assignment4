# Technical Documentation

## 1. Project Overview

This project is a responsive personal portfolio website developed using HTML, CSS, and JavaScript. The website demonstrates frontend development skills including layout structuring, responsive design, and theme switching functionality.

In Assignment 2, additional interactive features and dynamic behaviors were implemented using JavaScript to enhance usability and user experience. These features allow users to interact with the content instead of only viewing it.

---

## 2. Project Structure

The project follows a clean and organized folder structure:

- HTML defines the structure and content of the website
- CSS is used for styling, layout, and responsive design
- JavaScript handles interactivity and dynamic behavior
- Assets folder stores images and media files
- Docs folder contains documentation files

This structure improves maintainability and scalability.

---

## 3. Technologies Used

- HTML5
- CSS3
  - Flexbox (for layout alignment)
  - CSS Grid (for project cards layout)
  - Media Queries (for responsiveness)
- JavaScript (for interactivity and DOM manipulation)
- Responsive Design principles

---

## 4. Responsive Design Implementation

The website is fully responsive and adapts to:

- Desktop screens
- Tablet devices
- Mobile devices

Techniques used:

- Flexbox for aligning sections (About, Contact)
- CSS Grid for organizing project cards
- Media queries to adjust layout and spacing for smaller screens
- Max-width containers to maintain readable layouts

Testing was performed using browser resizing and Chrome DevTools to ensure consistent behavior across different screen sizes.

---

## 5. Dark/Light Mode Implementation

Theme switching is implemented using JavaScript and CSS class toggling:

- A button triggers a function that toggles a `light-mode` class on the `<body>` element
- CSS overrides are defined inside `.light-mode` to change colors and backgrounds
- `localStorage` is used to save the user's selected theme
- When the page loads, the saved theme is applied automatically

This ensures that user preferences are preserved and improves overall user experience.

---

## 6. Interactive Features (Assignment 2)

### Show More / Show Less (Projects Section)

- Each project card contains two descriptions:
  - A short preview (visible by default)
  - A full description (hidden initially)
- A button allows users to toggle between the two states
- JavaScript is used to:
  - Detect the current visibility of the content
  - Show or hide the full description
  - Update the button text dynamically ("Show More" / "Show Less")

This feature allows users to control how much information they want to view and keeps the layout clean.

---

## 7. Contact Form and User Feedback

The contact section includes:

- Name input field
- Email input field (type="email")
- Message textarea
- Submit button

Validation and feedback:

- Required fields are enforced using HTML attributes (`required`)
- Email format is validated automatically by the browser
- JavaScript handles the form submission event
- `event.preventDefault()` prevents page reload
- A success message is displayed after submission
- The form is reset after successful submission

This ensures clear communication with the user and improves usability.

---

## 8. Animations and Transitions

To enhance user interaction, several animations were added:

- Project cards move slightly upward on hover using `transform: translateY()`
- Buttons scale on hover and shrink slightly when clicked
- CSS `transition` is used to create smooth animations

These animations provide visual feedback and make the interface feel more responsive and modern.

---

## 9. UI/UX Considerations

The design focuses on simplicity and usability:

- Consistent spacing and alignment across all sections
- Clear visual hierarchy using headings and typography
- Minimal and controlled color palette
- Responsive layout for different devices
- Interactive elements improve user engagement
- Content is organized and easy to navigate

---

## 10. Testing & Validation

The project was tested to ensure functionality and consistency:

- Tested across multiple screen sizes (desktop, tablet, mobile)
- Verified responsive layout behavior using DevTools
- Tested Dark/Light mode switching and persistence
- Verified Show More / Show Less functionality
- Tested contact form validation and success message display

---

## 11. Future Improvements

- Add accessibility improvements (ARIA labels, keyboard navigation)
- Implement smoother animations (fade/slide effects)
- Connect the contact form to a backend service
- Add more interactive features (filtering or search)
- Deploy the website using GitHub Pages
