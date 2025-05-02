document.addEventListener("DOMContentLoaded", function() {
   
    const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-anim');
                return;
            }
            entry.target.classList.remove('fade-in-anim')
        });
    });
    
   
    obs.observe(document.querySelector('.abtmetxt'));
    obs.observe(document.querySelector('.pfp'));
    obs.observe(document.querySelector('.about-me-text'));
    obs.observe(document.querySelector('.miscellaneous'));
    obs.observe(document.querySelector('.exptxt'));
    obs.observe(document.querySelector('.experiences'));
    obs.observe(document.querySelector('.contacttxt'));
    obs.observe(document.querySelector('.contacts-area'));
    obs.observe(document.querySelector('.skills-section'));
    obs.observe(document.querySelector('.other-links'));
    obs.observe(document.querySelector('.links-icons'));
    
    
    const skillsObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                const percentage = entry.target.getAttribute('data-percentage');
                entry.target.style.setProperty('--target-percentage', percentage + '%');
                entry.target.classList.add('animate-skill', 'animated');
            }
        });
    });

    document.querySelectorAll('.skill-progress').forEach(skillBar => {
        skillsObserver.observe(skillBar);
    });
    
 
    const skillsSection = document.querySelector('.skills-section');
    if (skillsSection) {
        obs.observe(skillsSection);
    }
});