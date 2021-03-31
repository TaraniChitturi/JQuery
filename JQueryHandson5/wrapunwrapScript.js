$(document).ready(() => {
    var btn = $("#btn");
    var count = 0;
    btn.click(() => {
        count++;
        if (count % 2 === 0) {
            $("p").unwrap();
        } else {
            $("p").wrap("<div></div>");
        }
    })
})