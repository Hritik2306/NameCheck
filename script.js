function checkNames() {

    let input = document.getElementById("names").value;

    // 🔴 If input is empty
    if (input.trim() === "") {
        alert("Please enter at least one name");
        return;
    }

    let namesArray = input.split(",");
    let outputDiv = document.getElementById("output");

    outputDiv.innerHTML = "";

    for (let i = 0; i < namesArray.length; i++) {

        let name = namesArray[i].trim();

        if (name === "") continue;

        if (name.charAt(0).toLowerCase() === 'j') {
            console.log("Goodbye " + name);
            outputDiv.innerHTML += `<span class="goodbye">Goodbye ${name}</span>`;
        } else {
            console.log("Hello " + name);
            outputDiv.innerHTML += `<span class="hello">Hello ${name}</span>`;
        }
    }
}
