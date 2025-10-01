    function redirect() {

        let maiden = document.getElementById("maidenName").value
        let pet = document.getElementById("petName").value
        let street = document.getElementById("firstStreet").value
        let food = document.getElementById("favoriteFood").value
        let concert = document.getElementById("firstConcert").value

        if (maiden === "Ulf" && pet === "Mimi" && street === "Liljedahlsvägen" && food === "Ketchup" && concert === "System of a Down") {
            window.location.replace("accountInformation.html");
        } else {
            let para = document.createElement("p");
            para.textContent = "Error. Please try again!";
            document.body.appendChild(para);

        }

    }

    function redirectLogin()    {

        let user = document.getElementById("userName").value
        let pass = document.getElementById("password").value

        if (user === "FlorianUlf" && pass === "mimi") {
            window.location.replace("judgement.html");
        } else {
            let para = document.createElement("p");
            para.textContent = "Error. Please try again!";
            document.body.appendChild(para);

        }
    }