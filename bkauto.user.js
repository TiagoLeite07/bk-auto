// ==UserScript==
// @name         BKauto
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js
// @match        https://www.minhabkexperiencia.com/*
// @grant        none
// ==/UserScript==

function firstPage (){
    //FIRST PAGE
    document.getElementById("SurveyCode").value = 20597;
    var date = new Date(new Date().setDate(new Date().getDate()-3));
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if(day > 9) document.getElementById("InputDay").value = day.toString();
    else document.getElementById("InputDay").value = "0" + day.toString();

    if(month > 9) document.getElementById("InputMonth").value = month.toString();
    else document.getElementById("InputMonth").value = "0" + month.toString();

    document.getElementById("InputYear").value = year.toString().substr(2,2);

    var hour = Math.floor(Math.random() * (22 - 12 + 1) + 12);
    var minutes = Math.floor(Math.random() * ( 59 - 0 + 1) + 0);

    document.getElementById("InputHour").value = hour.toString();

    if(minutes > 9) document.getElementById("InputMinute").value = minutes.toString();
    else document.getElementById("InputMinute").value = "0" + minutes.toString();

    document.getElementById("NextButton").click();
}

function secondPage(){
    //SECOND PAGE
    document.getElementById("R001000.1").checked = true;
    document.getElementById("NextButton").click();
}

function thirdPage(){
    //THIRD PAGE
    document.getElementById("R002000.3").checked = true;
    document.getElementById("NextButton").click();
}

function fourthPage(){
    //FOURTH PAGE
    document.getElementById("R003000.2").checked = true;
    document.getElementById("NextButton").click();
}

function fifthPage(){
    //FIFTH PAGE
    document.getElementById("R004000.4").checked = true;
    document.getElementById("NextButton").click();
}

function sixthPage(){
    //SIXTH PAGE
    var a = document.getElementById("R010000.4")
    if(a) a.checked = true;
    var b = document.getElementById("R022000.4")
    if(b) b.checked = true;
    var c = document.getElementById("R015000.4")
    if(c) c.checked = true;
    var d = document.getElementById("R017000.4")
    if(d) d.checked = true;
    var e = document.getElementById("R007000.4")
    if(e) e.checked = true;
    var f = document.getElementById("R011000.4")
    if(f) f.checked = true;
    var g = document.getElementById("R015000.4")
    if(g) g.checked = true;
    var h = document.getElementById("R009000.4")
    if(h) h.checked = true;
    var i = document.getElementById("R013000.4")
    if(i) i.checked = true;
    var j = document.getElementById("R020000.4")
    if(j) j.checked = true;
    var k = document.getElementById("R008000.4")
    if(k) k.checked = true;
    var l = document.getElementById("R014000.4")
    if(l) l.checked = true;
    var m = document.getElementById("R023000.4")
    if(m) m.checked = true;

    document.getElementById("NextButton").click();
}

function seventhPage(){
    //SEVENTH PAGE
    document.getElementById("R030000.4").checked = true;
    document.getElementById("R029000.4").checked = true;
    document.getElementById("R108000.4").checked = true;
    document.getElementById("R031000.4").checked = true;

    document.getElementById("NextButton").click();
}

function eighthPage(){
    //EIGHTH PAGE
    document.getElementById("R041000.2").checked = true;

    document.getElementById("NextButton").click();
}

function ninethPage(){
    //NINETH PAGE
    document.getElementById("R044000.4").checked = true;
    document.getElementById("R045000.4").checked = true;

    document.getElementById("NextButton").click();
}

function tenthPage(){
    //TENTH PAGE
    document.getElementById("R046000.4").checked = true;
    document.getElementById("R047000.4").checked = true;

    document.getElementById("NextButton").click();
}

function eleventhPage(){
    //ELEVENTH PAGE
    document.getElementById("NextButton").click();
}

function twelvethPage(){
    //TWELVETH PAGE
    document.getElementById("R055000.1").checked = true;
    document.getElementById("R049000.1").checked = true;
    document.getElementById("R050000.1").checked = true;
    document.getElementById("R054000.1").checked = true;
    document.getElementById("R051000.2").checked = true;

    document.getElementById("NextButton").click();
}

function thirteenthPage(){
    //THIRTEENTH PAGE
    document.getElementById("R057000.4").checked = true;
    document.getElementById("R058000.3").checked = true;

    document.getElementById("NextButton").click();
}

function fourteenthPage(){
    //FOURTEENTH PAGE
    document.getElementById("R060000.2").checked = true;

    document.getElementById("NextButton").click();
}

function fifteenthPage(){
    //FIFTEENTH PAGE
    document.getElementById("R068000.1").checked = true;

    document.getElementById("NextButton").click();
}

function sixteenthPage(){
    //SIXTEENTH PAGE
    document.getElementById("R069000").value = "2";
    document.getElementById("R070000").value = "2";
    document.getElementById("R071027").value = "6";

    document.getElementById("NextButton").click();
}

function seventeenthPage(){
    //SEVENTEENTH PAGE
    document.getElementById("NextButton").click();
}

$(document).ready(function(){
    if ($("p:contains(Valorizamos)").size() > 0)
        firstPage();
    else if (($("div:contains(levar)").size() > 0) && ($("div:contains(restaurante)").size() > 0) && ($("div:contains(viagem)").size() > 0))
        secondPage();
    else if ($("div:contains(pessoas)").size() > 0)
        thirdPage();
    else if ($("div:contains(anos)").size() > 0)
        fourthPage();
    else if ($("div:contains(geral)").size() > 0)
        fifthPage();
    else if (($("td:contains(frescura)").size() > 0) || ($("td:contains(hospitalidade)").size() > 0) || ($("td:contains(sabor)").size() > 0) || ($("td:contains(aspeto)").size() > 0) || ($("td:contains(temperatura)").size() > 0) || ($("td:contains(qualidade)").size() > 0) || ($("td:contains(facilidade)").size() > 0) || ($("td:contains(rapidez)").size() > 0) || ($("td:contains(ambiente)").size() > 0) || ($("td:contains(simpatia)").size() > 0))
        sixthPage();
    else if ($("td:contains(batatas)").size() > 0)
        seventhPage();
    else if ($("td:contains(problema)").size() > 0)
        eighthPage();
    else if ($("td:contains(Voltar)").size() > 0)
        ninethPage();
    else if ($("td:contains(tratado)").size() > 0)
        tenthPage();
    else if ($("div:contains(satisfeito)").size() > 0)
        eleventhPage();
    else if ($("div:contains(colaboradores)").size() > 0)
        twelvethPage();
    else if ($("div:contains(vezes)").size() > 0)
        thirteenthPage();
    else if ($("div:contains(motivo)").size() > 0)
        fourteenthPage();
    else if ($("div:contains(Telepizza)").size() > 0)
        fifteenthPage();
    else if ($("div:contains(sexo)").size() > 0)
        sixteenthPage();
    else if ($("div:contains(CP)").size() > 0)
        seventeenthPage();

});
