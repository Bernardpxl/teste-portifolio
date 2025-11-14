function toggleDark(){ document.body.classList.toggle('dark'); }

function openModal(type){
  const modal = document.getElementById('modalContent');
  if(type === 'web') modal.innerHTML = '<h3>Desenvolvimento Web</h3><p>Criação de sites modernos e responsivos.</p>';
  if(type === 'design') modal.innerHTML = '<h3>Design de Interface</h3><p>Layouts profissionais e intuitivos.</p>';
  document.getElementById('modalBg').style.display = 'flex';
}
function closeModal(e){ if(e.target.id === 'modalBg'){ e.target.style.display='none'; } }
