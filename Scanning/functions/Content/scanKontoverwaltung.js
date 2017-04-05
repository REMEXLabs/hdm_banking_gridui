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


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////  SCAN CONTENT KONTOVERWALTUNG  /////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////  LAYER 2  ////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Loop, scans through all rows of Kontoverwaltung content
 */
function scanLayer2Kontoverwaltung() {

    if (cycleStart < cycles){
        Layer2KontoverwaltungRow1();

        cycleStart++;

        footerStartStop.disabled = true;
        footerZurueck.disabled = true;
    }
    else {

        //remove mark
        footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

        clearTimeout(timeout);

        cycleStart = 0;

        footerZurueck.disabled = true;

        footerStartStop.focus();
    }

}

/**
 * Row 1
 */
function Layer2KontoverwaltungRow1() {

    //remove mark
    footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    kontoverwaltungItems[0].className += " marked";

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (kontoverwaltungItems[0].classList.contains("marked"))) {

            clearTimeout(timeout);

            cycleStart = 0;

            //Remove Mark
            kontoverwaltungItems[0].className = kontoverwaltungItems[0].className.replace(/(?:^|\s)marked(?!\S)/g, '');

            scanLayer3KontoverwaltungRow1();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(Layer2KontoverwaltungRow2, speed);
}

/**
 * Row 2
 */
function Layer2KontoverwaltungRow2() {

    //remove mark
    kontoverwaltungItems[0].className = kontoverwaltungItems[0].className.replace(/(?:^|\s)marked(?!\S)/g, '');
    kontoverwaltungItems[3].className = kontoverwaltungItems[3].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    kontoverwaltungItems[1].parentNode.className += " marked";
    kontoverwaltungItems[2].parentNode.className += " marked";

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (kontoverwaltungItems[1].parentNode.classList.contains("marked"))) {

            clearTimeout(timeout);

            cycleStart = 0;

            //Remove Mark
            kontoverwaltungItems[1].parentNode.className = kontoverwaltungItems[1].parentNode.className.replace(/(?:^|\s)marked(?!\S)/g, '');
            kontoverwaltungItems[2].parentNode.className = kontoverwaltungItems[2].parentNode.className.replace(/(?:^|\s)marked(?!\S)/g, '');

            scanLayer3KontoverwaltungRow2();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(Layer2KontoverwaltungRow3, speed);
}

/**
 * Row 3
 */
function Layer2KontoverwaltungRow3() {

    //remove mark
    kontoverwaltungItems[1].parentNode.className = kontoverwaltungItems[1].parentNode.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    kontoverwaltungItems[2].parentNode.className = kontoverwaltungItems[2].parentNode.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    kontoverwaltungItems[3].className += " marked";

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (kontoverwaltungItems[3].classList.contains("marked"))) {

            clearTimeout(timeout);

            cycleStart = 0;

            //Remove Mark
            kontoverwaltungItems[3].className = kontoverwaltungItems[3].className.replace(/(?:^|\s)marked(?!\S)/g, '');

            kontoverwaltungItems[3].click();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(Layer2KontoverwaltungFooter, speed);
}

/**
 * Last item to be scanned inside this loop. The setTimeout function needs to call the loop again. Otherwise it jumps out of it
 */
function Layer2KontoverwaltungFooter() {

    //Remove Mark
    kontoverwaltungItems[3].className = kontoverwaltungItems[3].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark to element
    footerStartStop.className += " marked";
    footerZurueck.className += " marked";

    footerStartStop.disabled = false;
    footerZurueck.disabled = false;

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (footerStartStop.classList.contains("marked"))) {

            clearTimeout(timeout);

            cycleStart = 0;

            //Remove mark
            footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
            footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

            scanLayer2KontoverwaltungFooter();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanLayer2Kontoverwaltung, speed);
}

/**
 * Loop of the scanner bar, selects start/stop or back
 */
function scanLayer2KontoverwaltungFooter() {
    if (cycleStart < cycles){

        Layer2KontoverwaltungFooterA();

        cycleStart++;

    }
    else {

        footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

        clearTimeout(timeout);

        cycleStart = 0;

        footerStartStop.disabled = false;
        footerZurueck.disabled = true;

        footerStartStop.focus();
    }
}

/**
 * First item of the scanner bar, start/stop. Stops the whole scanning process when clicked
 */
function Layer2KontoverwaltungFooterA() {

    //Remove mark
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark
    footerStartStop.className += " marked";

    footerStartStop.disabled = false;
    footerZurueck.disabled = true;

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

    timeout = setTimeout(Layer2KontoverwaltungFooterB, speed);

}

/**
 * Last item of the scanner bar, back. Needs to call the scanner bar loop. Returns to the previous layer if clicked
 */
function Layer2KontoverwaltungFooterB() {

    //Remove mark
    footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark
    footerZurueck.className += " marked";

    footerStartStop.disabled = true;
    footerZurueck.disabled = false;

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (footerZurueck.classList.contains("marked"))) {

            clearTimeout(timeout);

            //Remove mark
            footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

            cycleStart = 0;

            footerZurueck.disabled = true;

            scanLayer1();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanLayer2KontoverwaltungFooter, speed);

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////  LAYER 3 ROW 1 /////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Loop, scans through all items of row 1
 */
function scanLayer3KontoverwaltungRow1() {

    if (cycleStart < cycles){
        Layer3KontoverwaltungRow1A();

        cycleStart++;

        footerStartStop.disabled = true;
        footerZurueck.disabled = true;
    }
    else {

        footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

        clearTimeout(timeout);

        cycleStart = 0;

        footerZurueck.disabled = true;

        footerStartStop.focus();
    }

}

/**
 * Row 1. Dropdown first option
 */
function Layer3KontoverwaltungRow1A() {

    var length = kontoverwaltungItems[0].options.length;

    //Remove mark
    footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //opens dropdown
    kontoverwaltungItems[0].size = length;

    kontoverwaltungItems[0].selectedIndex = 0;

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (kontoverwaltungItems[0].selectedIndex === 0) && (!footerStartStop.classList.contains("marked"))) {

            clearTimeout(timeout);

            cycleStart = 0;

            //closes dropdown
            kontoverwaltungItems[0].size = 0;

            scanLayer2Kontoverwaltung();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(Layer3KontoverwaltungRow1B, speed);
}

/**
 * Row 1. Dropdown second option
 */
function Layer3KontoverwaltungRow1B() {

    kontoverwaltungItems[0].selectedIndex = 1;

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (kontoverwaltungItems[0].selectedIndex === 1) && (!footerStartStop.classList.contains("marked"))) {

            clearTimeout(timeout);

            cycleStart = 0;

            //closes dropdown
            kontoverwaltungItems[0].size = 0;

            scanLayer2Kontoverwaltung();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(Layer3KontoverwaltungRow1Footer, speed);
}

/**
 * Last item to be scanned inside this loop. The setTimeout function needs to call the loop again. Otherwise it jumps out of it
 */
function Layer3KontoverwaltungRow1Footer() {

    kontoverwaltungItems[0].selectedIndex = 0;

    //closes dropdown
    kontoverwaltungItems[0].size = 0;

    //Add mark to element
    footerStartStop.className += " marked";
    footerZurueck.className += " marked";

    footerStartStop.disabled = false;
    footerZurueck.disabled = false;

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (footerStartStop.classList.contains("marked"))) {

            clearTimeout(timeout);

            cycleStart = 0;

            //Remove mark
            footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
            footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

            scanLayer3KontoverwaltungRow1Footer();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanLayer3KontoverwaltungRow1, speed);
}

/**
 * Loop of the scanner bar, selects start/stop or back
 */
function scanLayer3KontoverwaltungRow1Footer() {
    if (cycleStart < cycles){

        Layer3KontoverwaltungRow1FooterA();

        cycleStart++;

    }
    else {

        footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

        clearTimeout(timeout);

        cycleStart = 0;

        footerStartStop.disabled = false;
        footerZurueck.disabled = true;

        footerStartStop.focus();
    }
}

/**
 * First item of the scanner bar, start/stop. Stops the whole scanning process when clicked
 */
function Layer3KontoverwaltungRow1FooterA() {

    //Remove mark
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark
    footerStartStop.className += " marked";

    footerStartStop.disabled = false;
    footerZurueck.disabled = true;

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

    timeout = setTimeout(Layer3KontoverwaltungRow1FooterB, speed);

}

/**
 * Last item of the scanner bar, back. Needs to call the scanner bar loop. Returns to the previous layer if clicked
 */
function Layer3KontoverwaltungRow1FooterB() {

    //Remove mark
    footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark
    footerZurueck.className += " marked";

    footerStartStop.disabled = true;
    footerZurueck.disabled = false;

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (footerZurueck.classList.contains("marked"))) {

            clearTimeout(timeout);

            //Remove mark
            footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

            cycleStart = 0;

            footerZurueck.disabled = true;

            scanLayer2Kontoverwaltung();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanLayer3KontoverwaltungRow1Footer, speed);

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////  LAYER 3 ROW 2 /////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Loop, scans through all items of row 2
 */
function scanLayer3KontoverwaltungRow2() {

    if (cycleStart < cycles){
        Layer3KontoverwaltungRow2A();

        cycleStart++;

        footerStartStop.disabled = true;
        footerZurueck.disabled = true;
    }
    else {

        footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

        clearTimeout(timeout);

        cycleStart = 0;

        footerZurueck.disabled = true;

        footerStartStop.focus();
    }

}

/**
 * Row 2. Radio 1
 */
function Layer3KontoverwaltungRow2A() {

    //Remove mark
    footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    kontoverwaltungItems[1].parentNode.className += " marked";

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (kontoverwaltungItems[1].parentNode.classList.contains("marked"))) {

            clearTimeout(timeout);

            cycleStart = 0;

            kontoverwaltungItems[1].click();

            //Remove mark
            kontoverwaltungItems[1].parentNode.className = kontoverwaltungItems[1].parentNode.className.replace(/(?:^|\s)marked(?!\S)/g, '');

            scanLayer2Kontoverwaltung();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(Layer3KontoverwaltungRow2B, speed);
}

/**
 * Row 2. Radio 2
 */
function Layer3KontoverwaltungRow2B() {

    //Remove mark
    kontoverwaltungItems[1].parentNode.className = kontoverwaltungItems[1].parentNode.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add
    kontoverwaltungItems[2].parentNode.className += " marked";

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (kontoverwaltungItems[2].parentNode.classList.contains("marked"))) {

            clearTimeout(timeout);

            cycleStart = 0;

            kontoverwaltungItems[2].click();

            //Remove mark
            kontoverwaltungItems[2].parentNode.className = kontoverwaltungItems[2].parentNode.className.replace(/(?:^|\s)marked(?!\S)/g, '');

            scanLayer2Kontoverwaltung();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(Layer3KontoverwaltungRow2Footer, speed);
}

/**
 * Last item to be scanned inside this loop. The setTimeout function needs to call the loop again. Otherwise it jumps out of it
 */
function Layer3KontoverwaltungRow2Footer() {

    //Remove mark
    kontoverwaltungItems[2].parentNode.className = kontoverwaltungItems[2].parentNode.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark to element
    footerStartStop.className += " marked";
    footerZurueck.className += " marked";

    footerStartStop.disabled = false;
    footerZurueck.disabled = false;

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (footerStartStop.classList.contains("marked"))) {

            clearTimeout(timeout);

            cycleStart = 0;

            //Remove mark
            footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
            footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

            scanLayer3KontoverwaltungRow2Footer();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanLayer3KontoverwaltungRow2, speed);
}

/**
 * Loop of the scanner bar, selects start/stop or back
 */
function scanLayer3KontoverwaltungRow2Footer() {
    if (cycleStart < cycles){

        Layer3KontoverwaltungRow2FooterA();

        cycleStart++;

    }
    else {

        footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

        clearTimeout(timeout);

        cycleStart = 0;

        footerStartStop.disabled = false;
        footerZurueck.disabled = true;

        footerStartStop.focus();
    }
}

/**
 * First item of the scanner bar, start/stop. Stops the whole scanning process when clicked
 */
function Layer3KontoverwaltungRow2FooterA() {

    //Remove mark
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark
    footerStartStop.className += " marked";

    footerStartStop.disabled = false;
    footerZurueck.disabled = true;

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

    timeout = setTimeout(Layer3KontoverwaltungRow2FooterB, speed);

}

/**
 * Last item of the scanner bar, back. Needs to call the scanner bar loop. Returns to the previous layer if clicked
 */
function Layer3KontoverwaltungRow2FooterB() {

    //Remove mark
    footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark
    footerZurueck.className += " marked";

    footerStartStop.disabled = true;
    footerZurueck.disabled = false;

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (footerZurueck.classList.contains("marked"))) {

            clearTimeout(timeout);

            //Remove mark
            footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

            cycleStart = 0;

            footerZurueck.disabled = true;

            scanLayer2Kontoverwaltung();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanLayer3KontoverwaltungRow2Footer, speed);

}