// Output of information
let log = document.getElementById("log-dnd");
let counter = 0;
const maxPictures = 4;

// Called when 'drag' was started
function dragHandle(e) {
    log.innerHTML = "An element is drawn."
        // What to 'pull
    e.dataTransfer.setData("Text", e.target.id);
    e.dataTransfer.effectAllowed = 'move';
    // Own icon that is displayed when dragging
    let dragIcon = document.createElement('img');
    dragIcon.src = "images/logo.png";
    dragIcon.widh = 50;
    e.dataTransfer.setDragImage(dragIcon, -5, -5);
}

// Function is called at 'drop'
function dropHandle(e) {
    if (!e.target.hasChildNodes()) {
        log.innerHTML = "Operation canceled: There is already an element here.";
        e.preventDefault();
        return false;
    }
    // A reference to the 'drag' element
    let data = e.dataTransfer.getData("Text");
    // Get the element
    let draggedElement = document.getElementById(data);

    // log.innerHTML = data + "/" + e.target.id;
    console.log(data + "/" + e.target.id);

    // Add the element to the drop element
    e.target.appendChild(draggedElement);
    // Allow the browser to 'drop'
    e.preventDefault();
    counter++;
    if (counter == maxPictures) {
        log.innerHTML = "All elements were dropped."
    } else {
        log.innerHTML = "Element " + counter + " from " + maxPictures +
            " was dropped."
    }
}

// Function is called with dragged element over the target
function dragoverHandle(e) {
    e.preventDefault();
    if (!e.target.hasChildNodes()) {
        log.innerHTML = "Here already lies an element.";
    } else {
        log.innerHTML = "You can drop the element here.";
    }
}

// Function is called when the dragged
// Element has left the target area again
function dragleaveHandle(e) {
    e.preventDefault();
    log.innerHTML = "Target area was left again";
}

document.addEventListener("dragenter", function(event) {
    let theData = event.dataTransfer.getData("Text");
    let theDraggedElement = document.getElementById(theData);
    theDraggedElement.style.opacity = 0.0;
}, false);

document.addEventListener("dragend", function(event) {
    event.target.style.opacity = "";
}, false);