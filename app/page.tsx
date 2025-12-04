'use client';

import { useEffect, useRef } from 'react';
import Navigation from './components/Navigation';
import ProjectCard from './components/ProjectCard';
import SkillCard from './components/SkillCard';
import ContactForm from './components/ContactForm';

export default function Home() {
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    // Intersection Observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    // Observe all sections
    Object.values(sectionsRef.current).forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  const setSectionRef = (id: string) => (el: HTMLElement | null) => {
    sectionsRef.current[id] = el;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navigation />
      
      {/* Hero Section */}
      <section
        id="home"
        ref={setSectionRef('home')}
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden"
      >
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute top-40 right-1/4 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl animate-pulse animation-delay-300"></div>
          <div className="absolute bottom-40 left-1/4 w-56 h-56 bg-cyan-400/20 rounded-full blur-3xl animate-pulse animation-delay-1500"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-40"></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-50/50 dark:to-gray-900/50"></div>

        <div className="relative max-w-6xl mx-auto text-center z-10">
          {/* Greeting Badge */}
          <div className="inline-block mb-8 animate-fade-in-up">
            <span className="px-5 py-2.5 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40 text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold border border-blue-200 dark:border-blue-800 shadow-lg backdrop-blur-sm">
              👋 Welcome to my portfolio
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold mb-8 animate-fade-in-up">
            <span className="block text-gray-900 dark:text-white mb-3 tracking-tight">
              Hi, I'm
            </span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient drop-shadow-lg">
              Minal
            </span>
          </h1>

          {/* Student Info Card */}
          <div className="inline-flex items-center gap-3 px-6 py-3 mb-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-full border border-gray-200 dark:border-gray-700 shadow-xl animate-fade-in-up animation-delay-200">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Currently Studying</p>
              <p className="text-base font-bold text-gray-900 dark:text-white">
                Y1 Fintech Student at <span className="text-blue-600 dark:text-blue-400">SIT</span>
              </p>
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6 animate-fade-in-up animation-delay-300">
            Creative Problem Solver
          </p>

          {/* Description with Icons */}
          <div className="max-w-3xl mx-auto mb-12 animate-fade-in-up animation-delay-400">
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I'm just getting started on my learning journey, but I'm incredibly passionate 
              about exploring new technologies and bringing creative ideas to life.
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-700">
                <span className="text-2xl">💻</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Web Development</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-700">
                <span className="text-2xl">🎨</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">UI/UX Design</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-700">
                <span className="text-2xl">🚀</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Innovation</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                View My Work
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white rounded-xl font-semibold border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get In Touch
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-20 animate-bounce">
            <a href="#about" className="flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <span className="text-sm font-medium">Scroll to explore</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        ref={setSectionRef('about')}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 opacity-0 transition-opacity duration-1000"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                I'm a passionate developer with a love for creating elegant
                solutions to complex problems. With experience in modern web
                technologies, I bring ideas to life through clean code and
                thoughtful design.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                I believe in writing code that is not only functional but also
                maintainable, scalable, and a joy to work with.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-semibold mb-4">Quick Facts</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <span className="text-2xl">🎓</span>
                  <span>Computer Science Graduate</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-2xl">💼</span>
                  <span>5+ Years of Experience</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-2xl">🚀</span>
                  <span>20+ Projects Completed</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-2xl">🌍</span>
                  <span>Available for Remote Work</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        ref={setSectionRef('skills')}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 opacity-0 transition-opacity duration-1000"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Frontend
              </h3>
              <SkillCard name="React" level={90} />
              <SkillCard name="Next.js" level={85} />
              <SkillCard name="TypeScript" level={88} />
              <SkillCard name="Tailwind CSS" level={92} />
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Backend & Tools
              </h3>
              <SkillCard name="Node.js" level={80} />
              <SkillCard name="Python" level={75} />
              <SkillCard name="PostgreSQL" level={82} />
              <SkillCard name="Git" level={90} />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        ref={setSectionRef('projects')}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 opacity-0 transition-opacity duration-1000"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="E-Commerce Platform"
              description="A full-stack e-commerce solution with user authentication, payment integration, and admin dashboard."
              technologies={['React', 'Node.js', 'MongoDB', 'Stripe']}
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />
            <ProjectCard
              title="Task Management App"
              description="A collaborative task management application with real-time updates and team collaboration features."
              technologies={['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL']}
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />
            <ProjectCard
              title="Weather Dashboard"
              description="A beautiful weather dashboard that displays current conditions and forecasts using weather APIs."
              technologies={['React', 'TypeScript', 'Chart.js', 'API Integration']}
              githubUrl="https://github.com"
              liveUrl="https://example.com"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={setSectionRef('contact')}
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 opacity-0 transition-opacity duration-1000"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
            Have a project in mind or want to collaborate? I'd love to hear from
            you!
          </p>
          <ContactForm />
          <div className="mt-12 flex justify-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-8 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Minal. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
