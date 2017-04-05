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


function initTBS() {
    if (scanningMode === true){
        initTwoButtonScanning();
    }
    else {
        document.removeEventListener('keypress', nextItemMain);
        document.removeEventListener('keypress', selectItemMain);
    }
}

function initTwoButtonScanning() {

    checkHead();
    checkNav();
    checkContents();
    checkScanContents();
    checkFoot();

    if (checkHeader === true){
        createMarkToolbar();
    }
    else {
        color = "#FFA500";
    }

    createMark();

    //get all categories of the toolbar
    headerRow = document.getElementById("myPanelFrame").contentWindow.document.getElementById("category-tabs");
    headerRowLink = headerRow.getElementsByTagName("a");

    //access to the scanning dropdowns
    scanCycle = document.getElementById("myPanelFrame").contentWindow.document.getElementById("scanCycles_dropdown");
    scanSpeed = document.getElementById("myPanelFrame").contentWindow.document.getElementById("scanSpeed_dropdown");
    scanColor = document.getElementById("myPanelFrame").contentWindow.document.getElementById("scanColor_dropdown");
    scanMode = document.getElementById("myPanelFrame").contentWindow.document.getElementById("scanMode_checkbox");

    //put scanning drop downs inside array
    HeaderScanItems = [
        scanCycle,
        scanSpeed,
        scanColor,
        scanMode
    ];

    var i;

    document.getElementsByClassName("slidingpanel_tab")[0].className += " tababble";

    //adds tababble to toolbar items
    for(i = 0; i < headerRowLink.length; i++){
        headerRowLink[i].className += " tababble";
    }
    for(i = 0; i < HeaderScanItems.length; i++){
        HeaderScanItems[i].className += " tababble";
    }

    thisTababble = document.getElementsByClassName("tababble");
    tababble = document.getElementById("myPanelFrame").contentWindow.document.getElementById("category-tabs");
    toolbarTababble = tababble.getElementsByClassName("tababble");

    twoButtonScanningMain();

}



k = 0;
x = 0;
z = -1;

/**
 * Main
 */
function twoButtonScanningMain() {
    if(x < /*thisTababble.length*/ 11){
        document.addEventListener("keypress", nextItemMain);
        document.addEventListener("keypress", selectItemMain);
    }
    else {
        thisTababble[10].className = thisTababble[10].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        k = 0;
        x = 0;
        z = -1;
    }
}
function nextItemMain(e){
    if (e.keyCode === 32) {
        thisTababble[k].className += " marked";
        if (z >= 0) {
            thisTababble[z].className = thisTababble[z].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        }
        x++;
        k++;
        z++;
    }
    twoButtonScanningMain();
}
function selectItemMain(e) {
    if ((e.keyCode === 13) && (thisTababble[k - 1].classList.contains("marked"))) {
        thisTababble[k - 1].click();
    }
    if ((e.keyCode === 13) && (thisTababble[k - 1].classList.contains("marked")) && (thisTababble[0].classList.contains("marked"))) {
        twoButtonScanningToolbar();

        document.removeEventListener('keypress', nextItemMain);
        document.removeEventListener('keypress', selectItemMain);

        thisTababble[0].className = thisTababble[0].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        k = 0;
        x = 0;
        z = -1;
    }
    if ((e.keyCode === 13) && (thisTababble[k - 1].classList.contains("marked")) && (thisTababble[4].classList.contains("marked"))) {

        document.removeEventListener('keypress', nextItemMain);
        document.removeEventListener('keypress', selectItemMain);

        thisTababble[4].className = thisTababble[4].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        k = 10;
        x = 10;
        z = 9;

        twoButtonScanningUeberweisung();
    }
}

/**
 * Toolbar
 */
function twoButtonScanningToolbar() {
    if(x < /*thisTababble.length*/ 7){
        document.addEventListener("keypress", nextItemToolbar);
        document.addEventListener("keypress", selectItemToolbar);

        document.removeEventListener('keypress', nextItemUeberweisung);
        document.removeEventListener('keypress', selectItemUeberweisung);
    }

    else {
        twoButtonScanningToolbarExtended();

        document.removeEventListener('keypress', nextItemToolbar);
        document.removeEventListener('keypress', selectItemToolbar);

        k = 0;
        x = 0;
        z = -1;
    }
}
function nextItemToolbar(e){
    if (e.keyCode === 32) {
        toolbarTababble[k].className += " marked";
        setTimeout(function () {
            window.scrollBy(0, -1000);
        },100);
        if (z >= 0) {
            toolbarTababble[z].className = toolbarTababble[z].className.replace(/(?:^|\s)marked(?!\S)/g, '');
            toolbarTababble[6].className = thisTababble[6].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        }
        x++;
        k++;
        z++;
    }
    twoButtonScanningToolbar();
}
function selectItemToolbar(e) {
    if ((e.keyCode === 13) && (toolbarTababble[k - 1].classList.contains("marked"))) {
        toolbarTababble[k - 1].click();

    }
    if ((e.keyCode === 13) && (toolbarTababble[k - 1].classList.contains("marked")) && (toolbarTababble[5].classList.contains("marked"))) {

        twoButtonScanningToolbarScanning();

        k = 6;
        x = 6;
        z = 5;

        document.removeEventListener('keypress', nextItemToolbar);
        document.removeEventListener('keypress', selectItemToolbar);

    }
}
function twoButtonScanningToolbarExtended() {
    thisTababble[0].className += " marked";
    document.addEventListener("keypress", nextItemToolbarExtended);
    document.addEventListener("keypress", selectItemToolbarExtended);

}
function nextItemToolbarExtended(e){
    if (e.keyCode === 32) {
        twoButtonScanningToolbar();
        thisTababble[0].className = thisTababble[0].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        toolbarTababble[6].className = toolbarTababble[6].className.replace(/(?:^|\s)marked(?!\S)/g, '');
    }
}
function selectItemToolbarExtended(e) {
    if ((e.keyCode === 13) && (thisTababble[0].classList.contains("marked"))) {
        thisTababble[0].click();

        thisTababble[0].className = thisTababble[0].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        twoButtonScanningMain();
        headerRowLink[0].click();
        k = 0;
        x = 0;
        z = -1;
        document.removeEventListener('keypress', nextItemToolbarExtended);
        document.removeEventListener('keypress', selectItemToolbarExtended);
    }
}


function twoButtonScanningToolbarScanning() {
    if(x < /*toolbarTababble.length*/ 10){
        document.addEventListener("keypress", nextItemToolbarScanning);
        document.addEventListener("keypress", selectItemToolbarScanning);
    }

    else {
        twoButtonScanningToolbarScanningExtended();

        document.removeEventListener('keypress', nextItemToolbarScanning);
        document.removeEventListener('keypress', selectItemToolbarScanning);

        k = 6;
        x = 6;
        z = 5;
    }
}
function nextItemToolbarScanning(e){
    if (e.keyCode === 32) {
        toolbarTababble[k].className += " marked";
        setTimeout(function () {
            window.scrollBy(0, -1000);
        },100);
        if (z >= 0) {
            toolbarTababble[z].className = toolbarTababble[z].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        }
        x++;
        k++;
        z++;
        console.log(x);
    }
    twoButtonScanningToolbarScanning();
}
function selectItemToolbarScanning(e) {
    if ((e.keyCode === 13) && (toolbarTababble[k - 1].classList.contains("marked"))) {
        toolbarTababble[k - 1].click();
    }
}
function twoButtonScanningToolbarScanningExtended() {
    HeaderScanItems[3].nextElementSibling.className += " marked";
    document.addEventListener("keypress", nextItemToolbarScanningExtended);
    document.addEventListener("keypress", selectItemToolbarScanningExtended);
}
function nextItemToolbarScanningExtended(e){
    if (e.keyCode === 32) {
        twoButtonScanningToolbarScanning();
        HeaderScanItems[3].nextElementSibling.className = HeaderScanItems[3].nextElementSibling.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        //toolbarTababble[6].className = toolbarTababble[6].className.replace(/(?:^|\s)marked(?!\S)/g, '');
    }
}
function selectItemToolbarScanningExtended(e) {
    if ((e.keyCode === 13) && (HeaderScanItems[3].nextElementSibling.classList.contains("marked"))) {
        HeaderScanItems[3].click();

        HeaderScanItems[3].nextElementSibling.className = HeaderScanItems[3].nextElementSibling.className.replace(/(?:^|\s)marked(?!\S)/g, '');

        thisTababble[0].click();
        headerRowLink[0].click();
        footerStartStop.focus();
        k = 0;
        x = 0;
        z = -1;
        document.removeEventListener('keypress', nextItemToolbarScanningExtended);
        document.removeEventListener('keypress', selectItemToolbarScanningExtended);
    }
}



/**
 * Ueberweisung
 */
function twoButtonScanningUeberweisung() {
    if(x < 18){

        console.log(x);
        document.removeEventListener('keypress', nextItemKeyboard);
        document.removeEventListener('keypress', selectItemKeyboard);

        document.addEventListener("keypress", nextItemUeberweisung);
        document.addEventListener("keypress", selectItemUeberweisung);
    }
    else {
        thisTababble[16].className = thisTababble[16].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        k = 0;
        x = 0;
        z = -1;
    }
}
function nextItemUeberweisung(e){
    if (e.keyCode === 32) {
        thisTababble[k].className += " marked";
        if (z >= 0) {
            thisTababble[z].className = thisTababble[z].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        }
        x++;
        k++;
        z++;
    }
    twoButtonScanningUeberweisung();
}
function selectItemUeberweisung(e) {
    if ((e.keyCode === 13) && (thisTababble[k - 1].classList.contains("marked")) && (thisTababble[11].classList.contains("marked"))) {
        thisTababble[k - 1].click();

        k = 0;
        x = 0;
        z = -1;

        twoButtonScanningKeyboard();

        document.removeEventListener('keypress', nextItemUeberweisung);
        document.removeEventListener('keypress', selectItemUeberweisung);

    }
    if ((e.keyCode === 13) && (thisTababble[k - 1].classList.contains("marked")) && (thisTababble[12].classList.contains("marked"))) {
        thisTababble[k - 1].click();

        k = 0;
        x = 0;
        z = -1;

        twoButtonScanningKeyboard();

        document.removeEventListener('keypress', nextItemUeberweisung);
        document.removeEventListener('keypress', selectItemUeberweisung);

    }
    if ((e.keyCode === 13) && (thisTababble[k - 1].classList.contains("marked")) && (thisTababble[13].classList.contains("marked"))) {
        thisTababble[k - 1].click();

        k = 0;
        x = 0;
        z = -1;

        twoButtonScanningKeyboard();

        document.removeEventListener('keypress', nextItemUeberweisung);
        document.removeEventListener('keypress', selectItemUeberweisung);

    }
    if ((e.keyCode === 13) && (thisTababble[k - 1].classList.contains("marked")) && (thisTababble[14].classList.contains("marked"))) {
        thisTababble[k - 1].click();

        k = 0;
        x = 0;
        z = -1;

        twoButtonScanningKeyboard();

        document.removeEventListener('keypress', nextItemUeberweisung);
        document.removeEventListener('keypress', selectItemUeberweisung);

    }
    if ((e.keyCode === 13) && (thisTababble[k - 1].classList.contains("marked")) && (thisTababble[15].classList.contains("marked"))) {
        thisTababble[k - 1].click();

        k = 0;
        x = 0;
        z = -1;

        twoButtonScanningKeyboard();

        document.removeEventListener('keypress', nextItemUeberweisung);
        document.removeEventListener('keypress', selectItemUeberweisung);

    }
    if ((e.keyCode === 13) && (thisTababble[k - 1].classList.contains("marked")) && (thisTababble[16].classList.contains("marked"))) {
        thisTababble[k - 1].click();

        k = 0;
        x = 0;
        z = -1;

        setTimeout(submitFunction, 500);

        document.removeEventListener('keypress', nextItemUeberweisung);
        document.removeEventListener('keypress', selectItemUeberweisung);

    }
    if ((e.keyCode === 13) && (thisTababble[0].classList.contains("marked"))) {

        document.removeEventListener('keypress', nextItemUeberweisung);
        document.removeEventListener('keypress', selectItemUeberweisung);

        thisTababble[0].className = thisTababble[0].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        k = 0;
        x = 0;
        z = -1;

        twoButtonScanningToolbar();
    }
    if ((e.keyCode === 13) && (thisTababble[1].classList.contains("marked"))) {
        thisTababble[1].click();
        twoButtonScanningMain();
        document.removeEventListener('keypress', nextItemUeberweisung);
        document.removeEventListener('keypress', selectItemUeberweisung);
    }
    if ((e.keyCode === 13) && (thisTababble[2].classList.contains("marked"))) {
        thisTababble[2].click();
        twoButtonScanningMain();
        document.removeEventListener('keypress', nextItemUeberweisung);
        document.removeEventListener('keypress', selectItemUeberweisung);
    }
    if ((e.keyCode === 13) && (thisTababble[3].classList.contains("marked"))) {
        thisTababble[3].click();
        twoButtonScanningMain();
        document.removeEventListener('keypress', nextItemUeberweisung);
        document.removeEventListener('keypress', selectItemUeberweisung);
    }
    if ((e.keyCode === 13) && (thisTababble[5].classList.contains("marked"))) {
        thisTababble[5].click();
        twoButtonScanningMain();
        document.removeEventListener('keypress', nextItemUeberweisung);
        document.removeEventListener('keypress', selectItemUeberweisung);
    }
    if ((e.keyCode === 13) && (thisTababble[6].classList.contains("marked"))) {
        thisTababble[6].click();
        twoButtonScanningMain();
        document.removeEventListener('keypress', nextItemUeberweisung);
        document.removeEventListener('keypress', selectItemUeberweisung);
    }
    if ((e.keyCode === 13) && (thisTababble[7].classList.contains("marked"))) {
        thisTababble[7].click();
        twoButtonScanningMain();
        document.removeEventListener('keypress', nextItemUeberweisung);
        document.removeEventListener('keypress', selectItemUeberweisung);
    }
    if ((e.keyCode === 13) && (thisTababble[8].classList.contains("marked"))) {
        thisTababble[8].click();
        twoButtonScanningMain();
        document.removeEventListener('keypress', nextItemUeberweisung);
        document.removeEventListener('keypress', selectItemUeberweisung);
    }

}


function submitFunction() {
    absenden.focus();
}






function twoButtonScanningKeyboard() {
    checkKeyboards();
    nodePicker();

    onscreenKeyboard.style.display = "block";

    window.scrollBy(0, 1000);

    if(x < /*thisTababble.length*/ 35){
        document.addEventListener("keypress", nextItemKeyboard);
        document.addEventListener("keypress", selectItemKeyboard);
    }

    else {
        k = 0;
        x = 0;
        z = -1;
    }
}
function nextItemKeyboard(e){
    if (e.keyCode === 32) {
        nodes[k].className += " marked";
        if (z >= 0) {
            nodes[z].className = nodes[z].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        }
        if (nodes[0].classList.contains("marked")){
            nodes[34].className = nodes[34].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        }
        x++;
        k++;
        z++;
    }
    twoButtonScanningKeyboard();
}
function selectItemKeyboard(e) {
    if ((e.keyCode === 13) && (nodes[20].classList.contains("marked"))) {

        nodes[20].className = nodes[20].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        thisTababble[11].className = thisTababble[11].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        thisTababble[12].className = thisTababble[12].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        thisTababble[13].className = thisTababble[13].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        thisTababble[14].className = thisTababble[14].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        thisTababble[15].className = thisTababble[15].className.replace(/(?:^|\s)marked(?!\S)/g, '');

        onscreenKeyboard.style.display = "none";

        document.removeEventListener('keypress', nextItemKeyboard);
        document.removeEventListener('keypress', selectItemKeyboard);

        k = 10;
        x = 10;
        z = 9;

        twoButtonScanningUeberweisung();
    }

    else if ((e.keyCode === 13) && (nodes[k - 1].classList.contains("marked"))) {
        nodes[k - 1].click();

        nodes[k - 1].className = nodes[k - 1].className.replace(/(?:^|\s)marked(?!\S)/g, '');

        twoButtonScanningKeyboard();

        k = 0;
        x = 0;
        z = -1;
    }

}