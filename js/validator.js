

nazwa1 = null; kod1= null; netto1=null; vat1=null; brutto1=null; kategoria1=null; opcja1=null; ocena1=null; photo1= null; licznik1=0; el = null; tableindeks=null;

function sprawdzTowarName() {
    var formularz_obj=document.getElementById("towar_name");
    var t_name = formularz_obj.value;
    var blad = document.getElementById("towar_name_blad");
    var objRegExp  = /^[a-zA-Z]+$/;

    el = document.querySelector("table tbody tr td[name='"+t_name+"']");

    if (t_name === "")
    {
        blad.innerHTML = "Podaj nazwe towaru";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych=false;
    }
    else if (t_name.length > 10)
    {
        blad.innerHTML = "Zadluga nazwa (max 10 znakow)";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych=true;
    }
    else if(el != null){
        blad.innerHTML = "Podany produkt znajduje się już w tabeli";
        blad.classList.remove('valid-feedback');
        formularz_obj.classList.remove('is-valid');
        blad.classList.add('invalid-feedback');
        formularz_obj.classList.add('is-invalid');
        blad_danych = true;
    }
    else
    {
        blad.classList.remove("invalid-feedback");
        formularz_obj.classList.remove("is-invalid");
        blad.classList.add("valid-feedback");
        formularz_obj.classList.add("is-valid");
        blad.innerHTML = "";
        blad_danych=false;
    }
    nazwa1=t_name;
    return blad_danych;
}
function sprawdz_kod() {

    var formularz_obj=document.getElementById("kod");
    var t_name = formularz_obj.value;
    var blad = document.getElementById("kod_blad");
    var objRegExp  = /^[0-9a-zA-Z]{2}-[0-9a-zA-Z]{2}$/;

    if (t_name === "")
    {
        blad.innerHTML = "Podaj kod towaru";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych=false;
    }
    else if (!objRegExp.test(t_name))
    {
        blad.innerHTML = "Podaj Prawidłowy kod towaru";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych=false;
    }
    else
    {
        blad.classList.remove("invalid-feedback");
        formularz_obj.classList.remove("is-invalid");
        blad.classList.add("valid-feedback");
        formularz_obj.classList.add("is-valid");
        blad.innerHTML = "";
        blad_danych=false;
    }
    kod1=t_name;
    return blad_danych;
}
function sprawdzCenaNetto() {
    var formularz_obj=document.getElementById("cena_netto");
    var cena_netto = formularz_obj.value;
    var blad = document.getElementById("cenna_netto_blad");
    var objRegExp  = /^[0-9]/;

    if (cena_netto === "")
    {
        blad.innerHTML = "Podaj cenne netto";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych=false;
    }
    else if (!objRegExp.test(cena_netto))
    {
        blad.innerHTML = "Podaj Prawidłowa cenne netto";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych=false;
    }
    else
    {
        blad.classList.remove("invalid-feedback");
        formularz_obj.classList.remove("is-invalid");
        blad.classList.add("valid-feedback");
        formularz_obj.classList.add("is-valid");
        blad.innerHTML = "";
        blad_danych=false;
    }


    var div_vat = document.getElementById("vat");
    var vat = div_vat.value;

    vat = vat * 0.01; // 5 * 0.01 = 0.05 czyli 5%
    //cena nett = 4000
    result = parseFloat(cena_netto) + (cena_netto*vat); // 4000 * 0.05 = 200  + 4000 = 4200
    document.getElementById("cena_brutto").value = result;
    cena_netto = parseFloat(cena_netto)
    cena_netto = cena_netto.toFixed(2);
    document.getElementById("cena_netto").value =  cena_netto;
    brutto1=result;
    netto1=cena_netto;
    return blad_danych;
}
function sprawdz_vat() {

    var formularz_obj=document.getElementById("vat");
    var vat = formularz_obj.value;
    var blad = document.getElementById("vat_blad");
    var objRegExp  = /^[0-9]/;

    if (vat === "")
    {
        blad.innerHTML = "Podaj VAT";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych=false;
    }
    else if (!objRegExp.test(vat))
    {
        blad.innerHTML = "Podaj Prawidłowy kod towaru";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych=false;
    }
    else
    {
        blad.classList.remove("invalid-feedback");
        formularz_obj.classList.remove("is-invalid");
        blad.classList.add("valid-feedback");
        formularz_obj.classList.add("is-valid");
        blad.innerHTML = "";
        blad_danych=false;
    }



    var div_cena_netto = document.getElementById("cena_netto");
    var cena_netto = div_cena_netto.value;



    vat = vat * 0.01; // 5 * 0.01 = 0.05 czyli 5%
    //cena nett = 4000
    result = parseFloat(cena_netto) + (cena_netto*vat); // 4000 * 0.05 = 200  + 4000 = 4200
    document.getElementById("cena_brutto").value = result;

    brutto1 = result;
    vat1=vat;
    return blad_danych;
}
function walidacjaKategoria(){
    var formularz_obj = document.getElementById("kategoriaTowaru");
    var zmienna = formularz_obj.value;
    var blad = document.getElementById('kategoriaBlad');
    //console.log(selekt);
    if (zmienna === "Wybierz"){
        blad.innerHTML = "Wybierz kategorie";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        kategoriaBlad=false;
    }else{
        blad.innerHTML = " ";
        blad.classList.remove('invalid-feedback');
        formularz_obj.classList.remove('is-invalid');
        blad.classList.add('valid-feedback');
        formularz_obj.classList.add('is-valid');
        zmienna=formularz_obj.value;
        kategoria1 = zmienna;
        return true;
    }
}
function walidacjaCheckbox(){
    var licznik = 0;
    var opcje = null;
    for (var i = 0; i< 5; i++)
    {
        if(document.forms["form"]["productOption"][i].checked)
        {
            licznik++;
            if(opcje==null){
                opcje = document.forms["form"]["productOption"][i].value+", ";
            }
            else{
                opcje = opcje + document.forms["form"]["productOption"][i].value+", ";
            }

        }
    }
    var opcja = document.getElementById('productOptionGroup');
    var opcjaBlad = document.getElementById('opcjaBlady');

    if(licznik < 2){
        //console.log("elo");
        opcjaBlad.innerHTML = "Prosze wybrać conajmniej 2 opcje";

        return false;
    }else{
        opcjaBlad.innerHTML = " ";
        opcja1=opcje;
        return true;
    }
}
function sprawdzTowarImg() {
    var formularz_obj=document.getElementById("towar_img");
    var t_name = formularz_obj.value;
    var blad = document.getElementById("towar_img_blad");
    if (t_name === "")
    {
        blad.innerHTML = "Zly adres URL";
        blad.classList.add("invalid-feedback");
        formularz_obj.classList.add("is-invalid");
        blad.classList.remove("valid-feedback");
        formularz_obj.classList.remove("is-valid");
        blad_danych=false;
    }
    else
    {
        blad.classList.remove("invalid-feedback");
        formularz_obj.classList.remove("is-invalid");
        blad.classList.add("valid-feedback");
        formularz_obj.classList.add("is-valid");
        blad.innerHTML = "";
        blad_danych=false;
    }

    photo1=t_name;
    return blad_danych;
}


function walidacjaForm() {

    if(sprawdzTowarName() || sprawdz_kod() || sprawdzCenaNetto() || sprawdz_vat() || walidacjaCheckbox() || walidacjaKategoria() || sprawdzTowarImg()) {

        for (var i = 0; i< 5; i++)
        {
            if(document.forms["form"]["exampleRadios"][i].checked)
            {
                ocena1 = document.forms["form"]["exampleRadios"][i].value;
            }
        }

        $(function () {
            var content = '<tr>';
            content += '<td name="' + nazwa1 + '">' + nazwa1 + '</td>';
            content += '<td>' + kod1 + '</td>';
            content += '<td>' + netto1 + '</td>';
            content += '<td>' + vat1 + '</td>';
            content += '<td>' + brutto1 + '</td>';
            content += '<td>' + kategoria1 + '</td>';
            content += '<td>' + opcja1 + '</td>';
            content += '<td>' + ocena1 + '</td>';
            content += '<td>' + photo1 + '</td>';
            content += '<td> <button type="button" class="btn btn-secondary buttony" id="bt1" onClick="deleteRow(this)">' +
                '<img class="ikony" id="kosz2" src="kosz.png">' +
                '</img></button> <button type="button" class="btn btn-secondary buttony" src="#" id="bt2" onClick="edytujWiersz(this)">' +
                '<img class="ikony" src="edit.png"></img></button> ' +
                '<button type="button" class="btn btn-secondary buttony" data-toggle="modal" data-target="#exampleModal" id="bt3" onClick="DoKoszyka()">' +
                '<img class="ikony" src="koszyk.png"></img></button></td>';
            content += '</tr>';

            $content = $(content),
                // resort table using the current sort; set to false to prevent resort, otherwise
                // any other value in resort will automatically trigger the table resort.
                resort = true;
            var sorting = [[2, 1], [0, 0]];
            $('#myTable')

                .find('tbody').append($content)
                .trigger('updateAll', [$content, resort]);

            document.getElementById("form_id").reset();

            nazwa = document.getElementById('towar_name');
            kod = document.getElementById('kod');
            netto = document.getElementById('cena_netto');
            vat = document.getElementById('vat');
            selekt = document.getElementById("kategoriaTowaru");

            nazwa.classList.remove('is-valid');
            kod.classList.remove('is-valid');
            netto.classList.remove('is-valid');
            vat.classList.remove('is-valid');
            selekt.classList.remove('is-valid');

            return false;
        });
    }
}
$(function() {
    $("#myTable").tablesorter({
        widgets: ["zebra"],
    });
    $("#sortowanie").change(function(){
        var sortVal = document.getElementById("sortowanie").value;;

        switch(sortVal){
            case "1":
                $("#myTable").find("th:contains(Nazwa)").trigger("sorton", [ [[0,0]] ]);
                break;
            case "2":
                $("#myTable").find("th:contains(Nazwa)").trigger("sorton", [ [[0,1]] ]);
                break;
            case "3":
                $("#myTable").find("th:contains(Cena brutto)").trigger("sorton", [ [[4,0]] ]);
                break;
            case "4":
                $("#myTable").find("th:contains(Cena brutto)").trigger("sorton", [ [[4,1]] ]);
                break;
            case "5":
                $("#myTable").find("th:contains(Ocena)").trigger("sorton", [ [[7,0]] ]);
                break;
            case "6":
                $("#myTable").find("th:contains(Ocena)").trigger("sorton", [ [[7,1]] ]);
                break;
        }
        $('#myTable').trigger('updateAll', [$content, resort]);
    });

});

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);

    $('#table2').trigger('updateAll', [$content, resort]);

}

function edytujWiersz(r){

    nazwa.classList.add('is-valid');
    kod.classList.add('is-valid');
    netto.classList.add('is-valid');
    vat.classList.add('is-valid');
    selekt.classList.add('is-valid');

    window.scrollTo(0, 0);
    $('#myTable').trigger('updateAll', [$content, resort]);
    var table = document.getElementById('myTable');
    tableindeks = r;
    var i = r.parentNode.parentNode.rowIndex;
    nazwa.value = table.rows[i].cells[0].innerHTML;
    kod.value = table.rows[i].cells[1].innerHTML;
    netto.value = table.rows[i].cells[2].innerHTML;
    vat.value = table.rows[i].cells[3].innerHTML;
    selekt.value = table.rows[i].cells[5].innerHTML;
    var oc = parseInt(table.rows[i].cells[7].innerHTML);
    oc = oc -1;
    document.forms["form"]["exampleRadios"][oc].checked = true;

    document.getElementById('przycisk').innerHTML = 'Edytuj';
    document.getElementById('przycisk').setAttribute( "onclick", "walidacjaFormularzEdycja()");
    document.getElementById('przycisk').setAttribute( "id", "przycisk2");

}

function walidacjaFormularzEdycja(){

    if(sprawdzTowarName() || sprawdz_kod() || sprawdzCenaNetto() || sprawdz_vat() || walidacjaCheckbox() || walidacjaKategoria() || sprawdzTowarImg()) {

        for (var i = 0; i< 5; i++)
        {
            if(document.forms["form"]["exampleRadios"][i].checked)
            {
                ocena1 = document.forms["form"]["exampleRadios"][i].value;
            }
        }

        $('#myTable').trigger('updateAll', [$content, resort]);

        var table = document.getElementById('myTable');
        var i = tableindeks.parentNode.parentNode.rowIndex;

        table.rows[i].cells[0].innerHTML = nazwa1;
        table.rows[i].cells[1].innerHTML = kod1;
        table.rows[i].cells[2].innerHTML = netto1;
        table.rows[i].cells[3].innerHTML = vat1;
        table.rows[i].cells[4].innerHTML = brutto1;
        table.rows[i].cells[5].innerHTML = kategoria1;
        table.rows[i].cells[6].innerHTML = opcja1;
        table.rows[i].cells[7].innerHTML = ocena1;

        //el = null;
        nazwa.classList.remove('is-valid');
        kod.classList.remove('is-valid');
        netto.classList.remove('is-valid');
        vat.classList.remove('is-valid');
        selekt.classList.remove('is-valid');

        document.getElementById('przycisk2').innerHTML = 'Wyślij';
        document.getElementById('przycisk2').setAttribute( "onclick", "walidacjaForm()");
        document.getElementById('przycisk2').setAttribute( "id", "przycisk");
        $('#table2').trigger('updateAll', [$content, resort]);
        document.getElementById("form_id").reset();
        return true;
    }

}

function DoKoszyka() {
    alert("Dodano do koszyka")
}