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



var timeout;

var i;

var footerStartStop = document.getElementById("startStopButton"),
    footerZurueck = document.getElementById("zurueckButton");


/**
 * Functions starting with scan... are loops. Once they reach the limit, they cancel the scanning
 */
function scanLayer1() {

    if (cycleStart < cycles){

        Layer1Header();

        //Count up cycle
        cycleStart++;

    }
    else {

        footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');

        clearTimeout(timeout);

        //removes scanning color inside document
        styleTag[0].parentNode.removeChild(styleTag[0]);

        if (checkHeader === true){
            //removes scanning color of external toolbar
            document.getElementById("myPanelFrame").contentWindow.document.getElementsByTagName("style")[0]
                .parentNode.removeChild(document.getElementById("myPanelFrame").contentWindow.document.getElementsByTagName("style")[0]);

        }

        cycleStart = 0;

        footerStartStop.focus();
    }

}

/**
 * First item to be scanned inside this loop
 */
function Layer1Header() {
    if (checkHeader === true) {

        //access the toolbar
        headerPanel = document.getElementsByClassName("slidingpanel_wrapper");
        headerPanelTab = headerPanel[0].firstChild.nextSibling;

        //get all categories of the toolbar
        headerRow = document.getElementById("myPanelFrame").contentWindow.document.getElementById("category-tabs");
        headerRowLink = headerRow.getElementsByTagName("a");

        //access the created style for the scanning color
        styleTag = document.getElementsByTagName("style");

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

        footerStartStop.disabled = true;

        //Removes mark of previous element
        footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

        //Add mark to element
        headerPanelTab.className += " marked";

        window.scrollBy(0, -1000);

        /**
         * Add Eventlistener. Jumps to Layer 2 of the Header if clicked
         */
        document.addEventListener("keypress", function (e) {
            if ((e.keyCode === 13) && (headerPanelTab.classList.contains("marked"))) {

                clearTimeout(timeout);

                cycleStart = 0;

                headerRowLink[0].click();

                headerPanelTab.click();

                headerPanelTab.className = headerPanelTab.className.replace(/(?:^|\s)marked(?!\S)/g, '');

                setTimeout(scanLayer2HeaderPanel, 500);

                this.removeEventListener('keypress', arguments.callee);
            }
            else {
                this.removeEventListener('keypress', arguments.callee);
            }

        });

        timeout = setTimeout(Layer1Nav, speed);
    }
    else {
        Layer1Nav();
    }

}

/**
 * Second item to be scanned inside this loop
 */
function Layer1Nav() {
    if (checkNavigation === true){

        // selects whole navigation
        nav = document.getElementById("NavigationMenu");
        // selects all items of the navigation
        navTag = nav.getElementsByTagName("a");

        if (checkHeader === true){
            //Removes mark of previous element
            headerPanelTab.className = headerPanelTab.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        }

        footerStartStop.disabled = true;

        //Removes mark of previous element
        footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

        //Add mark to element
        for (i = 0; i < navTag.length; i++) {
            navTag[i].className += " marked";
        }

        /**
         * Add Eventlistener. Jumps to Layer 2 of the Navigation if clicked
         */
        document.addEventListener("keypress", function(e) {
            if ((e.keyCode === 13) && (navTag[0].classList.contains("marked"))) {

                clearTimeout(timeout);

                cycleStart = 0;

                scanLayer2Navigation();

                this.removeEventListener('keypress', arguments.callee);
            }
            else {
                this.removeEventListener('keypress', arguments.callee);
            }
        });


        timeout = setTimeout(Layer1Content, speed);

    }
}

/**
 * Third item to be scanned inside this loop
 */
function Layer1Content() {

    //declare scannable elements in the content section
    konto = document.getElementById("exampleInputKonto");
    empfaenger = document.getElementById("exampleInputEmpfaenger");
    iban = document.getElementById("exampleInputIban");
    betrag = document.getElementById("exampleInputBetrag");
    verwendung = document.getElementById("exampleInputVerwendung");
    ausfuehrung = document.getElementById("exampleInputAusfuehrung");
    uebernehmen = document.getElementById("ueberweisungButton");

    kontoverwaltungKonto = document.getElementById("kontoverwaltungKonto");
    kontoverwaltungRadio1 = document.getElementById("inlineRadio1");
    kontoverwaltungRadio2 = document.getElementById("inlineRadio2");
    kontoverwaltungButton = document.getElementById("kontoverwaltungButton");

    //put scannable elements in Array
    uebwerweisungItems = [
        konto,                          // 0
        empfaenger,                     // 1
        iban,                           // 2
        betrag,                         // 3
        verwendung,                     // 4
        ausfuehrung,                    // 5
        uebernehmen                     // 6
    ];
    kontoverwaltungItems = [
        kontoverwaltungKonto,           // 0
        kontoverwaltungRadio1,          // 1
        kontoverwaltungRadio2,          // 2
        kontoverwaltungButton           // 3
    ];

    if (checkScanContent === "ueberweisung"){

        //Removes mark of previous element
        for (i = 0; i < navTag.length; i++) {
            navTag[i].className = navTag[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        }

        //Add mark
        for (i = 0; i < uebwerweisungItems.length; i++) {
            uebwerweisungItems[i].className += " marked";
        }

        window.scrollBy(0, 1000);

        /**
         * Add Eventlistener. Jumps to Layer 2 of the Ueberweisung Content if clicked
         */
        document.addEventListener("keypress", function(e) {
            if ((e.keyCode === 13) && (uebwerweisungItems[0].classList.contains("marked"))) {

                clearTimeout(timeout);

                cycleStart = 0;

                //remove mark
                for (i = 0; i < uebwerweisungItems.length; i++) {
                    uebwerweisungItems[i].className = uebwerweisungItems[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
                }

                scanLayer2Ueberweisung();

                this.removeEventListener('keypress', arguments.callee);
            }
            else {
                this.removeEventListener('keypress', arguments.callee);
            }
        });

        timeout = setTimeout(Layer1Footer, speed);

    }
    else if (checkScanContent === "terminueberweisung"){

        //Removes mark of previous element
        for (i = 0; i < navTag.length; i++) {
            navTag[i].className = navTag[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        }

        Layer1Footer();

    }
    else if (checkScanContent === "dauerauftrag"){

        //Removes mark of previous element
        for (i = 0; i < navTag.length; i++) {
            navTag[i].className = navTag[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        }

        Layer1Footer();

    }
    else if (checkScanContent === "kontoverwaltung"){

        //Removes mark of previous element
        for (i = 0; i < navTag.length; i++) {
            navTag[i].className = navTag[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        }

        //add mark
        kontoverwaltungItems[0].className += " marked";
        kontoverwaltungItems[1].parentNode.className += " marked";
        kontoverwaltungItems[2].parentNode.className += " marked";
        kontoverwaltungItems[3].className += " marked";

        /**
         * Add Eventlistener. Jumps to Layer 2 of the Kontoverwaltung Content if clicked
         */
        document.addEventListener("keypress", function(e) {
            if ((e.keyCode === 13) && (kontoverwaltungItems[0].classList.contains("marked"))) {

                clearTimeout(timeout);

                cycleStart = 0;

                //remove mark
                kontoverwaltungItems[0].className = kontoverwaltungItems[0].className.replace(/(?:^|\s)marked(?!\S)/g, '');
                kontoverwaltungItems[1].parentNode.className = kontoverwaltungItems[1].parentNode.className.replace(/(?:^|\s)marked(?!\S)/g, '');
                kontoverwaltungItems[2].parentNode.className = kontoverwaltungItems[2].parentNode.className.replace(/(?:^|\s)marked(?!\S)/g, '');
                kontoverwaltungItems[3].className = kontoverwaltungItems[3].className.replace(/(?:^|\s)marked(?!\S)/g, '');

                scanLayer2Kontoverwaltung();

                this.removeEventListener('keypress', arguments.callee);
            }
            else {
                this.removeEventListener('keypress', arguments.callee);
            }
        });

        timeout = setTimeout(Layer1Footer, speed);

    }
    else {

        //Removes mark of previous element
        for (i = 0; i < navTag.length; i++) {
            navTag[i].className = navTag[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        }

        Layer1Footer();
    }
}

/**
 * Last item to be scanned inside this loop. The setTimeout function needs to call the loop again. Otherwise it jumps out of it
 */
function Layer1Footer() {
    if (checkFooter === true){

        footerStartStop.disabled = false;

        //Removes mark of previous element
        for (i = 0; i < uebwerweisungItems.length; i++) {
            uebwerweisungItems[i].className = uebwerweisungItems[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        }

        for (i = 0; i < kontoverwaltungItems.length; i++) {
            kontoverwaltungItems[i].className = kontoverwaltungItems[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        }
        kontoverwaltungItems[1].parentNode.className = kontoverwaltungItems[1].parentNode.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        kontoverwaltungItems[2].parentNode.className = kontoverwaltungItems[2].parentNode.className.replace(/(?:^|\s)marked(?!\S)/g, '');

        //Add mark to element
        footerStartStop.className += " marked";

        /**
         * Add Eventlistener. Since this is the highest layer of scanning, the back button is disabled.
         */
        document.addEventListener("keypress", function(e) {
            if ((e.keyCode === 13) && (footerStartStop.classList.contains("marked"))) {

                clearTimeout(timeout);

                footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');

                footerStartStop.focus();

                cycleStart = 0;

                this.removeEventListener('keypress', arguments.callee);
            }
            else {
                this.removeEventListener('keypress', arguments.callee);
            }
        });

        timeout = setTimeout(scanLayer1, speed);
    }
    else {
        scanLayer1();
    }
}