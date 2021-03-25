function registerNewUser() {
    var reg_cat = document.getElementById("cat").value;

    //alert(reg_user);
    var catArray = [];

    if (localStorage.getItem("CatAdminArray") !== null) {
        catArray = JSON.parse(localStorage.getItem("CatAdminArray"));
    }

    var current_reg = {
        cat: reg_cat
    };

    catArray.push(current_reg);

    localStorage.setItem("CatAdminArray", JSON.stringify(catArray));

    loadCatDataFromAdmin()

    //window.location.href = "file:///C:/U/Documentos/Ciclo-01-2021/Progra%20II/ProyectoFinalParte/proyectoCat/index.html"
    //window.location.href = "http://heroku:5000/login";
}

function loadCatDataFromAdmin() {
    var catArray
    if (localStorage.getItem("CatAdminArray") !== null) {
        catArray = JSON.parse(localStorage.getItem("CatAdminArray"));
    }

    var catTable = document.getElementById("catTable")
    var row

    for (var cat of catArray) {
        row = catTable.insertRow(1)

        row.insertCell(0).innerHTML = cat.cat;
        row.insertCell(1).innerHTML = "<a>modify</a>";
        row.insertCell(2).innerHTML = "<a>delete</a>";
    }
}