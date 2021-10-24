// copy given text to clipboard
function copyToClipboard(text) {
    var textArea = document.getElementById("hiddenTextArea-id");
    textArea.value = text;
    textArea.focus();
    textArea.select();
    try {
        document.execCommand("copy");
        window.close();
    } catch (error) {
        document.getElementById("notice").innerHTML = "Sorry! An error occured while copying.";
        console.log(error);
    }
}
