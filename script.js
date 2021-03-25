/*INICIO DE AGREGAR CATEGORÍAS*/
function registerNewCat() {
    var reg_cat = document.getElementById("cat").value;

    //alert(reg_user);
    var catArray = [];

    if (localStorage.getItem("CatAdminArray") !== null) {
        catArray = JSON.parse(localStorage.getItem("CatAdminArray"));
    }

    var current_reg = {
        //agregar registro de usuario
        cat: reg_cat
    };

    catArray.push(current_reg);

    localStorage.setItem("CatAdminArray", JSON.stringify(catArray));

    document.getElementById("cat").value = ""

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
        row = catTable.insertRow(1);

        //Insertar columna de usuario
        row.insertCell(0).innerHTML = cat.cat;
        row.insertCell(1).innerHTML = "<a>Delete</a>";
    }
}

/*FINALDE AGREGAR CATEGORÍAS*/

/*INICIO DE RESUMENES */
function registerNewResume() {
    var reg_title = document.getElementById("title").value;
    var reg_sinop = document.getElementById("sinop").value;
    var reg_recom = document.getElementById("recom").value;
    var reg_infAutor = document.getElementById("infAutor").value;
    var reg_contenido = document.getElementById("cont").value;


    //alert(reg_user);
    var resumeArray = [];

    if (localStorage.getItem("ResumeAdminArray") !== null) {
        resumeArray = JSON.parse(localStorage.getItem("ResumeAdminArray"));
    }

    var current_reg = {
        //agregar registro de usuario
        titulo: reg_title,
        sinopsis: reg_sinop,
        recomendacion: reg_recom,
        infoAutor: reg_infAutor,
        contenido: reg_contenido
    };

    resumeArray.push(current_reg);

    localStorage.setItem("ResumeAdminArray", JSON.stringify(resumeArray));

    //Limpiar valores de inputs
    document.getElementById("title").value = "";
    document.getElementById("sinop").value = "";
    document.getElementById("recom").value = "";
    document.getElementById("infAutor").value = "";
    document.getElementById("cont").value = "";

    loadResumeDataFromAdmin()

    //window.location.href = "file:///C:/U/Documentos/Ciclo-01-2021/Progra%20II/ProyectoFinalParte/proyectoCat/index.html"
    //window.location.href = "http://heroku:5000/login";
}

function loadResumeDataFromAdmin() {
    var resumeArray
    if (localStorage.getItem("ResumeAdminArray") !== null) {
        resumeArray = JSON.parse(localStorage.getItem("ResumeAdminArray"));
    }

    var resumeTable = document.getElementById("resumeTable")
    var row

    for (var resume of resumeArray) {
        row = resumeTable.insertRow(1);

        //Insertar columna de usuario
        row.insertCell(0).innerHTML = resume.titulo;
        row.insertCell(1).innerHTML = resume.sinopsis;
        row.insertCell(2).innerHTML = resume.recomendacion;
        row.insertCell(3).innerHTML = resume.infoAutor;
        row.insertCell(4).innerHTML = resume.contenido;
        row.insertCell(5).innerHTML = "<a>Delete</a>";
    }
}


/*FIN DE RESUMENES */