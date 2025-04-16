// Course data
const courses = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    description:
      "Learn HTML, CSS, and JavaScript basics for modern web development. Perfect for beginners starting their coding journey.",
    image: "assets/img1.jpg",
    price: "$49.99",
    youtubeUrl: "https://www.youtube.com/watch?v=PkZNo7MFNFg",
  },
  {
    id: 2,
    title: "Python Programming",
    description:
      "Master Python programming language from basics to advanced concepts. Includes practical projects and real-world applications.",
    image: "assets/img2.png",
    price: "$59.99",
    youtubeUrl: "https://www.youtube.com/watch?v=_uQrJ0TkZlc",
  },
  {
    id: 3,
    title: "Data Science Essentials",
    description:
      "Introduction to data analysis and visualization using Python, Pandas, and NumPy. Learn to make data-driven decisions.",
    image: "assets/img3.jpg",
    price: "$69.99",
    youtubeUrl: "https://www.youtube.com/watch?v=ua-CiDNNj30",
  },
  {
    id: 4,
    title: "Machine Learning Basics",
    description:
      "Understanding machine learning fundamentals with practical examples using TensorFlow and scikit-learn.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWD1ltJjEsHq_OsQ91StdTMGQrH-kG_CEp6g&s",
    price: "$79.99",
    youtubeUrl: "https://www.youtube.com/watch?v=JcI5Vnw0b2c",
  },
  {
    id: 5,
    title: "UI/UX Design Fundamentals",
    description:
      "Learn the principles of user interface and user experience design. Create beautiful and functional designs.",
    image: "assets/img4.jpg",
    price: "$54.99",
    youtubeUrl: "https://www.youtube.com/watch?v=c9Wg6Cb_YlU",
  },
  {
    id: 6,
    title: "Mobile App Development",
    description:
      "Build cross-platform mobile applications using React Native. From setup to deployment on app stores.",
    image: "assets/img6.png",
    price: "$64.99",
    youtubeUrl: "https://www.youtube.com/watch?v=0-S5a0eXPoc",
  },
];

// Render course cards
function renderCourses(filteredCourses) {
  const courseGrid = document.getElementById("courseGrid");
  courseGrid.innerHTML = ""; // Clear existing courses

  filteredCourses.forEach((course) => {
    const courseCard = document.createElement("div");
    courseCard.className = "course-card";
    courseCard.innerHTML = `
      <img src="${course.image}" alt="${course.title}" class="course-image">
      <div class="course-content">
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <p class="price">${course.price}</p>
        <button onclick="enrollCourse(${course.id})" class="cta-button">Watch Course Preview</button>
      </div>
    `;
    courseGrid.appendChild(courseCard);
  });
}

// Initialize courses page
if (
  window.location.pathname.includes("courses") ||
  window.location.pathname.includes("courses.html")
) {
  renderCourses(courses); // Show all courses initially

  const searchInput = document.getElementById("searchCourses");
  searchInput.addEventListener("input", (e) => {
    const searchText = e.target.value.toLowerCase();
    const filtered = courses.filter(
      (course) =>
        course.title.toLowerCase().includes(searchText) ||
        course.description.toLowerCase().includes(searchText)
    );
    renderCourses(filtered);
  });
}

// Handle contact form submission
if (window.location.pathname.includes("contact.html")) {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // Simulate form submission
    alert("Thank you for your message! We will get back to you soon.");
    contactForm.reset();
  });
}

// Course enrollment function
function enrollCourse(courseId) {
  const course = courses.find((c) => c.id === courseId);
  if (course) {
    window.open(course.youtubeUrl, "_blank");
  }
}

// Add active class to current navigation link
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname;
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPage.split("/").pop()) {
      link.classList.add("active");
    }
  });
});
