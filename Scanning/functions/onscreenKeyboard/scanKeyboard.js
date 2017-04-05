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

var i;

var timeout;


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////KEYBOARD LAYER 1////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function scanKeyboardLayer1() {

    if (cycleStart < cycles){
        KeyboardLayer1Row1();

        cycleStart++;

        footerStartStop.disabled = true;
        footerZurueck.disabled = true;

    }
    else {

        //remove
        for (i = 0; i < uebwerweisungItems.length; i++){
            uebwerweisungItems[i].className = uebwerweisungItems[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        }

        footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

        clearTimeout(timeout);

        cycleStart = 0;

        footerZurueck.disabled = true;

        onscreenKeyboard.style.display = "none";

        footerStartStop.focus();
    }

}

////////////////////////////////////////////KEYBOARD LAYER 1 ROW 1//////////////////////////////////////////////////////

function KeyboardLayer1Row1() {

    checkKeyboards();
    nodePicker();

    onscreenKeyboard.style.display = "block";

    window.scrollBy(0, 1000);

    //remove mark
    footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    for(i=0; i<11; i++){
        nodes[i].className += " marked";
    }

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (nodes[0].classList.contains("marked"))) {

            clearTimeout(timeout);

            cycleStart = 0;

            scanKeyboardLayer2Row1();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(KeyboardLayer1Row2, speed);

}

////////////////////////////////////////////KEYBOARD LAYER 1 ROW 2//////////////////////////////////////////////////////

function KeyboardLayer1Row2() {

    checkKeyboards();
    nodePicker();

    //remove mark
    for(i=0; i<11; i++){
        nodes[i].className = nodes[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
    }

    //add mark
    for(i=11; i<21; i++){
        nodes[i].className += " marked";
    }

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (nodes[11].classList.contains("marked"))) {
            clearTimeout(timeout);

            cycleStart = 0;

            KeyboardLayer2Row2A();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(KeyboardLayer1Row3, speed);

}

////////////////////////////////////////////KEYBOARD LAYER 1 ROW 3//////////////////////////////////////////////////////

function KeyboardLayer1Row3() {

    checkKeyboards();
    nodePicker();

    //remove mark
    for(i=11; i<21; i++){
        nodes[i].className = nodes[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
    }

    //add mark
    for(i=21; i<32; i++){
        nodes[i].className += " marked";
    }

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (nodes[22].classList.contains("marked"))) {
            clearTimeout(timeout);

            cycleStart = 0;

            scanKeyboardLayer2Row3();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(KeyboardLayer1Row4, speed);

}

////////////////////////////////////////////KEYBOARD LAYER 1 ROW 4//////////////////////////////////////////////////////

function KeyboardLayer1Row4() {

    checkKeyboards();
    nodePicker();

    //remove mark
    for(i=21; i<32; i++){
        nodes[i].className = nodes[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
    }

    //add mark
    for(i=32; i<35; i++){
        nodes[i].className += " marked";
    }

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (nodes[32].classList.contains("marked"))) {
            clearTimeout(timeout);

            cycleStart = 0;

            scanKeyboardLayer2Row4();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(KeyboardLayer1Footer, speed);

}

////////////////////////////////////////////KEYBOARD LAYER 1 ROW 5//////////////////////////////////////////////////////

function KeyboardLayer1Footer() {

    checkKeyboards();
    nodePicker();

    //remove mark
    for(i=32; i<35; i++){
        nodes[i].className = nodes[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
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

            scanKeyboardLayer1Footer();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanKeyboardLayer1, speed);
}

function scanKeyboardLayer1Footer() {
    if (cycleStart < cycles){

        KeyboardLayer1FooterA();

        cycleStart++;

    }
    else {

        //remove
        for (i = 1; i < uebwerweisungItems.length; i++){
            uebwerweisungItems[i].className = uebwerweisungItems[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        }

        footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

        clearTimeout(timeout);

        cycleStart = 0;

        footerStartStop.disabled = false;
        footerZurueck.disabled = true;

        onscreenKeyboard.style.display = "none";

        footerStartStop.focus();
    }
}

function KeyboardLayer1FooterA() {

    //Remove mark
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark
    footerStartStop.className += " marked";

    footerStartStop.disabled = false;
    footerZurueck.disabled = true;

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (footerStartStop.classList.contains("marked"))) {

            clearTimeout(timeout);

            //remove
            for (i = 1; i < uebwerweisungItems.length; i++){
                uebwerweisungItems[i].className = uebwerweisungItems[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
            }
            footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
            onscreenKeyboard.style.display = "none";

            footerStartStop.focus();

            cycleStart = 0;

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(KeyboardLayer1FooterB, speed);

}

function KeyboardLayer1FooterB() {

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
            empfaenger.className = empfaenger.className.replace(/(?:^|\s)marked(?!\S)/g, '');
            footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');
            onscreenKeyboard.style.display = "none";

            cycleStart = 0;

            footerZurueck.disabled = true;

            scanLayer2Ueberweisung();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanKeyboardLayer1Footer, speed);

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////KEYBOARD LAYER 2////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////KEYBOARD LAYER 2 ROW 1//////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function scanKeyboardLayer2Row1() {

    if (cycleStart < cycles){
        KeyboardLayer2Row1A();
        cycleStart++;

        footerStartStop.disabled = true;
        footerZurueck.disabled = true;

    }
    else {

        //remove
        for (i = 0; i < uebwerweisungItems.length; i++){
            uebwerweisungItems[i].className = uebwerweisungItems[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        }

        footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

        clearTimeout(timeout);

        cycleStart = 0;

        footerZurueck.disabled = true;

        onscreenKeyboard.style.display = "none";

        footerStartStop.focus();
    }

}

////////////////////////////////////////////KEYBOARD LAYER 2 ROW 1A/////////////////////////////////////////////////////

function KeyboardLayer2Row1A() {

    checkKeyboards();
    nodePicker();

    //remove mark
    footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    for(i=0; i<11; i++){
        nodes[i].className = nodes[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
    }

    //add mark
    for(i=0; i<5; i++){
        nodes[i].className += " marked";
    }

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (nodes[0].classList.contains("marked"))) {
            clearTimeout(timeout);

            //remove mark
            for(i=0; i<5; i++){
                nodes[i].className = nodes[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
            }

            cycleStart = 0;

            scanKeyboardLayer3Row1A();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(KeyboardLayer2Row1B, speed);

}

////////////////////////////////////////////KEYBOARD LAYER 2 ROW 1B/////////////////////////////////////////////////////

function KeyboardLayer2Row1B() {

    checkKeyboards();
    nodePicker();

    //remove mark
    for(i=0; i<5; i++){
        nodes[i].className = nodes[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
    }

    //add mark
    for(i=5; i<11; i++){
        nodes[i].className += " marked";
    }

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (nodes[5].classList.contains("marked"))) {
            clearTimeout(timeout);

            //remove mark
            for(i=0; i<11; i++){
                nodes[i].className = nodes[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
            }

            cycleStart = 0;

            scanKeyboardLayer3Row1B();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(KeyboardLayer2Row1Footer ,speed);

}

function KeyboardLayer2Row1Footer() {

    checkKeyboards();
    nodePicker();

    //remove mark
    for(i=0; i<11; i++){
        nodes[i].className = nodes[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
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

            scanKeyboardLayer2Row1Footer();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanKeyboardLayer2Row1, speed);
}

////////////////////////////////////////////KEYBOARD LAYER 2 ROW 1 Footer///////////////////////////////////////////////

function scanKeyboardLayer2Row1Footer() {
    if (cycleStart < cycles){

        KeyboardLayer2Row1FooterA();

        cycleStart++;

    }
    else {

        //remove
        for (i = 1; i < uebwerweisungItems.length; i++){
            uebwerweisungItems[i].className = uebwerweisungItems[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        }

        footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

        clearTimeout(timeout);

        cycleStart = 0;

        footerStartStop.disabled = false;
        footerZurueck.disabled = true;

        onscreenKeyboard.style.display = "none";

        footerStartStop.focus();
    }
}

function KeyboardLayer2Row1FooterA() {

    //Remove mark
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark
    footerStartStop.className += " marked";

    footerStartStop.disabled = false;
    footerZurueck.disabled = true;

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (footerStartStop.classList.contains("marked"))) {

            clearTimeout(timeout);

            //remove
            for (i = 1; i < uebwerweisungItems.length; i++){
                uebwerweisungItems[i].className = uebwerweisungItems[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
            }
            footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
            onscreenKeyboard.style.display = "none";

            footerStartStop.focus();

            cycleStart = 0;

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(KeyboardLayer2row1FooterB, speed);

}

function KeyboardLayer2row1FooterB() {

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
            onscreenKeyboard.style.display = "none";

            cycleStart = 0;

            footerZurueck.disabled = true;

            scanKeyboardLayer1();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanKeyboardLayer2Row1Footer, speed);

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////KEYBOARD LAYER 2 ROW 2//////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function scanKeyboardLayer2Row2() {

    if (cycleStart < cycles){
        KeyboardLayer2Row2A();
        cycleStart++;

        footerStartStop.disabled = true;
        footerZurueck.disabled = true;

    }
    else {

        //remove
        for (i = 0; i < uebwerweisungItems.length; i++){
            uebwerweisungItems[i].className = uebwerweisungItems[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        }

        footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

        clearTimeout(timeout);

        cycleStart = 0;

        footerZurueck.disabled = true;

        onscreenKeyboard.style.display = "none";

        footerStartStop.focus();
    }

}

////////////////////////////////////////////KEYBOARD LAYER 2 ROW 2A/////////////////////////////////////////////////////

function KeyboardLayer2Row2A() {

    checkKeyboards();
    nodePicker();

    //remove mark
    footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    for(i=16; i<21; i++){
        nodes[i].className = nodes[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
    }

    //add mark
    for(i=11; i<16; i++){
        nodes[i].className += " marked";
    }

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (nodes[11].classList.contains("marked"))) {
            clearTimeout(timeout);

            for(i=11; i<21; i++){
                nodes[i].className = nodes[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
            }

            cycleStart = 0;

            scanKeyboardLayer3Row2A();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(KeyboardLayer2Row2B, speed);

}

////////////////////////////////////////////KEYBOARD LAYER 2 ROW 2B/////////////////////////////////////////////////////

function KeyboardLayer2Row2B() {

    checkKeyboards();
    nodePicker();

    //remove mark
    for(i=11; i<16; i++){
        nodes[i].className = nodes[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
    }

    //add mark
    for(i=16; i<21; i++){
        nodes[i].className += " marked";
    }

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (nodes[16].classList.contains("marked"))) {
            clearTimeout(timeout);

            //remove mark
            for(i=11; i<21; i++){
                nodes[i].className = nodes[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
            }

            cycleStart = 0;

            scanKeyboardLayer3Row2B();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(KeyboardLayer2Row2Footer ,speed);

}

////////////////////////////////////////////KEYBOARD LAYER 2 ROW 2 FOOTER///////////////////////////////////////////////

function KeyboardLayer2Row2Footer() {

    checkKeyboards();
    nodePicker();

    //remove mark
    for(i=11; i<21; i++){
        nodes[i].className = nodes[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
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

            scanKeyboardLayer2Row2Footer();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanKeyboardLayer2Row2, speed);
}

function scanKeyboardLayer2Row2Footer() {
    if (cycleStart < cycles){

        KeyboardLayer2Row2FooterA();

        cycleStart++;

    }
    else {

        //remove
        for (i = 1; i < uebwerweisungItems.length; i++){
            uebwerweisungItems[i].className = uebwerweisungItems[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        }

        footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

        clearTimeout(timeout);

        cycleStart = 0;

        footerStartStop.disabled = false;
        footerZurueck.disabled = true;

        onscreenKeyboard.style.display = "none";

        footerStartStop.focus();
    }
}

function KeyboardLayer2Row2FooterA() {

    //Remove mark
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark
    footerStartStop.className += " marked";

    footerStartStop.disabled = false;
    footerZurueck.disabled = true;

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (footerStartStop.classList.contains("marked"))) {

            clearTimeout(timeout);

            //remove
            for (i = 1; i < uebwerweisungItems.length; i++){
                uebwerweisungItems[i].className = uebwerweisungItems[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
            }
            footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
            onscreenKeyboard.style.display = "none";

            footerStartStop.focus();

            cycleStart = 0;

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(KeyboardLayer2Row2FooterB, speed);

}

function KeyboardLayer2Row2FooterB() {

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
            onscreenKeyboard.style.display = "none";

            cycleStart = 0;

            footerZurueck.disabled = true;

            scanKeyboardLayer1();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanKeyboardLayer2Row2Footer, speed);

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////KEYBOARD LAYER 2 ROW 3//////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function scanKeyboardLayer2Row3() {

    if (cycleStart < cycles){
        KeyboardLayer2Row3A();
        cycleStart++;

        footerStartStop.disabled = true;
        footerZurueck.disabled = true;

    }
    else {

        //remove
        for (i = 0; i < uebwerweisungItems.length; i++){
            uebwerweisungItems[i].className = uebwerweisungItems[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        }

        footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

        clearTimeout(timeout);

        cycleStart = 0;

        footerZurueck.disabled = true;

        onscreenKeyboard.style.display = "none";

        footerStartStop.focus();
    }

}

////////////////////////////////////////////KEYBOARD LAYER 2 ROW 3A/////////////////////////////////////////////////////

function KeyboardLayer2Row3A() {

    checkKeyboards();
    nodePicker();

    //remove mark
    footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    for(i=27; i<32; i++){
        nodes[i].className = nodes[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
    }

    //add mark
    for(i=21; i<27; i++){
        nodes[i].className += " marked";
    }

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (nodes[21].classList.contains("marked"))) {
            clearTimeout(timeout);

            //remove mark
            for(i=21; i<32; i++){
                nodes[i].className = nodes[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
            }

            cycleStart = 0;

            scanKeyboardLayer3Row3A();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(KeyboardLayer2Row3B, speed);

}

////////////////////////////////////////////KEYBOARD LAYER 2 ROW 3B/////////////////////////////////////////////////////

function KeyboardLayer2Row3B() {

    checkKeyboards();
    nodePicker();

    //remove mark
    for(i=21; i<27; i++){
        nodes[i].className = nodes[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
    }

    //add mark
    for(i=27; i<32; i++){
        nodes[i].className += " marked";
    }

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (nodes[27].classList.contains("marked"))) {
            clearTimeout(timeout);

            //remove mark
            for(i=21; i<32; i++){
                nodes[i].className = nodes[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
            }

            cycleStart = 0;

            scanKeyboardLayer3Row3B();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(KeyboardLayer2Row3Footer, speed);

}

////////////////////////////////////////////KEYBOARD LAYER 2 ROW 3 FOOTER///////////////////////////////////////////////

function KeyboardLayer2Row3Footer() {

    checkKeyboards();
    nodePicker();

    //remove mark
    for(i=21; i<32; i++){
        nodes[i].className = nodes[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
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

            scanKeyboardLayer2Row3Footer();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanKeyboardLayer2Row3, speed);
}

function scanKeyboardLayer2Row3Footer() {
    if (cycleStart < cycles){

        KeyboardLayer2Row3FooterA();

        cycleStart++;

    }
    else {

        //remove
        for (i = 1; i < uebwerweisungItems.length; i++){
            uebwerweisungItems[i].className = uebwerweisungItems[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        }

        footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

        clearTimeout(timeout);

        cycleStart = 0;

        footerStartStop.disabled = false;
        footerZurueck.disabled = true;

        onscreenKeyboard.style.display = "none";

        footerStartStop.focus();
    }
}

function KeyboardLayer2Row3FooterA() {

    //Remove mark
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark
    footerStartStop.className += " marked";

    footerStartStop.disabled = false;
    footerZurueck.disabled = true;

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (footerStartStop.classList.contains("marked"))) {

            clearTimeout(timeout);

            //remove
            for (i = 1; i < uebwerweisungItems.length; i++){
                uebwerweisungItems[i].className = uebwerweisungItems[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
            }
            footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
            onscreenKeyboard.style.display = "none";

            footerStartStop.focus();

            cycleStart = 0;

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(KeyboardLayer2Row3FooterB, speed);

}

function KeyboardLayer2Row3FooterB() {

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
            onscreenKeyboard.style.display = "none";

            cycleStart = 0;

            footerZurueck.disabled = true;

            scanKeyboardLayer1();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanKeyboardLayer2Row3Footer, speed);

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////KEYBOARD LAYER 2 ROW 4//////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function scanKeyboardLayer2Row4() {

    if (cycleStart < cycles){

        document.removeEventListener('keypress', insert32);
        document.removeEventListener('keypress', insert33);
        document.removeEventListener('keypress', insert34);

        KeyboardLayer2Row4A();
        cycleStart++;

        footerStartStop.disabled = true;
        footerZurueck.disabled = true;

    }
    else {

        //remove
        for (i = 0; i < uebwerweisungItems.length; i++){
            uebwerweisungItems[i].className = uebwerweisungItems[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        }

        footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

        clearTimeout(timeout);

        cycleStart = 0;

        footerZurueck.disabled = true;

        onscreenKeyboard.style.display = "none";

        footerStartStop.focus();
    }

}

////////////////////////////////////////////KEYBOARD LAYER 2 ROW 4A/////////////////////////////////////////////////////

function KeyboardLayer2Row4A() {

    checkKeyboards();
    nodePicker();

    //remove mark
    footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    for(i=32; i<35; i++){
        nodes[i].className = nodes[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
    }

    //add mark
    nodes[32].className += " marked";

    document.addEventListener("keypress", insert32);

    timeout = setTimeout(KeyboardLayer2Row4B, speed);

}

////////////////////////////////////////////KEYBOARD LAYER 2 ROW 4B/////////////////////////////////////////////////////

function KeyboardLayer2Row4B() {

    checkKeyboards();
    nodePicker();

    //remove mark
    nodes[32].className = nodes[32].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    nodes[33].className += " marked";

    document.addEventListener("keypress", insert33);

    timeout = setTimeout(KeyboardLayer2Row4C, speed);

}

////////////////////////////////////////////KEYBOARD LAYER 2 ROW 4C/////////////////////////////////////////////////////

function KeyboardLayer2Row4C() {

    checkKeyboards();
    nodePicker();

    //remove mark
    nodes[33].className = nodes[33].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    nodes[34].className += " marked";

    document.addEventListener("keypress", insert34);

    timeout = setTimeout(KeyboardLayer2Row4Footer ,speed);

}

////////////////////////////////////////////KEYBOARD LAYER 2 ROW 4 FOOTER///////////////////////////////////////////////

function KeyboardLayer2Row4Footer() {

    checkKeyboards();
    nodePicker();

    //remove mark
    for(i=0; i<35; i++){
        nodes[i].className = nodes[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
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

            scanKeyboardLayer2Row3Footer();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanKeyboardLayer2Row4, speed);
}

function scanKeyboardLayer2Row4Footer() {
    if (cycleStart < cycles){

        KeyboardLayer2Row4FooterA();

        cycleStart++;

    }
    else {

        //remove
        for (i = 1; i < uebwerweisungItems.length; i++){
            uebwerweisungItems[i].className = uebwerweisungItems[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        }

        footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

        clearTimeout(timeout);

        cycleStart = 0;

        footerStartStop.disabled = false;
        footerZurueck.disabled = true;

        onscreenKeyboard.style.display = "none";

        footerStartStop.focus();
    }
}

function KeyboardLayer2Row4FooterA() {

    //Remove mark
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark
    footerStartStop.className += " marked";

    footerStartStop.disabled = false;
    footerZurueck.disabled = true;

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (footerStartStop.classList.contains("marked"))) {

            clearTimeout(timeout);

            //remove mark
            empfaenger.className = empfaenger.className.replace(/(?:^|\s)marked(?!\S)/g, '');
            footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
            onscreenKeyboard.style.display = "none";

            footerStartStop.focus();

            cycleStart = 0;

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(KeyboardLayer2Row4FooterB, speed);

}

function KeyboardLayer2Row4FooterB() {

    //Remove mark
    footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark
    footerZurueck.className += " marked";

    footerStartStop.disabled = true;
    footerZurueck.disabled = false;

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (footerZurueck.classList.contains("marked"))) {

            clearTimeout(timeout);

            //remove
            for (i = 1; i < uebwerweisungItems.length; i++){
                uebwerweisungItems[i].className = uebwerweisungItems[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
            }
            footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');
            onscreenKeyboard.style.display = "none";

            cycleStart = 0;

            footerZurueck.disabled = true;

            scanKeyboardLayer1();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanKeyboardLayer2Row4Footer, speed);

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////KEYBOARD LAYER 3////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////KEYBOARD LAYER 3 ROW 1A/////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function scanKeyboardLayer3Row1A() {

    if (cycleStart < cycles){

        document.removeEventListener('keypress', insert0);
        document.removeEventListener('keypress', insert1);
        document.removeEventListener('keypress', insert2);
        document.removeEventListener('keypress', insert3);
        document.removeEventListener('keypress', insert4);

        KeyboardLayer3Row1A0();
        cycleStart++;

        footerStartStop.disabled = true;
        footerZurueck.disabled = true;

    }
    else {

        //remove
        for (i = 0; i < uebwerweisungItems.length; i++){
            uebwerweisungItems[i].className = uebwerweisungItems[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        }

        footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

        clearTimeout(timeout);

        cycleStart = 0;

        footerZurueck.disabled = true;

        onscreenKeyboard.style.display = "none";

        footerStartStop.focus();
    }

}

////////////////////////////////////////////KEYBOARD LAYER 3 ROW 1A INSERT 0////////////////////////////////////////////

function KeyboardLayer3Row1A0() {

    checkKeyboards();
    nodePicker();

    //remove mark
    footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    nodes[0].className += " marked";

    document.addEventListener("keypress", insert0);

    timeout = setTimeout(KeyboardLayer3Row1A1, speed);

}

////////////////////////////////////////////KEYBOARD LAYER 3 ROW 1A INSERT 1////////////////////////////////////////////

function KeyboardLayer3Row1A1() {

    checkKeyboards();
    nodePicker();

    //remove mark
    nodes[0].className = nodes[0].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    nodes[1].className += " marked";

    document.addEventListener("keypress", insert1);

    timeout = setTimeout(KeyboardLayer3Row1A2, speed);

}

////////////////////////////////////////////KEYBOARD LAYER 3 ROW 1A INSERT 2////////////////////////////////////////////

function KeyboardLayer3Row1A2() {

    checkKeyboards();
    nodePicker();

    //remove mark
    nodes[1].className = nodes[1].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    nodes[2].className += " marked";

    document.addEventListener("keypress", insert2);

    timeout = setTimeout(KeyboardLayer3Row1A3, speed);

}

////////////////////////////////////////////KEYBOARD LAYER 3 ROW 1A INSERT 3////////////////////////////////////////////

function KeyboardLayer3Row1A3() {

    checkKeyboards();
    nodePicker();

    //remove mark
    nodes[2].className = nodes[2].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    nodes[3].className += " marked";

    document.addEventListener("keypress", insert3);

    timeout = setTimeout(KeyboardLayer3Row1A4, speed);

}

////////////////////////////////////////////KEYBOARD LAYER 3 ROW 1A INSERT 4////////////////////////////////////////////

function KeyboardLayer3Row1A4() {

    checkKeyboards();
    nodePicker();

    //remove mark
    nodes[3].className = nodes[3].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    nodes[4].className += " marked";

    document.addEventListener("keypress", insert4);

    timeout = setTimeout(KeyboardLayer3Row1AFooter, speed);

}

////////////////////////////////////////////KEYBOARD LAYER 3 ROW 1A FOOTER//////////////////////////////////////////////

function KeyboardLayer3Row1AFooter() {

    checkKeyboards();
    nodePicker();

    //remove mark
    nodes[4].className = nodes[4].className.replace(/(?:^|\s)marked(?!\S)/g, '');

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

            scanKeyboardLayer3Row1AFooter();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanKeyboardLayer3Row1A, speed);
}


function scanKeyboardLayer3Row1AFooter() {
    if (cycleStart < cycles){

        KeyboardLayer3Row1AFooterA();

        cycleStart++;

    }
    else {

        //remove
        for (i = 1; i < uebwerweisungItems.length; i++){
            uebwerweisungItems[i].className = uebwerweisungItems[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        }

        footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

        clearTimeout(timeout);

        cycleStart = 0;

        footerStartStop.disabled = false;
        footerZurueck.disabled = true;

        onscreenKeyboard.style.display = "none";

        footerStartStop.focus();
    }
}

function KeyboardLayer3Row1AFooterA() {

    //Remove mark
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark
    footerStartStop.className += " marked";

    footerStartStop.disabled = false;
    footerZurueck.disabled = true;

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (footerStartStop.classList.contains("marked"))) {

            clearTimeout(timeout);

            //remove
            for (i = 1; i < uebwerweisungItems.length; i++){
                uebwerweisungItems[i].className = uebwerweisungItems[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
            }
            footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
            onscreenKeyboard.style.display = "none";

            footerStartStop.focus();

            cycleStart = 0;

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(KeyboardLayer3Row1AFooterB, speed);

}

function KeyboardLayer3Row1AFooterB() {

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

            scanKeyboardLayer2Row1();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanKeyboardLayer3Row1AFooter, speed);

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////KEYBOARD LAYER 3 ROW 1B/////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function scanKeyboardLayer3Row1B() {

    if (cycleStart < cycles){

        document.removeEventListener('keypress', insert5);
        document.removeEventListener('keypress', insert6);
        document.removeEventListener('keypress', insert7);
        document.removeEventListener('keypress', insert8);
        document.removeEventListener('keypress', insert9);
        document.removeEventListener('keypress', insert10);

        KeyboardLayer3Row1B5();
        cycleStart++;

        footerStartStop.disabled = true;
        footerZurueck.disabled = true;

    }
    else {

        //remove
        for (i = 0; i < uebwerweisungItems.length; i++){
            uebwerweisungItems[i].className = uebwerweisungItems[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        }

        footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

        clearTimeout(timeout);

        cycleStart = 0;

        footerZurueck.disabled = true;

        onscreenKeyboard.style.display = "none";

        footerStartStop.focus();
    }

}

////////////////////////////////////////////KEYBOARD LAYER 3 ROW 1B INSERT 5////////////////////////////////////////////

function KeyboardLayer3Row1B5() {

    checkKeyboards();
    nodePicker();

    //remove mark
    footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    nodes[5].className += " marked";

    document.addEventListener("keypress", insert5);

    timeout = setTimeout(KeyboardLayer3Row1B6, speed);

}

////////////////////////////////////////////KEYBOARD LAYER 3 ROW 1B INSERT 6////////////////////////////////////////////

function KeyboardLayer3Row1B6() {

    checkKeyboards();
    nodePicker();

    //remove mark
    nodes[5].className = nodes[5].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    nodes[6].className += " marked";

    document.addEventListener("keypress", insert6);

    timeout = setTimeout(KeyboardLayer3Row1B7, speed);

}

////////////////////////////////////////////KEYBOARD LAYER 3 ROW 1B INSERT 7////////////////////////////////////////////

function KeyboardLayer3Row1B7() {

    checkKeyboards();
    nodePicker();

    //remove mark
    nodes[6].className = nodes[6].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    nodes[7].className += " marked";

    document.addEventListener("keypress", insert7);

    timeout = setTimeout(KeyboardLayer3Row1B8, speed);

}

////////////////////////////////////////////KEYBOARD LAYER 3 ROW 1B INSERT 8////////////////////////////////////////////

function KeyboardLayer3Row1B8() {

    checkKeyboards();
    nodePicker();

    //remove mark
    nodes[7].className = nodes[7].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    nodes[8].className += " marked";

    document.addEventListener("keypress", insert8);

    timeout = setTimeout(KeyboardLayer3Row1B9, speed);

}

////////////////////////////////////////////KEYBOARD LAYER 3 ROW 1B INSERT 9////////////////////////////////////////////

function KeyboardLayer3Row1B9() {

    checkKeyboards();
    nodePicker();

    //remove mark
    nodes[8].className = nodes[8].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    nodes[9].className += " marked";

    document.addEventListener("keypress", insert9);

    timeout = setTimeout(KeyboardLayer3Row1B10, speed);

}

////////////////////////////////////////////KEYBOARD LAYER 3 ROW 1B INSERT 10///////////////////////////////////////////

function KeyboardLayer3Row1B10() {

    checkKeyboards();
    nodePicker();

    //remove mark
    nodes[9].className = nodes[9].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    nodes[10].className += " marked";

    document.addEventListener("keypress", insert10);

    timeout = setTimeout(KeyboardLayer3Row1BFooter, speed);

}

////////////////////////////////////////////KEYBOARD LAYER 3 ROW 1B FOOTER//////////////////////////////////////////////

function KeyboardLayer3Row1BFooter() {

    checkKeyboards();
    nodePicker();

    //remove mark
    nodes[10].className = nodes[10].className.replace(/(?:^|\s)marked(?!\S)/g, '');

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

            scanKeyboardLayer3Row1BFooter();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanKeyboardLayer3Row1B, speed);
}


function scanKeyboardLayer3Row1BFooter() {
    if (cycleStart < cycles){

        KeyboardLayer3Row1BFooterA();

        cycleStart++;

    }
    else {

        //remove
        for (i = 1; i < uebwerweisungItems.length; i++){
            uebwerweisungItems[i].className = uebwerweisungItems[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        }

        footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

        clearTimeout(timeout);

        cycleStart = 0;

        footerStartStop.disabled = false;
        footerZurueck.disabled = true;

        onscreenKeyboard.style.display = "none";

        footerStartStop.focus();
    }
}

function KeyboardLayer3Row1BFooterA() {

    //Remove mark
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark
    footerStartStop.className += " marked";

    footerStartStop.disabled = false;
    footerZurueck.disabled = true;

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (footerStartStop.classList.contains("marked"))) {

            clearTimeout(timeout);

            //remove
            for (i = 1; i < uebwerweisungItems.length; i++){
                uebwerweisungItems[i].className = uebwerweisungItems[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
            }
            footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
            onscreenKeyboard.style.display = "none";

            footerStartStop.focus();

            cycleStart = 0;

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(KeyboardLayer3Row1BFooterB, speed);

}

function KeyboardLayer3Row1BFooterB() {

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

            scanKeyboardLayer2Row1();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanKeyboardLayer3Row1BFooter, speed);

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////KEYBOARD LAYER 3 ROW 2A/////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function scanKeyboardLayer3Row2A() {

    if (cycleStart < cycles){

        document.removeEventListener('keypress', insert11);
        document.removeEventListener('keypress', insert12);
        document.removeEventListener('keypress', insert13);
        document.removeEventListener('keypress', insert14);
        document.removeEventListener('keypress', insert15);

        KeyboardLayer3Row2A11();
        cycleStart++;

        footerStartStop.disabled = true;
        footerZurueck.disabled = true;

    }
    else {

        //remove
        for (i = 0; i < uebwerweisungItems.length; i++){
            uebwerweisungItems[i].className = uebwerweisungItems[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        }

        footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

        clearTimeout(timeout);

        cycleStart = 0;

        footerZurueck.disabled = true;

        onscreenKeyboard.style.display = "none";

        footerStartStop.focus();
    }

}

////////////////////////////////////////////KEYBOARD LAYER 3 ROW 2A INSERT 11///////////////////////////////////////////

function KeyboardLayer3Row2A11() {

    checkKeyboards();
    nodePicker();

    //remove mark
    footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    nodes[11].className += " marked";

    document.addEventListener("keypress", insert11);

    timeout = setTimeout(KeyboardLayer3Row2A12, speed);

}

////////////////////////////////////////////KEYBOARD LAYER 3 ROW 2A INSERT 12///////////////////////////////////////////

function KeyboardLayer3Row2A12() {

    checkKeyboards();
    nodePicker();

    //remove mark
    nodes[11].className = nodes[11].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    nodes[12].className += " marked";

    document.addEventListener("keypress", insert12);

    timeout = setTimeout(KeyboardLayer3Row2A13, speed);

}

////////////////////////////////////////////KEYBOARD LAYER 3 ROW 2A INSERT 13///////////////////////////////////////////

function KeyboardLayer3Row2A13() {

    checkKeyboards();
    nodePicker();

    //remove mark
    nodes[12].className = nodes[12].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    nodes[13].className += " marked";

    document.addEventListener("keypress", insert13);

    timeout = setTimeout(KeyboardLayer3Row2A14, speed);

}

////////////////////////////////////////////KEYBOARD LAYER 3 ROW 2A INSERT 14///////////////////////////////////////////

function KeyboardLayer3Row2A14() {

    checkKeyboards();
    nodePicker();

    //remove mark
    nodes[13].className = nodes[13].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    nodes[14].className += " marked";

    document.addEventListener("keypress", insert14);

    timeout = setTimeout(KeyboardLayer3Row2A15, speed);

}

////////////////////////////////////////////KEYBOARD LAYER 3 ROW 2A INSERT 15///////////////////////////////////////////

function KeyboardLayer3Row2A15() {

    checkKeyboards();
    nodePicker();

    //remove mark
    nodes[14].className = nodes[14].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    nodes[15].className += " marked";

    document.addEventListener("keypress", insert15);

    timeout = setTimeout(KeyboardLayer3Row2AFooter, speed);

}

////////////////////////////////////////////KEYBOARD LAYER 3 ROW 2A FOOTER//////////////////////////////////////////////

function KeyboardLayer3Row2AFooter() {

    checkKeyboards();
    nodePicker();

    //remove mark
    nodes[15].className = nodes[15].className.replace(/(?:^|\s)marked(?!\S)/g, '');

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

            scanKeyboardLayer3Row2AFooter();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanKeyboardLayer3Row2A, speed);
}


function scanKeyboardLayer3Row2AFooter() {
    if (cycleStart < cycles){

        KeyboardLayer3Row2AFooterA();

        cycleStart++;

    }
    else {

        //remove
        for (i = 1; i < uebwerweisungItems.length; i++){
            uebwerweisungItems[i].className = uebwerweisungItems[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        }

        footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

        clearTimeout(timeout);

        cycleStart = 0;

        footerStartStop.disabled = false;
        footerZurueck.disabled = true;

        onscreenKeyboard.style.display = "none";

        footerStartStop.focus();
    }
}

function KeyboardLayer3Row2AFooterA() {

    //Remove mark
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark
    footerStartStop.className += " marked";

    footerStartStop.disabled = false;
    footerZurueck.disabled = true;

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (footerStartStop.classList.contains("marked"))) {

            clearTimeout(timeout);

            //remove
            for (i = 1; i < uebwerweisungItems.length; i++){
                uebwerweisungItems[i].className = uebwerweisungItems[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
            }
            footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
            onscreenKeyboard.style.display = "none";

            footerStartStop.focus();

            cycleStart = 0;

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(KeyboardLayer3Row2AFooterB, speed);

}

function KeyboardLayer3Row2AFooterB() {

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

            scanKeyboardLayer2Row1();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanKeyboardLayer3Row2AFooter, speed);

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////KEYBOARD LAYER 3 ROW 2B/////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function scanKeyboardLayer3Row2B() {

    if (cycleStart < cycles){

        document.removeEventListener('keypress', insert16);
        document.removeEventListener('keypress', insert17);
        document.removeEventListener('keypress', insert18);
        document.removeEventListener('keypress', insert19);
        document.removeEventListener('keypress', insert20);

        KeyboardLayer3Row2B16();
        cycleStart++;

        footerStartStop.disabled = true;
        footerZurueck.disabled = true;

    }
    else {

        //remove
        for (i = 0; i < uebwerweisungItems.length; i++){
            uebwerweisungItems[i].className = uebwerweisungItems[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        }

        footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

        clearTimeout(timeout);

        cycleStart = 0;

        footerZurueck.disabled = true;

        onscreenKeyboard.style.display = "none";

        footerStartStop.focus();
    }

}

////////////////////////////////////////////KEYBOARD LAYER 3 ROW 2B INSERT 16///////////////////////////////////////////

function KeyboardLayer3Row2B16() {

    checkKeyboards();
    nodePicker();

    //remove mark
    footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    nodes[16].className += " marked";

    document.addEventListener("keypress", insert16);

    timeout = setTimeout(KeyboardLayer3Row2B17, speed);

}

////////////////////////////////////////////KEYBOARD LAYER 3 ROW 2B INSERT 17///////////////////////////////////////////

function KeyboardLayer3Row2B17() {

    checkKeyboards();
    nodePicker();

    //remove mark
    nodes[16].className = nodes[16].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    nodes[17].className += " marked";

    document.addEventListener("keypress", insert17);

    timeout = setTimeout(KeyboardLayer3Row2B18, speed);

}

////////////////////////////////////////////KEYBOARD LAYER 3 ROW 2B INSERT 18///////////////////////////////////////////

function KeyboardLayer3Row2B18() {

    checkKeyboards();
    nodePicker();

    //remove mark
    nodes[17].className = nodes[17].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    nodes[18].className += " marked";

    document.addEventListener("keypress", insert18);

    timeout = setTimeout(KeyboardLayer3Row2B19, speed);

}

////////////////////////////////////////////KEYBOARD LAYER 3 ROW 2B INSERT 19///////////////////////////////////////////

function KeyboardLayer3Row2B19() {

    checkKeyboards();
    nodePicker();

    //remove mark
    nodes[18].className = nodes[18].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    nodes[19].className += " marked";

    document.addEventListener("keypress", insert19);

    timeout = setTimeout(KeyboardLayer3Row2B20, speed);

}

////////////////////////////////////////////KEYBOARD LAYER 3 ROW 2B INSERT 20///////////////////////////////////////////

function KeyboardLayer3Row2B20() {

    checkKeyboards();
    nodePicker();

    //remove mark
    nodes[19].className = nodes[19].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    nodes[20].className += " marked";

    document.addEventListener("keypress", insert20);

    timeout = setTimeout(KeyboardLayer3Row2BFooter, speed);

}

////////////////////////////////////////////KEYBOARD LAYER 3 ROW 2B FOOTER//////////////////////////////////////////////

function KeyboardLayer3Row2BFooter() {

    checkKeyboards();
    nodePicker();

    //remove mark
    nodes[20].className = nodes[20].className.replace(/(?:^|\s)marked(?!\S)/g, '');

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

            scanKeyboardLayer3Row2BFooter();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanKeyboardLayer3Row2B, speed);
}


function scanKeyboardLayer3Row2BFooter() {
    if (cycleStart < cycles){

        KeyboardLayer3Row2BFooterA();

        cycleStart++;

    }
    else {

        //remove
        for (i = 1; i < uebwerweisungItems.length; i++){
            uebwerweisungItems[i].className = uebwerweisungItems[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        }

        footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

        clearTimeout(timeout);

        cycleStart = 0;

        footerStartStop.disabled = false;
        footerZurueck.disabled = true;

        onscreenKeyboard.style.display = "none";

        footerStartStop.focus();
    }
}

function KeyboardLayer3Row2BFooterA() {

    //Remove mark
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark
    footerStartStop.className += " marked";

    footerStartStop.disabled = false;
    footerZurueck.disabled = true;

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (footerStartStop.classList.contains("marked"))) {

            clearTimeout(timeout);

            //remove
            for (i = 1; i < uebwerweisungItems.length; i++){
                uebwerweisungItems[i].className = uebwerweisungItems[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
            }
            footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
            onscreenKeyboard.style.display = "none";

            footerStartStop.focus();

            cycleStart = 0;

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(KeyboardLayer3Row2BFooterB, speed);

}

function KeyboardLayer3Row2BFooterB() {

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

            scanKeyboardLayer2Row1();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanKeyboardLayer3Row2BFooter, speed);

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////KEYBOARD LAYER 3 ROW 3A/////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function scanKeyboardLayer3Row3A() {

    if (cycleStart < cycles){

        document.removeEventListener('keypress', insert21);
        document.removeEventListener('keypress', insert22);
        document.removeEventListener('keypress', insert23);
        document.removeEventListener('keypress', insert24);
        document.removeEventListener('keypress', insert25);
        document.removeEventListener('keypress', insert26);

        KeyboardLayer3Row3A21();
        cycleStart++;

        footerStartStop.disabled = true;
        footerZurueck.disabled = true;

    }
    else {

        //remove
        for (i = 0; i < uebwerweisungItems.length; i++){
            uebwerweisungItems[i].className = uebwerweisungItems[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        }

        footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

        clearTimeout(timeout);

        cycleStart = 0;

        footerZurueck.disabled = true;

        onscreenKeyboard.style.display = "none";

        footerStartStop.focus();
    }

}

////////////////////////////////////////////KEYBOARD LAYER 3 ROW 3A INSERT 21///////////////////////////////////////////

function KeyboardLayer3Row3A21() {

    checkKeyboards();
    nodePicker();

    //remove mark
    footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    nodes[21].className += " marked";

    document.addEventListener("keypress", insert21);

    timeout = setTimeout(KeyboardLayer3Row3A22, speed);

}

////////////////////////////////////////////KEYBOARD LAYER 3 ROW 3A INSERT 22///////////////////////////////////////////

function KeyboardLayer3Row3A22() {

    checkKeyboards();
    nodePicker();

    //remove mark
    nodes[21].className = nodes[21].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    nodes[22].className += " marked";

    document.addEventListener("keypress", insert22);

    timeout = setTimeout(KeyboardLayer3Row3A23, speed);

}

////////////////////////////////////////////KEYBOARD LAYER 3 ROW 3A INSERT 23///////////////////////////////////////////

function KeyboardLayer3Row3A23() {

    checkKeyboards();
    nodePicker();

    //remove mark
    nodes[22].className = nodes[22].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    nodes[23].className += " marked";

    document.addEventListener("keypress", insert23);

    timeout = setTimeout(KeyboardLayer3Row3A24, speed);

}

////////////////////////////////////////////KEYBOARD LAYER 3 ROW 3A INSERT 24///////////////////////////////////////////

function KeyboardLayer3Row3A24() {

    checkKeyboards();
    nodePicker();

    //remove mark
    nodes[23].className = nodes[23].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    nodes[24].className += " marked";

    document.addEventListener("keypress", insert24);

    timeout = setTimeout(KeyboardLayer3Row3A25, speed);

}

////////////////////////////////////////////KEYBOARD LAYER 3 ROW 3A INSERT 25///////////////////////////////////////////

function KeyboardLayer3Row3A25() {

    checkKeyboards();
    nodePicker();

    //remove mark
    nodes[24].className = nodes[24].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    nodes[25].className += " marked";

    document.addEventListener("keypress", insert25);

    timeout = setTimeout(KeyboardLayer3Row3A26, speed);

}

////////////////////////////////////////////KEYBOARD LAYER 3 ROW 3A INSERT 26///////////////////////////////////////////

function KeyboardLayer3Row3A26() {

    checkKeyboards();
    nodePicker();

    //remove mark
    nodes[25].className = nodes[25].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    nodes[26].className += " marked";

    document.addEventListener("keypress", insert26);

    timeout = setTimeout(KeyboardLayer3Row3AFooter, speed);

}

////////////////////////////////////////////KEYBOARD LAYER 3 ROW 3A FOOTER//////////////////////////////////////////////

function KeyboardLayer3Row3AFooter() {

    checkKeyboards();
    nodePicker();

    //remove mark
    nodes[26].className = nodes[26].className.replace(/(?:^|\s)marked(?!\S)/g, '');

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

            scanKeyboardLayer3Row3AFooter();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanKeyboardLayer3Row3A, speed);
}


function scanKeyboardLayer3Row3AFooter() {
    if (cycleStart < cycles){

        KeyboardLayer3Row3AFooterA();

        cycleStart++;

    }
    else {

        //remove
        for (i = 1; i < uebwerweisungItems.length; i++){
            uebwerweisungItems[i].className = uebwerweisungItems[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        }

        footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

        clearTimeout(timeout);

        cycleStart = 0;

        footerStartStop.disabled = false;
        footerZurueck.disabled = true;

        onscreenKeyboard.style.display = "none";

        footerStartStop.focus();
    }
}

function KeyboardLayer3Row3AFooterA() {

    //Remove mark
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark
    footerStartStop.className += " marked";

    footerStartStop.disabled = false;
    footerZurueck.disabled = true;

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (footerStartStop.classList.contains("marked"))) {

            clearTimeout(timeout);

            //remove mark
            for (i = 1; i < uebwerweisungItems.length; i++){
                uebwerweisungItems[i].className = uebwerweisungItems[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
            }
            footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
            onscreenKeyboard.style.display = "none";

            footerStartStop.focus();

            cycleStart = 0;

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(KeyboardLayer3Row3AFooterB, speed);

}

function KeyboardLayer3Row3AFooterB() {

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

            scanKeyboardLayer2Row1();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanKeyboardLayer3Row3AFooter, speed);

}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////KEYBOARD LAYER 3 ROW 3B/////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function scanKeyboardLayer3Row3B() {

    if (cycleStart < cycles){

        document.removeEventListener('keypress', insert27);
        document.removeEventListener('keypress', insert28);
        document.removeEventListener('keypress', insert29);
        document.removeEventListener('keypress', insert30);
        document.removeEventListener('keypress', insert31);

        KeyboardLayer3Row3B27();
        cycleStart++;

        footerStartStop.disabled = true;
        footerZurueck.disabled = true;

    }
    else {

        //remove
        for (i = 0; i < uebwerweisungItems.length; i++){
            uebwerweisungItems[i].className = uebwerweisungItems[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        }

        footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

        clearTimeout(timeout);

        cycleStart = 0;

        footerZurueck.disabled = true;

        onscreenKeyboard.style.display = "none";

        footerStartStop.focus();
    }

}

////////////////////////////////////////////KEYBOARD LAYER 3 ROW 3B INSERT 27///////////////////////////////////////////

function KeyboardLayer3Row3B27() {

    checkKeyboards();
    nodePicker();

    //remove mark
    footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    nodes[27].className += " marked";

    document.addEventListener("keypress", insert27);

    timeout = setTimeout(KeyboardLayer3Row3B28, speed);

}

////////////////////////////////////////////KEYBOARD LAYER 3 ROW 3B INSERT 28///////////////////////////////////////////

function KeyboardLayer3Row3B28() {

    checkKeyboards();
    nodePicker();

    //remove mark
    nodes[27].className = nodes[27].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    nodes[28].className += " marked";

    document.addEventListener("keypress", insert28);

    timeout = setTimeout(KeyboardLayer3Row3B29, speed);

}

////////////////////////////////////////////KEYBOARD LAYER 3 ROW 3B INSERT 29///////////////////////////////////////////

function KeyboardLayer3Row3B29() {

    checkKeyboards();
    nodePicker();

    //remove mark
    nodes[28].className = nodes[28].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    nodes[29].className += " marked";

    document.addEventListener("keypress", insert29);

    timeout = setTimeout(KeyboardLayer3Row3B30, speed);

}

////////////////////////////////////////////KEYBOARD LAYER 3 ROW 3B INSERT 30///////////////////////////////////////////

function KeyboardLayer3Row3B30() {

    checkKeyboards();
    nodePicker();

    //remove mark
    nodes[29].className = nodes[29].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    nodes[30].className += " marked";

    document.addEventListener("keypress", insert30);

    timeout = setTimeout(KeyboardLayer3Row3B31, speed);

}

////////////////////////////////////////////KEYBOARD LAYER 3 ROW 3B INSERT 31///////////////////////////////////////////

function KeyboardLayer3Row3B31() {

    checkKeyboards();
    nodePicker();

    //remove mark
    nodes[30].className = nodes[30].className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //add mark
    nodes[31].className += " marked";

    document.addEventListener("keypress", insert31);

    timeout = setTimeout(KeyboardLayer3Row3BFooter, speed);

}

////////////////////////////////////////////KEYBOARD LAYER 3 ROW 3B FOOTER//////////////////////////////////////////////

function KeyboardLayer3Row3BFooter() {

    checkKeyboards();
    nodePicker();

    //remove mark
    nodes[31].className = nodes[31].className.replace(/(?:^|\s)marked(?!\S)/g, '');

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

            scanKeyboardLayer3Row3BFooter();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanKeyboardLayer3Row3B, speed);
}


function scanKeyboardLayer3Row3BFooter() {
    if (cycleStart < cycles){

        KeyboardLayer3Row3BFooterA();

        cycleStart++;

    }
    else {

        //remove
        for (i = 1; i < uebwerweisungItems.length; i++){
            uebwerweisungItems[i].className = uebwerweisungItems[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
        }

        footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
        footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

        clearTimeout(timeout);

        cycleStart = 0;

        footerStartStop.disabled = false;
        footerZurueck.disabled = true;

        onscreenKeyboard.style.display = "none";

        footerStartStop.focus();
    }
}

function KeyboardLayer3Row3BFooterA() {

    //Remove mark
    footerZurueck.className = footerZurueck.className.replace(/(?:^|\s)marked(?!\S)/g, '');

    //Add mark
    footerStartStop.className += " marked";

    footerStartStop.disabled = false;
    footerZurueck.disabled = true;

    document.addEventListener("keypress", function(e) {
        if ((e.keyCode === 13) && (footerStartStop.classList.contains("marked"))) {

            clearTimeout(timeout);

            //remove
            for (i = 1; i < uebwerweisungItems.length; i++){
                uebwerweisungItems[i].className = uebwerweisungItems[i].className.replace(/(?:^|\s)marked(?!\S)/g, '');
            }
            footerStartStop.className = footerStartStop.className.replace(/(?:^|\s)marked(?!\S)/g, '');
            onscreenKeyboard.style.display = "none";

            footerStartStop.focus();

            cycleStart = 0;

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(KeyboardLayer3Row3BFooterB, speed);

}

function KeyboardLayer3Row3BFooterB() {

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

            scanKeyboardLayer2Row1();

            this.removeEventListener('keypress', arguments.callee);
        }
        else {
            this.removeEventListener('keypress', arguments.callee);
        }
    });

    timeout = setTimeout(scanKeyboardLayer3Row3BFooter, speed);

}