function handleProgressBar() {
    let progressBar = $("#progress-bar-inner")
    let textElement = $("#main-text")
    let bottomBar = $("#bottom-bar")
    let textBottom = textElement.offset().top + textElement.outerHeight(true);

    let scrollBottom = window.scrollY + window.innerHeight

    bottomBar.css("visibility", scrollBottom < textBottom ? "visible" : "hidden")

    progress = (scrollBottom / textBottom) * 100
    progressBar.css("width", progress + "%")
}

async function loadText(file) {
    let element = $("#main-text")

    return $.get(file, function(data) {
        element.text(data)
    });
}

function init() {
    loadText("./documents/text_doc.txt")
        .then(handleProgressBar)
        .then(function() {
            $(document).ready(function() {
                $("#main-text").lettering("words")
            })
        })
}

onscroll = (event) => {
    handleProgressBar()
}

init()

function fontSizeButton() {
    let textElement = $("#main-text")

    textElement.css("font-size", "25px")

    handleProgressBar()
}

function lineSpacingButton() {
    let textElement = $("#main-text")

    textElement.css("line-height", "35px")

    handleProgressBar()
}