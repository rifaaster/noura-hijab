// NOURA HIJAB — script.js

// Pilihan fitur (penutup, tenunan, belakang): satu pilihan aktif per grup
const pilihan = { closure: 'Gerbang', weave: 'Stockinette', mesh: 'Jaring 60%' };

['closure', 'weave', 'mesh'].forEach((id) => {
  const grup = document.getElementById(id);
  if (!grup) return;

  grup.addEventListener('click', (e) => {
    const pill = e.target.closest('.pill');
    if (!pill) return;

    grup.querySelectorAll('.pill').forEach((p) => p.classList.remove('active'));
    pill.classList.add('active');
    pilihan[id] = pill.textContent.trim();

    if (id === 'closure') {
      document.getElementById('closureName').textContent = pilihan.closure;
    }
  });
});

// Formulir "Gabung bersama kami"
const form = document.getElementById('joinForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const tombol = form.querySelector('button[type="submit"]');
    tombol.textContent = 'Permintaan diterima ✓';
    tombol.disabled = true;
  });
}
