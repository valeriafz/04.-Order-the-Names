const addName = () => {
  const name = document.getElementById("nameInput").value;

  if (name.trim() !== "") {
    const firstLetter = name.charAt(0).toUpperCase();

    const listItem = document.querySelector(
      "#nameList li[data-letter='" + firstLetter + "']"
    );

    if (listItem) {
      const formattedName = firstLetter + name.slice(1);

      if (listItem.textContent.trim() === "") {
        listItem.textContent = formattedName;
      } else {
        listItem.textContent += ", " + formattedName;
      }
    }
    document.getElementById("nameInput").value = "";
  }
};
