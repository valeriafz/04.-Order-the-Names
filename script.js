// Dand click pe butonul add se va adauga valoarea din input in dreptul literei care ii corespunde prima litera din numele introdus,
// de ex:
// I. Ion
// daca sunt mai multe nume cu aceiasi litera atunci se vor desparti prin virgula
// de ex:
// I. Ion, Ian
function addName() {
            var name = document.getElementById("nameInput").value;

            if (name.trim() !== "") {
                var firstLetter = name.charAt(0).toUpperCase();

                var listItem = document.querySelector("#nameList li[data-letter='" + firstLetter + "']");
                
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
        }