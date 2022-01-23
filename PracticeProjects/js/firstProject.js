//Collect needed elements
const boxes = document.querySelectorAll('.box');

//Alert browser window to perform function when scroll
window.addEventListener('scroll', checkBoxes)

//Locate bottom of the screen
//Locate top of boxes
//add or remove show class
function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top
        
        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}