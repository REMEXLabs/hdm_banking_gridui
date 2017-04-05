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
 * Loop, scans through all categories of the toolbar
 */
function scanLayer2HeaderPanel() {

    if (cycleStart < cycles){

        Layer2HeaderPanelA();

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

        headerRowLink[0].click();

        headerPanelTab.click();

        footerStartStop.focus();
    }

}

/**
 * First item of the toolbar
 */
function Layer2HeaderPanelA() {

    //Remove mark
    footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add
    headerRowLink[0].className += " marked";

    headerRowLink[0].click();

    timeout = setTimeout(Layer2HeaderPanelB, speed)

}
/**
 * Second item of the toolbar
 */
function Layer2HeaderPanelB() {

    //remove
    headerRowLink[0].className = headerRowLink[0].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add
    headerRowLink[1].className += " marked";

    headerRowLink[1].click();

    timeout = setTimeout(Layer2HeaderPanelC, speed)

}
/**
 * Third item of the toolbar
 */
function Layer2HeaderPanelC() {

    //remove
    headerRowLink[1].className = headerRowLink[1].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add
    headerRowLink[2].className += " marked";

    headerRowLink[2].click();

    timeout = setTimeout(Layer2HeaderPanelD, speed)

}
/**
 * Fourth item of the toolbar
 */
function Layer2HeaderPanelD() {

    //remove
    headerRowLink[2].className = headerRowLink[2].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add
    headerRowLink[3].className += " marked";

    headerRowLink[3].click();

    timeout = setTimeout(Layer2HeaderPanelE, speed)

}
/**
 * Fifth item of the toolbar
 */
function Layer2HeaderPanelE() {

    //remove
    headerRowLink[3].className = headerRowLink[3].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add
    headerRowLink[4].className += " marked";

    headerRowLink[4].click();

    timeout = setTimeout(Layer2HeaderPanelF, speed)

}
/**
 * Sixth item of the toolbar
 */
function Layer2HeaderPanelF() {

    //remove
    headerRowLink[4].className = headerRowLink[4].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add
    headerRowLink[5].className += " marked";

    headerRowLink[5].click();

    /**
     * Add Eventlistener. Jumps to Layer 3 of the 6th item of the Header if clicked
     */
    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (headerRowLink[5].classList.contains("marked"))) {

            clearTimeout(timeout);

            //Remove mark
            headerRowLink[5].className = headerRowLink[5].className.replace(/(?:^|\s)marked(?!\S)/g, '');

            cycleStart = 0;

            scanLayer3HeaderPanelF();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(Layer2HeaderPanelFooter, speed)

}
/**
 * Last item to be scanned inside this loop. The setTimeout function needs to call the loop again. Otherwise it jumps out of it
 */
function Layer2HeaderPanelFooter() {

    //Remove Mark
    headerRowLink[5].className = headerRowLink[5].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark to element
    footerStartStop.className += " marked";
    footerZurueck.className += " marked";

    footerStartStop.disabled = false;
    footerZurueck.disabled = false;

    /**
     * Add Eventlistener. Jumps to the selection of the scanner bar. Needs to call the scanner bar loop in order to select its items
     */
    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (footerStartStop.classList.contains("marked"))) {

            clearTimeout(timeout);

            cycleStart = 0;

            //Remove mark
            footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
            footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

            scanLayer2HeaderPanelFooter();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanLayer2HeaderPanel, speed);
}
/**
 * Loop of the scanner bar, selects start/stop or back
 */
function scanLayer2HeaderPanelFooter() {

    if (cycleStart < cycles){

        Layer2HeaderPanelFooterA();

        cycleStart++;

    }
    else {

        footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

        clearTimeout(timeout);

        cycleStart = 0;

        footerStartStop.disabled = false;
        footerZurueck.disabled = true;

        headerRowLink[0].click();

        headerPanelTab.click();

        footerStartStop.focus();
    }
}

/**
 * First item of the scanner bar, start/stop. Stops the whole scanning process when clicked
 */
function Layer2HeaderPanelFooterA() {

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

            headerRowLink[0].click();

            headerPanelTab.click();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(Layer2HeaderPanelFooterB, speed);

}

/**
 * Last item of the scanner bar, back. Needs to call the scanner bar loop. Returns to the previous layer if clicked
 */
function Layer2HeaderPanelFooterB() {

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

            headerPanelTab.click();

            footerZurueck.disabled = true;

            headerRowLink[0].click();

            scanLayer1();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanLayer2HeaderPanelFooter, speed);

}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////  LAYER 3, CATEGORY 6 //////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Loop, scans through all items inside category 6
 */
function scanLayer3HeaderPanelF() {

    if (cycleStart < cycles){

        Layer3HeaderPanelF1();

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

        headerRowLink[0].click();

        headerPanelTab.click();

        footerStartStop.focus();
    }

}

/**
 * First item of 6th category
 */
function Layer3HeaderPanelF1() {

    //Remove mark
    footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    HeaderScanItems[0].className += " marked";

    /**
     * Add Eventlistener. Jumps to the selection of this item if clicked
     */
    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (HeaderScanItems[0].classList.contains("marked"))) {

            clearTimeout(timeout);

            //Remove mark
            HeaderScanItems[0].className = HeaderScanItems[0].className.replace(/(?:^|\s)marked(?!\S)/g, '');

            cycleStart = 0;

            scanLayer4HeaderPanelF1A();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(Layer3HeaderPanelF2, speed);
}

/**
 * Second item of 6th category
 */
function Layer3HeaderPanelF2() {

    //remove
    HeaderScanItems[0].className = HeaderScanItems[0].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    HeaderScanItems[1].className += " marked";

    /**
     * Add Eventlistener. Jumps to the selection of this item if clicked
     */
    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (HeaderScanItems[1].classList.contains("marked"))) {

            clearTimeout(timeout);

            //Remove mark
            HeaderScanItems[1].className = HeaderScanItems[1].className.replace(/(?:^|\s)marked(?!\S)/g, '');

            cycleStart = 0;

            scanLayer4HeaderPanelF2A();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(Layer3HeaderPanelF3, speed);
}

/**
 * Third item of 6th category
 */
function Layer3HeaderPanelF3() {

    //remove
    HeaderScanItems[1].className = HeaderScanItems[1].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    HeaderScanItems[2].className += " marked";

    /**
     * Add Eventlistener. Jumps to the selection of this item if clicked
     */
    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (HeaderScanItems[2].classList.contains("marked"))) {

            clearTimeout(timeout);

            //Remove mark
            HeaderScanItems[2].className = HeaderScanItems[2].className.replace(/(?:^|\s)marked(?!\S)/g, '');

            cycleStart = 0;

            scanLayer4HeaderPanelF3A();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(Layer3HeaderPanelF4, speed);
}

/**
 * Fourth item of 6th category
 */
function Layer3HeaderPanelF4() {

    //remove
    HeaderScanItems[2].className = HeaderScanItems[2].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    HeaderScanItems[3].nextElementSibling.className += " marked";

    /**
     * Add Eventlistener. Jumps to the selection of this item if clicked
     */
    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (HeaderScanItems[3].nextElementSibling.classList.contains("marked"))) {

            clearTimeout(timeout);

            //Remove mark
            HeaderScanItems[3].nextElementSibling.className = HeaderScanItems[3].nextElementSibling.className.replace(/(?:^|\s)marked(?!\S)/g, '');

            cycleStart = 0;

            HeaderScanItems[3].click();

            headerRowLink[0].click();

            headerPanelTab.click();

            footerStartStop.disabled = false;

            initTBS();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(Layer3HeaderPanelFFooter, speed);
}


/**
 * Last item to be scanned inside this loop. The setTimeout function needs to call the loop again. Otherwise it jumps out of it
 */
function Layer3HeaderPanelFFooter() {

    //Remove Mark
    HeaderScanItems[3].nextElementSibling.className = HeaderScanItems[3].nextElementSibling.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark to element
    footerStartStop.className += " marked";
    footerZurueck.className += " marked";

    footerStartStop.disabled = false;
    footerZurueck.disabled = false;

    /**
     * Add Eventlistener. Jumps to the selection of the scanner bar. Needs to call the scanner bar loop in order to select its items
     */
    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (footerStartStop.classList.contains("marked"))) {

            clearTimeout(timeout);

            cycleStart = 0;

            //Remove mark
            footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
            footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

            scanLayer3HeaderPanelF1Footer();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanLayer3HeaderPanelF, speed);
}

/**
 * Loop of the scanner bar, selects start/stop or back
 */
function scanLayer3HeaderPanelF1Footer() {

    if (cycleStart < cycles){

        Layer3HeaderPanelFFooterA();

        cycleStart++;

    }
    else {

        footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

        clearTimeout(timeout);

        cycleStart = 0;

        footerStartStop.disabled = false;
        footerZurueck.disabled = true;

        headerRowLink[0].click();

        headerPanelTab.click();

        footerStartStop.focus();
    }
}

/**
 * First item of the scanner bar, start/stop. Stops the whole scanning process when clicked
 */
function Layer3HeaderPanelFFooterA() {

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

            headerRowLink[0].click();

            headerPanelTab.click();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(Layer3HeaderPanelFFooterB, speed);

}

/**
 * Last item of the scanner bar, back. Needs to call the scanner bar loop. Returns to the previous layer if clicked
 */
function Layer3HeaderPanelFFooterB() {

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

            scanLayer2HeaderPanel();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanLayer3HeaderPanelF1Footer, speed);

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////  LAYER 4, CATEGORY 6 ITEM 1 ///////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Loop, scans through all options inside dropdown of item 1
 */
function scanLayer4HeaderPanelF1A() {

    if (cycleStart < cycles){

        Layer4HeaderPanelF1A();

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

        headerRowLink[0].click();

        headerPanelTab.click();

        footerStartStop.focus();
    }

}

/**
 * First option
 */
function Layer4HeaderPanelF1A(){

    //Remove mark
    footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    var length = HeaderScanItems[0].options.length;

    //opens dropdown
    HeaderScanItems[0].size = length;

    //selects first option of the droopdown
    HeaderScanItems[0].selectedIndex = 0;

    /**
     * add event listener. Close dropdown and scans previous layer if clicked
     */
    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (HeaderScanItems[0].selectedIndex === 0) && (!footerStartStop.classList.contains("marked"))) {

            clearTimeout(timeout);

            cycleStart = 0;

            //closes dropdown
            HeaderScanItems[0].size = 0;

            cycles = 3;

            scanLayer3HeaderPanelF();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(Layer4HeaderPanelF1B, speed);

}

/**
 * Second option
 */
function Layer4HeaderPanelF1B(){

    //selects second option of the droopdown
    HeaderScanItems[0].selectedIndex = 1;

    /**
     * add event listener. close dropdown and scans previous layer if clicked
     */
    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (HeaderScanItems[0].selectedIndex === 1) && (!footerStartStop.classList.contains("marked"))) {

            clearTimeout(timeout);

            cycleStart = 0;

            //closes dropdown
            HeaderScanItems[0].size = 0;

            cycles = 5;

            scanLayer3HeaderPanelF();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(Layer4HeaderPanelF1C, speed);

}

/**
 * Third option
 */
function Layer4HeaderPanelF1C(){

    //selects third option of the droopdown
    HeaderScanItems[0].selectedIndex = 2;

    /**
     * add event listener. close dropdown and scans previous layer if clicked
     */
    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (HeaderScanItems[0].selectedIndex === 2) && (!footerStartStop.classList.contains("marked"))) {

            clearTimeout(timeout);

            cycleStart = 0;

            //closes dropdown
            HeaderScanItems[0].size = 0;

            cycles = 10;

            scanLayer3HeaderPanelF();

            document.removeEventListener('keypress', arguments.callee);
        }
        else {
            document.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(Layer4HeaderPanelF1AFooter, speed);

}

/**
 * Last item to be scanned inside this loop. The setTimeout function needs to call the loop again. Otherwise it jumps out of it
 */
function Layer4HeaderPanelF1AFooter() {

    HeaderScanItems[0].selectedIndex = 0;

    //closes dropdown
    HeaderScanItems[0].size = 0;

    //Add mark to element
    footerStartStop.className += " marked";
    footerZurueck.className += " marked";

    footerStartStop.disabled = false;
    footerZurueck.disabled = false;

    clearTimeout(timeout);

    /**
     * Add Eventlistener. Jumps to the selection of the scanner bar. Needs to call the scanner bar loop in order to select its items
     */
    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (footerStartStop.classList.contains("marked"))) {

            clearTimeout(timeout);

            cycleStart = 0;

            //Remove mark
            footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
            footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

            scanLayer4HeaderPanelF1AFooter();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanLayer4HeaderPanelF1A, speed);
}

/**
 * Loop of the scanner bar, selects start/stop or back
 */
function scanLayer4HeaderPanelF1AFooter() {

    if (cycleStart < cycles){

        Layer4HeaderPanelF1AFooterA();

        cycleStart++;

    }
    else {

        footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

        clearTimeout(timeout);

        cycleStart = 0;

        footerStartStop.disabled = false;
        footerZurueck.disabled = true;

        headerRowLink[0].click();

        headerPanelTab.click();

        footerStartStop.focus();
    }
}

/**
 * First item of the scanner bar, start/stop. Stops the whole scanning process when clicked
 */
function Layer4HeaderPanelF1AFooterA() {

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

            headerRowLink[0].click();

            headerPanelTab.click();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(Layer4HeaderPanelF1AFooterB, speed);

}

/**
 * Last item of the scanner bar, back. Needs to call the scanner bar loop. Returns to the previous layer if clicked
 */
function Layer4HeaderPanelF1AFooterB() {

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

            scanLayer3HeaderPanelF();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanLayer4HeaderPanelF1AFooter, speed);

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////  LAYER 4, CATEGORY 6 ITEM 2 ///////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Loop, scans through all options inside dropdown of item 2
 */
function scanLayer4HeaderPanelF2A() {

    if (cycleStart < cycles){

        Layer4HeaderPanelF2A();

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

        headerRowLink[0].click();

        headerPanelTab.click();

        footerStartStop.focus();
    }

}

/**
 * First option
 */
function Layer4HeaderPanelF2A(){

    var length = HeaderScanItems[1].options.length;

    //Remove mark
    footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //opens dropdown
    HeaderScanItems[1].size = length;

    HeaderScanItems[1].selectedIndex = 0;

    /**
     * add event listener. close dropdown and scans previous layer if clicked
     */
    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (HeaderScanItems[1].selectedIndex === 0) && (!footerStartStop.classList.contains("marked"))) {

            clearTimeout(timeout);

            cycleStart = 0;

            //closes dropdown
            HeaderScanItems[1].size = 0;

            speed = 1000;

            scanLayer3HeaderPanelF();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(Layer4HeaderPanelF2B, speed);

}

/**
 * Second option
 */
function Layer4HeaderPanelF2B(){

    HeaderScanItems[1].selectedIndex = 1;

    /**
     * add event listener. close dropdown and scans previous layer if clicked
     */
    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (HeaderScanItems[1].selectedIndex === 1) && (!footerStartStop.classList.contains("marked"))) {

            clearTimeout(timeout);

            cycleStart = 0;

            //closes dropdown
            HeaderScanItems[1].size = 0;

            speed = 750;

            scanLayer3HeaderPanelF();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(Layer4HeaderPanelF2C, speed);

}

/**
 * Third option
 */
function Layer4HeaderPanelF2C(){

    HeaderScanItems[1].selectedIndex = 2;

    /**
     * add event listener. close dropdown and scans previous layer if clicked
     */
    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (HeaderScanItems[1].selectedIndex === 2) && (!footerStartStop.classList.contains("marked"))) {

            clearTimeout(timeout);

            cycleStart = 0;

            //closes dropdown
            HeaderScanItems[1].size = 0;

            speed = 2000;

            scanLayer3HeaderPanelF();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(Layer4HeaderPanelF2AFooter, speed);

}

/**
 * Last item to be scanned inside this loop. The setTimeout function needs to call the loop again. Otherwise it jumps out of it
 */
function Layer4HeaderPanelF2AFooter() {

    HeaderScanItems[1].selectedIndex = 0;

    //closes dropdown
    HeaderScanItems[1].size = 0;

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

            scanLayer4HeaderPanelF2AFooter();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanLayer4HeaderPanelF2A, speed);
}

/**
 * Loop of the scanner bar, selects start/stop or back
 */
function scanLayer4HeaderPanelF2AFooter() {

    if (cycleStart < cycles){

        Layer4HeaderPanelF2AFooterA();

        cycleStart++;

    }
    else {

        footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

        clearTimeout(timeout);

        cycleStart = 0;

        footerStartStop.disabled = false;
        footerZurueck.disabled = true;

        headerRowLink[0].click();

        headerPanelTab.click();

        footerStartStop.focus();
    }
}

/**
 * First item of the scanner bar, start/stop. Stops the whole scanning process when clicked
 */
function Layer4HeaderPanelF2AFooterA() {

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

            headerRowLink[0].click();

            headerPanelTab.click();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(Layer4HeaderPanelF2AFooterB, speed);

}

/**
 * Last item of the scanner bar, back. Needs to call the scanner bar loop. Returns to the previous layer if clicked
 */
function Layer4HeaderPanelF2AFooterB() {

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

            scanLayer3HeaderPanelF();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanLayer4HeaderPanelF2AFooter, speed);

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////  LAYER 4, CATEGORY 6 ITEM 3 ///////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Loop, scans through all options inside dropdown of item 3
 */
function scanLayer4HeaderPanelF3A() {

    if (cycleStart < cycles){

        Layer4HeaderPanelF3A();

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

        headerRowLink[0].click();

        headerPanelTab.click();

        footerStartStop.focus();
    }

}

/**
 * First option
 */
function Layer4HeaderPanelF3A(){

    var length = HeaderScanItems[2].options.length;

    //Remove mark
    footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //opens dropdown
    HeaderScanItems[2].size = length;

    HeaderScanItems[2].selectedIndex = 0;

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (HeaderScanItems[2].selectedIndex === 0) && (!footerStartStop.classList.contains("marked"))) {

            clearTimeout(timeout);

            cycleStart = 0;

            //closes dropdown
            HeaderScanItems[2].size = 0;

            color = "#FFA500";

            styleTag[0].parentNode.removeChild(styleTag[0]);

            document.getElementById("myPanelFrame").contentWindow.document.getElementsByTagName("style")[0]
                .parentNode.removeChild(document.getElementById("myPanelFrame").contentWindow.document.getElementsByTagName("style")[0]);

            createMark();
            createMarkToolbar();

            scanLayer3HeaderPanelF();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(Layer4HeaderPanelF3B, speed);

}

/**
 * Second option
 */
function Layer4HeaderPanelF3B(){

    HeaderScanItems[2].selectedIndex = 1;

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (HeaderScanItems[2].selectedIndex === 1) && (!footerStartStop.classList.contains("marked"))) {

            clearTimeout(timeout);

            cycleStart = 0;

            //closes dropdown
            HeaderScanItems[2].size = 0;

            color = "#5EEA0E";

            styleTag[0].parentNode.removeChild(styleTag[0]);

            document.getElementById("myPanelFrame").contentWindow.document.getElementsByTagName("style")[0]
                .parentNode.removeChild(document.getElementById("myPanelFrame").contentWindow.document.getElementsByTagName("style")[0]);

            createMark();
            createMarkToolbar();

            scanLayer3HeaderPanelF();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(Layer4HeaderPanelF3C, speed);

}

/**
 * Third option
 */
function Layer4HeaderPanelF3C(){

    HeaderScanItems[2].selectedIndex = 2;

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (HeaderScanItems[2].selectedIndex === 2) && (!footerStartStop.classList.contains("marked"))) {

            clearTimeout(timeout);

            cycleStart = 0;

            //closes dropdown
            HeaderScanItems[2].size = 0;

            color = "#00E6F2";

            styleTag[0].parentNode.removeChild(styleTag[0]);

            document.getElementById("myPanelFrame").contentWindow.document.getElementsByTagName("style")[0]
                .parentNode.removeChild(document.getElementById("myPanelFrame").contentWindow.document.getElementsByTagName("style")[0]);

            createMark();
            createMarkToolbar();

            scanLayer3HeaderPanelF();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(Layer4HeaderPanelF3AFooter, speed);

}

function Layer4HeaderPanelF3AFooter() {

    HeaderScanItems[2].selectedIndex = 0;

    //closes dropdown
    HeaderScanItems[2].size = 0;

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

            scanLayer4HeaderPanelF3AFooter();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanLayer4HeaderPanelF3A, speed);
}

/**
 * Loop of the scanner bar, selects start/stop or back
 */
function scanLayer4HeaderPanelF3AFooter() {

    if (cycleStart < cycles){

        Layer4HeaderPanelF3AFooterA();

        cycleStart++;

    }
    else {

        footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

        clearTimeout(timeout);

        cycleStart = 0;

        footerStartStop.disabled = false;
        footerZurueck.disabled = true;

        headerRowLink[0].click();

        headerPanelTab.click();

        footerStartStop.focus();
    }
}

function Layer4HeaderPanelF3AFooterA() {

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

            headerRowLink[0].click();

            headerPanelTab.click();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(Layer4HeaderPanelF3AFooterB, speed);

}

function Layer4HeaderPanelF3AFooterB() {

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

            scanLayer3HeaderPanelF();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanLayer4HeaderPanelF3AFooter, speed);

}