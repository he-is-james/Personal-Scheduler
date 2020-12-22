let time_remaining = 24;

let health_width = 912;
let num1_width = 0;
let num2_width = 0;
let num3_width = 0;
let num4_width = 0;
let num5_width = 0;
let num6_width = 0;

const hoursRemaining = document.querySelector("#hours_remaining");

function increment(target) {
    var value = parseInt(document.getElementById(target).value);
    if (value < 24 && time_remaining > 0) {
        value += 1;
        time_remaining -= 1;
        updateBarUp(target);
        health_width -= 38;
        document.getElementById("health_bar").style.width = health_width.toString() + "px";
        updateRemaining();
        document.getElementById(target).value = value;
    }
}

function decrement(target) {
    var value = parseInt(document.getElementById(target).value);
    if (value > 0 && time_remaining < 24) {
        value -= 1;
        time_remaining += 1;
        updateBarDown(target);
        health_width += 38;
        document.getElementById("health_bar").style.width = health_width.toString() + "px";
        updateRemaining();
        document.getElementById(target).value = value;
    }
}

function updateRemaining() {
    var h = time_remaining.toString();
    hoursRemaining.innerHTML = "Hours Remaining: " + h;
}

function updateBarUp(target) {
    var bar = target.toString() + "_bar";
    if (target == "num1"){
        if (num1_width < 912) {
            num1_width += 38;
            var new_width = num1_width.toString() + "px";
            document.getElementById(bar).style.width = new_width;
        }
    }
    else if (target == "num2"){
        if (num2_width < 912) {
            num2_width += + 38;
            var new_width = num2_width.toString() + "px";
            document.getElementById(bar).style.width = new_width;
        }
    }
    else if (target == "num3"){
        if (num3_width < 912) {
            num3_width += 38;
            var new_width = num3_width.toString() + "px";
            document.getElementById(bar).style.width = new_width;
        }
    }
    else if (target == "num4"){
        if (num4_width < 912) {
            num4_width += 38;
            var new_width = num4_width.toString() + "px";
            document.getElementById(bar).style.width = new_width;
        }
    }
    else if (target == "num5"){
        if (num5_width < 912) {
            num5_width += 38;
            var new_width = num5_width.toString() + "px";
            document.getElementById(bar).style.width = new_width;
        }
    }
    else if (target == "num6"){
        if (num6_width < 912) {
            num6_width += 38;
            var new_width = num6_width.toString() + "px";
            document.getElementById(bar).style.width = new_width;
        }
    }
}

function updateBarDown(target) {
    var bar = target.toString() + "_bar";
    if (target == "num1"){
        if (num1_width > 0) {
            num1_width -= 38;
            var new_width = num1_width.toString() + "px";
            document.getElementById(bar).style.width = new_width;
        }
    }
    else if (target == "num2"){
        if (num2_width > 0) {
            num2_width -= 38;
            var new_width = num2_width.toString() + "px";
            document.getElementById(bar).style.width = new_width;
        }
    }
    else if (target == "num3"){
        if (num3_width > 0) {
            num3_width -= 38;
            var new_width = num3_width.toString() + "px";
            document.getElementById(bar).style.width = new_width;
        }
    }
    else if (target == "num4"){
        if (num4_width > 0) {
            num4_width -= 38;
            var new_width = num4_width.toString() + "px";
            document.getElementById(bar).style.width = new_width;
        }
    }
    else if (target == "num5"){
        if (num5_width > 0) {
            num5_width -= 38;
            var new_width = num5_width.toString() + "px";
            document.getElementById(bar).style.width = new_width;
        }
    }
    else if (target == "num6"){
        if (num6_width > 0) {
            num6_width -= 38;
            var new_width = num6_width.toString() + "px";
            document.getElementById(bar).style.width = new_width;
        }
    }
}