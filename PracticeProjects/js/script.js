//Grab needed elements
const panels = document.querySelectorAll('.panel');

//Loop through nodelist of panels
//Add click event
//Remove active class and then Add active class to clicked panel
panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClass();
        panel.classList.add('active');
    });
});

//Remove active class
function removeActiveClass() {
    panels.forEach(panel => {
            panel.classList.remove('active');
    });
};