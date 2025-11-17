
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollPos, setScrollPos] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalProjects = 5;
  const projects = [
    {
      id: 1,
      image: "/images/photo2.jpg",
      alt: "Weather App",
      title: "Weather app",
      description: "A responsive weather application that provides real-time weather data and forecasts for any location worldwide",
      technologies: ["HTML", "CSS", "react", "Weather API"],
      githubLink: "https://github.com/hayu1101/react",
      features: [
        "display city name,temprature,and weather condition",
        "allow user to search for any city",
        "Responsive design that works on all devices",
        "Weather icons and visual representations"
      ],
      overview: "This Weather app was built to demonstrate my frontend development skills and API integration capabilities. The app fetches data from a weather API and presents it in a clean, user-friendly interface. It features dynamic background changes based on weather conditions and provides comprehensive weather information including temperature, humidity, wind speed, and precipitation."
    },
    {
      id: 2,
      image: "/images/photo3.jpg",
      alt: "Todo List App",
      title: " Todo List",
      description: "A feature-rich task management application with local storage and advanced organization capabilities",
      technologies: ["html", "JavaScript", "CSS"],
      githubLink: "https://github.com/hayu1101/finalweak12",
      features: [
        "Add, edit, and delete:users can update or remove",
        "persistent storage:all data is saved in local storage so tasks remain after the browther is refreshed or reopen",
        "Task search and filtering options",
        "this project is ideal for learning DOM manipulation,event handling,and localstorage"
      ],
      overview: "This application helps users organize their daily tasks efficiently with a clean, modern interface. It includes advanced features like task categorization, priority setting, and local storage implementation to ensure tasks are saved even after closing the browser."
    },
    {
      id: 3,
      image: "/images/photo4.jpg",
      alt: "Countdown Timer",
      title: "Countdown Timer",
      description: "An interactive countdown timer for special events with multiple display modes and customization options",
      technologies: ["JavaScript", "CSS", "HTML"],
      githubLink: "https://github.com/hayu1101/countdown1/tree/main",
      features: [
      " Default Countdown: Shows a predefined countdown with its title on first load ",
      " Add Countdown: Users can input a title and date to create new countdowns",
      " Countdown List: Managed as an array of objects" ,
     " LocalStorage: Saves and loads countdowns automatically.",
      " Switch Countdown: Click a saved countdown to update the main display",
      "Delete and edit countdowns",
     "Expiry notification: if the countdown is already past show EXPIRED!"

      ],
      overview: " The application allows users to set multiple countdowns for important events like birthdays, holidays, or project deadlines. It features a visually appealing interface with smooth animations and provides a progress visualization to help users track time effectively."
    },
    {
      id: 4,
      image: "/images/photo6.jpg",
      alt: "Calculator App",
      title: "Calculator App",
      description: "A fully functional calculator with scientific functions, memory operations, and modern UI design",
      technologies: ["react", "CSS ", "HTML", ],
      githubLink: "https://github.com/hayu1101/calculator/tree/main",
      features: [
         "Build a calculator with the following:",
          "Number buttons (0–9) Operators (+, −, ×, ÷) Equals (=) Clear (C)",
          "Users should be able to click buttons to form an expression.",
         "Display the current input and the result on the screen.",
         " Handle edge cases (like dividing by zero)."
      ],
      overview: " Built with a clean, modern interface, it provides both basic and scientific calculation capabilities. The calculator features error handling, keyboard support, and a calculation history to enhance user productivity."
    },
    {
      id: 5,
      image: "/images/photo5.jpg",
      alt: "Note Taking App",
      title: " Note Taker",
      description: "A comprehensive note-taking application with rich text editing, organization, and search capabilities",
      technologies: [ "react", "CSS", "HTML"],
      githubLink: "https://github.com/hayu1101/notepad/tree/main",
      features: [
        "Users can create a new note with a title and content.",
 "Users can view all saved notes in a list.",
 "Users can edit and delete any note.",
 "Use React state to manage data.",
"Save notes in localStorage so they remain after refresh.",
"Search notes by title.",
"Sort notes by date or title."

      ],
      overview: " This application allows users to create, organize, and manage their notes efficiently. With rich text editing, categorization, and powerful search features, it serves as a complete digital notebook solution for personal and professional use."
    }
  ];
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const nextProject = () => {
    setCurrentSlide((prev) => (prev + 1) % totalProjects);
  };

  const previousProject = () => {
    setCurrentSlide((prev) => (prev - 1 + totalProjects) % totalProjects);
  };

  const goToProject = (index) => {
    setCurrentSlide(index);
  };
  const openProjectModal = (projectId) => {
    setSelectedProject(projectId);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeProjectModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isModalOpen]);
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <header>
        <div className="header-container">
          <h1 className="logo">Portfolio</h1>
          <nav>
            <button onClick={() => scrollToSection('home')}>
              <i className="fas fa-home"></i> <span>home</span>
            </button>
            <button onClick={() => scrollToSection('about')}>
              <i className="fas fa-user"></i> <span>about</span>
            </button>
            <button onClick={() => scrollToSection('projects')}>
              <i className="fas fa-briefcase"></i> <span>project</span>
            </button>
            <button onClick={() => scrollToSection('skills')}>
              <i className="fas fa-code"></i> <span>skill</span>
            </button>
            <button onClick={() => scrollToSection('contact')}>
              <i className="fas fa-envelope"></i> <span>contact</span>
            </button>
          </nav>
        </div>
      </header>
      <main>
        <section id="home">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h2>Hello I'm</h2>
                <h2>hayat kasahun</h2>
                <p>I am a software engineering student and frontend developer</p>
                <button className="btn" onClick={() => scrollToSection('contact')}>
                  <i className="fas fa-paper-plane"></i> <span>contact me</span>
                </button>
              </div>
              <div className="hero-image" id="heroImage">
                <div className="profile-circle">
                  <img 
                    src="/images/hayat.jpg" 
                    alt="Hayat Kasahun" 
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about">
          <div className="container">
            <div className="about-content">
              <div className="about-image" id="aboutImage">
                <div className="about-circle">
                  <img 
                    src="/images/hayat.jpg" 
                    alt="Hayat Kasahun" 
                  />
                </div>
              </div>
              <div className="about-text">
                <h3>About <span className="highlight">ME</span></h3>
                <p>
                  I am a third year software engineering student who loves building projects, 
                  enjoys solving problems, and learning by doing. Throughout my studies I have 
                  gained experience in programming languages like C++, Java, HTML, CSS, 
                  JavaScript and others. I have worked on projects ranging from small to large. 
                  My goal is to become a skilled software developer.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="skills">
          <div className="container">
            <h3 className="skills-heading">
              <i className="fas fa-cogs"></i> <span>skills</span>
            </h3>
            <div className="skills-grid">
              <div className="skill-box">
                <i className="fab fa-html5"></i> <span>HTML</span>
              </div>
              <div className="skill-box">
                <i className="fab fa-css3-alt"></i> <span>CSS</span>
              </div>
              <div className="skill-box">
                <i className="fab fa-java"></i> <span>Java</span>
              </div>
              <div className="skill-box">
                <i className="fab fa-js-square"></i> <span>JavaScript</span>
              </div>
              <div className="skill-box">
                <i className="fas fa-code"></i> <span>C++</span>
              </div>
              <div className="skill-box">
                <i className="fab fa-react"></i> <span>React</span>
              </div>
            </div>
          </div>
        </section>
        <section id="projects">
          <div className="container">
            <h3 className="projects-heading">
              <i className="fas fa-project-diagram"></i> <span>projects</span>
            </h3>
            <div className="projects-slider-wrapper">
              <button className="slider-btn prev-btn" onClick={previousProject}>
                <i className="fas fa-chevron-left"></i>
                <span className="sr-only">Previous</span>
              </button>
              <div className="projects-slider">
                <div 
                  className="slider-track" 
                  style={{ 
                    transform: `translateX(-${currentSlide * (100 / 3)}%)` 
                  }}
                >
                  {projects.map((project) => (
                    <div key={project.id} className="project-item">
                      <img src={project.image} alt={project.alt} />
                      <div className="project-overlay">
                        <h4>{project.title}</h4>
                        <p onClick={() => openProjectModal(project.id)}>
                          <i className="fas fa-external-link-alt"></i> <span>View Details</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="slider-btn next-btn" onClick={nextProject}>
                <i className="fas fa-chevron-right"></i>
                <span className="sr-only">Next</span>
              </button>
            </div>

            <div className="slider-indicators">
              {projects.map((_, index) => (
                <div 
                  key={index}
                  className={`indicator ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => goToProject(index)}
                >
                  <i className="fas fa-circle"></i>
                  <span className="sr-only">Slide {index + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact">
          <div className="container">
            <h3 className="contact-heading">
              <i className="fas fa-envelope-open-text"></i> <span>contact me</span>
            </h3>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-user"></i>
                <span>Hayat Kasahun</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>0940937800</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>hayakasahun@gmail.com</span>
              </div>
              <div className="contact-item">
                <i className="fab fa-github"></i>
                <span>github.com/hayu1101</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2024 Hayat Kasahun.</p>
          <div className="social-links">
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
      {isModalOpen && selectedProject && (
        <ProjectModal 
          project={projects.find(p => p.id === selectedProject)} 
          onClose={closeProjectModal} 
        />
      )}
    </div>
  );
}
const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  const getProjectStats = (projectId) => {
    switch(projectId) {
      case 1:
        return [
          { icon: "fas fa-cloud-sun", text: "Real-time Data" },
          { icon: "fas fa-mobile-alt", text: "Responsive" },
          { icon: "fas fa-map-marker-alt", text: "Location API" }
        ];
      case 2: 
        return [
          { icon: "fas fa-tasks", text: "Task Management" },
          { icon: "fas fa-database", text: "Local Storage" },
          { icon: "fas fa-palette", text: "Custom Themes" }
        ];
      case 3: 
        return [
          { icon: "fas fa-clock", text: "Multiple Timers" },
          { icon: "fas fa-chart-bar", text: "Progress Tracking" },
          { icon: "fas fa-bell", text: "Notifications" }
        ];
      case 4:
        return [
          { icon: "fas fa-calculator", text: "Scientific Functions" },
          { icon: "fas fa-keyboard", text: "Keyboard Support" },
          { icon: "fas fa-history", text: "Calculation History" }
        ];
      case 5:
        return [
          { icon: "fas fa-edit", text: "Rich Text Editor" },
          { icon: "fas fa-search", text: "Advanced Search" },
          { icon: "fas fa-file-export", text: "Export Features" }
        ];
      default:
        return [];
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <i className="fas fa-times"></i>
        </button>
        
        <div className="modal-header">
          <img src={project.image} alt={project.alt} className="modal-image" />
          <div className="modal-title-section">
            <h3>{project.title}</h3>
            <p className="modal-description">{project.description}</p>
            <div className="modal-links">
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link live"
              >
                
              </a>
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link github"
              >
                <i className="fab fa-github"></i> View Code
              </a>
            </div>
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-section">
            <h4>
              <i className="fas fa-tools"></i> Technologies Used
            </h4>
            <div className="tech-tags">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>

          <div className="modal-section">
            <h4>
              <i className="fas fa-star"></i> Key Features
            </h4>
            <ul className="features-list">
              {project.features.map((feature, index) => (
                <li key={index}>
                  <i className="fas fa-check"></i> {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="modal-section">
            <h4>
              <i className="fas fa-info-circle"></i> Project Overview
            </h4>
            <div className="project-overview">
              <p>{project.overview}</p>
              <div className="project-stats">
                {getProjectStats(project.id).map((stat, index) => (
                  <div key={index} className="stat">
                    <i className={stat.icon}></i>
                    <span>{stat.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {project.id === 1 && (
            <div className="modal-section">
              <h4>
                <i className="fas fa-cloud-sun-rain"></i> Weather App Highlights
              </h4>
              <div className="additional-features">
                <p>This weather application demonstrates advanced API integration and responsive design principles. It provides users with accurate weather information in an intuitive interface.</p>
                <ul className="features-list">
                  <li><i className="fas fa-bolt"></i> Fast API response times</li>
                  <li><i className="fas fa-sun"></i> Dynamic weather icons</li>
                  <li><i className="fas fa-search-location"></i> City search functionality</li>
                </ul>
              </div>
            </div>
          )}

          {project.id === 2 && (
            <div className="modal-section">
              <h4>
                <i className="fas fa-clipboard-check"></i> Todo List Special Features
              </h4>
              <div className="additional-features">
                <p>This task management app focuses on user productivity with an emphasis on clean design and efficient state management.</p>
                <ul className="features-list">
                  <li><i className="fas fa-sort"></i> Drag and drop task organization</li>
                  <li><i className="fas fa-chart-line"></i> Productivity analytics</li>
                  <li><i className="fas fa-sync"></i> Real-time updates</li>
                </ul>
              </div>
            </div>
          )}

          {project.id === 3 && (
            <div className="modal-section">
              <h4>
                <i className="fas fa-hourglass-half"></i> Countdown Timer Extras
              </h4>
              <div className="additional-features">
                <p>The countdown timer provides a visually engaging way to track important events with customizable options.</p>
                <ul className="features-list">
                  <li><i className="fas fa-paint-brush"></i> Custom background themes</li>
                  <li><i className="fas fa-bell"></i> Desktop notifications</li>
                  <li><i className="fas fa-share-alt"></i> Shareable countdown links</li>
                </ul>
              </div>
            </div>
          )}

          {project.id === 4 && (
            <div className="modal-section">
              <h4>
                <i className="fas fa-square-root-alt"></i> Calculator Advanced Features
              </h4>
              <div className="additional-features">
                <p>This calculator goes beyond basic arithmetic with scientific functions and enhanced user experience features.</p>
                <ul className="features-list">
                  <li><i className="fas fa-memory"></i> Memory operations</li>
                  <li><i className="fas fa-calculator"></i> Scientific calculations</li>
                  <li><i className="fas fa-keyboard"></i> Full keyboard support</li>
                </ul>
              </div>
            </div>
          )}

          {project.id === 5 && (
            <div className="modal-section">
              <h4>
                <i className="fas fa-sticky-note"></i> Note App Organization Tools
              </h4>
              <div className="additional-features">
                <p>The note-taking application provides comprehensive organization and management tools for efficient note keeping.</p>
                <ul className="features-list">
                  <li><i className="fas fa-folder"></i> Folder organization</li>
                  <li><i className="fas fa-tags"></i> Tagging system</li>
                  <li><i className="fas fa-file-pdf"></i> PDF export capability</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
