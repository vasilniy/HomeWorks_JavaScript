document.addEventListener('DOMContentLoaded', event => {

    let dragScrEl = null;

        function handleDragStart(e) {
            this.style.opacity = '0.2';

            dragScrEl = this;
            console.log(dragScrEl);

            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/HTML', this.innerHTML);

        };

        function handleDragOver(e) {
            if (e.preventDefault) {
                e.preventDefault();
            }

            e.dataTransfer.dropEffect = 'move';

            return false;

        };

        function handleDragEnter(e) {
            this.classList.add('over');

        };

        function handleDragLeave(e) {
            this.classList.remove('over');

        };
        function handleDrop(e) {
            if (e.propagation) {
                e.propagation();
            }

            if (dragScrEl != this) {
                dragScrEl.innerHTML = this.innerHTML;
                this.innerHTML = e.dataTransfer.getData('text/HTML');
            }

            return false;

        };

        function handleDragEnd(e) {
            this.style.opacity = '1';

            items.forEach(item => {
                item.classList.remove('over');
            });

        };

    
        
    let items = document.querySelectorAll('.box');
    items.forEach(item => {
        item.addEventListener('dragstart',  handleDragStart);
        item.addEventListener('dragenter',  handleDragEnter);
        item.addEventListener('dragover',  handleDragOver);
        item.addEventListener('dragleave',  handleDragLeave);
        item.addEventListener('drop',  handleDrop);
        item.addEventListener('dragend',  handleDragEnd);
    });    
});