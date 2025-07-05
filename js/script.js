document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const navMenu = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links .nav-link');
    const langButtons = document.querySelectorAll('.lang-btn');
    const navbar = document.querySelector('.navbar');

    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    };
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
            contact_title: 'Contact us for details',
            form_fullname: 'Full name',
            form_email: 'Email',
            form_fragrance: 'Wanted fragrance (optional)',
            form_button: 'Submit',
            powered_by: 'Powered by',
            footer_copyright: '© 2025 hellsShop'
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
            contact_title: 'დაგვიკავშირდით დეტალებისთვის',
            form_fullname: 'სრული სახელი',
            form_email: 'თქვენი იმეილი',
            form_fragrance: 'სასურველი სუნამო (სურვილისამებრ)',
            form_button: 'გაგზავნა',
            powered_by: 'შექმნილია',
            footer_copyright: '© 2025 hellsShop'
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
            contact_title: 'Свяжитесь с нами для деталей',
            form_fullname: 'Полное имя',
            form_email: 'Ваш email',
            form_fragrance: 'Желаемый аромат (необязательно)',
            form_button: 'Отправить',
            powered_by: 'Создано',
            footer_copyright: '© 2025 hellsShop'
        }
    };

    const translatePage = (language) => {
        const elementsToTranslate = document.querySelectorAll('[data-key], [data-placeholder-key]');
        elementsToTranslate.forEach(element => {
            const textKey = element.dataset.key;
            const placeholderKey = element.dataset.placeholderKey;
            if (textKey && translations[language][textKey]) {
                element.textContent = translations[language][textKey];
            }
            if (placeholderKey && translations[language][placeholderKey]) {
                element.setAttribute('placeholder', translations[language][placeholderKey]);
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
    handleScroll();
});