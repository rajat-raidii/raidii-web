// Smooth scrolling for navigation links
function scrollToContact() {
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function scrollToSolutions() {
    document.getElementById('solutions').scrollIntoView({
        behavior: 'smooth'
    });
}

// Contact form handling for Formspree
function handleFormspreeSubmit(event) {
    // Basic validation before submission
    const formData = new FormData(event.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        company: formData.get('company'),
        message: formData.get('message')
    };
    
    // Basic validation
    if (!data.name || !data.email || !data.message) {
        event.preventDefault();
        alert('Please fill in all required fields.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        event.preventDefault();
        alert('Please enter a valid email address.');
        return;
    }
    
    // Show loading state
    const submitButton = event.target.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Let Formspree handle the submission
    // The form will submit naturally to Formspree
}

// Contact form handling for PHP backend (fallback)
function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Basic validation before submission
    const formData = new FormData(event.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        company: formData.get('company'),
        message: formData.get('message')
    };
    
    // Basic validation
    if (!data.name || !data.email || !data.message) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Show loading state
    const submitButton = event.target.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    // Submit to PHP backend
    fetch('contact-handler.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert(data.message);
            event.target.reset(); // Reset form
        } else {
            alert(data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Sorry, there was an error sending your message. Please try again.');
    })
    .finally(() => {
        // Reset button state
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    });
}

// Add smooth scrolling to all anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Header stays fixed at top - no scroll effects
    
    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.solution-card, .contact-item, .stat');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// AI Expansions for typing effect - separate A and I words
const aiExpansions = [
    // Visionary Expansions
    { a: "UGMENTED", i: "NTELLIGENCE" },
    { a: "PPLIED", i: "MAGINATION" },
    { a: "DAPTIVE", i: "NNOVATION" },
    { a: "RCHITECTS OF", i: "NSIGHT" },
    { a: "CCELERATED", i: "MPACT" },
    
    // Technical / Enterprise Expansions
    { a: "UTOMATED", i: "NFRASTRUCTURE" },
    { a: "NALYTICS", i: "NTEGRATION" },
    { a: "LGORITHMIC", i: "NTELLIGENCE" },
    { a: "UTONOMOUS", i: "NTEROPERABILITY" },
    { a: "CTIONABLE", i: "NFORMATION" },
    
    // Human-Centered Expansions
    { a: "UGMENTED", i: "NTERACTION" },
    { a: "DAPTIVE", i: "NCLUSION" },
    { a: "LIGNED", i: "NTENT" },
    { a: "SSISTIVE", i: "NNOVATION" },
    { a: "UTHENTIC", i: "NSIGHT" },
    
    // Bold & Playful Expansions
    { a: "LWAYS", i: "NVENTING" },
    { a: "MPLIFIED", i: "DEAS" },
    { a: "LL", i: "N" },
    { a: "NOTHER", i: "NTELLIGENCE" },
    { a: "RTIFICIAL", i: "NSTINCTS" }
];

let currentExpansionIndex = 0;
let isDeleting = false;
let currentTextA = '';
let currentTextI = '';
let currentIndexA = 0;
let currentIndexI = 0;

function typeAIExpansion() {
    const typingElementA = document.getElementById('typing-text-a');
    const typingElementI = document.getElementById('typing-text-i');
    if (!typingElementA || !typingElementI) return;
    
    const currentExpansion = aiExpansions[currentExpansionIndex];
    
    if (isDeleting) {
        // Deleting both words simultaneously
        if (currentIndexA > 0) {
            currentTextA = currentExpansion.a.substring(0, currentIndexA - 1);
            currentIndexA--;
            typingElementA.textContent = currentTextA;
        }
        
        if (currentIndexI > 0) {
            currentTextI = currentExpansion.i.substring(0, currentIndexI - 1);
            currentIndexI--;
            typingElementI.textContent = currentTextI;
        }
        
        // When both are completely deleted, move to next expansion
        if (currentIndexA === 0 && currentIndexI === 0) {
            isDeleting = false;
            currentExpansionIndex = (currentExpansionIndex + 1) % aiExpansions.length;
            console.log('Moving to next expansion:', currentExpansionIndex, aiExpansions[currentExpansionIndex]);
        }
    } else {
        // Typing A word first
        if (currentIndexA < currentExpansion.a.length) {
            currentTextA = currentExpansion.a.substring(0, currentIndexA + 1);
            currentIndexA++;
            typingElementA.textContent = currentTextA;
        }
        
        // Only start typing I word after A word is complete
        if (currentIndexA === currentExpansion.a.length && currentIndexI < currentExpansion.i.length) {
            currentTextI = currentExpansion.i.substring(0, currentIndexI + 1);
            currentIndexI++;
            typingElementI.textContent = currentTextI;
        }
        
        // When both are completely typed, start deleting after delay
        if (currentIndexA === currentExpansion.a.length && currentIndexI === currentExpansion.i.length) {
            setTimeout(() => {
                isDeleting = true;
            }, 2000);
        }
    }
    
    // Set typing speed (50% slower)
    const typingSpeed = isDeleting ? 75 : 150;
    setTimeout(typeAIExpansion, typingSpeed);
}

// Initialize AI typing effect when page loads
window.addEventListener('load', function() {
    // Reset all variables
    currentExpansionIndex = 0;
    isDeleting = false;
    currentTextA = '';
    currentTextI = '';
    currentIndexA = 0;
    currentIndexI = 0;
    
    typeAIExpansion();
});

// Add parallax effect to hero visual
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroVisual = document.querySelector('.hero-visual');
    
    if (heroVisual) {
        const rate = scrolled * -0.5;
        heroVisual.style.transform = `translateY(${rate}px)`;
    }
});

// Add hover effects to solution cards
document.addEventListener('DOMContentLoaded', function() {
    const solutionCards = document.querySelectorAll('.solution-card');
    
    solutionCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
