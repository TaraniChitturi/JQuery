$(document).ready(()=>{
    var text=$("p").text();
    var words=text.split(" ");
    var result="";
    words.forEach(element => {
        if(element.includes("th"))
        {
            result=result+"<span class=\"th\">"+element+" </span>";
        }
        else{
            result=result+"<span class=\"non_th\">"+element+" </span>";
        }
    });
    $("p").html(result);
})