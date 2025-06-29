document.addEventListener('DOMContentLoaded', function() {

    const burger = document.querySelector('.burger');
    const navMenu = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links .nav-link');
    const langButtons = document.querySelectorAll('.lang-btn');
    const translatableElements = document.querySelectorAll('[data-key]');
    const navbar = document.querySelector('.navbar');

    // NEW: Function to handle navbar style on scroll
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    };
    
    // Attach the scroll listener
    window.addEventListener('scroll', handleScroll);

    const handleNavToggle = () => {
        burger.addEventListener('click', () => {
            navMenu.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('nav-active')) {
                    navMenu.classList.remove('nav-active');
                    burger.classList.remove('toggle');
                }
            });
        });
    };

    const translations = {
        en: {
            logo_text: 'HELLSHOP',
            nav_home: 'Home',
            nav_fragrances: 'Fragrances',
            nav_contact: 'Contact',
            hero_title: 'Unleash Your Scent.',
            hero_subtitle: 'Bold fragrances for the unapologetic soul.',
            hero_button: 'Explore The Collection',
            collection_title: 'Our Collection',
            contact_title: 'Get In Touch',
            contact_subtitle: 'Have questions? Fill out the form below and we\'ll get back to you shortly.',
            form_name: 'Your Name',
            form_email: 'Your Email',
            form_message: 'Your Message',
            form_button: 'Send Message',
            powered_by: 'Powered By'
        },
        ge: {
            logo_text: 'HELLSHOP',
            nav_home: 'მთავარი',
            nav_fragrances: 'სუნამოები',
            nav_contact: 'კონტაქტი',
            hero_title: 'გამოავლინე შენი სურნელი.',
            hero_subtitle: 'საგულდაგულოდ შერჩეული სუნამოები თამამი სულისთვის.',
            hero_button: 'კოლექციის ნახვა',
            collection_title: 'ჩვენი კოლექცია',
            contact_title: 'დაგვიკავშირდით',
            contact_subtitle: 'გაქვთ კითხვები? შეავსეთ ფორმა და მალე გიპასუხებთ.',
            form_name: 'თქვენი სახელი',
            form_email: 'თქვენი იმეილი',
            form_message: 'თქვენი შეტყობინება',
            form_button: 'გაგზავნა',
            powered_by: 'შექმნილია'
        },
        ru: {
            logo_text: 'HELLSHOP',
            nav_home: 'Главная',
            nav_fragrances: 'Ароматы',
            nav_contact: 'Контакт',
            hero_title: 'Раскрой свой аромат.',
            hero_subtitle: 'Смелые ароматы для души без компромиссов.',
            hero_button: 'Посмотреть коллекцию',
            collection_title: 'Наша коллекция',
            contact_title: 'Свяжитесь с нами',
            contact_subtitle: 'Есть вопросы? Заполните форму ниже, и мы скоро свяжемся с вами.',
            form_name: 'Ваше имя',
            form_email: 'Ваш email',
            form_message: 'Ваше сообщение',
            form_button: 'Отправить',
            powered_by: 'Создано'
        }
    };

    const translatePage = (language) => {
        translatableElements.forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[language] && translations[language][key]) {
                element.textContent = translations[language][key];
            }
        });
        localStorage.setItem('language', language);
        langButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === language) {
                btn.classList.add('active');
            }
        });
    };

    langButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            translatePage(event.target.getAttribute('data-lang'));
        });
    });

    const currentLang = localStorage.getItem('language') || 'en';
    translatePage(currentLang);

    handleNavToggle();
});