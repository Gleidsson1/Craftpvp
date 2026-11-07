const cards=[...document.querySelectorAll('.mode-card')];
const modeSelect=document.getElementById('mode');
const notice=document.getElementById('notice');
const selected=document.getElementById('selectedMode');
cards.forEach(card=>card.addEventListener('click',()=>{
  cards.forEach(c=>c.classList.remove('selected'));
  card.classList.add('selected');
  modeSelect.value=card.dataset.mode;
  selected.textContent=card.dataset.mode.toUpperCase();
  document.getElementById('arena').scrollIntoView({behavior:'smooth'});
}));
modeSelect.addEventListener('change',()=>selected.textContent=modeSelect.value.toUpperCase());
document.getElementById('connect').addEventListener('click',()=>{
  const nick=document.getElementById('nickname').value.trim();
  if(!/^[A-Za-z0-9_]{3,16}$/.test(nick)){
    notice.textContent='Digite um nick válido de 3 a 16 caracteres (letras, números ou _).';
    document.getElementById('nickname').focus();return;
  }
  notice.textContent=`Nick ${nick} preparado para ${modeSelect.value}. O servidor de transmissão ainda não está conectado.`;
});
document.getElementById('accountBtn').addEventListener('click',()=>{
  notice.textContent='O cadastro será ativado quando o backend seguro estiver pronto. Não informe sua senha Microsoft neste protótipo.';
  document.getElementById('arena').scrollIntoView({behavior:'smooth'});
});