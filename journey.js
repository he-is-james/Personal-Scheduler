let time_remaining = 24;

let health_width = 912;
let num1_width = 0;
let num2_width = 0;
let num3_width = 0;
let num4_width = 0;
let num5_width = 0;
let num6_width = 0;

var count = 0;

const hoursRemaining = document.querySelector("#hours_remaining");

function type_bar(target) {
    var value = parseInt(document.getElementById(target).value);
    if (value < 0 || value > 24 || time_remaining - value < 0 || time_remaining - value > 24) {
        value = 0;
    }
    if ((value >= 0 && value <= 24) && (time_remaining - value >= 0 && time_remaining - value <= 24)) {
        if (target == "num1") {
            num1_width = value * 38;
        }
        else if (target == "num2") {
            num2_width = value * 38;
        }
        else if (target == "num3") {
            num3_width = value * 38;
        }
        else if (target == "num4") {
            num4_width = value * 38;
        }
        else if (target == "num5") {
            num5_width = value * 38;
        }
        else if (target == "num6") {
            num6_width = value * 38;
        }
        health_width = 912 - (num1_width + num2_width + num3_width + num4_width + num5_width + num6_width)
        time_remaining = health_width / 38;
        document.getElementById(target + "_bar").style.width = (value * 38) + "px";
        updateRemaining();
    }
}

function increment(target) {
    var value = parseInt(document.getElementById(target).value);
    if (value < 0) {
        document.getElementById(target).value = value + 1;
    }
    else if (value < 24 && time_remaining > 0) {
        value += 1;
        time_remaining -= 1;
        updateBarUp(target);
        health_width -= 38;
        updateRemaining();
        document.getElementById(target).value = value;
    }
}

function decrement(target) {
    var value = parseInt(document.getElementById(target).value);
    if (value > 0 && value <= 24 && (value <= time_remaining)) {
        value -= 1;
        time_remaining += 1;
        updateBarDown(target);
        health_width += 38;
        updateRemaining();
        document.getElementById(target).value = value;
        if (value = time_remaining) {
            count = 0;
        }
    }
    if (time_remaining == 0) {
        count += 1;
    }
    if (count == 0) {
        if (value > time_remaining + 1) {
            document.getElementById(target).value = value - 1;
        }
        else if (value == time_remaining + 1) {
            value -= 1;
            document.getElementById(target).value = value;
            document.getElementById(target + "_bar").style.width = value * 38 + "px";
            if (target == "num1") {
                num1_width = value * 38;
            }
            else if (target == "num2") {
                num2_width = value * 38;
            }
            else if (target == "num3") {
                num3_width = value * 38;
            }
            else if (target == "num4") {
                num4_width = value * 38;
            }
            else if (target == "num5") {
                num5_width = value * 38;
            }
            else if (target == "num6") {
                num6_width = value * 38;
            }
            health_width = 0;
            time_remaining = 0;
            updateRemaining();
            document.getElementById("health_bar").style.width = "0px";
            count += 1;
        }
    }
    else if (value > time_remaining) {
        value -= 1;
        time_remaining += 1;
        updateBarDown(target);
        health_width += 38;
        updateRemaining();
        document.getElementById(target).value = value;
    }
}

function updateRemaining() {
    var h = time_remaining.toString();
    document.getElementById("health_bar").style.width = health_width.toString() + "px";
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
