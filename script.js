/*.................toggle icon navbar..................*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('<i class="fa-solid fa-xmark"></i>');
    navbar.classList.toggle('active');

}
/*.................scroll sections link................*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height)(
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
            })
        );
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);

     menuIcon.classList.remove('fa-solid fa-xmark');
    navbar.classList.remove('active');
};

/*.................scroll reveal................*/

ScrollReveal({
    //  reset: true,
     distance:'80px', 
     duration: 2000,
     delay:200
    });

ScrollReveal().reveal('.home-content, .heading', { origin:'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin:'right'});

/*.................Typed Js................*/

var typed = new Typed('.multiple-text', {
      strings: ['Fronted Developer', 'YouTuber','Blogger'],
      typeSpeed: 50,
});



  window.addEventListener('scroll', () => {
    const circles = document.querySelectorAll('.circle');

    circles.forEach(circle => {
      const position = circle.getBoundingClientRect().top;
      const screenPosition = window.innerHeight;

      if (position < screenPosition) {
        let currentPercent = 0;
        const targetPercent = parseInt(circle.getAttribute('data-percent'));
        const percentageText = circle.querySelector('.percentage');

        const interval = setInterval(() => {
          if (currentPercent >= targetPercent) {
            clearInterval(interval);
          } else {
            currentPercent++;
            circle.style.background = `conic-gradient(#4caf50 ${currentPercent * 3.6}deg, #ddd ${currentPercent * 3.6}deg)`;
            percentageText.textContent = `${currentPercent}%`;
          }
        }, 20);
      }
    });
  });

 
  document.querySelectorAll('.fill').forEach(bar => {
    const targetWidth = bar.style.width;
    bar.style.setProperty('--target-width', targetWidth);
    bar.style.width = '0'; // Reset first for animation
    setTimeout(() => {
      bar.style.width = targetWidth;
    }, 100);
  });

