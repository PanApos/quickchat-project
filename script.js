document.addEventListener('DOMContentLoaded', ()=>{


    /*Humburger menu */
     
    const menuBtn = document.querySelector ('.hamburger-menu-btn');
    const navLinks = document.querySelector ('nav ul');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener ('click', () =>{
            menuBtn.classList.toggle('open');

            navLinks.classList.toggle ('active');
        });
    }

    /* info.html Pages*/ 
    const urlParams= new URLSearchParams(window.location.search);
    const page= urlParams.get('page');

    const companySection = document.getElementById('company-section');
    const faqSection = document.getElementById ('faq-section');
    const policySection = document.getElementById ('policy-section');
    const infoCta = document.getElementById ('info-cta')

    /*Απόκρυψη όλων */

    if (companySection) companySection.style.display = 'none';
    if (faqSection) faqSection.style.display = 'none';
    if (policySection) policySection.style.display = 'none';
    if (infoCta) infoCta.style.display = 'none';

    /*Εμφάνιση Sections ξεχωριστά */

    if (page === 'faq') {
        if (faqSection) faqSection.style.display = 'block';
        if (infoCta) infoCta.style.display = 'block';
    }
    else if (page === 'policy') {
        if (policySection) policySection.style.display = 'block';
        if (infoCta) infoCta.style.display = 'block';
    }
    else {
        if (companySection) companySection.style.display = 'block';
    }


    /* FAQ Section */

    const faqItems = document.querySelectorAll ('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector ('.faq-question');
        const icon = item.querySelector ('.faq-icon');

        if (question){
            question.addEventListener ('click',() =>{

                faqItems.forEach (otherItem => {
                    if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    const otherIcon = otherItem.querySelector ('.faq-icon');
                    if (otherIcon) otherIcon.textContent = '+';
                    }
                });

                const isActive = item.classList.toggle ('active');
                if (icon){
                icon.textContent = isActive ? '-': '+';
                }
            });
        }
    });
    
        /* FAQ Search Bar */

    const searchInput = document.getElementById ('faq-search-input');
        

    if (searchInput) {
        searchInput.addEventListener ('input' , (e) => {
            const term = e.target.value.toLowerCase();

            faqItems.forEach( item => {
                const questionText = item.querySelector ('h3') .textContent.toLowerCase();
                const answerText = item.querySelector('.faq-answer') .textContent.toLowerCase();

                if (questionText.includes(term) || answerText.includes(term)) {
                        item.style.display = 'block';
                }
                else {
                        item.style.display = 'none';
                }
            });
        });
    }    
});
