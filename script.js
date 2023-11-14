const addName = () => {
  var name = document.getElementById("nameInput").value;

  if (name.trim() !== "") {
    var firstLetter = name.charAt(0).toUpperCase();

    var listItem = document.querySelector(
      "#nameList li[data-letter='" + firstLetter + "']"
    );

    if (listItem) {
      listItem.textContent += ", " + name;
    } else {
      listItem = document.createElement("li");
      listItem.setAttribute("data-letter", firstLetter);
      listItem.textContent = firstLetter + ". " + name;

      document.getElementById("nameList").appendChild(listItem);
    }

    document.getElementById("nameInput").value = "";
  }
};
