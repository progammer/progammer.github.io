var isTyping; // rather, isModifyingText (but backspacing counts as typing, no?)
var pathPos = []; // stack holding appended paths (last shown will be removed first)

$(document).ready(function(){
    var loc = document.getElementById('loc');

    // Type out the original path
    const root = "> caleb_park";
    pathPos.push("home");
    // Fades all elements in that should be initially visible
    const introFadeWrapper = () => {
        $("#initshow").fadeToggle();
        // $("#intro").fadeToggle();
        // $("#back").fadeToggle();
    }
    type(root, introFadeWrapper);

    var returnButton = $("#back");
    var listItems = $(".navi"); // document.getElementsByClassName("navi");

    // init navi colors.

    let startHue = 300;
    let endHue = 150;
    let amplitude = (startHue - endHue) / 2;
    let vertShift = endHue + amplitude;
    let j = 0;
    var hue;
    setInterval(() => {
        j++;
        console.log(vertShift + " " + amplitude + " " + hue);
        hue = amplitude * Math.cos(j) + vertShift;
    }, 1000);

    listItems.hover(function(){
        // on hover
        $(this).css("color", "hsl(" + hue + ", 60%, 60%)");
        $(this).toggleClass("alt");
    },
    // on exit hover
    function(){
        $(this).toggleClass("alt");
        $(this).css("color", "whitesmoke");
    })

    listItems.on('click', (e) => {
        if (!isTyping) {
            // why does 'this' give undefined (vs. e.target)
            var path = e.target.innerHTML;
            let formerTop = pathPos[pathPos.length-1];
            pathPos.push(path);
            type("/" + path, () => {
                $("#" + path).fadeToggle();
            });
            // toggle the return
            if (pathPos.length > 1) {
                returnButton.fadeIn();
            }
            // toggle the former top element (after pushing new)
            $("#" + formerTop).fadeToggle();
        }
    })

    // remove path names
    returnButton.on("click", () => {
        if (!isTyping && pathPos.length > 1) {
            var toRemove = pathPos.pop();
            $("#" + toRemove).fadeOut();
            // +1 handles the slash character
            erase(toRemove.length + 1);
            // remove the return button
            if (pathPos.length == 1) {
                returnButton.fadeOut();
            }
        }
    })
});

function type(path, opt_function) {
    isTyping = true;
    var i = 0;
    const placeText = setInterval(() => {
        // console.log(path.charAt(i) + " " + i);
        loc.innerHTML += path.charAt(i);
        i++;
        if (i == path.length) {
            clearInterval(placeText);
            isTyping = false;
            if(opt_function) {
                // Optional Callback for Rendering initial elements
                opt_function();
            }
        }
    }, 75);
}

function erase(numToErase) {
    isTyping = true;
    const removeText = setInterval(() => {
        var currentString = loc.innerHTML;
        loc.innerHTML = currentString.substring(0, currentString.length - 1);
        numToErase--;
        if (numToErase <= 0) {
            clearInterval(removeText);
            $("#" + pathPos[pathPos.length-1]).fadeToggle();
            isTyping = false;
        }
    }, 75);
}

function openInNewTab(url) {
    var win = window.open(url);
    win.focus();
    win.open();
}
