$(document).ready(()=>{
    const val1= $("#firstNumber");
    const val2= $("#secondNumber");
    const result= $("#answer");
    const sum= $("#add");
    sum.click(()=>{
        const ans= parseInt(val1.val())+parseInt(val2.val());
        if(ans){
            result.val(ans);
            $("#msg").text(ans).css("color","green");
            $("#msg").css("font-weight","bold");
        }
        else{
            result.val(0);
            $("#msg").text("Plz. Enter the values");
            $("#msg").css("color","red");
        }
    });
});