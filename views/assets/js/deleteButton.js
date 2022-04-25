const deleteButton = document.getElementsByClassName("deleteButton");
const form = document.getElementById("formDelete");
    console.log(deleteButton);
    Array.from(deleteButton).forEach(btn => {
        btn.addEventListener("click", function(){
            console.log(btn.value);
            form.action = form.action + btn.value;
            console.log(form.action);
        });
    });