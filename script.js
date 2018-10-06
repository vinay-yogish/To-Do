/**
    1. Add the task to the list
    2. Remove the task from the list
    3. Strike through the text if it is checked
 */


 const textInput = document.querySelector('.to-do-input');
 const addBtn = document.querySelector('.to-do-button');
 const inputForm = document.querySelector('.to-do-form');
 const listContainer = document.querySelector('.list-container');


 /** 1. Add the task to the list */

 const addTask = () => {
    
    // get the input
    const taskText = textInput.value;
    
    if(taskText) {

        // build the markup
        const markup = `
             <li class="list-item">
                <div class="done-box"><i class="fas fa-check icon-check hide"></i></div>
                <h4 class="to-do-text">${taskText}</h4>
                <i class="fas fa-trash icon-trash"></i>
            </li>
        `;

        // add the markup into the container
        listContainer.insertAdjacentHTML('beforeend', markup);

        // clear the input field
        textInput.value = '';
    }
 };


 inputForm.addEventListener('submit', (e) => {
     e.preventDefault();
    addTask();
 });


 /** 2. Remove the task from the list */

 const toggleClasses = (checkBox, taskText) => {
     checkBox.classList.toggle('hide');
     taskText.classList.toggle('strike-text');
 }

 const deleteTask = (e) => {

    
    if( e.target.matches('.icon-trash')) {
        
        // Remove the task item
        const listItem = e.target.parentNode;
        listContainer.removeChild(listItem);

    }
 };

 const taskToggle = (e) => {
     /** 3. Strike through the text if it is checked */

     if(e.target.matches('.done-box')) {

        const checkBox = e.target.firstChild;
        const taskText = e.target.parentNode.children[1];
        
        // Toggle the classes 'hide' and 'strike-text'
        toggleClasses(checkBox, taskText);
    }

    if(e.target.matches('.icon-check')) {
        const taskText = e.target.parentNode.parentNode.children[1];
        
         // Toggle the classes 'hide' and 'strike-text'
        toggleClasses(e.target, taskText);
    }
 };

 listContainer.addEventListener( 'click', e => {

    /**  Delete the task item from the contaner */
    deleteTask(e);

    /** 3. Strike through the text if it is checked */
    taskToggle(e);
 });
