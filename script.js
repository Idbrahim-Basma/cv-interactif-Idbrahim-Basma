const cards=document.querySelectorAll('.project-card');
cards.forEach(card=>{
card.addEventListener('mouseover',()=>{
    card.style.transform="scale(1.05)";
    card.style.backgroundColor="#2f5d5d";
    card.style.boxShadow="0 0 18px #1a2f2f";
    card.style.transition="0.3s ease";
});
card.addEventListener('mouseout',()=>{
    card.style.transform="scale(1)";
    card.style.backgroundColor="#244747";
    card.style.boxShadow="0 0 10px #244747";
});
});