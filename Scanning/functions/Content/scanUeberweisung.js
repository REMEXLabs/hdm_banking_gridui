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
/////////////////////////////////////////////  SCAN CONTENT UEBERWEISUNG  /////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////  LAYER 2  ////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var  i;
/**
 * Loop, scans through all rows of Ueberweisung content
 */
function scanLayer2Ueberweisung() {

    if (cycleStart < cycles){
        Layer2UeberweisungRow1();

        cycleStart++;

        //remove mark
        for (i = 1; i < uebwerweisungItems.length; i++) {
            uebwerweisungItems[i].className = uebwerweisungItems[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        }

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
function Layer2UeberweisungRow1() {

    //remove mark
    footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    uebwerweisungItems[0].className += " marked";

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (uebwerweisungItems[0].classList.contains("marked"))) {

            clearTimeout(timeout);

            cycleStart = 0;

            //Remove Mark
            uebwerweisungItems[0].className = uebwerweisungItems[0].className.replace(/(?:^|\s)marked(?!\S)/g, '');

            scanLayer3UeberweisungRow1();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(Layer2UeberweisungRow2, speed);
}

/**
 * Row 2
 */
function Layer2UeberweisungRow2() {

    uebwerweisungItems[0].blur();

    //remove
    uebwerweisungItems[0].className = uebwerweisungItems[0].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark

    uebwerweisungItems[1].className += " marked";
    uebwerweisungItems[2].className += " marked";
    uebwerweisungItems[3].className += " marked";

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (uebwerweisungItems[1].classList.contains("marked"))) {

            clearTimeout(timeout);

            cycleStart = 0;

            //Remove Mark
            uebwerweisungItems[1].className = uebwerweisungItems[1].className.replace(/(?:^|\s)marked(?!\S)/g, '');
            uebwerweisungItems[2].className = uebwerweisungItems[2].className.replace(/(?:^|\s)marked(?!\S)/g, '');
            uebwerweisungItems[3].className = uebwerweisungItems[3].className.replace(/(?:^|\s)marked(?!\S)/g, '');

            scanLayer3UeberweisungRow2();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(Layer2UeberweisungRow3, speed);
}

/**
 * Row 3
 */
function Layer2UeberweisungRow3() {

    //Remove mark
    uebwerweisungItems[1].className = uebwerweisungItems[1].className.replace(/(?:^|\s)marked(?!\S)/g, '');
    uebwerweisungItems[2].className = uebwerweisungItems[2].className.replace(/(?:^|\s)marked(?!\S)/g, '');
    uebwerweisungItems[3].className = uebwerweisungItems[3].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark
    uebwerweisungItems[4].className += " marked";
    uebwerweisungItems[5].className += " marked";
    uebwerweisungItems[6].className += " marked";

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (verwendung.classList.contains("marked"))) {

            clearTimeout(timeout);

            cycleStart = 0;

            //Remove Mark
            uebwerweisungItems[4].className = uebwerweisungItems[4].className.replace(/(?:^|\s)marked(?!\S)/g, '');
            uebwerweisungItems[5].className = uebwerweisungItems[5].className.replace(/(?:^|\s)marked(?!\S)/g, '');
            uebwerweisungItems[6].className = uebwerweisungItems[6].className.replace(/(?:^|\s)marked(?!\S)/g, '');

            scanLayer3UeberweisungRow3();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(Layer2UeberweisungFooter, speed);
}

/**
 * Last item to be scanned inside this loop. The setTimeout function needs to call the loop again. Otherwise it jumps out of it
 */
function Layer2UeberweisungFooter() {

    //Remove Mark
    uebwerweisungItems[4].className = uebwerweisungItems[4].className.replace(/(?:^|\s)marked(?!\S)/g, '');
    uebwerweisungItems[5].className = uebwerweisungItems[5].className.replace(/(?:^|\s)marked(?!\S)/g, '');
    uebwerweisungItems[6].className = uebwerweisungItems[6].className.replace(/(?:^|\s)marked(?!\S)/g, '');


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

            scanLayer2UeberweisungFooter();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanLayer2Ueberweisung, speed);
}

/**
 * Loop of the scanner bar, selects start/stop or back
 */
function scanLayer2UeberweisungFooter() {
    if (cycleStart < cycles){

        Layer2UeberweisungFooterA();

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
function Layer2UeberweisungFooterA() {

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

    timeout = setTimeout(Layer2UeberweisungFooterB, speed);

}

/**
 * Last item of the scanner bar, back. Needs to call the scanner bar loop. Returns to the previous layer if clicked
 */
function Layer2UeberweisungFooterB() {

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

    timeout = setTimeout(scanLayer2UeberweisungFooter, speed);

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////  LAYER 3 ROW 1  /////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Loop, scans through all items of row 1
 */
function scanLayer3UeberweisungRow1() {

    if (cycleStart < cycles){
        Layer3UeberweisungRow1A();

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
function Layer3UeberweisungRow1A() {

    var length = uebwerweisungItems[0].options.length;

    //Remove mark
    footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //opens dropdown
    uebwerweisungItems[0].size = length;

    uebwerweisungItems[0].selectedIndex = 0;

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (uebwerweisungItems[0].selectedIndex === 0) && (!footerStartStop.classList.contains("marked"))) {

            clearTimeout(timeout);

            cycleStart = 0;

            //closes dropdown
            uebwerweisungItems[0].size = 0;

            scanLayer2Ueberweisung();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(Layer3UeberweisungRow1B, speed);
}

/**
 * Row 1. Dropdown second option
 */
function Layer3UeberweisungRow1B() {

    uebwerweisungItems[0].selectedIndex = 1;

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (uebwerweisungItems[0].selectedIndex === 1) && (!footerStartStop.classList.contains("marked"))) {

            clearTimeout(timeout);

            cycleStart = 0;

            //closes dropdown
            uebwerweisungItems[0].size = 0;

            scanLayer2Ueberweisung();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(Layer3UeberweisungRow1Footer, speed);
}

/**
 * Last item to be scanned inside this loop. The setTimeout function needs to call the loop again. Otherwise it jumps out of it
 */
function Layer3UeberweisungRow1Footer() {

    uebwerweisungItems[0].selectedIndex = 0;

    //closes dropdown
    uebwerweisungItems[0].size = 0;

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

            scanLayer3UeberweisungRow1Footer();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanLayer3UeberweisungRow1, speed);
}

/**
 * Loop of the scanner bar, selects start/stop or back
 */
function scanLayer3UeberweisungRow1Footer() {
    if (cycleStart < cycles){

        Layer3UeberweisungRow1FooterA();

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
function Layer3UeberweisungRow1FooterA() {

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

    timeout = setTimeout(Layer3UeberweisungRow1FooterB, speed);

}

/**
 * Last item of the scanner bar, back. Needs to call the scanner bar loop. Returns to the previous layer if clicked
 */
function Layer3UeberweisungRow1FooterB() {

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

            scanLayer2Ueberweisung();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanLayer3UeberweisungRow1Footer, speed);

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////  LAYER 3 ROW 2  /////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Loop, scans through all items of row 2
 */
function scanLayer3UeberweisungRow2() {

    if (cycleStart < cycles){
        Layer3UeberweisungRow2A();

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
 * Row 2. First Input
 */
function Layer3UeberweisungRow2A() {

    //Remove mark
    footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark
    uebwerweisungItems[1].className += " marked";

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (uebwerweisungItems[1].classList.contains("marked"))) {

            clearTimeout(timeout);

            cycleStart = 0;

            // Click on input field is necessary for the onscreenkeyboard to write on it
            uebwerweisungItems[1].click();

            // starts the scanning of the onscreenkeyboard
            initKeyboard();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(Layer3UeberweisungRow2B, speed);
}

/**
 * Row 2. Second Input
 */
function Layer3UeberweisungRow2B() {

    //Remove mark
    uebwerweisungItems[1].className = uebwerweisungItems[1].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark
    uebwerweisungItems[2].className += " marked";

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (uebwerweisungItems[2].classList.contains("marked"))) {

            clearTimeout(timeout);

            cycleStart = 0;

            // Click on input field is necessary for the onscreenkeyboard to write on it
            uebwerweisungItems[2].click();

            // starts the scanning of the onscreenkeyboard
            initKeyboard();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(Layer3UeberweisungRow2C, speed);
}

/**
 * Row 2. Third Input
 */
function Layer3UeberweisungRow2C() {

    //Remove mark
    uebwerweisungItems[2].className = uebwerweisungItems[2].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark
    uebwerweisungItems[3].className += " marked";

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (uebwerweisungItems[3].classList.contains("marked"))) {

            clearTimeout(timeout);

            cycleStart = 0;

            // Click on input field is necessary for the onscreenkeyboard to write on it
            uebwerweisungItems[3].click();

            // starts the scanning of the onscreenkeyboard
            initKeyboard();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(Layer3UeberweisungRow2Footer, speed);
}

/**
 * Last item to be scanned inside this loop. The setTimeout function needs to call the loop again. Otherwise it jumps out of it
 */
function Layer3UeberweisungRow2Footer() {

    //Remove Mark
    uebwerweisungItems[3].className = uebwerweisungItems[3].className.replace(/(?:^|\s)marked(?!\S)/g, '');

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

            scanLayer3UeberweisungRow2Footer();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanLayer3UeberweisungRow2, speed);
}

/**
 * Loop of the scanner bar, selects start/stop or back
 */
function scanLayer3UeberweisungRow2Footer() {
    if (cycleStart < cycles){

        Layer3UeberweisungRow2FooterA();

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
function Layer3UeberweisungRow2FooterA() {

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

    timeout = setTimeout(Layer3UeberweisungRow2FooterB, speed);

}

/**
 * Last item of the scanner bar, back. Needs to call the scanner bar loop. Returns to the previous layer if clicked
 */
function Layer3UeberweisungRow2FooterB() {

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

            scanLayer2Ueberweisung();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanLayer3UeberweisungRow2Footer, speed);

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////  LAYER 3 ROW 3  /////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Loop, scans through all items of row 3
 */
function scanLayer3UeberweisungRow3() {

    if (cycleStart < cycles){

        document.removeEventListener("keypress", clickUebernehmen);

        Layer3UeberweisungRow3A();

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
 * Row 3. First Input
 */
function Layer3UeberweisungRow3A() {

    //Remove mark
    footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark
    uebwerweisungItems[4].className += " marked";

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (uebwerweisungItems[4].classList.contains("marked"))) {

            clearTimeout(timeout);

            cycleStart = 0;

            uebwerweisungItems[4].click();

            initKeyboard();

            this.removeEventListener("keypress", arguments.callee);
        }
        else {
            this.removeEventListener("keypress", arguments.callee);
        }
    });

    timeout = setTimeout(Layer3UeberweisungRow3B, speed);
}

/**
 * Row 3. Second Input
 */
function Layer3UeberweisungRow3B() {

    //Remove mark
    uebwerweisungItems[4].className = uebwerweisungItems[4].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark
    uebwerweisungItems[5].className += " marked";

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (uebwerweisungItems[5].classList.contains("marked"))) {

            clearTimeout(timeout);

            cycleStart = 0;

            uebwerweisungItems[5].click();

            initKeyboard();

            this.removeEventListener("keypress", arguments.callee);
        }
        else {
            this.removeEventListener("keypress", arguments.callee);
        }
    });

    timeout = setTimeout(Layer3UeberweisungRow3C, speed);
}

/**
 * Row 3. Third Input
 */
function Layer3UeberweisungRow3C() {

    //Remove mark
    uebwerweisungItems[5].className = uebwerweisungItems[5].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark
    uebwerweisungItems[6].className += " marked";

    document.addEventListener("keypress", clickUebernehmen);

    timeout = setTimeout(Layer3UeberweisungRow3Footer, speed);
}
function clickUebernehmen(e) {

    if ((e.keyCode === 13) && (uebwerweisungItems[6].classList.contains("marked"))) {

        clearTimeout(timeout);

        cycleStart = 0;

        setTimeout(scanLayer4UeberweisungSubmit, 500);

        uebwerweisungItems[6].click();

        this.removeEventListener("keypress", arguments.callee);
    }
    else {
        this.removeEventListener("keypress", arguments.callee);
    }
}

/**
 * Last item to be scanned inside this loop. The setTimeout function needs to call the loop again. Otherwise it jumps out of it
 */
function Layer3UeberweisungRow3Footer() {

    //Remove Mark
    uebwerweisungItems[6].className = uebwerweisungItems[6].className.replace(/(?:^|\s)marked(?!\S)/g, '');

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

            scanLayer3UeberweisungRow3Footer();

            this.removeEventListener("keypress", arguments.callee);
        }
        else {
            this.removeEventListener("keypress", arguments.callee);
        }
    });

    timeout = setTimeout(scanLayer3UeberweisungRow3, speed);
}

/**
 * Loop of the scanner bar, selects start/stop or back
 */
function scanLayer3UeberweisungRow3Footer() {
    if (cycleStart < cycles){

        Layer3UeberweisungRow3FooterA();

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
function Layer3UeberweisungRow3FooterA() {

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

            this.removeEventListener("keypress", arguments.callee);
        }
        else {
            this.removeEventListener("keypress", arguments.callee);
        }
    });

    timeout = setTimeout(Layer3UeberweisungRow3FooterB, speed);

}

/**
 * Last item of the scanner bar, back. Needs to call the scanner bar loop. Returns to the previous layer if clicked
 */
function Layer3UeberweisungRow3FooterB() {

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

            scanLayer2Ueberweisung();

            this.removeEventListener("keypress", arguments.callee);
        }
        else {
            this.removeEventListener("keypress", arguments.callee);
        }
    });

    timeout = setTimeout(scanLayer3UeberweisungRow3Footer, speed);

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////  LAYER 4 SUBMIT  ////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var tan = document.getElementById("tan");
var footer = document.getElementById("scanFooter");
var absendenZurueck = document.getElementById("absendenZurueck");
var absenden = document.getElementById("absenden");
var onscreenKeyboard = document.getElementById("virtualKeyboard");
var timeout;
var nodes;

/**
 * Loop, scans through all items inside the submit element
 */
function scanLayer4UeberweisungSubmit() {

    if (cycleStart < cycles){
        Layer4UeberweisungSubmitRow1();

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

        absendenZurueck.click();

        setTimeout(function () {
            footerStartStop.focus();
            footer.className = footer.className.replace(/(?:^|\s)visible-footer(?!\S)/g, '');
        }, 400);
    }

}

/**
 * Row 1
 */
function Layer4UeberweisungSubmitRow1() {

    //Remove Mark
    uebwerweisungItems[6].className = uebwerweisungItems[6].className.replace(/(?:^|\s)marked(?!\S)/g, '');
    footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark
    tan.className += " marked";

    footer.className += " visible-footer";

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (tan.classList.contains("marked"))) {

            clearTimeout(timeout);

            cycleStart = 0;

            tan.click();

            Layer3UeberweisungRow3SubmitTan();

            this.removeEventListener("keypress", arguments.callee);
        }
        else {
            this.removeEventListener("keypress", arguments.callee);
        }
    });

    timeout = setTimeout(Layer4UeberweisungSubmitRow2, speed);
}

/**
 * Row 2
 */
function Layer4UeberweisungSubmitRow2() {

    //Remove Mark
    tan.className = tan.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark
    absendenZurueck.className += " marked";
    absenden.className += " marked";

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (absendenZurueck.classList.contains("marked"))) {

            clearTimeout(timeout);

            cycleStart = 0;

            scanLayer5UeberweisungSubmitButton();

            this.removeEventListener("keypress", arguments.callee);
        }
        else {
            this.removeEventListener("keypress", arguments.callee);
        }
    });

    timeout = setTimeout(Layer4UeberweisungSubmitFooter, speed);
}

/**
 * Last item to be scanned inside this loop. The setTimeout function needs to call the loop again. Otherwise it jumps out of it
 */
function Layer4UeberweisungSubmitFooter() {

    //Remove Mark
    absenden.className = absenden.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    absendenZurueck.className = absendenZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

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

            scanLayer4UeberweisungSubmitFooter();

            this.removeEventListener("keypress", arguments.callee);
        }
        else {
            this.removeEventListener("keypress", arguments.callee);
        }
    });

    timeout = setTimeout(scanLayer4UeberweisungSubmit, speed);
}

/**
 * Loop of the scanner bar, selects start/stop or back
 */
function scanLayer4UeberweisungSubmitFooter() {
    if (cycleStart < cycles){

        Layer4UeberweisungSubmitFooterA();

        cycleStart++;

    }
    else {

        footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

        clearTimeout(timeout);

        cycleStart = 0;

        footerStartStop.disabled = false;
        footerZurueck.disabled = true;

        absendenZurueck.click();

        setTimeout(function () {
            footerStartStop.focus();
            footer.className = footer.className.replace(/(?:^|\s)visible-footer(?!\S)/g, '');
        }, 400);
    }
}

/**
 * First item of the scanner bar, start/stop. Stops the whole scanning process when clicked
 */
function Layer4UeberweisungSubmitFooterA() {

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

            cycleStart = 0;

            absendenZurueck.click();

            setTimeout(function () {
                footerStartStop.focus();
                footer.className = footer.className.replace(/(?:^|\s)visible-footer(?!\S)/g, '');
            }, 400);

            this.removeEventListener("keypress", arguments.callee);
        }
        else {
            this.removeEventListener("keypress", arguments.callee);
        }
    });

    timeout = setTimeout(Layer4UeberweisungSubmitFooterB, speed);

}

/**
 * Last item of the scanner bar, back. Needs to call the scanner bar loop. Returns to the previous layer if clicked
 */
function Layer4UeberweisungSubmitFooterB() {

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

            absendenZurueck.click();

            setTimeout(function () {
                uebwerweisungItems[6].blur();
                footer.className = footer.className.replace(/(?:^|\s)visible-footer(?!\S)/g, '');
            }, 400);

            footerZurueck.disabled = true;

            scanLayer3UeberweisungRow3();

            this.removeEventListener("keypress", arguments.callee);
        }
        else {
            this.removeEventListener("keypress", arguments.callee);
        }
    });

    timeout = setTimeout(scanLayer4UeberweisungSubmitFooter, speed);

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////  LAYER 5 SUBMIT KEYBOARD  ///////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Layer3UeberweisungRow3SubmitTan() {
    onscreenKeyboard.className += " tan-numbers";

    onscreenKeyboard.style.display = "block";

    checkKeyboards();
    nodePicker();

    if (checkKeyboard !== "number"){

        //activate number keyboard
        nodes[32].click();

        checkKeyboards();
        nodePicker();

        for (i=11; i<20; i++){
            nodes[i].parentNode.style.display = "none";
        }
        for (i=21; i<35; i++){
            nodes[i].parentNode.style.display = "none";
        }

        tan.click();

        scanLayer6UeberweisungSubmitKeyboard();

    }

    else {

        checkKeyboards();
        nodePicker();

        for (i=11; i<20; i++){
            nodes[i].parentNode.style.display = "none";
        }
        for (i=21; i<35; i++){
            nodes[i].parentNode.style.display = "none";
        }

        scanLayer6UeberweisungSubmitKeyboard();
    }

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////  LAYER 5 SUBMIT BUTTONS  ////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Loop, scans through the buttons of the submit element
 */
function scanLayer5UeberweisungSubmitButton() {

    if (cycleStart < cycles){

        document.removeEventListener("keypress", clickZurueck);

        Layer5UeberweisungSubmitButtonA();

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

        absendenZurueck.click();

        setTimeout(function () {
            footerStartStop.focus();
            footer.className = footer.className.replace(/(?:^|\s)visible-footer(?!\S)/g, '');
        }, 400);
    }

}

/**
 * Button 1
 */
function Layer5UeberweisungSubmitButtonA() {

    //Remove Mark
    absendenZurueck.className = absendenZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    absenden.className = absenden.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark
    absendenZurueck.className += " marked";

    document.addEventListener("keypress", clickZurueck);

    timeout = setTimeout(Layer5UeberweisungSubmitButtonB, speed);
}

/**
 * Button 2
 */
function Layer5UeberweisungSubmitButtonB() {

    //Remove Mark
    absendenZurueck.className = absendenZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark
    absenden.className += " marked";

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (absenden.classList.contains("marked"))) {

            clearTimeout(timeout);

            cycleStart = 0;

            //Remove Mark
            absenden.className = absenden.className.replace(/(?:^|\s)marked(?!\S)/g, '');

            absenden.click();

            this.removeEventListener("keypress", arguments.callee);
        }
        else {
            this.removeEventListener("keypress", arguments.callee);
        }
    });

    timeout = setTimeout(Layer5UeberweisungSubmitButtonFooter, speed);
}

/**
 * Last item to be scanned inside this loop. The setTimeout function needs to call the loop again. Otherwise it jumps out of it
 */
function Layer5UeberweisungSubmitButtonFooter() {

    //Remove Mark
    absenden.className = absenden.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark to element
    footerStartStop.className += " marked";
    footerZurueck.className += " marked";

    footerStartStop.disabled = false;
    footerZurueck.disabled = false;

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (footerStartStop.classList.contains("marked"))) {

            clearTimeout(timeout);

            cycleStart = 0;

            scanLayer3UeberweisungRow3SubmitSelectFooter();

            this.removeEventListener("keypress", arguments.callee);
        }
        else {
            this.removeEventListener("keypress", arguments.callee);
        }
    });

    timeout = setTimeout(scanLayer5UeberweisungSubmitButton, speed);
}

/**
 * Loop of the scanner bar, selects start/stop or back
 */
function scanLayer3UeberweisungRow3SubmitSelectFooter() {
    if (cycleStart < cycles){

        Layer3UeberweisungRow3SubmitSelectFooterA();

        cycleStart++;

    }
    else {

        footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

        clearTimeout(timeout);

        cycleStart = 0;

        footerStartStop.disabled = false;
        footerZurueck.disabled = true;

        absendenZurueck.click();

        setTimeout(function () {
            footerStartStop.focus();
            footer.className = footer.className.replace(/(?:^|\s)visible-footer(?!\S)/g, '');
        }, 400);
    }
}

/**
 * First item of the scanner bar, start/stop. Stops the whole scanning process when clicked
 */
function Layer3UeberweisungRow3SubmitSelectFooterA() {

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

            cycleStart = 0;

            absendenZurueck.click();

            setTimeout(function () {
                footerStartStop.focus();
                footer.className = footer.className.replace(/(?:^|\s)visible-footer(?!\S)/g, '');
            }, 400);

            this.removeEventListener("keypress", arguments.callee);
        }
        else {
            this.removeEventListener("keypress", arguments.callee);
        }
    });

    timeout = setTimeout(Layer3UeberweisungRow3SubmitSelectFooterB, speed);

}

/**
 * Last item of the scanner bar, back. Needs to call the scanner bar loop. Returns to the previous layer if clicked
 */
function Layer3UeberweisungRow3SubmitSelectFooterB() {

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

            scanLayer4UeberweisungSubmit();

            footerZurueck.disabled = true;

            this.removeEventListener("keypress", arguments.callee);
        }
        else {
            this.removeEventListener("keypress", arguments.callee);
        }
    });

    timeout = setTimeout(scanLayer3UeberweisungRow3SubmitSelectFooter, speed);

}

function clickZurueck(e) {

    if ((e.keyCode === 13) && (absendenZurueck.classList.contains("marked"))) {

        clearTimeout(timeout);

        //Remove Mark
        absendenZurueck.className = absendenZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

        cycleStart = 0;

        absendenZurueck.click();

        setTimeout(function () {
            uebwerweisungItems[6].blur();
            footer.className = footer.className.replace(/(?:^|\s)visible-footer(?!\S)/g, '');
            scanLayer3UeberweisungRow3();
        }, 400);

        this.removeEventListener("keypress", arguments.callee);
    }
    else {
        this.removeEventListener("keypress", arguments.callee);
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////  LAYER 6 SUBMIT KEYBOARD  ///////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function scanLayer6UeberweisungSubmitKeyboard() {

    if (cycleStart < cycles){

        Layer6UeberweisungSubmitKeyboardA();

        cycleStart++;

        footerStartStop.disabled = true;
        footerZurueck.disabled = true;

    }
    else {

        footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        onscreenKeyboard.className = onscreenKeyboard.className.replace(/(?:^|\s)tan-numbers(?!\S)/g, '');

        clearTimeout(timeout);

        cycleStart = 0;

        footerZurueck.disabled = true;

        checkKeyboards();
        nodePicker();

        for (i=11; i<20; i++){
            nodes[i].parentNode.style.display = "block";
        }
        for (i=21; i<35; i++){
            nodes[i].parentNode.style.display = "block";
        }

        nodes[32].click();
        nodes[21].click();

        onscreenKeyboard.style.display = "none";

        absendenZurueck.click();

        setTimeout(function () {
            footerStartStop.focus();
            footer.className = footer.className.replace(/(?:^|\s)visible-footer(?!\S)/g, '');
        }, 400);
    }

}

function Layer6UeberweisungSubmitKeyboardA() {

    checkKeyboards();
    nodePicker();

    //remove mark
    footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    for (i=0; i<5; i++){
        nodes[i].className += " marked";
    }

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (nodes[0].classList.contains("marked"))) {

            clearTimeout(timeout);

            cycleStart = 0;

            //Remove mark
            footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
            footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');
            for (i=0; i<5; i++){
                nodes[i].className = nodes[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
            }

            scanLayer7UeberweisungSubmitKeyboardA();

            this.removeEventListener("keypress", arguments.callee);
        }
        else {
            this.removeEventListener("keypress", arguments.callee);
        }
    });

    timeout = setTimeout(Layer6UeberweisungSubmitKeyboardB, speed)

}

function Layer6UeberweisungSubmitKeyboardB() {

    checkKeyboards();
    nodePicker();

    //remove mark
    for (i=0; i<5; i++){
        nodes[i].className = nodes[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
    }

    //add mark
    for (i=5; i<11; i++){
        nodes[i].className += " marked";
    }

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (nodes[5].classList.contains("marked"))) {

            clearTimeout(timeout);

            cycleStart = 0;

            //Remove mark
            footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
            footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');
            for (i=5; i<11; i++){
                nodes[i].className = nodes[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
            }

            scanLayer7UeberweisungSubmitKeyboardB();

            this.removeEventListener("keypress", arguments.callee);
        }
        else {
            this.removeEventListener("keypress", arguments.callee);
        }
    });

    timeout = setTimeout(Layer6UeberweisungSubmitKeyboardC, speed)

}

function Layer6UeberweisungSubmitKeyboardC() {

    checkKeyboards();
    nodePicker();

    //remove mark
    for (i=5; i<11; i++){
        nodes[i].className = nodes[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
    }

    //add mark
    nodes[20].className += " marked";

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (nodes[20].classList.contains("marked"))) {

            clearTimeout(timeout);

            nodes[20].className = nodes[20].className.replace(/(?:^|\s)marked(?!\S)/g, '');
            onscreenKeyboard.className = onscreenKeyboard.className.replace(/(?:^|\s)tan-numbers(?!\S)/g, '');

            cycleStart = 0;

            checkKeyboards();
            nodePicker();

            for (i=11; i<20; i++){
                nodes[i].parentNode.style.display = "block";
            }
            for (i=21; i<35; i++){
                nodes[i].parentNode.style.display = "block";
            }

            nodes[32].click();
            nodes[21].click();

            onscreenKeyboard.style.display = "none";

            scanLayer4UeberweisungSubmit();

            this.removeEventListener("keypress", arguments.callee);
        }
        else {
            this.removeEventListener("keypress", arguments.callee);
        }
    });

    timeout = setTimeout(Layer6UeberweisungSubmitKeyboardFooter, speed)

}

function Layer6UeberweisungSubmitKeyboardFooter() {

    checkKeyboards();
    nodePicker();

    //remove mark
    nodes[20].className = nodes[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
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

            scanLayer6UeberweisungSubmitFooter();

            this.removeEventListener("keypress", arguments.callee);
        }
        else {
            this.removeEventListener("keypress", arguments.callee);
        }
    });

    timeout = setTimeout(scanLayer6UeberweisungSubmitKeyboard, speed)

}

function scanLayer6UeberweisungSubmitFooter() {
    if (cycleStart < cycles){

        Layer6UeberweisungSubmitFooterA();

        cycleStart++;

    }
    else {

        footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        onscreenKeyboard.className = onscreenKeyboard.className.replace(/(?:^|\s)tan-numbers(?!\S)/g, '');

        clearTimeout(timeout);

        cycleStart = 0;

        footerZurueck.disabled = true;
        footerStartStop.disabled = false;

        checkKeyboards();
        nodePicker();

        for (i=11; i<20; i++){
            nodes[i].parentNode.style.display = "block";
        }
        for (i=21; i<35; i++){
            nodes[i].parentNode.style.display = "block";
        }

        nodes[32].click();
        nodes[21].click();

        onscreenKeyboard.style.display = "none";

        absendenZurueck.click();

        setTimeout(function () {
            footerStartStop.focus();
            footer.className = footer.className.replace(/(?:^|\s)visible-footer(?!\S)/g, '');
        }, 400);
    }
}

function Layer6UeberweisungSubmitFooterA() {

    //Remove mark
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark
    footerStartStop.className += " marked";

    footerStartStop.disabled = false;
    footerZurueck.disabled = true;

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (footerStartStop.classList.contains("marked"))) {

            footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
            footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');
            onscreenKeyboard.className = onscreenKeyboard.className.replace(/(?:^|\s)tan-numbers(?!\S)/g, '');

            clearTimeout(timeout);

            cycleStart = 0;

            footerZurueck.disabled = true;

            checkKeyboards();
            nodePicker();

            for (i=11; i<20; i++){
                nodes[i].parentNode.style.display = "block";
            }
            for (i=21; i<35; i++){
                nodes[i].parentNode.style.display = "block";
            }

            nodes[32].click();
            nodes[21].click();

            onscreenKeyboard.style.display = "none";

            absendenZurueck.click();

            setTimeout(function () {
                footerStartStop.focus();
                footer.className = footer.className.replace(/(?:^|\s)visible-footer(?!\S)/g, '');
            }, 400);

            this.removeEventListener("keypress", arguments.callee);
        }
        else {
            this.removeEventListener("keypress", arguments.callee);
        }
    });

    timeout = setTimeout(Layer6UeberweisungSubmitFooterB, speed);

}

function Layer6UeberweisungSubmitFooterB() {

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
            onscreenKeyboard.className = onscreenKeyboard.className.replace(/(?:^|\s)tan-numbers(?!\S)/g, '');

            for (i=11; i<20; i++){
                nodes[i].parentNode.style.display = "block";
            }
            for (i=21; i<35; i++){
                nodes[i].parentNode.style.display = "block";
            }

            nodes[32].click();
            nodes[21].click();

            onscreenKeyboard.style.display = "none";

            cycleStart = 0;

            footerZurueck.disabled = true;

            scanLayer4UeberweisungSubmit();

            this.removeEventListener("keypress", arguments.callee);
        }
        else {
            this.removeEventListener("keypress", arguments.callee);
        }
    });

    timeout = setTimeout(scanLayer6UeberweisungSubmitFooter, speed);

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////  LAYER 7 SUBMIT KEYBOARD A  ///////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Loop, scans through the number keyboard only
 */
function scanLayer7UeberweisungSubmitKeyboardA() {

    if (cycleStart < cycles){

        document.removeEventListener('keypress', tanInsert0);
        document.removeEventListener('keypress', tanInsert1);
        document.removeEventListener('keypress', tanInsert2);
        document.removeEventListener('keypress', tanInsert3);
        document.removeEventListener('keypress', tanInsert4);

        Layer7UeberweisungSubmitKeyboardA0();

        cycleStart++;

        footerStartStop.disabled = true;
        footerZurueck.disabled = true;

    }
    else {

        footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        onscreenKeyboard.className = onscreenKeyboard.className.replace(/(?:^|\s)tan-numbers(?!\S)/g, '');

        clearTimeout(timeout);

        cycleStart = 0;

        footerZurueck.disabled = true;

        // checks which keyboard is active
        checkKeyboards();
        nodePicker();

        // only shows number keys on keyboard
        for (i=11; i<20; i++){
            nodes[i].parentNode.style.display = "block";
        }
        for (i=21; i<35; i++){
            nodes[i].parentNode.style.display = "block";
        }

        nodes[32].click();
        nodes[21].click();

        onscreenKeyboard.style.display = "none";

        absendenZurueck.click();

        setTimeout(function () {
            footerStartStop.focus();
            footer.className = footer.className.replace(/(?:^|\s)visible-footer(?!\S)/g, '');
        }, 400);
    }

}

/**
 * Keyboard button 0
 */
function Layer7UeberweisungSubmitKeyboardA0() {

    //remove mark
    footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    nodes[0].className += " marked";

    document.addEventListener("keypress", tanInsert0);

    timeout = setTimeout(Layer7UeberweisungSubmitKeyboardA1, speed);

}
/**
 * Keyboard button 1
 */
function Layer7UeberweisungSubmitKeyboardA1() {

    //remove mark
    footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    nodes[0].className = nodes[0].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    nodes[1].className += " marked";

    document.addEventListener("keypress", tanInsert1);

    timeout = setTimeout(Layer7UeberweisungSubmitKeyboardA2, speed);

}
/**
 * Keyboard button 2
 */
function Layer7UeberweisungSubmitKeyboardA2() {

    //remove mark
    footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    nodes[1].className = nodes[1].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    nodes[2].className += " marked";

    document.addEventListener("keypress", tanInsert2);

    timeout = setTimeout(Layer7UeberweisungSubmitKeyboardA3, speed);

}
/**
 * Keyboard button 3
 */
function Layer7UeberweisungSubmitKeyboardA3() {

    //remove mark
    footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    nodes[2].className = nodes[2].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    nodes[3].className += " marked";

    document.addEventListener("keypress", tanInsert3);

    timeout = setTimeout(Layer7UeberweisungSubmitKeyboardA4, speed);

}

/**
 * Keyboard button 4
 */
function Layer7UeberweisungSubmitKeyboardA4() {

    //remove mark
    footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    nodes[3].className = nodes[3].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    nodes[4].className += " marked";

    document.addEventListener("keypress", tanInsert4);

    timeout = setTimeout(Layer3UeberweisungRow3SubmitTanKeyboardA0Footer, speed);

}

/**
 * Last item to be scanned inside this loop. The setTimeout function needs to call the loop again. Otherwise it jumps out of it
 */
function Layer3UeberweisungRow3SubmitTanKeyboardA0Footer() {

    checkKeyboards();
    nodePicker();

    //remove mark
    nodes[4].className = nodes[4].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
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

            scanLayer7UeberweisungSubmitKeyboardA0Footer();

            this.removeEventListener("keypress", arguments.callee);
        }
        else {
            this.removeEventListener("keypress", arguments.callee);
        }
    });

    timeout = setTimeout(scanLayer7UeberweisungSubmitKeyboardA, speed)

}

/**
 * Loop of the scanner bar, selects start/stop or back
 */
function scanLayer7UeberweisungSubmitKeyboardA0Footer() {
    if (cycleStart < cycles){

        Layer7UeberweisungSubmitKeyboardFooterA0A();

        cycleStart++;

    }
    else {

        footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        onscreenKeyboard.className = onscreenKeyboard.className.replace(/(?:^|\s)tan-numbers(?!\S)/g, '');

        clearTimeout(timeout);

        cycleStart = 0;

        footerZurueck.disabled = true;
        footerStartStop.disabled = false;

        checkKeyboards();
        nodePicker();

        for (i=11; i<20; i++){
            nodes[i].parentNode.style.display = "block";
        }
        for (i=21; i<35; i++){
            nodes[i].parentNode.style.display = "block";
        }

        nodes[32].click();
        nodes[21].click();

        onscreenKeyboard.style.display = "none";

        absendenZurueck.click();

        setTimeout(function () {
            footerStartStop.focus();
            footer.className = footer.className.replace(/(?:^|\s)visible-footer(?!\S)/g, '');
        }, 400);
    }
}

/**
 * First item of the scanner bar, start/stop. Stops the whole scanning process when clicked
 */
function Layer7UeberweisungSubmitKeyboardFooterA0A() {

    //Remove mark
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark
    footerStartStop.className += " marked";

    footerStartStop.disabled = false;
    footerZurueck.disabled = true;

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (footerStartStop.classList.contains("marked"))) {

            footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
            footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');
            onscreenKeyboard.className = onscreenKeyboard.className.replace(/(?:^|\s)tan-numbers(?!\S)/g, '');

            clearTimeout(timeout);

            cycleStart = 0;

            footerZurueck.disabled = true;

            checkKeyboards();
            nodePicker();

            for (i=11; i<20; i++){
                nodes[i].parentNode.style.display = "block";
            }
            for (i=21; i<35; i++){
                nodes[i].parentNode.style.display = "block";
            }

            nodes[32].click();
            nodes[21].click();

            onscreenKeyboard.style.display = "none";

            absendenZurueck.click();

            setTimeout(function () {
                footerStartStop.focus();
                footer.className = footer.className.replace(/(?:^|\s)visible-footer(?!\S)/g, '');
            }, 400);

            this.removeEventListener("keypress", arguments.callee);
        }
        else {
            this.removeEventListener("keypress", arguments.callee);
        }
    });

    timeout = setTimeout(Layer7UeberweisungSubmitKeyboardFooterA0B, speed);

}

/**
 * Last item of the scanner bar, back. Needs to call the scanner bar loop. Returns to the previous layer if clicked
 */
function Layer7UeberweisungSubmitKeyboardFooterA0B() {

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

            scanLayer6UeberweisungSubmitKeyboard();

            this.removeEventListener("keypress", arguments.callee);
        }
        else {
            this.removeEventListener("keypress", arguments.callee);
        }
    });

    timeout = setTimeout(scanLayer7UeberweisungSubmitKeyboardA0Footer, speed);

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////  LAYER 7 SUBMIT KEYBOARD B  ///////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Loop, scans through the number keyboard only
 */
function scanLayer7UeberweisungSubmitKeyboardB() {

    if (cycleStart < cycles){

        document.removeEventListener('keypress', tanInsert5);
        document.removeEventListener('keypress', tanInsert6);
        document.removeEventListener('keypress', tanInsert7);
        document.removeEventListener('keypress', tanInsert8);
        document.removeEventListener('keypress', tanInsert9);
        document.removeEventListener('keypress', tanInsert10);

        Layer7UeberweisungSubmitKeyboardB5();

        cycleStart++;

        footerStartStop.disabled = true;
        footerZurueck.disabled = true;

    }
    else {

        footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        onscreenKeyboard.className = onscreenKeyboard.className.replace(/(?:^|\s)tan-numbers(?!\S)/g, '');

        clearTimeout(timeout);

        cycleStart = 0;

        footerZurueck.disabled = true;

        checkKeyboards();
        nodePicker();

        for (i=11; i<20; i++){
            nodes[i].parentNode.style.display = "block";
        }
        for (i=21; i<35; i++){
            nodes[i].parentNode.style.display = "block";
        }

        nodes[32].click();
        nodes[21].click();

        onscreenKeyboard.style.display = "none";

        absendenZurueck.click();

        setTimeout(function () {
            footerStartStop.focus();
            footer.className = footer.className.replace(/(?:^|\s)visible-footer(?!\S)/g, '');
        }, 400);
    }

}

/**
 * Keyboard button 5
 */
function Layer7UeberweisungSubmitKeyboardB5() {

    //remove mark
    footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    nodes[5].className += " marked";

    document.addEventListener("keypress", tanInsert5);

    timeout = setTimeout(Layer7UeberweisungSubmitKeyboardB6, speed);

}

/**
 * Keyboard button 6
 */
function Layer7UeberweisungSubmitKeyboardB6() {

    //remove mark
    footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    nodes[5].className = nodes[5].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    nodes[6].className += " marked";

    document.addEventListener("keypress", tanInsert6);

    timeout = setTimeout(Layer7UeberweisungSubmitKeyboardB7, speed);

}

/**
 * Keyboard button 7
 */
function Layer7UeberweisungSubmitKeyboardB7() {

    //remove mark
    footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    nodes[6].className = nodes[6].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    nodes[7].className += " marked";

    document.addEventListener("keypress", tanInsert7);

    timeout = setTimeout(Layer7UeberweisungSubmitKeyboardB8, speed);

}

/**
 * Keyboard button 8
 */
function Layer7UeberweisungSubmitKeyboardB8() {

    //remove mark
    footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    nodes[7].className = nodes[7].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    nodes[8].className += " marked";

    document.addEventListener("keypress", tanInsert8);

    timeout = setTimeout(Layer7UeberweisungSubmitKeyboardB9, speed);

}

/**
 * Keyboard button 9
 */
function Layer7UeberweisungSubmitKeyboardB9() {

    //remove mark
    footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    nodes[8].className = nodes[8].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    nodes[9].className += " marked";

    document.addEventListener("keypress", tanInsert9);

    timeout = setTimeout(Layer7UeberweisungSubmitKeyboardB10, speed);

}

/**
 * Keyboard button 10
 */
function Layer7UeberweisungSubmitKeyboardB10() {

    //remove mark
    footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    nodes[9].className = nodes[9].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    nodes[10].className += " marked";

    document.addEventListener("keypress", tanInsert10);

    timeout = setTimeout(Layer7UeberweisungSubmitKeyboardB5Footer, speed);

}

/**
 * Last item to be scanned inside this loop. The setTimeout function needs to call the loop again. Otherwise it jumps out of it
 */
function Layer7UeberweisungSubmitKeyboardB5Footer() {

    checkKeyboards();
    nodePicker();

    //remove mark
    nodes[10].className = nodes[10].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
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

            scanLayer7UeberweisungSubmitKeyboardB5Footer();

            this.removeEventListener("keypress", arguments.callee);
        }
        else {
            this.removeEventListener("keypress", arguments.callee);
        }
    });

    timeout = setTimeout(scanLayer7UeberweisungSubmitKeyboardB, speed)

}

/**
 * Loop of the scanner bar, selects start/stop or back
 */
function scanLayer7UeberweisungSubmitKeyboardB5Footer() {
    if (cycleStart < cycles){

        Layer7UeberweisungSubmitKeyboardFooterB5A();

        cycleStart++;

    }
    else {

        footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        onscreenKeyboard.className = onscreenKeyboard.className.replace(/(?:^|\s)tan-numbers(?!\S)/g, '');

        clearTimeout(timeout);

        cycleStart = 0;

        footerZurueck.disabled = true;
        footerStartStop.disabled = false;

        checkKeyboards();
        nodePicker();

        for (i=11; i<20; i++){
            nodes[i].parentNode.style.display = "block";
        }
        for (i=21; i<35; i++){
            nodes[i].parentNode.style.display = "block";
        }

        nodes[32].click();
        nodes[21].click();

        onscreenKeyboard.style.display = "none";

        absendenZurueck.click();

        setTimeout(function () {
            footerStartStop.focus();
            footer.className = footer.className.replace(/(?:^|\s)visible-footer(?!\S)/g, '');
        }, 400);
    }
}

/**
 * First item of the scanner bar, start/stop. Stops the whole scanning process when clicked
 */
function Layer7UeberweisungSubmitKeyboardFooterB5A() {

    //Remove mark
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark
    footerStartStop.className += " marked";

    footerStartStop.disabled = false;
    footerZurueck.disabled = true;

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (footerStartStop.classList.contains("marked"))) {

            footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
            footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');
            onscreenKeyboard.className = onscreenKeyboard.className.replace(/(?:^|\s)tan-numbers(?!\S)/g, '');

            clearTimeout(timeout);

            cycleStart = 0;

            footerZurueck.disabled = true;

            checkKeyboards();
            nodePicker();

            for (i=11; i<20; i++){
                nodes[i].parentNode.style.display = "block";
            }
            for (i=21; i<35; i++){
                nodes[i].parentNode.style.display = "block";
            }

            nodes[32].click();
            nodes[21].click();

            onscreenKeyboard.style.display = "none";

            absendenZurueck.click();

            setTimeout(function () {
                footerStartStop.focus();
                footer.className = footer.className.replace(/(?:^|\s)visible-footer(?!\S)/g, '');
            }, 400);

            this.removeEventListener("keypress", arguments.callee);
        }
        else {
            this.removeEventListener("keypress", arguments.callee);
        }
    });

    timeout = setTimeout(Layer7UeberweisungSubmitKeyboardFooterB5B, speed);

}

/**
 * Last item of the scanner bar, back. Needs to call the scanner bar loop. Returns to the previous layer if clicked
 */
function Layer7UeberweisungSubmitKeyboardFooterB5B() {

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

            scanLayer6UeberweisungSubmitKeyboard();

            this.removeEventListener("keypress", arguments.callee);
        }
        else {
            this.removeEventListener("keypress", arguments.callee);
        }
    });

    timeout = setTimeout(scanLayer7UeberweisungSubmitKeyboardB5Footer, speed);

}