import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ExternalLink, Github, Linkedin, Mail, Phone, MapPin, Code, Database, Smartphone, Globe, Zap, Users, Target, Award, ChevronDown, Send, Sun, Moon } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '', type: 'Web' });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'services', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí conectarías con tu backend o servicio de email
    console.log('Formulario enviado:', formData);
    alert('¡Mensaje enviado! Te responderé pronto.');
    setFormData({ name: '', email: '', message: '', type: 'Web' });
  };

  const theme = isDark ? 'dark' : '';

  const skills = [
    { name: 'React', level: 90, icon: '⚛️' },
    { name: 'React Native', level: 85, icon: '📱' },
    { name: 'TypeScript', level: 80, icon: '🔷' },
    { name: 'Tailwind CSS', level: 95, icon: '🎨' },
    { name: 'Node.js', level: 85, icon: '🟢' },
    { name: 'Flask', level: 90, icon: '🐍' },
    { name: 'PostgreSQL', level: 85, icon: '🐘' },
    { name: 'Supabase', level: 80, icon: '⚡' }
  ];

  const projects = [
    {
      title: 'FPC - Sistema Automotriz',
      description: 'Plataforma completa para gestión de talleres con roles diferenciados, seguimiento en tiempo real y generación de reportes.',
      tech: ['Flask', 'SQLAlchemy', 'MySQL', 'React', 'TypeScript'],
      image: '/api/placeholder/600/400',
      demo: '#',
      repo: '#',
      featured: true
    },
    {
      title: 'DarkHold Volley Club',
      description: 'Landing page moderna y responsiva para club deportivo con animaciones fluidas y diseño atractivo.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      image: '/api/placeholder/600/400',
      demo: 'https://darkholdvolleyclub.netlify.app/',
      repo: '#',
      featured: true
    },
    {
      title: 'EduMultipro',
      description: 'Plataforma educativa para gestión de contenido y acceso a cursos con sistema de usuarios.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind'],
      image: '/api/placeholder/600/400',
      demo: 'https://edumultipro.netlify.app/',
      repo: '#',
      featured: true
    },
    {
      title: 'NexusFolds',
      description: 'Sitio experimental con efectos visuales avanzados y animaciones 3D.',
      tech: ['React', 'Three.js', 'CSS3'],
      image: '/api/placeholder/600/400',
      demo: 'https://nexusfolds.netlify.app/',
      repo: '#'
    },
    {
      title: 'Enny Capez Portfolio',
      description: 'Portafolio personal con enfoque en diseño visual y experiencia de usuario.',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      image: '/api/placeholder/600/400',
      demo: 'https://ennycapez.netlify.app/',
      repo: '#'
    },
    {
      title: 'Acuario Dimensional',
      description: 'Experiencia interactiva con temática acuática y efectos visuales inmersivos.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      image: '/api/placeholder/600/400',
      demo: 'https://acuariodimensional.netlify.app/',
      repo: '#'
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        
        {/* Header */}
        <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700">
          <nav className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                 Oscar Cruz
              </div>
              
              <div className="hidden md:flex items-center space-x-8">
                {['home', 'about', 'skills', 'projects', 'services', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollTo(item)}
                    className={`capitalize transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                      activeSection === item ? 'text-blue-600 dark:text-blue-400 font-medium' : ''
                    }`}
                  >
                    {item === 'home' ? 'Inicio' : 
                     item === 'about' ? 'Sobre mí' :
                     item === 'skills' ? 'Habilidades' :
                     item === 'projects' ? 'Proyectos' :
                     item === 'services' ? 'Servicios' :
                     'Contacto'}
                  </button>
                ))}
                
                <button
                  onClick={() => setIsDark(!isDark)}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                
                <a
                  href="mailto:oscarcruzsena2006@gmail.com"
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-medium hover:scale-105 transition-transform"
                >
                  Contrátame
                </a>
              </div>

              <div className="md:hidden flex items-center space-x-4">
                <button
                  onClick={() => setIsDark(!isDark)}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
                >
                  {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                {['home', 'about', 'skills', 'projects', 'services', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollTo(item)}
                    className="block w-full text-left py-2 capitalize hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    {item === 'home' ? 'Inicio' : 
                     item === 'about' ? 'Sobre mí' :
                     item === 'skills' ? 'Habilidades' :
                     item === 'projects' ? 'Proyectos' :
                     item === 'services' ? 'Servicios' :
                     'Contacto'}
                  </button>
                ))}
              </div>
            )}
          </nav>
        </header>

        {/* Hero Section */}
        <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900/20">
          <div className="container mx-auto px-4 py-16">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2 space-y-6">
                <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                  👋 Disponible para oportunidades
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Construyo{' '}
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
                    experiencias digitales
                  </span>{' '}
                  que impulsan ideas
                </h1>
                
                <h2 className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300">
                  Full Stack Developer • 19 años • Bogotá, Colombia
                </h2>
                
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <Zap className="text-yellow-500" size={16} />
                    Entregas rápidas con calidad
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <Database className="text-green-500" size={16} />
                    APIs seguras + JWT
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                    <Smartphone className="text-blue-500" size={16} />
                    Apps responsivas
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => scrollTo('projects')}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-medium hover:scale-105 transition-transform shadow-lg"
                  >
                    Ver Proyectos
                  </button>
                  <button
                    onClick={() => scrollTo('contact')}
                    className="px-8 py-4 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-xl font-medium hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors"
                  >
                    Hablemos
                  </button>
                </div>
                
                <div className="flex items-center gap-6 pt-4">
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <Github size={24} />
                  </a>
                  <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <Linkedin size={24} />
                  </a>
                  <a href="mailto:oscarcruzsena2006@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <Mail size={24} />
                  </a>
                  <a href="https://wa.me/573227813912" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <Phone size={24} />
                  </a>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-8xl">🚀</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center animate-bounce">
            <ChevronDown className="mx-auto text-blue-600 dark:text-blue-400" size={32} />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="text-4xl font-bold">
                Hola, soy <span className="text-blue-600 dark:text-blue-400">Oscar Cruz</span>
              </h2>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Soy un desarrollador full stack de <strong>19 años</strong> apasionado por crear soluciones digitales que marquen la diferencia. 
                Actualmente estudio <strong>Análisis y Desarrollo de Software en el SENA</strong> y complemento mi formación con proyectos reales 
                que combinan tecnologías modernas, diseño funcional y código limpio.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl">
                  <div className="text-3xl mb-4">🎯</div>
                  <h3 className="text-xl font-semibold mb-2">Orientado a Resultados</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Cada línea de código tiene un propósito. Me enfoco en crear soluciones que realmente resuelvan problemas.
                  </p>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl">
                  <div className="text-3xl mb-4">🚀</div>
                  <h3 className="text-xl font-semibold mb-2">Aprendizaje Continuo</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    La tecnología evoluciona rápido, y yo también. Siempre estoy aprendiendo nuevas herramientas y mejores prácticas.
                  </p>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl">
                  <div className="text-3xl mb-4">🤝</div>
                  <h3 className="text-xl font-semibold mb-2">Trabajo en Equipo</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Utilizo metodologías ágiles y herramientas como Trello para colaborar efectivamente en proyectos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Habilidades & Tecnologías</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Las herramientas que domino para construir experiencias increíbles
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="text-lg font-semibold">{skill.name}</span>
                      </div>
                      <span className="text-blue-600 dark:text-blue-400 font-medium">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-cyan-500 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 grid md:grid-cols-4 gap-6 text-center">
                <div className="p-4">
                  <div className="text-3xl mb-2">🌐</div>
                  <h3 className="font-semibold">Frontend</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">React, TypeScript, Tailwind</p>
                </div>
                <div className="p-4">
                  <div className="text-3xl mb-2">⚙️</div>
                  <h3 className="font-semibold">Backend</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Node.js, Flask, APIs REST</p>
                </div>
                <div className="p-4">
                  <div className="text-3xl mb-2">📱</div>
                  <h3 className="font-semibold">Móvil</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">React Native, Flutter</p>
                </div>
                <div className="p-4">
                  <div className="text-3xl mb-2">🗄️</div>
                  <h3 className="font-semibold">Base de Datos</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">PostgreSQL, Supabase</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Proyectos Destacados</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Soluciones reales construidas con tecnologías modernas
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={project.title}
                  className={`bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                    project.featured ? 'lg:col-span-1 lg:row-span-1' : ''
                  }`}
                >
                  <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-600 p-8 flex items-center justify-center text-white text-6xl">
                    {index === 0 ? '🚗' : index === 1 ? '🏐' : index === 2 ? '📚' : index === 3 ? '🌀' : index === 4 ? '🎨' : '🐠'}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <a 
                        href={project.demo}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <ExternalLink size={16} />
                        Demo
                      </a>
                      <a 
                        href={project.repo}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      >
                        <Github size={16} />
                        Código
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <a 
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium hover:scale-105 transition-transform"
              >
                <Github size={20} />
                Ver todos en GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">¿Cómo puedo ayudarte?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Servicios que ofrezco para impulsar tu proyecto
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-xl font-bold mb-4">Desarrollo Web Full Stack</h3>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-6">
                  <li>• Landing pages modernas y responsivas</li>
                  <li>• Dashboards y aplicaciones complejas</li>
                  <li>• APIs REST seguras con documentación</li>
                  <li>• Integración con bases de datos</li>
                </ul>
                <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                  React • Node.js • Flask • PostgreSQL
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold mb-4">Desarrollo Móvil</h3>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-6">
                  <li>• Apps nativas multiplataforma</li>
                  <li>• UI/UX optimizada para móviles</li>
                  <li>• Integración con APIs y servicios</li>
                  <li>• Performance y experiencia fluida</li>
                </ul>
                <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                  React Native • Flutter (en formación)
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">🔐</div>
                <h3 className="text-xl font-bold mb-4">APIs & Backend</h3>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-6">
                  <li>• APIs REST seguras con JWT</li>
                  <li>• Documentación con Swagger</li>
                  <li>• Integración con Supabase</li>
                  <li>• Pruebas con Postman</li>
                </ul>
                <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                  FastAPI • Express • Supabase • PostgreSQL
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">¿Construimos algo increíble juntos?</h2>
                <p className="text-xl text-blue-100">
                  Cuéntame tu idea y te propongo una solución. Disponible para prácticas, freelance y trabajo remoto.
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Información de Contacto</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <Mail className="text-blue-300" size={24} />
                        <div>
                          <p className="font-medium">Email</p>
                          <a href="mailto:oscarcruzsena2006@gmail.com" className="text-blue-300 hover:text-blue-200">
                            oscarcruzsena2006@gmail.com
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <Phone className="text-blue-300" size={24} />
                        <div>
                          <p className="font-medium">WhatsApp</p>
                          <a href="https://wa.me/573227813912" className="text-blue-300 hover:text-blue-200">
                            +57 322 781 3912
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <MapPin className="text-blue-300" size={24} />
                        <div>
                          <p className="font-medium">Ubicación</p>
                          <p className="text-blue-300">Bogotá, Colombia</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Redes Sociales</h3>
                    <div className="flex gap-4">
                      <a href="https://github.com/Zarpien06" className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                        <Github size={24} />
                      </a>
                      <a href="https://www.linkedin.com/in/oscarcruz-dev?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                        <Linkedin size={24} />
                      </a>
                      <a href="mailto:oscarcruzsena2006@gmail.com" className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                        <Mail size={24} />
                      </a>
                      <a href="https://wa.me/573227813912" className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                        <Phone size={24} />
                      </a>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                    <h4 className="font-bold mb-2">💼 ¡Busco Oportunidades!</h4>
                    <p className="text-blue-100">
                      Disponible para prácticas profesionales, contrato de aprendizaje, freelance o trabajo remoto. 
                      ¿Tu empresa necesita un desarrollador full stack junior con ganas de aprender y aportar?
                    </p>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <h3 className="text-2xl font-bold mb-6">Envíame un Mensaje</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nombre</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-300 text-white placeholder-white/60"
                        placeholder="Tu nombre"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-300 text-white placeholder-white/60"
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Tipo de Proyecto</label>
                      <select
                        value={formData.type}
                        onChange={(e) => setFormData({...formData, type: e.target.value})}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-300 text-white"
                      >
                        <option value="Web">Desarrollo Web</option>
                        <option value="Mobile">App Móvil</option>
                        <option value="API">API/Backend</option>
                        <option value="Practicas">Prácticas/Trabajo</option>
                        <option value="Otro">Otro</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Mensaje</label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={4}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-blue-300 text-white placeholder-white/60 resize-none"
                        placeholder="Cuéntame sobre tu proyecto o la oportunidad..."
                        required
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-medium hover:scale-[1.02] transition-transform shadow-lg"
                    >
                      <Send size={20} />
                      Enviar Mensaje
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 dark:bg-black text-white py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  Oscar Cruz
                </div>
                <p className="text-gray-400">
                  Desarrollador Full Stack • Construyendo el futuro, una línea de código a la vez
                </p>
              </div>
              
              <div className="flex items-center gap-6">
                <a href="https://github.com/Zarpien06" className="text-gray-400 hover:text-white transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/oscarcruz-dev?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:oscarcruzsena2006@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  <Mail size={24} />
                </a>
                <a href="https://wa.me/573227813912" className="text-gray-400 hover:text-white transition-colors">
                  <Phone size={24} />
                </a>
              </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-400 text-sm">
                  © {new Date().getFullYear()} Oscar Cruz. Todos los derechos reservados.
                </p>
                <p className="text-gray-400 text-sm">
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;
