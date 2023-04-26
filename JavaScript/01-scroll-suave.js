export default function scrollSuave(){
    const links = document.querySelectorAll('.navegacao a')

    links.forEach((link)=>{
        link.addEventListener('click', scrollTo)
    })

    function scrollTo(e){
        e.preventDefault();
        const id = e.target.getAttribute('href')
        const target = document.querySelector(id);
        const offsetTop = target.offsetTop;
        window.scroll({
            top: offsetTop,
            behavior: 'smooth',
        })
    }
    
}