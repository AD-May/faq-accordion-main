const dialogButtons = document.querySelectorAll(".btn");
const dropdownTitles = document.querySelectorAll("#dropdown-title")

const handleClick = (e) => {
  const currentElement = e.target;
  const parent = currentElement.parentNode;
  const parentChildren = parent.childNodes;
  let svg;

  if (currentElement.id === "btn") {
     svg = currentElement;
  } else if (currentElement.id === "dropdown-title") {
     for (const child of parentChildren) {
        if (child.id === "btn") {
            svg = child;
        }
     }
  }


  const header = svg.parentNode;
  const text = header.nextSibling;
  const dialog = text.nextSibling;

  if (dialog.style.display === "none") {
    dialog.style.display = "block";
    svg.innerHTML = `<path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 
        15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 
        0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/>`;
  } else if (dialog.style.display === "block") {
    dialog.style.display = "none";
    svg.innerHTML = `<path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 
        0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 
        0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/>`;
  }
};

dialogButtons.forEach((button) => {
    button.addEventListener("click", handleClick);
    button.addEventListener("keypress", (event) => {
        if(event.key === "Enter") {
            handleClick(event);
        }
    })
})

dropdownTitles.forEach((title) => {
    title.addEventListener("click", handleClick);
    title.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        handleClick(event);
      }
    });
})