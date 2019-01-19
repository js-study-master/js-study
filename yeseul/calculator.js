function onClick() {
    var option = document.getElementById('option').value;

    var one = parseInt(document.getElementById('input1').value);
    var two = parseInt(document.getElementById('input2').value);
    var result = document.getElementById("result");

    switch (option) {
        case "덧셈":
            result.innerHTML = add(one, two);
            break;

        case "뺄셈":
            result.innerHTML = sub(one, two);
            break;
        
        case "곱셈":
            result.innerHTML = mul(one, two);
            break;

        case "나눗셈":
            result.innerHTML = div(one, two);
            break;
    }
}

function add(o, t) {
    return o + t;
}

function sub(o, t) {
    return o - t;
}

function mul(o, t) {
    return o * t;
}

function div(o, t) {
    return o / t;
}