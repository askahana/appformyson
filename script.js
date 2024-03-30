const btnColor = document.getElementById("btnColor");
const boxColor = document.getElementById("boxColor");
const textColor = document.getElementById("textColor");
const plusColor = document.getElementById("plusColor");
const bodyColor = document.getElementById("bodyColor");

const addBtn = document.querySelector(".addBtn");
const inputTextBox = document.getElementById("colorText");


btnColor.addEventListener("change", (e) =>{
    addBtn.style.backgroundColor = e.target.value;
});

boxColor.addEventListener("change", (e) =>{
    inputTextBox.style.backgroundColor = e.target.value;

});
textColor.addEventListener("change", (e) =>{
    inputTextBox.style.color = e.target.value;

});

plusColor.addEventListener("change", (e) =>{
    addBtn.style.color = e.target.value;
});

bodyColor.addEventListener("change", (e) =>{
    document.body.style.backgroundColor = e.target.value;
});

const ul = document.getElementById("todoLists");

addBtn.addEventListener("click", () =>{
    const text = inputTextBox.value;
    console.log(text);
    const li = document.createElement("li");
    const p = document.createElement("p");
    const button = document.createElement("button");
    button.textContent = "-";
    li.classList.add("item");
    p.classList.add("itemName");
    p.textContent = text;
    button.classList.add("removeBtn");
    ul.appendChild(li);
    li.appendChild(p);
    li.appendChild(button);
    button.addEventListener("click", (e) =>{
        ul.removeChild(e.target.closest("li"));

    }); 
    inputTextBox.value = "";
});