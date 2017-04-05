/*
 * Copyright 2017 Hochschule der Medien (HdM) / Stuttgart Media University
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


// Initiate Scan
var startScan = document.getElementById("startStopButton");

startScan.onclick = function() {
    init();
};


var checkHeader,
    checkNavigation,
    checkContent,
    checkScanContent,
    checkFooter;

var speed,
    cycles,
    cycleStart = 0,
    color,
    scanningMode;



function init() {

    checkHead();
    checkNav();
    checkContents();
    checkScanContents();
    checkFoot();

    if (checkHeader === true){
        createMarkToolbar();
    }
    else {
        speed = 1000;
        cycles = 3;
        color = "#FFA500";
        scanningMode = false;
    }

    createMark();

    scanLayer1();
}


// checks if the header toolbar is installed
function checkHead() {

    var head =  document.getElementById('panel-container');
    if (typeof(head) !== 'undefined' && head !== null) {
        return checkHeader = true;
    }
    else {
        return checkHeader = false;
    }
}

// checks if a navigation is existing
function checkNav() {
    var nav = document.getElementById("NavigationMenu");
    if (typeof(nav) !== 'undefined' && nav !== null) {
        return checkNavigation = true;
    }
    else {
        return checkNavigation = false;
    }
}

// checks if content is existing
function checkContents() {

    var content = document.getElementById("content");

    if (typeof(content) !== 'undefined' && content !== null) {
        return checkContent = true;
    }
    else {
        return checkContent = false;
    }
}

// checks which content is visible
function checkScanContents() {

    var ueberweisung = document.getElementById("ueberweisung"),
        terminueberweisung = document.getElementById("terminueberweisung"),
        dauerauftrag = document.getElementById("dauerauftrag"),
        kontoverwaltung = document.getElementById("kontoverwaltung");

    checkVisibilityUeberweisung = window.getComputedStyle(ueberweisung, null).getPropertyValue("display");
    checkVisibilityTerminueberweisung = window.getComputedStyle(terminueberweisung, null).getPropertyValue("display");
    checkVisibilityDauerauftrag = window.getComputedStyle(dauerauftrag, null).getPropertyValue("display");
    checkVisibilityKontoverwaltung = window.getComputedStyle(kontoverwaltung, null).getPropertyValue("display");

    if (checkVisibilityUeberweisung === "block"){
        return checkScanContent = "ueberweisung";
    }
    else if (checkVisibilityTerminueberweisung === "block"){
        return checkScanContent = "terminueberweisung";
    }
    else if (checkVisibilityDauerauftrag === "block"){
        return checkScanContent = "dauerauftrag";
    }
    else if (checkVisibilityKontoverwaltung === "block"){
        return checkScanContent = "kontoverwaltung";
    }
    else {
        return checkScanContent = "false";
    }

}

// checks if footer is installed
function checkFoot() {

    var foot =  document.getElementById('scanFooter');
    if (typeof(foot) !== 'undefined' && foot !== null) {
        return checkFooter = true;
    }
    else {
        return checkFooter = false;
    }
}

// creates the mark color for the scanning in this document
function createMark() {
    var style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = ".marked { background-color: " + color + ";}" +
        " option:checked { box-shadow: 0 0 10px 100px " + color + " inset;}";
    document.getElementsByTagName("head")[0].appendChild(style);
}

// creates the mark color for the scanning in the external header toolbar
function createMarkToolbar() {
    var style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = ".marked { background-color: " + color + ";}" +
        " option:checked { box-shadow: 0 0 10px 100px " + color + " inset;}";
    document.getElementById("myPanelFrame").contentWindow.document.getElementsByTagName("head")[0].appendChild(style);
}


document.getElementById("absenden").onclick = function () {
    location.href = "checkout.html";
};

document.getElementById("kontoverwaltungButton").onclick = function () {
    location.href = "index.html";
};