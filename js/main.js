const toggleBtn = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
toggleBtn.addEventListener('click', () => navLinks.classList.toggle('open'));

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

document.querySelectorAll('.gallery-item img').forEach(img => {
  img.addEventListener('click', () => {
    const overlay = document.createElement('div');
    overlay.className = 'lightbox';
    overlay.innerHTML = `<img src="${img.src}" alt="${img.alt}"><span class="close">&times;</span>`;
    document.body.append(overlay);
    overlay.querySelector('.close').onclick = () => overlay.remove();
  });
});

const style = document.createElement('style');
style.textContent = `
.lightbox {
  position:fixed; top:0; left:0; right:0; bottom:0;
  background:rgba(0,0,0,0.8); display:flex;
  justify-content:center; align-items:center;
}
.lightbox img { max-width:90%; max-height:80%; }
.lightbox .close {
  position:absolute; top:20px; right:30px;
  font-size:2rem; color:#fff; cursor:pointer;
}
`;
document.head.append(style);

document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you! Your message has been sent.');
  e.target.reset();
});