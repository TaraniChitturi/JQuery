$(document).ready(() => {
    var resultLines = $("#ta2");
    var result = "";
    var btn = $("#btn");

    btn.click(() => {

        var para = $("textarea#ta1").val()
        var lines = para.split("\n");
        var keywords = $("#words").val().split(",");
        keywords.forEach(element => {
            lines.forEach(line => {
                var line1 = "";
                if (line.includes(element)) {
                    var words = line.split(" ");
                    words.forEach(key => {
                        if (key.includes(element) && (key.length === element.length)) {
                            line1 = line1 + "<b>" + key + "</b> "
                        }
                        else {
                            line1 = line1 + key + " ";
                        }
                    })

                    result = result + "\n" + line1;
                }
            });
        });
        resultLines.text(result);
    })
})