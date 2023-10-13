const item = document.querySelector("#item");
const toDoBox = document.querySelector("#todo");

item.addEventListener(
    "keyup",
    function (event) {
        if (event.key === "Enter") {
            console.log(this.value);
            this.value = "";
        };
    }
)