export default function animacaoScroll(){

    const sections = document.querySelectorAll('.js-scroll');
    console.log(sections);
    const windowMetade = window.innerHeight * 0.6;


    function animaScroll(e){
        sections.forEach((section)=>{
            const sectionTop = section.getBoundingClientRect().top
            const isVisible = (sectionTop - windowMetade) < 0;
            if(isVisible){
                section.classList.add('ativo')
            }else{
                section.classList.remove('ativo')
            }
        })
    }


   window.addEventListener('scroll', animaScroll)
}