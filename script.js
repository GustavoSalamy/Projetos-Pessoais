const myobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add('dicasanimation') + entry.target.classList.remove('dicasinternas')
        } else {
            entry.target.classList.remove('dicasanimation')
        }
    })
})

const elements = document.querySelectorAll('#dicas')

elements.forEach((element)=> myobserver.observe(element))

