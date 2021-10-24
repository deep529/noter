// inserts data into given table
function insertInTable(tableBody, index, key, data) {
    var currentRow = tableBody.insertRow(index);
    var cell1 = currentRow.insertCell(0);
    var cell2 = currentRow.insertCell(1);
    var cell3 = currentRow.insertCell(2);

    cell1.innerHTML = key;
    cell2.innerHTML = data;
    
    // setting outside attribute to 3rd data column
    var class_attribute = document.createAttribute("class");
    class_attribute.value = "outside";
    cell3.setAttributeNode(class_attribute);
    
    // inserting image in 3rd data column
    var img = document.createElement("img");
    var img_src = document.createAttribute("src");
    img_src.value = "\\images\\delete.png";
    img.setAttributeNode(img_src);
    
    // set image height
    var img_height = document.createAttribute("height");
    img_height.value = "36px";
    img.setAttributeNode(img_height);
    
    // image onclick
    img.onclick = function () {
        chrome.storage.local.remove(key, updateTable);
    };
    
    cell3.append(img);

    var clickHandler = function (row) {
        return function () {
            var cell = row.getElementsByTagName("td")[1];
            var text = cell.innerHTML;
            copyToClipboard(text);
        };
    };
    cell1.onclick = clickHandler(currentRow);
    cell2.onclick = clickHandler(currentRow);
}
