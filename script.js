const links = document.querySelectorAll('.menu a');
const sections = document.querySelectorAll('.conteudo');

// Ao carregar a página, nenhuma seção aparece
document.addEventListener('DOMContentLoaded', () => {
  sections.forEach(sec => sec.style.display = 'none');

  // 🔽 Garantir que o vídeo de fundo comece automaticamente
  const video = document.getElementById('bg-video');
  if (video) {
    video.play().catch(() => {
      document.addEventListener('click', () => {
        video.play();
      }, { once: true });
    });
  }
});

// Mostrar ou esconder seções conforme o clique no menu
links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const target = link.getAttribute('data-section');

    // Oculta todas as seções
    sections.forEach(sec => sec.style.display = 'none');

    // Se for diferente de "Início", exibe a seção correspondente
    if (target !== 'none') {
      const sectionToShow = document.getElementById(target);
      if (sectionToShow) {
        sectionToShow.style.display = 'block';
      }
    }
  });

// Controle do menu responsivo
const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});


});
