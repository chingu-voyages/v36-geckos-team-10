//Drag&Drop logic for WsBuilder.jsx

//Exported function that adds event listeners and changes the arrangement of the divs
const dragAndDrop = (r) => {
    const container = r.current; 
    const draggables = [].slice.call(r.current.children);
    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
            draggable.classList.add('dragging')
        })
        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('dragging');
        })
    })
    container.addEventListener('dragover', e =>  {
        e.preventDefault();
        const nextEl = afterEl(container, e.clientY);
        const temp = document.querySelector('.dragging');
        if (nextEl == null) {
            container.appendChild(temp);
        } else {
            container.insertBefore(temp, nextEl);
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