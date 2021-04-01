$(document).ready(()=>{
    var button=$("button");
    var p = $("p");
    button.click(()=>{
        var text = $("textarea#textarea").val();
        p.text(text);
    });
    p.click(()=>{
        p.html("&#128522;");
        p.css("font-size","2rem");
    })
})