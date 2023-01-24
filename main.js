const mainDiv = document.querySelector('.main__div');
const closeBtn = document.querySelector('.div__cloce');

document.addEventListener('click', divCondition);
closeBtn.addEventListener('click', (e)=>{
    e.stopPropagation();
    divCondition();
});
function  divCondition(){
    mainDiv.classList.toggle('main__div--visible');
}
