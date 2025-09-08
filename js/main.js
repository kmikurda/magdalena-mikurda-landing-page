/**
 * Magdalena Mikurda - Professional Manicure Training
 * Main JavaScript File
 * Enhanced with GSAP animations
 */

document.addEventListener('DOMContentLoaded', () => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    
    // Set default ease for all animations
    gsap.defaults({ease: "power2.out"});

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for anchor links with GSAP
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: target.offsetTop - 70, // Adjust for header height
                        autoKill: false
                    },
                    ease: "power2.inOut"
                });
            }
        });
    });

    // Hero section animations
    const heroTimeline = gsap.timeline();
    
    // Set initial state (invisible)
    gsap.set('.hero-content h1, .hero-content h2, .hero-content p, .hero-content .btn', { opacity: 0, y: 30 });
    
    // Animate to visible state
    heroTimeline
        .to('.hero-content h1', { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
        .to('.hero-content h2', { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
        .to('.hero-content p', { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
        .to('.hero-content .btn', { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }, "-=0.6");

    // Header animation on scroll
    gsap.to('.header', {
        scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: '+=100',
            scrub: true
        },
        backgroundColor: 'rgba(255, 255, 255, 0.98)',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
        padding: '0.8rem 0',
        ease: "power1.out"
    });

    // About section animations
    gsap.from('.about-image', {
        scrollTrigger: {
            trigger: '.about-image',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power2.out"
    });

    gsap.from('.about-text', {
        scrollTrigger: {
            trigger: '.about-text',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        x: 50,
        duration: 1,
        ease: "power2.out"
    });

    // Counter animations with GSAP
    const counterItems = document.querySelectorAll('.counter-item');
    counterItems.forEach((item, index) => {
        const counter = item.querySelector('.counter');
        const target = parseInt(counter.getAttribute('data-target'));
        
        // Animate the counter item
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: index * 0.2,
            ease: "power2.out"
        });
        
        // Animate the counter number
        gsap.to(counter, {
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            innerText: target,
            duration: 2,
            snap: { innerText: 1 },
            ease: "power2.out",
            delay: 0.5 + (index * 0.1)
        });
    });

    // Gallery animations
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: index * 0.1,
            ease: "back.out(1.7)"
        });
    });

    // Courses section animation
    gsap.from('.courses-content', {
        scrollTrigger: {
            trigger: '.courses',
            start: 'top 70%',
            toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out"
    });
    
    // Pulse animation for the button
    const pulseButton = document.querySelector('.btn.pulse');
    if (pulseButton) {
        gsap.to(pulseButton, {
            scale: 1.05,
            boxShadow: '0 8px 20px rgba(187, 134, 252, 0.4)',
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
    }

    // Footer animations
    const footerElements = document.querySelectorAll('.footer-logo, .footer-contact, .footer-social');
    footerElements.forEach((element, index) => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top 90%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            delay: index * 0.2,
            ease: "power2.out"
        });
    });

    // Section headers animation
    document.querySelectorAll('.section-header').forEach(header => {
        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power2.out"
        });
        
        gsap.from(header.querySelector('.underline'), {
            scrollTrigger: {
                trigger: header,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            scaleX: 0,
            transformOrigin: 'center',
            duration: 0.8,
            delay: 0.3,
            ease: "power2.out"
        });
    });
});