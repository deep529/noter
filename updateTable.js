// gets all data from chrome database and replaces old tablebody by new one
function updateTable() {
    // get old table body
    var oldTableBody = document.getElementById("main-tbody");

    // create new table body with id = main-tbody
    var newTableBody = document.createElement("tbody");
    var idAttribute = document.createAttribute("id");
    idAttribute.value = "main-tbody";
    newTableBody.setAttributeNode(idAttribute);

    // get all data from chrome database and insert in table
    chrome.storage.local.get(null, function (data) {
        var index = 0;
        for (var key in data) {
            insertInTable(newTableBody, index, key, data[key]);
            index++;
        }
        oldTableBody.parentNode.replaceChild(newTableBody, oldTableBody);
    });
}
