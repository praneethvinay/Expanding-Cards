const panels = document.querySelectorAll('.panel')
let today = new Date();

panels.forEach(panel=>{
    panel.addEventListener('click',() => {
        removeActiveClasses()
        panel.classList.add('active')
        
    })
    })

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

