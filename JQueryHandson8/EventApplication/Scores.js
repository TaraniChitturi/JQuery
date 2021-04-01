$(document).ready(() => {
    var sum = 0;
    var input = [$("#sub1"), $("#sub2"), $("#sub3"), $("#sub4"), $("#sub5"), $("#sub6")];
    var arr = new Array;
    for (let i = 0; i < 6; i++) {
        sum = 0;
        input[i].focusout(() => {
            arr.push(input[i].val());
            sum = sum + parseFloat(arr[i]);
            $("#result").text(sum.toFixed(2));
        })
    }
})