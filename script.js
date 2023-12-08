//animação divs dicas
const myobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('dicasanimation') + entry.target.classList.remove('dicasinternas')
        } else {
            entry.target.classList.remove('dicasanimation')
        }
    })
})

const elements = document.querySelectorAll('#dicas')
elements.forEach((element) => myobserver.observe(element))
//animação divs dicas

//animação h2 tema
const myobserverh2 = new IntersectionObserver((h2element) => {
    h2element.forEach((h2entry) => {
        if (h2entry.isIntersecting) {
            h2entry.target.classList.add('h2temaanimate') + h2entry.target.classList.remove('h2tema')
        }
    })
})

const elementh2 = document.querySelectorAll('.h2tema')
elementh2.forEach((elementsh2) => myobserverh2.observe(elementsh2))
//animação h2 tema

//animação cabeça
const myobservertopo = new IntersectionObserver((topoelement) => {
    topoelement.forEach((topoentry) => {
        if (topoentry.isIntersecting) {
            topoentry.target.classList.add('topoanimate') + topoentry.target.classList.remove('topo')
        } else {
            topoentry.target.classList.remove('topoanimate')
        }
    })
})

const elementtopo = document.querySelectorAll('.topo')
elementtopo.forEach((elementstopo) => myobservertopo.observe(elementstopo))
//animação cabeça

//animação foto quem sou eu
const myobserverfoto = new IntersectionObserver((fotoelement) => {
    fotoelement.forEach((fotoentry) => {
        if (fotoentry.isIntersecting === true || window.scrollY > 10) {
            fotoentry.target.classList.add('fotoquemsoueuanimate') + fotoentry.target.classList.remove('fotoquemsoueu')
        }
    })
})

const elementfoto = document.querySelectorAll('.fotoquemsoueu')
elementfoto.forEach((elementsfoto) => myobserverfoto.observe(elementsfoto))
//animação foto que sou eu

//animação <p> quem sou eu
const myobserverpqseu = new IntersectionObserver((pqseuelement) => {
    pqseuelement.forEach((pqseuentry) => {
        if (pqseuentry.isIntersecting) {
            pqseuentry.target.classList.add('pquemsoueuanimate') + pqseuentry.target.classList.remove('pquemsoueu')
        }
    })
})

const elementpqseu = document.querySelectorAll('.pquemsoueu')
elementpqseu.forEach((elementspqseu) => myobserverpqseu.observe(elementspqseu))
//animação <p> quem sou eu

//animação NAVs receitas
const myobservernavreceita = new IntersectionObserver((navreceitaelement) => {
    navreceitaelement.forEach((navreceitaentry) => {
        if (navreceitaentry.isIntersecting) {
            navreceitaentry.target.classList.add('receitaanimation') + navreceitaentry.target.classList.remove('receita')
        }
    })
})

const elementnavreceita = document.querySelectorAll('.receita')
elementnavreceita.forEach((elementsnavreceita) => myobservernavreceita.observe(elementsnavreceita))
//animação NAVs receitas
