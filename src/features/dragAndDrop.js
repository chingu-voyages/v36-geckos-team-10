//Drag&Drop logic for Builder.jsx

//Exported function that adds event listeners and changes the arrangement of the divs
const dragAndDrop = (el, changeState) => {
    const container = el.current;
    const draggables = [].slice.call(el.current.children);
    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
            draggable.classList.add('dragging')
        })
        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('dragging');
            //updates export files after every drop
            console.log([].slice.call(el.current.children).map(child => child.dataset.tag))
            changeState([].slice.call(el.current.children).map(child => child.dataset.tag))
        })
    })
    container.addEventListener('dragover', e => {
        e.preventDefault();
        const nextEl = afterEl(container, e.clientY);
        const currentEl = document.querySelector('.dragging');
        if (nextEl == null) {
            container.appendChild(currentEl);
        } else {
            container.insertBefore(currentEl, nextEl);
        }      
    });
};
// Calculates the position of the div that the user is currently dragging and all the closest divs
    const afterEl = (container, y) => {
        const draggableEl = [...container.querySelectorAll('.template:not(.dragging)')];
        return draggableEl.reduce((closest, child) => {
            const box = child.getBoundingClientRect()
            const offset = y - box.top - (box.height/2);
            if(offset < 0 && offset > closest.offset) {
                return { offset: offset, element: child }
            } else {
                return closest
            }
        }, { offset: Number.NEGATIVE_INFINITY }).element
    }

export default dragAndDrop;