// Thumbnail switcher
const mainImg = document.getElementById('mainImg');
document.querySelectorAll('.thumb').forEach(t => {
  t.addEventListener('click', () => {
    document.querySelectorAll('.thumb').forEach(x => x.classList.remove('active'));
    t.classList.add('active');
    mainImg.style.opacity = 0;
    setTimeout(() => {
      mainImg.src = t.dataset.img;
      mainImg.style.opacity = 1;
    }, 250);
  });
});

// Size selection
document.querySelectorAll('.size').forEach(b => {
  b.addEventListener('click', () => {
    document.querySelectorAll('.size').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
  });
});

// Quantity
const qVal = document.getElementById('qVal');
document.getElementById('qPlus').onclick = () => qVal.textContent = +qVal.textContent + 1;
document.getElementById('qMinus').onclick = () => qVal.textContent = Math.max(1, +qVal.textContent - 1);

// Tabs
document.querySelectorAll('.tab').forEach(t => {
  t.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
    t.classList.add('active');
  });
});

// Wishlist
const wb = document.getElementById('wishBtn');
wb.addEventListener('click', () => {
  const active = wb.classList.toggle('active');
  wb.textContent = active ? '♥' : '♡';
});

// Zoom on main image
const mainWrap = document.querySelector('.main-img');
if (mainWrap) {
  mainWrap.addEventListener('mousemove', (e) => {
    const r = mainWrap.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    mainImg.style.transformOrigin = `${x}% ${y}%`;
    mainImg.style.transform = 'scale(1.25)';
  });
  mainWrap.addEventListener('mouseleave', () => {
    mainImg.style.transform = 'scale(1)';
  });
}
