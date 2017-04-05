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
//////////////////////////////////////////////////  SCAN HEADER  //////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////  LAYER 2  ////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Loop, scans through each row of the navigation
 */
function scanLayer2Navigation() {

    if (cycleStart < cycles){
        Layer2NavigationRow1();

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
 * First row
 */
function Layer2NavigationRow1() {

    var i;

    //Remove mark of previous layer
    for (i = 0; i < navTag.length; i++) {
        navTag[i].className = navTag[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
    }
    //Remove mark
    footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark
    navTag[0].className += " marked";
    navTag[3].className += " marked";
    navTag[6].className += " marked";

    /**
     * Add Eventlistener. Jumps to Layer 3 of first row
     */
    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (navTag[0].classList.contains("marked"))) {

            clearTimeout(timeout);

            cycleStart = 0;

            //Remove Mark
            navTag[0].className = navTag[0].className.replace(/(?:^|\s)marked(?!\S)/g, '');
            navTag[3].className = navTag[3].className.replace(/(?:^|\s)marked(?!\S)/g, '');
            navTag[6].className = navTag[6].className.replace(/(?:^|\s)marked(?!\S)/g, '');

            scanLayer3NavigationRow1();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(Layer2NavigationRow2, speed);
}

/**
 * Second row
 */
function Layer2NavigationRow2() {

    //Remove Mark
    navTag[0].className = navTag[0].className.replace(/(?:^|\s)marked(?!\S)/g, '');
    navTag[3].className = navTag[3].className.replace(/(?:^|\s)marked(?!\S)/g, '');
    navTag[6].className = navTag[6].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark
    navTag[1].className += " marked";
    navTag[4].className += " marked";
    navTag[7].className += " marked";

    /**
     * Add Eventlistener. Jumps to Layer 3 of second row
     */
    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (navTag[1].classList.contains("marked"))) {

            clearTimeout(timeout);

            cycleStart = 0;

            //Remove Mark
            navTag[1].className = navTag[1].className.replace(/(?:^|\s)marked(?!\S)/g, '');
            navTag[4].className = navTag[4].className.replace(/(?:^|\s)marked(?!\S)/g, '');
            navTag[7].className = navTag[7].className.replace(/(?:^|\s)marked(?!\S)/g, '');

            scanLayer3NavigationRow2();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(Layer2NavigationRow3, speed);

}

/**
 * Third row
 */
function Layer2NavigationRow3() {

    //Remove Mark
    navTag[1].className = navTag[1].className.replace(/(?:^|\s)marked(?!\S)/g, '');
    navTag[4].className = navTag[4].className.replace(/(?:^|\s)marked(?!\S)/g, '');
    navTag[7].className = navTag[7].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark
    navTag[2].className += " marked";
    navTag[5].className += " marked";
    navTag[8].className += " marked";

    /**
     * Add Eventlistener. Jumps to Layer 3 of Third row
     */
    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (navTag[2].classList.contains("marked"))) {

            clearTimeout(timeout);

            cycleStart = 0;

            //Remove Mark
            navTag[2].className = navTag[2].className.replace(/(?:^|\s)marked(?!\S)/g, '');
            navTag[5].className = navTag[5].className.replace(/(?:^|\s)marked(?!\S)/g, '');
            navTag[8].className = navTag[8].className.replace(/(?:^|\s)marked(?!\S)/g, '');

            scanLayer3NavigationRow3();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(Layer2NavigationFooter, speed);
}

/**
 * Last item to be scanned inside this loop. The setTimeout function needs to call the loop again. Otherwise it jumps out of it
 */
function Layer2NavigationFooter() {

    //Remove Mark
    navTag[2].className = navTag[2].className.replace(/(?:^|\s)marked(?!\S)/g, '');
    navTag[5].className = navTag[5].className.replace(/(?:^|\s)marked(?!\S)/g, '');
    navTag[8].className = navTag[8].className.replace(/(?:^|\s)marked(?!\S)/g, '');

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

            scanLayer2NavigationFooter();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanLayer2Navigation, speed);
}

/**
 * Loop of the scanner bar, selects start/stop or back
 */
function scanLayer2NavigationFooter() {
    if (cycleStart < cycles){

        Layer2NavigationFooterA();

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
function Layer2NavigationFooterA() {

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

    timeout = setTimeout(Layer2NavigationFooterB, speed);

}

/**
 * Last item of the scanner bar, back. Needs to call the scanner bar loop. Returns to the previous layer if clicked
 */
function Layer2NavigationFooterB() {

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

    timeout = setTimeout(scanLayer2NavigationFooter, speed);

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////  LAYER 3,  ROW 1 ////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Loop, scans through each item of row 1
 */
function scanLayer3NavigationRow1() {

    if (cycleStart < cycles){
        Layer3NavigationRow1A();

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
 * First item
 */
function Layer3NavigationRow1A() {

    //Remove mark
    navTag[6].className = navTag[6].className.replace(/(?:^|\s)marked(?!\S)/g, '');
    footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark
    navTag[0].className += " marked";

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (navTag[0].classList.contains("marked"))) {

            clearTimeout(timeout);

            //Remove mark
            navTag[0].className = navTag[0].className.replace(/(?:^|\s)marked(?!\S)/g, '');

            footerStartStop.disabled = false;

            footerStartStop.focus();

            cycleStart = 0;

            navTag[0].click();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(Layer3NavigationRow1B, speed);
}

/**
 * Second item
 */
function Layer3NavigationRow1B() {

    //Remove mark
    navTag[0].className = navTag[0].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark
    navTag[3].className += " marked";

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (navTag[3].classList.contains("marked"))) {

            clearTimeout(timeout);

            //Remove mark
            navTag[3].className = navTag[3].className.replace(/(?:^|\s)marked(?!\S)/g, '');

            footerStartStop.disabled = false;

            footerStartStop.focus();

            cycleStart = 0;

            navTag[3].click();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(Layer3NavigationRow1C, speed);
}

/**
 * Third item
 */
function Layer3NavigationRow1C() {

    //Remove mark
    navTag[3].className = navTag[3].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark
    navTag[6].className += " marked";

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (navTag[6].classList.contains("marked"))) {

            clearTimeout(timeout);

            //Remove mark
            navTag[6].className = navTag[6].className.replace(/(?:^|\s)marked(?!\S)/g, '');

            footerStartStop.disabled = false;

            footerStartStop.focus();

            cycleStart = 0;

            navTag[6].click();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(Layer3NavigationRow1Footer, speed);
}

/**
 * Last item to be scanned inside this loop. The setTimeout function needs to call the loop again. Otherwise it jumps out of it
 */
function Layer3NavigationRow1Footer() {

    var i;

    //Remove Mark
    for (i = 0; i < navTag.length; i++) {
        navTag[6].className = navTag[6].className.replace(/(?:^|\s)marked(?!\S)/g, '');
    }

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

            scanLayer3NavigationRow1Footer();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanLayer3NavigationRow1, speed);
}

/**
 * Loop of the scanner bar, selects start/stop or back
 */
function scanLayer3NavigationRow1Footer() {
    if (cycleStart < cycles){

        Layer3NavigationRow1FooterA();

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
function Layer3NavigationRow1FooterA() {

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

    timeout = setTimeout(Layer3NavigationRow1FooterB, speed);

}

/**
 * Last item of the scanner bar, back. Needs to call the scanner bar loop. Returns to the previous layer if clicked
 */
function Layer3NavigationRow1FooterB() {

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

            scanLayer2Navigation();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanLayer3NavigationRow1Footer, speed);

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////  LAYER 3,  ROW 2 ////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Loop, scans through each item of row 2
 */
function scanLayer3NavigationRow2() {

    if (cycleStart < cycles){
        Layer3NavigationRow2A();

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
 * First item
 */
function Layer3NavigationRow2A() {

    //Remove mark
    navTag[7].className = navTag[7].className.replace(/(?:^|\s)marked(?!\S)/g, '');
    footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark
    navTag[1].className += " marked";

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (navTag[1].classList.contains("marked"))) {

            clearTimeout(timeout);

            //Remove mark
            navTag[1].className = navTag[1].className.replace(/(?:^|\s)marked(?!\S)/g, '');

            footerStartStop.disabled = false;

            footerStartStop.focus();

            cycleStart = 0;

            navTag[1].click();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(Layer3NavigationRow2B, speed);
}

/**
 * Second item
 */
function Layer3NavigationRow2B() {

    //Remove mark
    navTag[1].className = navTag[1].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark
    navTag[4].className += " marked";

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (navTag[4].classList.contains("marked"))) {

            clearTimeout(timeout);

            //Remove mark
            navTag[4].className = navTag[4].className.replace(/(?:^|\s)marked(?!\S)/g, '');

            footerStartStop.disabled = false;

            footerStartStop.focus();

            cycleStart = 0;

            navTag[4].click();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(Layer3NavigationRow2C, speed);
}

/**
 * Third item
 */
function Layer3NavigationRow2C() {

    //Remove mark
    navTag[4].className = navTag[4].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark
    navTag[7].className += " marked";

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (navTag[7].classList.contains("marked"))) {

            clearTimeout(timeout);

            //Remove mark
            navTag[7].className = navTag[7].className.replace(/(?:^|\s)marked(?!\S)/g, '');

            footerStartStop.disabled = false;

            footerStartStop.focus();

            cycleStart = 0;

            navTag[7].click();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(Layer3NavigationRow2Footer, speed);
}

/**
 * Last item to be scanned inside this loop. The setTimeout function needs to call the loop again. Otherwise it jumps out of it
 */
function Layer3NavigationRow2Footer() {

    //Remove Mark
    navTag[7].className = navTag[7].className.replace(/(?:^|\s)marked(?!\S)/g, '');

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

            scanLayer3NavigationRow2Footer();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanLayer3NavigationRow2, speed);
}

/**
 * Loop of the scanner bar, selects start/stop or back
 */
function scanLayer3NavigationRow2Footer() {
    if (cycleStart < cycles){

        Layer3NavigationRow2FooterA();

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
function Layer3NavigationRow2FooterA() {

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

    timeout = setTimeout(Layer3NavigationRow2FooterB, speed);

}

/**
 * Last item of the scanner bar, back. Needs to call the scanner bar loop. Returns to the previous layer if clicked
 */
function Layer3NavigationRow2FooterB() {

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

            scanLayer2Navigation();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanLayer3NavigationRow2Footer, speed);

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////  LAYER 3,  ROW 3 ////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Loop, scans through each item of row 3
 */
function scanLayer3NavigationRow3() {

    if (cycleStart < cycles){
        Layer3NavigationRow3A();

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
 * First item
 */
function Layer3NavigationRow3A() {

    //Remove mark
    navTag[8].className = navTag[8].className.replace(/(?:^|\s)marked(?!\S)/g, '');
    footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark
    navTag[2].className += " marked";

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (navTag[2].classList.contains("marked"))) {

            clearTimeout(timeout);

            //Remove mark
            navTag[2].className = navTag[2].className.replace(/(?:^|\s)marked(?!\S)/g, '');

            footerStartStop.disabled = false;

            footerStartStop.focus();

            cycleStart = 0;

            navTag[2].click();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(Layer3NavigationRow3B, speed);
}

/**
 * Second item
 */
function Layer3NavigationRow3B() {

    //Remove mark
    navTag[2].className = navTag[2].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark
    navTag[5].className += " marked";

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (navTag[5].classList.contains("marked"))) {

            clearTimeout(timeout);

            //Remove mark
            navTag[5].className = navTag[5].className.replace(/(?:^|\s)marked(?!\S)/g, '');

            footerStartStop.disabled = false;

            footerStartStop.focus();

            cycleStart = 0;

            navTag[5].click();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(Layer3NavigationRow3C, speed);
}

/**
 * Third item
 */
function Layer3NavigationRow3C() {

    //Remove mark
    navTag[5].className = navTag[5].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark
    navTag[8].className += " marked";

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (navTag[8].classList.contains("marked"))) {

            clearTimeout(timeout);

            //Remove mark
            navTag[8].className = navTag[8].className.replace(/(?:^|\s)marked(?!\S)/g, '');

            footerStartStop.disabled = false;

            cycleStart = 0;

            navTag[8].click();

            setTimeout(function () {
                document.getElementById("hilfeButton").focus();
            },500);

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(Layer3NavigationRow3Footer, speed);
}

/**
 * Fokuses the back button when Hilfe is clicked
 */
document.getElementById("hilfeButton").onclick = function () {
    setTimeout(fokusStartStop, 400);
};
function fokusStartStop(){
    startScan.focus();
}

/**
 * Last item to be scanned inside this loop. The setTimeout function needs to call the loop again. Otherwise it jumps out of it
 */
function Layer3NavigationRow3Footer() {

    var i;

    //Remove Mark
    for (i = 0; i < navTag.length; i++) {
        navTag[8].className = navTag[8].className.replace(/(?:^|\s)marked(?!\S)/g, '');
    }

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

            scanLayer3NavigationRow2Footer();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanLayer3NavigationRow3, speed);
}

/**
 * Loop of the scanner bar, selects start/stop or back
 */
function scanLayer3NavigationRow3Footer() {
    if (cycleStart < cycles){

        Layer3NavigationRow3FooterA();

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
function Layer3NavigationRow3FooterA() {

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

    timeout = setTimeout(Layer3NavigationRow3FooterB, speed);

}

/**
 * Last item of the scanner bar, back. Needs to call the scanner bar loop. Returns to the previous layer if clicked
 */
function Layer3NavigationRow3FooterB() {

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

            scanLayer2Navigation();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanLayer3NavigationRow3Footer, speed);

}