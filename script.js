document.addEventListener("DOMContentLoaded", () => {
    
    // --- Interactive Cursor ---
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX; const posY = e.clientY;
        cursorDot.style.left = `${posX}px`; cursorDot.style.top = `${posY}px`;
        cursorOutline.animate({ left: `${posX}px`, top: `${posY}px` }, { duration: 500, fill: "forwards" });
    });
    const interactiveElements = document.querySelectorAll('a, button, .service-card, .insight-card, .testimonial-slider-nav button, .day:not(.disabled), .time-slot');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursorOutline.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursorOutline.classList.remove('hover'));
    });

    // --- Mobile Navigation ---
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    hamburger.addEventListener("click", () => { hamburger.classList.toggle("active"); navMenu.classList.toggle("active"); });
    document.querySelectorAll(".nav-menu a").forEach(n => n.addEventListener("click", () => { hamburger.classList.remove("active"); navMenu.classList.remove("active"); }));

    // --- Scroll-Reveal Animations ---
    const fadeInElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries, obs) => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); obs.unobserve(entry.target); } }); }, { threshold: 0.1 });
    fadeInElements.forEach(el => observer.observe(el));
    
    // --- Animated Counters ---
    const counters = document.querySelectorAll('.counter');
    const animateCounters = () => { counters.forEach(counter => { const updateCount = () => { const target = +counter.getAttribute('data-target'); const count = +counter.innerText; const increment = target / 200; if (count < target) { counter.innerText = Math.ceil(count + increment); setTimeout(updateCount, 1); } else { counter.innerText = target; } }; updateCount(); }); };
    const counterObserver = new IntersectionObserver((entries, obs) => { if (entries[0].isIntersecting) { animateCounters(); obs.unobserve(entries[0].target); } }, { threshold: 0.5 });
    const countersSection = document.querySelector('.animated-counters');
    if (countersSection) counterObserver.observe(countersSection);
    
    // --- Logo Carousel ---
    const track = document.querySelector('.logo-carousel-track');
    if (track) { const logos = track.querySelectorAll('img'); logos.forEach(logo => track.appendChild(logo.cloneNode(true))); }
    
    // --- Testimonial Slider ---
    const testimonialSlides = document.querySelectorAll(".testimonial-slide");
    if (testimonialSlides.length > 0) {
        const prevBtn = document.querySelector(".testimonial-slider-nav .prev-btn"); 
        const nextBtn = document.querySelector(".testimonial-slider-nav .next-btn");
        let currentSlide = 0;
        const showSlide = n => { testimonialSlides.forEach((slide, index) => slide.classList.toggle('active-slide', index === n)); };
        const nextSlide = () => { currentSlide = (currentSlide + 1) % testimonialSlides.length; showSlide(currentSlide); };
        const prevSlide = () => { currentSlide = (currentSlide - 1 + testimonialSlides.length) % testimonialSlides.length; showSlide(currentSlide); };
        showSlide(currentSlide); nextBtn.addEventListener("click", nextSlide); prevBtn.addEventListener("click", prevSlide);
    }
    
    // --- Insights Slider Navigation ---
    const insightsSlider = document.querySelector('.insights-slider');
    const insightsPrevBtn = document.getElementById('insights-prev');
    const insightsNextBtn = document.getElementById('insights-next');

    if (insightsSlider && insightsPrevBtn && insightsNextBtn) {
        const cardWidth = 450; // Must match the flex-basis in CSS
        const gap = 30; // Must match the gap in CSS
        const scrollAmount = cardWidth + gap;

        const updateInsightsButtons = () => {
            const maxScrollLeft = insightsSlider.scrollWidth - insightsSlider.clientWidth;
            insightsPrevBtn.disabled = insightsSlider.scrollLeft < 10; // Use small tolerance
            insightsNextBtn.disabled = insightsSlider.scrollLeft > maxScrollLeft - 10; // Use small tolerance
        };

        insightsPrevBtn.addEventListener('click', () => {
            insightsSlider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        insightsNextBtn.addEventListener('click', () => {
            insightsSlider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });

        // Update buttons on initial load and after scroll
        insightsSlider.addEventListener('scroll', updateInsightsButtons, { passive: true });
        updateInsightsButtons(); // Initial check
    }

    // --- Video Lightbox ---
    const videoLinks = document.querySelectorAll('.video-link');
    const lightbox = document.getElementById('video-lightbox');
    const closeLightboxBtn = document.querySelector('.close-lightbox-btn');
    const videoIframe = document.getElementById('video-iframe');
    videoLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const videoId = link.getAttribute('data-video-id');
            if (videoId) {
                videoIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
                lightbox.style.display = 'flex';
            }
        });
    });
    const closeLightbox = () => { lightbox.style.display = 'none'; videoIframe.src = ''; };
    closeLightboxBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => { if (e.target === lightbox) { closeLightbox(); } });

    // --- Contact Form ---
    const contactForm = document.getElementById('contact-form');
    const formConfirmation = document.getElementById('form-confirmation');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            formConfirmation.textContent = "Thank you! Your message has been sent.";
            setTimeout(() => {
                contactForm.reset();
                formConfirmation.textContent = "";
            }, 5000);
        });
    }

    // --- Booking Modal & Form ---
    const modal = document.getElementById("booking-modal");
    const openModalBtns = document.querySelectorAll(".open-modal-btn");
    const closeModalBtn = modal.querySelector(".close-btn");
    const bookingForm = document.getElementById("booking-form");
    const step1 = document.getElementById("step-1");
    const step2 = document.getElementById("step-2");
    const confirmationMessage = document.getElementById("confirmation-message");
    const nextStepBtn = document.getElementById('next-step-btn');
    const prevStepBtn = document.getElementById('prev-step-btn');
    const confirmBtn = bookingForm.querySelector('button[type="submit"]');

    let selectedDate = null;
    let selectedTime = null;

    const updateFormHeight = () => {
        const activeStep = bookingForm.querySelector('.form-step.active');
        if (activeStep) {
            bookingForm.style.height = `${activeStep.scrollHeight}px`;
        }
    };

    const openModal = () => {
        modal.style.display = "block";
        resetBookingForm();
        generateCalendar();
        setTimeout(() => { 
            updateFormHeight();
        }, 50);
    };
    const closeModal = () => modal.style.display = "none";
    
    openModalBtns.forEach(btn => btn.addEventListener('click', e => { e.preventDefault(); openModal(); }));
    closeModalBtn.addEventListener('click', closeModal);
    window.addEventListener('click', e => { if (e.target == modal) closeModal(); });

    nextStepBtn.addEventListener('click', () => {
        if (document.getElementById('booking-name').value && document.getElementById('booking-email').value) {
            step1.classList.add('leaving');
            step1.classList.remove('active');
            step2.classList.remove('leaving');
            step2.classList.add('active');
            updateFormHeight();
        } else {
            alert('Please fill in your name and email.');
        }
    });

    prevStepBtn.addEventListener('click', () => { 
        step2.classList.add('leaving');
        step2.classList.remove('active');
        step1.classList.remove('leaving');
        step1.classList.add('active');
        updateFormHeight();
    });

    const resetBookingForm = () => {
        bookingForm.reset();
        confirmationMessage.style.display = 'none';
        bookingForm.style.display = 'block';
        
        step1.classList.remove('leaving');
        step1.classList.add('active');
        step2.classList.remove('active');
        step2.classList.remove('leaving');
        
        selectedDate = null; selectedTime = null;
        confirmBtn.disabled = true;
    };

    const monthYearLabel = document.getElementById('month-year-label');
    const calendarGrid = document.querySelector('.calendar-grid');
    const timeSlotsContainer = document.getElementById('time-slots-container');
    let currentDate = new Date();

    function generateCalendar() {
        calendarGrid.innerHTML = '';
        const month = currentDate.getMonth();
        const year = currentDate.getFullYear();
        monthYearLabel.textContent = `${currentDate.toLocaleString('default', { month: 'long' })} ${year}`;
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        ['S','M','T','W','T','F','S'].forEach(day => { const el = document.createElement('div'); el.className = 'day-name'; el.textContent = day; calendarGrid.appendChild(el); });
        for (let i = 0; i < firstDayOfMonth; i++) calendarGrid.appendChild(document.createElement('div'));
        for (let i = 1; i <= daysInMonth; i++) {
            const dayEl = document.createElement('div');
            dayEl.className = 'day';
            dayEl.textContent = i;
            const today = new Date();
            if (new Date(year, month, i) < today.setHours(0,0,0,0)) {
                dayEl.classList.add('disabled');
            } else {
                dayEl.addEventListener('click', () => selectDate(dayEl, i, month, year));
            }
            calendarGrid.appendChild(dayEl);
        }
    }

    function selectDate(element, day, month, year) {
        selectedDate = new Date(year, month, day);
        document.querySelectorAll('.calendar-grid .day').forEach(d => d.classList.remove('selected'));
        element.classList.add('selected');
        generateTimeSlots();
    }
    
    function generateTimeSlots() {
        timeSlotsContainer.innerHTML = '';
        const availableTimes = ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM"];
        availableTimes.forEach(time => {
            const el = document.createElement('div');
            el.className = 'time-slot';
            el.textContent = time;
            el.addEventListener('click', () => selectTime(el, time));
            timeSlotsContainer.appendChild(el);
        });
        updateFormHeight();
    }

    function selectTime(element, time) {
        selectedTime = time;
        document.querySelectorAll('.time-slot').forEach(t => t.classList.remove('selected'));
        element.classList.add('selected');
        confirmBtn.disabled = false;
    }

    document.getElementById('prev-month-btn').addEventListener('click', () => { currentDate.setMonth(currentDate.getMonth() - 1); generateCalendar(); });
    document.getElementById('next-month-btn').addEventListener('click', () => { currentDate.setMonth(currentDate.getMonth() + 1); generateCalendar(); });

    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        if (selectedDate && selectedTime) {
            const formattedDate = selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
            document.getElementById('confirm-datetime').textContent = `${formattedDate} at ${selectedTime}`;
            bookingForm.style.display = 'none';
            confirmationMessage.style.display = 'block';
            setTimeout(() => closeModal(), 5000);
        }
    });
    
    window.addEventListener('resize', updateFormHeight);

    // --- AI Assistant Chat "Saumyaa" ---
    const chatWidget = document.getElementById('chat-widget');
    const chatToggleBtn = document.getElementById('chat-toggle-btn');
    const closeChatBtn = document.getElementById('close-chat-btn');
    const chatMessages = document.getElementById('chat-messages');
    const chatInputArea = document.getElementById('chat-input-area');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    let conversationContext = null;

    chatToggleBtn.addEventListener('click', () => {
        chatWidget.classList.toggle('chat-open');
        if (chatWidget.classList.contains('chat-open') && chatMessages.children.length === 0) {
            startChat();
        }
    });
    closeChatBtn.addEventListener('click', () => chatWidget.classList.remove('chat-open'));

    const showTypingIndicator = () => {
        const typingEl = document.createElement('div');
        typingEl.classList.add('chat-message', 'assistant', 'typing-indicator');
        typingEl.innerHTML = '<span></span><span></span><span></span>';
        chatMessages.appendChild(typingEl);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    };

    const hideTypingIndicator = () => {
        const typingEl = chatMessages.querySelector('.typing-indicator');
        if (typingEl) {
            typingEl.remove();
        }
    };
    
    const addMessage = (text, sender) => {
        const messageEl = document.createElement('div');
        messageEl.classList.add('chat-message', sender);
        messageEl.textContent = text;
        chatMessages.appendChild(messageEl);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    };
    
    const showOptions = (options) => {
        const existingButtons = chatInputArea.querySelectorAll('.chat-option-btn');
        existingButtons.forEach(btn => btn.remove());
        options.forEach(option => {
            const button = document.createElement('button');
            button.classList.add('chat-option-btn');
            button.textContent = option.text;
            button.onclick = () => { addMessage(option.text, 'user'); handleUserInput(option.payload); };
            chatInputArea.insertBefore(button, chatForm);
        });
    };

    const startChat = () => {
        chatMessages.innerHTML = '';
        conversationContext = null;
        const hour = new Date().getHours();
        const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";
        
        addMessage(`${greeting}. I'm Saumyaa, Mr. Rana’s AI assistant. How may I help you today?`, 'assistant');
        showOptions([
            { text: "About his services", payload: 'SERVICES' },
            { text: "Book an appointment", payload: 'BOOKING_MODAL' },
        ]);
    };
    
    chatForm.addEventListener('submit', e => {
        e.preventDefault();
        const userInput = chatInput.value.trim();
        if (userInput) {
            addMessage(userInput, 'user');
            handleUserInput(userInput);
            chatInput.value = '';
        }
    });

    const handleUserInput = (input) => {
        const lowerInput = input.toLowerCase();
        
        const existingButtons = chatInputArea.querySelectorAll('.chat-option-btn');
        existingButtons.forEach(btn => btn.remove());
        
        showTypingIndicator();
        
        setTimeout(() => {
            hideTypingIndicator();
            if (lowerInput.includes('hello') || lowerInput.includes('hii')) {
                addMessage("Hello there! How can I assist you with Mr. Rana's work today?", 'assistant');
                showOptions([ { text: "About his services", payload: 'SERVICES' }, { text: "Book an appointment", payload: 'BOOKING_MODAL' } ]);
            }
            else if (lowerInput.includes('who is') || lowerInput.includes('about mr. rana') || lowerInput.includes('about mukesh')) {
                addMessage("Mukesh K. Rana is a visionary CEO, entrepreneur, and investor, known for founding several successful technology companies. His work focuses on leveraging AI and sustainable tech to solve complex global challenges.", 'assistant');
                showOptions([ { text: "Learn about his services", payload: 'SERVICES' }, { text: "Ask another question", payload: 'START' } ]);
            }
            else if (lowerInput === 'services') {
                addMessage("Of course. Mr. Rana's advisory services are centered around four key areas: Strategic Business Consulting, Executive Mentorship, Venture Investment, and Keynote Speaking.", 'assistant');
                addMessage("Is there a particular area you'd like to know more about?", "assistant");
                conversationContext = 'SERVICES';
            } else if (lowerInput.includes('more') && conversationContext === 'SERVICES') {
                addMessage("Mr. Rana's consulting focuses on market disruption and scaling strategies. His mentorship is tailored for founders and C-suite leaders. Venture investments are directed at early-stage tech in AI and sustainability. His speaking topics cover the future of technology and leadership.", 'assistant');
                showOptions([ { text: "Book an appointment", payload: 'BOOKING_MODAL' }, { text: "Ask another question", payload: 'START' } ]);
            } else if (lowerInput === 'booking_modal' || lowerInput.includes('book') || lowerInput.includes('appointment') || lowerInput.includes('meet')) {
                addMessage("Certainly. I'll open the appointment scheduler for you now.", "assistant");
                setTimeout(() => { openModal(); chatWidget.classList.remove('chat-open'); }, 1000);
            } else if (lowerInput.includes('invest')) {
                addMessage("Mr. Rana's investment focus is on early-stage technology startups in AI, decentralized systems, and sustainable tech. He partners with founders who have a clear vision for creating transformative value.", 'assistant');
                conversationContext = 'INVESTMENT';
                showOptions([ { text: "Book an appointment", payload: 'BOOKING_MODAL' }, { text: "Ask another question", payload: 'START' } ]);
            } else if (lowerInput.includes('contact') || lowerInput.includes('email')) {
                addMessage("You can send a message via the contact form on this page or email directly at contact@mukeshkrana.com.", 'assistant');
                showOptions([ { text: "Go to Contact Section", payload: 'CONTACT_SCROLL' }, { text: "Start Over", payload: 'START' } ]);
            } else if (lowerInput === 'contact_scroll') {
                 addMessage("Of course, scrolling to the contact section.", 'assistant');
                 setTimeout(() => { document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); chatWidget.classList.remove('chat-open');}, 1000);
            } else if (lowerInput.includes('thank')) {
                addMessage("You're most welcome! Is there anything else I can assist you with?", "assistant");
                showOptions([ { text: "Start Over", payload: 'START' } ]);
            } else if (lowerInput === 'start') {
                startChat();
            } else {
                addMessage("I apologize, my capabilities are focused on Mr. Rana's professional activities. I can assist with topics like his services, investment focus, or booking an appointment.", 'assistant');
                showOptions([ { text: "About his services", payload: 'SERVICES' }, { text: "Book an appointment", payload: 'BOOKING_MODAL' } ]);
            }
        }, 1200);
    };
});