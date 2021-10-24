var add_button = document.getElementById("add_button");

function addNew() {
    var key_text = document.getElementById("key").value;
    var data_text = document.getElementById("data").value;

    if (key_text != "" && data_text != "") {
        var json = {};
        json[key_text] = data_text;
        try {
            chrome.storage.local.set(json, updateTable);
        } catch (error) {
            document.getElementById("notice").innerHTML = "Sorry! Operation Failed. Maybe you've consumed all memory";
            console.log(error);
        }
    }
}

add_button.onclick = addNew;