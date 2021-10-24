updateTable();

document.getElementById("notice").onclick = function () {
    document.getElementById("notice").innerHTML = "<ul>"
        + "<li> Save the content (email address/links/username) which you use often<br/> and copy it by just one click.</li>"
        + "<li> Add data using input field below </li>"
        + "<li> Description must be unique </li>"
        + "<li> Click on row to copy it's content,<br/>After successfully copying, window will be closed automatically </li>"
        + "<li> Click on delete icon to delete corresponding row </li>"
        + "</ul>";

    chrome.storage.local.set({ "       test-email       ": "email@example.com" }, updateTable);
};
