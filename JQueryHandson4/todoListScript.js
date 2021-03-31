$(document).ready(() => {
    var inp = $("#task");
    var btn = $("#btn");
    const tasks = new Array;
    btn.click(() => {
        var task = inp.val();
        if (task) {
            tasks.push(task);
            var string = "";
            tasks.forEach(element => {
                console.log(element);
                string = string + "<p>" + element + "</p>";
            });
            $("#div").html(string);
        } else {
            alert("Enter task details!!");
        }
    })
})