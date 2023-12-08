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



const myobserverh2 = new IntersectionObserver((h2element) => {
    h2element.forEach((h2entry) => {
        if (h2entry.isIntersecting) {
            h2entry.target.classList.add('quemsoueuanimate') + h2entry.target.classList.remove('quemsoueu')
        }
    })
})

const elementh2 = document.querySelectorAll('.quemsoueu')
elementh2.forEach((elementsh2) => myobserverh2.observe(elementsh2))



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


const myobserverfoto = new IntersectionObserver((fotoelement) => {
    fotoelement.forEach((fotoentry) => {
        if (fotoentry.isIntersecting === true || window.scrollY > 10) {
            fotoentry.target.classList.add('fotoquemsoueuanimate') + fotoentry.target.classList.remove('fotoquemsoueu')
        }
    })
})

const elementfoto = document.querySelectorAll('.fotoquemsoueu')
elementfoto.forEach((elementsfoto) => myobserverfoto.observe(elementsfoto))
