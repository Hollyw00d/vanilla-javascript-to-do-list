"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Anonymous function
(function () {
  var ToDoListOperations = // Get DOM elements
  function ToDoListOperations() {
    var _this = this;

    _classCallCheck(this, ToDoListOperations);

    _defineProperty(this, "addToDoItem", function (e) {
      e.preventDefault();

      _this.toDoListItems.push({
        task: _this.toDoItemTextField.value,
        completed: false
      });

      _this.toDoListItems.forEach(function (item, index) {
        item.id = index + 1;
      });

      _this.list.innerHTML = _this.toDoListItems.map(function (item) {
        var completedOrNot;
        var checkedOrNot;

        if (item.completed === true) {
          completedOrNot = 'completed ';
          checkedOrNot = ' checked';
        } else {
          completedOrNot = '';
          checkedOrNot = '';
        }

        return "<li><input data-id=\"".concat(item.id, "\" type=\"checkbox\" value=\"").concat(item.completed, "\" class=\"to-do-list-checkbox\" ").concat(checkedOrNot, " /><span class=\"").concat(completedOrNot, "read-item-title\">").concat(item.task, "</span><input class=\"edit-item hide\" type=\"text\" value=\"").concat(item.task, "\" /></li>");
      }).join(''); // If array contains elements
      // show instructions

      if (_this.toDoListItems.length > 0) {
        _this.instructions.className = 'show';
      } // Else hide instructions
      else {
          _this.instructions.className = 'hide';
        } // Add total items inside #total-items element


      _this.totalItems.innerHTML = _this.toDoListItems.length;
    });

    _defineProperty(this, "getTotalItems", function () {
      // Add total items 
      // inside #total-items element
      _this.totalItems.innerHTML = _this.toDoListItems.length; // Add total completed items

      _this.totalCompletedItems1.innerHTML = _this.toDoListItems.length; // Add total completed items

      _this.totalCompletedItems2.innerHTML = _this.toDoListItems.length;
    });

    _defineProperty(this, "toggleCrossOffItems", function (e) {
      // Get checkbox clicked on 
      var checkbox = e.target; // Get ID number of checkbox selected
      // and convert the string into a number

      var dataId = Number(e.target.dataset.id); // Get array element selected by
      // clicking on a checkbox

      var getChosenItem = getToDoListElements.toDoListItems.find(function (item) {
        return item.id === dataId;
      }); // If event.target.className === 'to-do-list-checkbox'

      if (checkbox.className === 'to-do-list-checkbox') {
        // If checkbox is checked
        if (checkbox.checked) {
          // Change choosen item completed to true
          getChosenItem.completed = true; // Change choose item input value to true

          checkbox.value = true; // Change class name of completed item sibling,
          // a span tag, to 'completed read-item-title'

          if (checkbox.nextSibling.className === 'read-item-title') {
            checkbox.nextSibling.className = 'completed read-item-title';
          } else if (checkbox.nextSibling.className === 'completed read-item-title hide') {
            checkbox.nextSibling.className = 'completed read-item-title hide';
          } // Get total completed items


          var totalCompletedItems = getToDoListElements.toDoListItems.filter(function (item) {
            return item.completed === true;
          }).length; // Show completed items

          _this.totalCompletedItems1.innerHTML = totalCompletedItems;
          _this.totalCompletedItems2.innerHTML = totalCompletedItems; // If total completed items greater
          // than 0 show delete button

          if (totalCompletedItems > 0) {
            _this.deleteBtnParagraph.classList.remove('hide');

            _this.deleteBtnParagraph.classList.add('show');
          } // Else hide delete button
          else {
              _this.deleteBtnParagraph.classList.remove('show');

              _this.deleteBtnParagraph.classList.add('hide');
            }
        } // If checkbox unchecked
        else {
            // Change item.completed value to false
            getChosenItem.completed = false; // Change input checkbox value to false

            checkbox.value = false; // Change class name of completed item sibling,
            // a span tag, to 'read-item-title'

            checkbox.nextSibling.className = 'read-item-title'; // Get total completed items

            var _totalCompletedItems = getToDoListElements.toDoListItems.filter(function (item) {
              return item.completed === true;
            }).length; // Show completed items

            _this.totalCompletedItems1.innerHTML = _totalCompletedItems;
            _this.totalCompletedItems2.innerHTML = _totalCompletedItems; // If total completed items greater
            // than 0 show delete button

            if (_totalCompletedItems > 0) {
              _this.deleteBtnParagraph.classList.remove('hide');

              _this.deleteBtnParagraph.classList.add('show');
            } // Else hide delete button
            else {
                _this.deleteBtnParagraph.classList.remove('show');

                _this.deleteBtnParagraph.classList.add('hide');
              }
          }
      }
    });

    _defineProperty(this, "deleteCompletedItems", function (e) {
      e.preventDefault();
      var allItems = _this.toDoListItems;
      _this.toDoListItems = allItems.filter(function (item) {
        return item.completed === false;
      });
      _this.list.innerHTML = _this.toDoListItems.map(function (item) {
        var completedOrNot;
        var checkedOrNot;

        if (item.completed === true) {
          completedOrNot = 'completed ';
          checkedOrNot = ' checked';
        } else {
          completedOrNot = '';
          checkedOrNot = '';
        }

        return "<li><input data-id=\"".concat(item.id, "\" type=\"checkbox\" value=\"").concat(item.completed, "\" class=\"to-do-list-checkbox\" ").concat(checkedOrNot, " /><span class=\"").concat(completedOrNot, "read-item-title\">").concat(item.task, "</span><input class=\"edit-item hide\" type=\"text\" value=\"").concat(item.task, "\" /></li>");
      }).join('');

      _this.deleteBtnParagraph.classList.remove('show');

      _this.deleteBtnParagraph.classList.add('hide');

      _this.totalCompletedItems1.innerHTML = _this.toDoListItems.filter(function (item) {
        return item.completed === true;
      }).length;
      _this.totalItems.innerHTML = _this.toDoListItems.length; // If array contains elements
      // show instructions

      if (_this.toDoListItems.length > 0) {
        _this.instructions.className = 'show';
      } // Else hide instructions
      else {
          _this.instructions.className = 'hide';
        }
    });

    _defineProperty(this, "showUpdateItems", function (e) {
      // If e.target.className is 'read-item-title' OR 'completed read-item-title'
      if (e.target.className === 'read-item-title') {
        e.target.className = 'read-item-title hide';
        e.target.nextSibling.className = 'edit-item show';
      } else if (e.target.className === 'completed read-item-title') {
        e.target.className = 'completed read-item-title hide';
        e.target.nextSibling.className = 'edit-item show';
      }
    });

    _defineProperty(this, "updateItemOnFocusOut", function (e) {
      var editItem = e.target; // If e.target.className is 'edit-item show'

      if (editItem.className === 'edit-item show') {
        editItem.className = 'edit-item hide'; // Change innerHTML for previous sibling

        editItem.previousSibling.innerHTML = editItem.value; // Change value attribute to whatever text is inside
        // text box

        editItem.setAttribute('value', editItem.value); // Get data-id attribute

        var dataId = Number(editItem.previousSibling.previousSibling.dataset.id); // Get index number

        var index = dataId - 1; // Update task with edit item value

        _this.toDoListItems[index].task = editItem.value; // If previous sibling has 'read-item-title hide' class

        if (editItem.previousSibling.className === 'read-item-title hide') {
          editItem.previousSibling.className = 'read-item-title';
        } // If previous sibliing has 'completed read-item-title hide' class
        else if (editItem.previousSibling.className === 'completed read-item-title hide') {
            editItem.previousSibling.className = 'completed read-item-title';
          }
      }
    });

    _defineProperty(this, "updateItemOnEnterKeyPress", function (e) {
      var editItem = e.target; // If "Enter" key is pressed

      if (e.which === 13) {
        // If e.target.className is 'edit-item show'
        if (editItem.className === 'edit-item show') {
          editItem.className = 'edit-item hide'; // Change innerHTML for previous sibling

          editItem.previousSibling.innerHTML = editItem.value; // Change value attribute to whatever text is inside
          // text box

          editItem.setAttribute('value', editItem.value); // Get data-id attribute

          var dataId = Number(editItem.previousSibling.previousSibling.dataset.id); // Get index number of item.id

          var index = dataId - 1; // Update task with edit item value

          _this.toDoListItems[index].task = editItem.value; // If previous sibling has 'read-item-title hide' class

          if (editItem.previousSibling.className === 'read-item-title hide') {
            editItem.previousSibling.className = 'read-item-title';
          } // If previous sibliing has 'completed read-item-title hide' class
          else if (editItem.previousSibling.className === 'completed read-item-title hide') {
              editItem.previousSibling.className = 'completed read-item-title';
            }
        }
      }
    });

    // Get form tag
    this.form = document.querySelector('form'); // Get input submit button

    this.submitBtn = document.querySelector('input[type="submit"]'); // To do item text field

    this.toDoItemTextField = document.querySelector('#todo-item'); // Total completed items 1

    this.totalCompletedItems1 = document.querySelector('#total-completed-items1'); // Total completed items 2

    this.totalCompletedItems2 = document.querySelector('#total-completed-items2'); // Total items

    this.totalItems = document.querySelector('#total-items'); // To do items listed out inside a UL tag

    this.list = document.querySelector('#list'); // Edit items instructions

    this.instructions = document.querySelector('#instructions'); // Delete button paragraph

    this.deleteBtnParagraph = document.querySelector('#delete-btn'); // Delete button

    this.deleteBtn = document.querySelector('#delete-btn > button'); // To Do List Items

    this.toDoListItems = [];
  } // Add to do item
  ; // Instantiate object


  var getToDoListElements = new ToDoListOperations(); // Add items to list

  getToDoListElements.submitBtn.addEventListener('click', getToDoListElements.addToDoItem); // Get total items

  getToDoListElements.getTotalItems(); // Toggle cross off item to show item is completed or not
  // using document.addEventListener because of 
  // dynamically generated content

  document.addEventListener('change', getToDoListElements.toggleCrossOffItems); // Delete items that are completd
  // when clicking delete button

  getToDoListElements.deleteBtn.addEventListener('click', getToDoListElements.deleteCompletedItems); // Clicking to update items

  document.addEventListener('click', getToDoListElements.showUpdateItems); // Set value of input field on focus out

  document.addEventListener('focusout', getToDoListElements.updateItemOnFocusOut); // Set value of input field on "Enter" keypress

  document.addEventListener('keydown', getToDoListElements.updateItemOnEnterKeyPress);
})();