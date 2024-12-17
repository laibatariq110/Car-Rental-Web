# Car Rental Web Project

This is a responsive website built using React.js, Bootstrap, and custom SCSS styling. The website includes various sections such as a hero section, contact form, about section, booking assistance, testimonials, FAQs, and a footer. It demonstrates the use of React components for building a modular structure.

## Features

- **Header**: Navigation bar that appears on all pages.
- **Footer**: Footer that appears on all pages with essential links.
- **Home Page**: Includes hero section, booking assistance, testimonials, FAQ, and other home-specific content.
- **About Section**: Information about the website.
- **Contact Section**: A form for users to contact the website owner.

## Technologies Used

- **React.js** for building components and managing state
- **Bootstrap** for responsive layout and components
- **SCSS** for styling and custom configurations
- **Font Awesome** (optional) for icons

## Components

### **Header.jsx**
The `Header.jsx` component contains the navigation bar, including:
- A logo and links for navigation.
- It is included in every page of the website, making it globally accessible.

**Key features**:
- **React Router** for navigation (if applicable).
- **Bootstrap Navbar** for responsive layout.

### **Footer.jsx**
The `Footer.jsx` component is a global footer that includes:
- Contact links.
- Social media links.
- Site information.
- It is included on every page of the website.

### **AboutSec.jsx**
The `AboutSec.jsx` component is displayed within the **About** area, providing:
- **Company Overview**: A brief paragraph describing the company.
- **Mission & Vision**: Key points about the company's goals.
- **Image**: An optional image or video for visual context.

**Key features**:
- Organized structure with headings and text.

### **ContactSec.jsx**
The `ContactSec.jsx` component is used within the **Contact** area and includes a contact form with:
- **Name Field**
- **Email Field**
- **Message Textarea**
- A **Submit Button** to send the form data.

**Key features**:
- Basic form validation.
- Styled with Bootstrap classes for responsiveness.

### **HomePage.jsx**
The `HomePage.jsx` component serves as the main homepage of the website. Some of the sections it includes are:
- **Hero Section**: A prominent introduction area with call-to-action buttons.
- **Booking Assistance**: Displays helpful icons and information.
- **Vehicle Selections**: Provides a table of the names of various available luxury cars, when one of them is clicked, dynamically shows that particular car's image and information.
- **Testimonials Section**: A carousel-style section for customer feedback.
- **FAQ Section**: An accordion for frequently asked questions.

**Key features**:
- The homepage components are styled for desktop, tablet, and mobile views.
- Includes interactivity for elements like the FAQ accordion and carousel.

## Setup

1. **Clone this repository**:

```bash
git clone https://github.com/yourusername/your-repository-name.git
```

2. **Navigate to the project directory**:

```bash
cd your-repository-name
```

3 **Install dependencies**:

```bash
npm install
```

4. **Start the React app**:

```bash
npm start
```


# SCSS Customization

## Color Scheme:

- `$color-1`: hsl(0, 0%, 20%) Dark gray (used for text and background).
- `$color-2`: hsl(300, 91%, 34%) Purple (primary accent color).
- `$color-3`: hsl(0, 100%, 60%) Red (for active states).

## Mixins:
- **flex($justify-content)**: A mixin for setting display: `flex`, `justify-content`, and `align-items`.

## Responsive Design

This project includes media queries for:

- **Desktop**: Default styling.
- **Tablet (max-width: 991px)**: Adjusts layout for tablets, including the navbar and buttons.
- **Mobile (max-width: 576px)**: Adjusts text sizes and layout for mobile screens.
