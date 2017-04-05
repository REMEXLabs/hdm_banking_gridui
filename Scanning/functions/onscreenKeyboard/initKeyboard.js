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

var checkKeyboard;

var nodes;

function initKeyboard() {

    scanKeyboardLayer1();
}

function checkKeyboards() {

    var small = document.getElementById("keyboardSmallLetter"),
        capital = document.getElementById("keyboardCapitalLetter"),
        number = document.getElementById("keyboardNumber"),
        symbol = document.getElementById("keyboardSymbols");

    var checkVisibilitySmall = window.getComputedStyle(small, null).getPropertyValue("display"),
        checkVisibilityCapital = window.getComputedStyle(capital, null).getPropertyValue("display"),
        checkVisibilityNumber = window.getComputedStyle(number, null).getPropertyValue("display"),
        checkVisibilitySymbol = window.getComputedStyle(symbol, null).getPropertyValue("display");

    if (checkVisibilitySmall === "block"){
        return checkKeyboard = "small";
    }
    else if (checkVisibilityCapital === "block"){
        return checkKeyboard = "capital";
    }
    else if (checkVisibilityNumber === "block"){
        return checkKeyboard = "number";
    }
    else if (checkVisibilitySymbol === "block"){
        return checkKeyboard = "symbol";
    }
    else {
        return checkKeyboard = "false";
    }

}

function nodePicker() {
    if (checkKeyboard === "small"){
        nodes = document.getElementById("keyboardSmallLetter").getElementsByClassName("key");
    }
    else if (checkKeyboard === "capital"){
        nodes = document.getElementById("keyboardCapitalLetter").getElementsByClassName("key");
    }
    else if (checkKeyboard === "number"){
        nodes = document.getElementById("keyboardNumber").getElementsByClassName("key");
    }
    else if (checkKeyboard === "symbol"){
        nodes = document.getElementById("keyboardSymbols").getElementsByClassName("key");
    }
}