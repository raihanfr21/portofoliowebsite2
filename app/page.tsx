"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { 
  Sun, Moon, Github, Linkedin, Mail, Download, 
  Briefcase, GraduationCap, Code2, BookOpen, 
  Award, ExternalLink, Menu, X, ArrowUpRight,
  Users
} from "lucide-react";

const WhatsappIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 1h0a.5.5 0 0 0 1 1h0a.5.5 0 0 0 1 1h0a.5.5 0 0 0 1 1h0" />
  </svg>
);

const PORTFOLIO_DATA = {
  name: "Raihan Fathurrahman", 
  role: "Full Stack Developer, Software Developer",
  about: "Fullstack Developer",
  
  social: {
    github: "https://github.com/raihanfr21",
    linkedin: "https://linkedin.com/in/raihanfth",
    email: "mailto:raihanfathurrahman.rft@gmail.com",
    whatsapp: "https://wa.me/6285178010715"
  },

  skills: ["APIs", "PHP", "PowerBI", "Python", "JavaScript", "Laravel", "React", "Next.js", "Node.js", "Tailwind CSS", "MySQL", "Google Cloud", "Docker", "CI/CD", "Data Science", "Macro VBA"],
  softSkills: [
    "Leadership",
    "Time Management",
    "Problem Solving",
    "Teamwork",
    "Adaptability"
  ],

  experience: [
    {
      role: "IT Digitalization Internship",
      company: "PT Pertamina Hulu Rokan - Drilling Engineering HO",
      logo: "/logos/company1.jpg", 
      period: "Aug 2025 - Present",
      desc: "Supported the drilling engineer team by digitalizing and validating operational data through systematic querying, preprocessing, and consolidation—ensuring reliable, structured inputs for engineering analysis and reporting."
    },
    {
      role: "Non-Formal Support Staff",
      company: "Office of Jon Erizal — Member of Commission VI, DPR RI",
      logo: "/logos/company2.png", 
      period: "Sep 2021 - Feb 2024",
      desc: "Assisted in organizing constituency visits (reses), managed social media content, and coordinated with local communities and stakeholders during field activities."
    },
    {
      role: "Lecturer Assistant - Pengolahan Citra Digital Course",
      company: "Muhammadiyah Riau University",
      logo: "/logos/university.png", 
      period: "Jan 2024 - Jan 2024",
      desc: "Assisted the lecturer in delivering course content on digital image processing, covering fundamental concepts and image processing techniques. Supervised laboratory sessions and guided students in implementing image processing algorithms using relevant programming tools."
    },
    {
      role: "Multimedia Internship",
      company: "Tanjak Photography Pekanbaru",
      logo: "/logos/company3.png", 
      period: "Sep - Oct 2019 & Jan - Mar 2020",
      desc: ""
    }
  ],

  training: [
    {
      role: "Cloud Computing Cohort",
      organization: "Bangkit Academy by Google, GoTo, Traveloka 2024",
      logo: "/logos/training1.jpeg", 
      period: "Feb 2024 - Jun 2024",
      desc: "Take an intensive 900+ hour program focused on mastering Cloud Computing with Google Cloud Platform (GCP) services such as Compute Engine, App Engine, Cloud Functions, and Cloud Storage, understand the concepts of DevOps, CI/CD, and efficient cloud infrastructure management, improve soft skills such as problem solving, communication, and team collaboration through industry training and mentoring sessions."
    }
  ],

  education: [
    {
      degree: "Bachelor of Computer Science (S.Kom)",
      school: "Muhammadiyah Riau University",
      logo: "/logos/university.png", 
      period: "Sep 2021 - Jan 2025",
      desc: "Awardee Bidikmisi Scholarship | GPA 3.84/4.00 | Wisudawan Angkatan XXVIII Terbaik dengan Predikat Cumlaude | Graduated in 3.5 years"
    },
    {
      degree: "Multimedia",
      school: "SMK Muhammadiyah 1 Pekanbaru",
      logo: "/logos/school.png", 
      period: "2018 - 2021",
      desc: ""
    }
  ],

  projects: [
    {
      title: "EyeTify",
      desc: "An mobile application for the challenges of early detection of eye diseases, especially for those with limited access to regular eye health services due to geographical, financial, or time constraints.",
      image: "/projects/projects1.jpg", 
      video: "/projects/Post Launch EyeTify.mp4",
      tags: ["Machine Learning", "Mobile Development", "Cloud Computing"],
      link: "https://github.com/EyeTify"
    },
    {
      title: "Doctor Appointment System",
      desc: "Web-based platform that allows patients to book appointments with doctors online. This system is designed to simplify the registration process, reduce waiting times, and improve the efficiency of healthcare services in hospitals or clinics.",
      image: "/projects/project2.jpg", 
      tags: ["Laravel", "PHP", "JavaScript", "MySQL"],
      link: "https://github.com/raihanfr21/Hospital-Appointment-Management-System"
    },
    {
      title: "Long-Short Term Memory (LSTM) for Fresh Fruit Bunch Price Forecasting [Thesis Project]",
      desc: "Time series forecasting model to predict Fresh Fruit Bunch prices in Riau Province using the LSTM algorithm based on 10 years of weekly data (2014–2024).",
      image: "/projects/project2.jpg", 
      tags: ["Python", "Deep Learning Algorithms"],
      link: "https://github.com/raihanfr21/LSTM-for-Fresh-Fruit-Bunch-FFB-Price-Forecasting"
    }
  ],

  certifications: [
    "Google Cloud Computing Foundations Certificate",
    "Google IT Support",
    "Google Cybersecurity"
  ],

  publications: [
    {
      title: "Pendekatan Transfer Learning untuk Klasifikasi Penyakit Mata Menggunakan Citra dengan CNN InceptionV3",
      publisher: "Jurnal Computer Science and Information Technology (CoSciTech) [SINTA 4]",
      link: "https://ejurnal.umri.ac.id/index.php/coscitech/article/view/8509/3532"
    },
  ]
};

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" onClick={(e) => handleScroll(e, '#home')} className="text-xl font-bold tracking-tighter cursor-pointer">
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleScroll(e, link.href)}
              className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors text-neutral-600 dark:text-neutral-400"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          {mounted && (
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="text-neutral-600 dark:text-neutral-400">
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
          <button onClick={() => setIsOpen(!isOpen)} className="text-neutral-900 dark:text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800 p-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleScroll(e, link.href)}
              className="text-lg font-medium py-2 border-b border-neutral-100 dark:border-neutral-900 last:border-0"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const SectionTitle = ({ title, icon }: { title: string, icon?: React.ReactNode }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
      {icon}
    </div>
    <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">{title}</h2>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 transition-colors duration-300 font-sans selection:bg-blue-100 dark:selection:bg-blue-900">
      <Navbar />
      
      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20 space-y-32">
        
        {/* --- HERO SECTION --- */}
        <section id="home" className="min-h-[80vh] flex items-center pt-10 md:pt-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-5 gap-12 items-center w-full"
          >
            <div className="md:col-span-2 order-1 md:order-2 flex justify-center md:justify-end relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-3xl opacity-50 dark:opacity-40 scale-110 -z-10" />
              
              <div className="relative w-48 h-48 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white dark:border-neutral-800 shadow-2xl z-10">
                <Image 
                  src="/profile.jpg" 
                  alt={PORTFOLIO_DATA.name}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            <div className="md:col-span-3 order-2 md:order-1 text-center md:text-left">
              <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-blue-600 dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-900/20 rounded-full border border-blue-100 dark:border-blue-800">
                Available for hire
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
                Hi, I'm <br className="md:hidden"/> {PORTFOLIO_DATA.name}.
              </h1>
              <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed mb-8 mx-auto md:mx-0">
                {PORTFOLIO_DATA.about}
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a href="#contact" className="px-8 py-3 bg-neutral-900 dark:bg-white text-white dark:text-black font-semibold rounded-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Contact Me
                </a>
                
                <a 
                  href="/Curriculum Vitae_Raihan Fathurrahman.pdf"             // <-- Pastikan nama file di folder public sama
                  download="CV_Raihan Fathurrahman.pdf"   // <-- Nama file yang akan tersimpan saat user download
                  className="px-8 py-3 border border-neutral-200 dark:border-neutral-700 font-medium rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors flex items-center gap-2 cursor-pointer text-neutral-900 dark:text-white"
                >
                  <Download size={18} /> Download CV
                </a>
              </div>

              <div className="flex gap-6 mt-10 justify-center md:justify-start text-neutral-500">
                <a href={PORTFOLIO_DATA.social.github} target="_blank" rel="noopener noreferrer">
                  <Github className="hover:text-black dark:hover:text-white cursor-pointer transition-colors w-6 h-6" />
                </a>
                <a href={PORTFOLIO_DATA.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors w-6 h-6" />
                </a>
                <a href={PORTFOLIO_DATA.social.email}>
                  <Mail className="hover:text-red-500 dark:hover:text-red-400 cursor-pointer transition-colors w-6 h-6" />
                </a>
                <a href={PORTFOLIO_DATA.social.whatsapp} target="_blank" rel="noopener noreferrer">
                  <WhatsappIcon className="hover:text-green-500 dark:hover:text-green-400 cursor-pointer transition-colors w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- ABOUT & SKILLS --- */}
        <section id="about">
          <SectionTitle title="About & Skills" icon={<Code2 size={24} />} />
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-neutral-50 dark:bg-neutral-900/30 p-8 rounded-2xl border border-neutral-100 dark:border-neutral-800">
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed text-lg">
                Bachelor of Computer Science from Muhammadiyah Riau University, with a Fullstack Developer role. I have a strong interest in web development, data science, and cloud computing. Currently, i'm participating in an internship at PT Pertamina Hulu Rokan (PHR) in the Drilling Engineering HO division, where I'm learning about digitalization and technical data management in the energy industry. I am an output-oriented person, quick to adapt, and have a high enthusiasm for learning new technologies. Currently, I am focused on developing a career in information technology and data analysis, with the aim of contributing through effective and impactful digital solutions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-lg flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span> Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.skills.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-sm font-medium hover:border-blue-500 dark:hover:border-blue-500 transition-colors cursor-default shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            {/* SOFT SKILLS (BARU) */}
              <div>
                <h3 className="font-semibold mb-4 text-lg flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span> Soft Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {PORTFOLIO_DATA.softSkills.map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-sm font-medium hover:border-green-500 dark:hover:border-green-500 transition-colors cursor-default shadow-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- EXPERIENCE (With Logos) --- */}
        <section id="experience">
          <SectionTitle title="Work Experience" icon={<Briefcase size={24} />} />
          <div className="space-y-12">
            {PORTFOLIO_DATA.experience.map((exp, idx) => (
              <div key={idx} className="flex gap-6 md:gap-8 items-start relative group">
                {/* Timeline Line */}
                <div className="absolute left-[28px] md:left-[36px] top-16 bottom-[-48px] w-0.5 bg-neutral-200 dark:bg-neutral-800" />
                
                {/* Logo Wrapper */}
                <div className="shrink-0 relative w-14 h-14 md:w-20 md:h-20 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white p-2 z-10 shadow-sm">
                  <Image 
                    src={exp.logo} 
                    alt={exp.company} 
                    fill 
                    className="object-contain p-1" 
                  />
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                    <span className="text-sm font-mono text-neutral-500 bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded inline-block w-fit mt-1 sm:mt-0">{exp.period}</span>
                  </div>
                  <p className="font-medium text-neutral-700 dark:text-neutral-300 mb-3">{exp.company}</p>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm md:text-base">{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- TRAINING & ORGANISATIONAL (NEW SECTION) --- */}
        <section id="training">
          <SectionTitle title="Training" icon={<Users size={24} />} />
          <div className="space-y-12">
            {PORTFOLIO_DATA.training.map((item, idx) => (
              <div key={idx} className="flex gap-6 md:gap-8 items-start relative group">
                {/* Timeline Line */}
                <div className="absolute left-[28px] md:left-[36px] top-16 bottom-[-48px] w-0.5 bg-neutral-200 dark:bg-neutral-800 last:hidden" />
                
                {/* Logo Wrapper */}
                <div className="shrink-0 relative w-14 h-14 md:w-20 md:h-20 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white p-2 z-10 shadow-sm">
                  <Image 
                    src={item.logo} 
                    alt={item.organization} 
                    fill 
                    className="object-contain p-1" 
                  />
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{item.role}</h3>
                    <span className="text-sm font-mono text-neutral-500 bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded inline-block w-fit mt-1 sm:mt-0">{item.period}</span>
                  </div>
                  <p className="font-medium text-neutral-700 dark:text-neutral-300 mb-3">{item.organization}</p>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm md:text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- EDUCATION (With Logos) --- */}
        <section id="education">
          <SectionTitle title="Education" icon={<GraduationCap size={24} />} />
          <div className="grid gap-6">
            {PORTFOLIO_DATA.education.map((edu, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-6 p-6 border border-neutral-200 dark:border-neutral-800 rounded-2xl bg-neutral-50 dark:bg-neutral-900/20 hover:bg-white dark:hover:bg-neutral-900 transition-all shadow-sm hover:shadow-md">
                 {/* Logo Sekolah */}
                <div className="shrink-0 relative w-16 h-16 bg-white rounded-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden mx-auto md:mx-0">
                   <Image 
                     src={edu.logo} 
                     alt={edu.school} 
                     fill 
                     className="object-contain p-2" 
                   />
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-2">
                    <h3 className="text-lg font-bold">{edu.school}</h3>
                    <span className="text-xs md:text-sm text-neutral-500 font-mono bg-white dark:bg-neutral-800 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-700 mt-2 md:mt-0">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{edu.degree}</p>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm">{edu.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- PROJECTS (With Images) --- */}
        <section id="projects">
          <SectionTitle title="Selected Projects" icon={<Code2 size={24} />} />
          <div className="grid md:grid-cols-2 gap-8">
            {PORTFOLIO_DATA.projects.map((project, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden bg-white dark:bg-neutral-900 flex flex-col h-full shadow-sm hover:shadow-2xl dark:hover:shadow-neutral-900/50 transition-all"
              >
 {/* Project Media Preview (Video or Image) */}
                <div className="relative w-full h-56 overflow-hidden bg-neutral-200 dark:bg-neutral-800">
                   {project.video ? (
                     <video
                       src={project.video}
                       autoPlay
                       muted
                       loop
                       playsInline
                       poster={project.image} // Gambar muncul saat video loading
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                     />
                   ) : (
                     <Image 
                       src={project.image} 
                       alt={project.title} 
                       fill 
                       className="object-cover group-hover:scale-105 transition-transform duration-500" 
                     />
                   )}
                   
                   {/* Overlay Link Icon (Tetap Sama) */}
                   <a href={project.link} className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white z-10">
                      <div className="flex items-center gap-2 font-medium bg-white/20 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/30 hover:bg-white/30 transition-colors">
                        View Project <ArrowUpRight size={18} />
                      </div>
                   </a>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6 flex-1 leading-relaxed">
                    {project.desc}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs font-semibold px-2.5 py-1 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded text-neutral-600 dark:text-neutral-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- CERTIFICATIONS & PUBLICATIONS --- */}
        <section className="grid md:grid-cols-2 gap-12">
          {/* Certifications */}
          <div className="bg-neutral-50 dark:bg-neutral-900/20 p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800">
            <SectionTitle title="Certifications" icon={<Award size={24} />} />
            <ul className="space-y-4">
              {PORTFOLIO_DATA.certifications.map((cert, idx) => (
                <li key={idx} className="flex items-start gap-3 text-neutral-700 dark:text-neutral-300">
                  <div className="mt-1.5 h-2 w-2 bg-green-500 rounded-full shrink-0" />
                  <span className="text-sm font-medium">{cert}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Publications */}
          <div className="bg-neutral-50 dark:bg-neutral-900/20 p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800">
             <SectionTitle title="Publications" icon={<BookOpen size={24} />} />
             <ul className="space-y-6">
              {PORTFOLIO_DATA.publications.map((pub, idx) => (
                <li key={idx} className="border-b border-neutral-200 dark:border-neutral-800 last:border-0 pb-4 last:pb-0">
                  <a href={pub.link} className="group block">
                    <h4 className="font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex items-center gap-2">
                      {pub.title} <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h4>
                    <p className="text-sm text-neutral-500 mt-1">Published on {pub.publisher}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* --- CONTACT ME --- */}
        <section id="contact" className="max-w-2xl mx-auto">
           <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
              <p className="text-neutral-600 dark:text-neutral-400">
                Tertarik berkolaborasi atau punya pertanyaan? Isi form di bawah ini.
              </p>
           </div>

           <div className="p-8 border border-neutral-200 dark:border-neutral-800 rounded-2xl bg-white dark:bg-neutral-900 shadow-lg">
             <form className="space-y-6">
               <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-neutral-700 dark:text-neutral-300">Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-neutral-700 dark:text-neutral-300">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="name@example.com" />
                  </div>
               </div>
               <div>
                 <label className="block text-sm font-semibold mb-2 text-neutral-700 dark:text-neutral-300">Message</label>
                 <textarea rows={5} className="w-full px-4 py-3 rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none" placeholder="Ceritakan detail project Anda..." />
               </div>
               <button type="button" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors shadow-lg hover:shadow-blue-500/30">
                 Send Message
               </button>
             </form>
           </div>
        </section>

      </main>

      {/* --- FOOTER --- */}
      <footer className="py-8 text-center text-sm text-neutral-500 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950">
        <p>© {new Date().getFullYear()} {PORTFOLIO_DATA.name}. All rights reserved.</p>
        <p className="mt-1">Built with <span className="text-black dark:text-white font-medium">Next.js</span> & <span className="text-black dark:text-white font-medium">Tailwind CSS</span></p>
      </footer>
    </div>
  );
}