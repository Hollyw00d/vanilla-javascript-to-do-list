// Anonymous function
(() => {
  
  class ToDoListOperations {
    
    // Get DOM elements
    constructor() {
      // Get form tag
      this.form = document.querySelector('form')
      // Get input submit button
      this.submitBtn = document.querySelector('input[type="submit"]')
      // To do item text field
      this.toDoItemTextField = document.querySelector('#todo-item')
      // Total completed items 1
      this.totalCompletedItems1 = document.querySelector('#total-completed-items1')
      // Total completed items 2
      this.totalCompletedItems2 = document.querySelector('#total-completed-items2')
      // Total items
      this.totalItems = document.querySelector('#total-items')
      // To do items listed out inside a UL tag
      this.list = document.querySelector('#list')
      // Edit items instructions
      this.instructions = document.querySelector('#instructions')
      // Delete button paragraph
      this.deleteBtnParagraph = document.querySelector('#delete-btn')
      // Delete button
      this.deleteBtn = document.querySelector('#delete-btn > button')
      // To Do List Items
      this.toDoListItems =  []
    } 
    
   // Add to do item
   addToDoItem = (e) => {
     e.preventDefault()
     this.toDoListItems.push({
       task: this.toDoItemTextField.value,
       completed: false
     })

     this.toDoListItems.forEach((item,index) => {
       item.id = index + 1
     })
     
     this.list.innerHTML = this.toDoListItems.map(item => {
       let completedOrNot
       let checkedOrNot
       
       if(item.completed === true) {
          completedOrNot = 'completed '
          checkedOrNot = ' checked'
       }
       else {
         completedOrNot = ''
         checkedOrNot = ''
       }
       
       return `<li><input data-id="${item.id}" type="checkbox" value="${item.completed}" class="to-do-list-checkbox" ${checkedOrNot} /><span class="${completedOrNot}read-item-title">${item.task}</span><input class="edit-item hide" type="text" value="${item.task}" /></li>`
     }).join('')
   
     
     // If array contains elements
     // show instructions
     if(this.toDoListItems.length > 0) {
        this.instructions.className = 'show'
     }
     // Else hide instructions
     else {
       this.instructions.className = 'hide'
     }
     
     // Add total items inside #total-items element
     this.totalItems.innerHTML = this.toDoListItems.length
   }
   
   // Get total items
   getTotalItems = () => {
     // Add total items 
     // inside #total-items element
     this.totalItems.innerHTML = this.toDoListItems.length
     
     // Add total completed items
     this.totalCompletedItems1.innerHTML = this.toDoListItems.length
     // Add total completed items
     this.totalCompletedItems2.innerHTML = this.toDoListItems.length
      
   }
   
   // Toggle cross off items using checkboxes
   toggleCrossOffItems = (e) => {  
      // Get checkbox clicked on 
      const checkbox = e.target
    
      // Get ID number of checkbox selected
      // and convert the string into a number
      const dataId = Number(e.target.dataset.id)
    
      // Get array element selected by
      // clicking on a checkbox
      const getChosenItem = getToDoListElements.toDoListItems.find(item => item.id === dataId)
      
    // If event.target.className === 'to-do-list-checkbox'
    if(checkbox.className === 'to-do-list-checkbox') {
     
      // If checkbox is checked
      if(checkbox.checked) {
        
        // Change choosen item completed to true
        getChosenItem.completed = true
        // Change choose item input value to true
        checkbox.value = true
        // Change class name of completed item sibling,
        // a span tag, to 'completed read-item-title'
        if(checkbox.nextSibling.className === 'read-item-title') {
          checkbox.nextSibling.className = 'completed read-item-title'   
        }
        else if(checkbox.nextSibling.className === 'completed read-item-title hide') {
          checkbox.nextSibling.className = 'completed read-item-title hide'      
        }
        
        // Get total completed items
        let totalCompletedItems = getToDoListElements.toDoListItems.filter(item => item.completed === true).length
        
        // Show completed items
        this.totalCompletedItems1.innerHTML = totalCompletedItems
        
        this.totalCompletedItems2.innerHTML = totalCompletedItems
       
        // If total completed items greater
        // than 0 show delete button
        if(totalCompletedItems > 0) {
          this.deleteBtnParagraph.classList.remove('hide')
          this.deleteBtnParagraph.classList.add('show')
        }
        // Else hide delete button
        else {
          this.deleteBtnParagraph.classList.remove('show')
          this.deleteBtnParagraph.classList.add('hide')
        }
        
      }    
      // If checkbox unchecked
      else {
        
        // Change item.completed value to false
        getChosenItem.completed = false
        // Change input checkbox value to false
        checkbox.value = false
        // Change class name of completed item sibling,
        // a span tag, to 'read-item-title'
        checkbox.nextSibling.className = 'read-item-title'
        // Get total completed items
        let totalCompletedItems = getToDoListElements.toDoListItems.filter(item => item.completed === true).length
        
        // Show completed items
        this.totalCompletedItems1.innerHTML = totalCompletedItems
      
        this.totalCompletedItems2.innerHTML = totalCompletedItems 
        
        // If total completed items greater
        // than 0 show delete button
        if(totalCompletedItems > 0) {
          this.deleteBtnParagraph.classList.remove('hide')
          this.deleteBtnParagraph.classList.add('show')
        }
        // Else hide delete button
        else {
          this.deleteBtnParagraph.classList.remove('show')
          this.deleteBtnParagraph.classList.add('hide')
        }
        
      }
      
    }
     
   }
   
   // Delete completed items
   deleteCompletedItems = (e) => {
     e.preventDefault()
         
     const allItems = this.toDoListItems
     
     this.toDoListItems = allItems.filter(item => item.completed === false)
     
     this.list.innerHTML = this.toDoListItems.map(item => {
       let completedOrNot
       let checkedOrNot
       
       if(item.completed === true) {
          completedOrNot = 'completed '
          checkedOrNot = ' checked'
       }
       else {
         completedOrNot = ''
         checkedOrNot = ''
       }
       
       return `<li><input data-id="${item.id}" type="checkbox" value="${item.completed}" class="to-do-list-checkbox" ${checkedOrNot} /><span class="${completedOrNot}read-item-title">${item.task}</span><input class="edit-item hide" type="text" value="${item.task}" /></li>`
     }).join('')
     
     this.deleteBtnParagraph.classList.remove('show')
     this.deleteBtnParagraph.classList.add('hide')  
     
     
     this.totalCompletedItems1.innerHTML = this.toDoListItems.filter(item => item.completed === true).length
     this.totalItems.innerHTML = this.toDoListItems.length
     
          // If array contains elements
     // show instructions
     if(this.toDoListItems.length > 0) {
        this.instructions.className = 'show'
     }
     // Else hide instructions
     else {
       this.instructions.className = 'hide'
     }
     
   }
   
   
   // Show update items when clicking 
   // into item text
   showUpdateItems = (e) => {
     // If e.target.className is 'read-item-title' OR 'completed read-item-title'
     if(e.target.className === 'read-item-title') {
        e.target.className = 'read-item-title hide'
        e.target.nextSibling.className = 'edit-item show'
     }
     else if(e.target.className === 'completed read-item-title') {
        e.target.className = 'completed read-item-title hide'
        e.target.nextSibling.className = 'edit-item show'
     }
     
   }
   
   // Update item on blur
   updateItemOnFocusOut = (e) => {
     const editItem = e.target     
     
     // If e.target.className is 'edit-item show'
     if(editItem.className === 'edit-item show') {
        editItem.className = 'edit-item hide'
        // Change innerHTML for previous sibling
        editItem.previousSibling.innerHTML = editItem.value
        // Change value attribute to whatever text is inside
        // text box
        editItem.setAttribute('value', editItem.value)
       
        // Get data-id attribute
        const dataId = Number(editItem.previousSibling.previousSibling.dataset.id)
        // Get index number of item.id
        let index = this.toDoListItems.findIndex(item => item.id === dataId)
        // Update task with edit item value
        this.toDoListItems[index].task = editItem.value
       
        // If previous sibling has 'read-item-title hide' class
        if(editItem.previousSibling.className === 'read-item-title hide') {
          editItem.previousSibling.className = 'read-item-title'
        }
        // If previous sibliing has 'completed read-item-title hide' class
        else if(editItem.previousSibling.className === 'completed read-item-title hide') {
          editItem.previousSibling.className = 'completed read-item-title' 
        }
     }
   }
   
   // Update item on enter keypress
   updateItemOnEnterKeyPress = (e) => {
     const editItem = e.target
     
     // If "Enter" key is pressed
     if(e.which === 13) {
       
       // If e.target.className is 'edit-item show'
       if(editItem.className === 'edit-item show') {
          editItem.className = 'edit-item hide'
          // Change innerHTML for previous sibling
          editItem.previousSibling.innerHTML = editItem.value
          // Change value attribute to whatever text is inside
          // text box
          editItem.setAttribute('value', editItem.value)

          // Get data-id attribute
          const dataId = Number(editItem.previousSibling.previousSibling.dataset.id)
          // Get index number of item.id
          let index = this.toDoListItems.findIndex(item => item.id === dataId)
          // Update task with edit item value
          this.toDoListItems[index].task = editItem.value

          // If previous sibling has 'read-item-title hide' class
          if(editItem.previousSibling.className === 'read-item-title hide') {
            editItem.previousSibling.className = 'read-item-title'
          }
          // If previous sibliing has 'completed read-item-title hide' class
          else if(editItem.previousSibling.className === 'completed read-item-title hide') {
            editItem.previousSibling.className = 'completed read-item-title' 
          }
       }
     }
   }
   
  }
  
  // Instantiate object
  const getToDoListElements = new ToDoListOperations()
  
  // Add items to list
  getToDoListElements.submitBtn.addEventListener('click', getToDoListElements.addToDoItem)

  // Get total items
  getToDoListElements.getTotalItems()

  // Toggle cross off item to show item is completed or not
  // using document.addEventListener because of 
  // dynamically generated content
  document.addEventListener('change', getToDoListElements.toggleCrossOffItems)

  // Delete items that are completd
  // when clicking delete button
  getToDoListElements.deleteBtn.addEventListener('click', getToDoListElements.deleteCompletedItems)

  // Clicking to update items
  document.addEventListener('click', getToDoListElements.showUpdateItems)

  // Set value of input field on focus out
  document.addEventListener('focusout', getToDoListElements.updateItemOnFocusOut) 

  // Set value of input field on "Enter" keypress
  document.addEventListener('keydown', getToDoListElements.updateItemOnEnterKeyPress)
  
})();