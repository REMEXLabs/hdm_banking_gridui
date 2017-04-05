/*
* Copyright 2015 Hochschule der Medien (HdM) / Stuttgart Media University
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


/**
 * @author Patrick Münster
 */

//constant data
TYPE_SLIDER = 'slider';
TYPE_DROPDOWN = 'dropdown';
TYPE_CHECKBOX = 'checkbox';
LANGUAGE = 'en';
NEW_INIT = true;


/**********************/
/* APPLICATION LABELS */
/**********************/

/**
 * This list contains all labels of the ASpanel. 
 */
var ApplicationLabels = {
    tabs : {
        category_1 : {
            en : "Text and Display",
            de : "Text und Anzeige"
        },
        category_2 : {
            en : "Layout and Navigation",
            de : "Layout und Navigation"
        },
        category_3 : {
            en: "Links and Buttons",
            de: "Links und Buttons"
        },
        category_4 : {
            en: "Language Settings",
            de: "Spracheinstellungen"
        },
        category_5 : {
            en: "GPII",
            de: "GPII"  
        },
        category_6 : {
            en: "Scanning",
            de: "Scanning"
        }
    },
    buttons : {
        resetButton: {
            en: "Reset",
            de: "Zurücksetzen"
        }
    }
}; 


/********************/
/* UI-COMPONENTLIST */
/********************/

/**
 * This list contains all components of the ASpanel. Do not change the order of components!
 * Add new components at the end of the list.
 */
var UIComponentList = {

    //#### TEXTSIZE ####//

    textSize_slider : {

        ui_component_id : "textSize_slider", // used as id in html-tags, needs to be application-wide unique
        ui_input_id : "textSize", // used as id in html-tags, needs to be application-wide unique
        title : {
            en : "Text Size",
            de : "Textgröße"
        },
        defaultValue : 1.4,
        resetValue : 1.4,
        category : "cat1",
        type : TYPE_SLIDER,
        minValue : 1,
        maxValue : 3, // by changing this value the AS_textSize function must be changed too 
        stepSize : 0.1,
        minText : {
            en : "small",
            de : "klein"
        },
        maxText : {
            en : "big",
            de : "groß"
        },
        inputLabel : {
            en : "times",
            de : "mal"
        },
        changeEvent : function(value) {

            if (parent.AS_textSize != undefined) {

                //input validation
                var multiplier = parseFloat(value);

                // if (multiplier < 1.0) {
                    // multiplier = 1.0;
                // }
                // if (multiplier > 2.0) {
//                     
                    // multiplier = 2.0;
                // }

                parent.AS_textSize.set(multiplier);
            }
        }
    },

    //#### LINESPACING ####//

    lineSpacing_slider : {
        ui_component_id : 'lineSpacing_slider',
        ui_input_id : 'lineSpacing',
        title : {
            en : 'Line Spacing',
            de : 'Zeilenabstand'
        },
        defaultValue : 1.5,
        resetValue : 1.5,
        category : "cat1",
        type : TYPE_SLIDER,
        changeEvent : function(value) {
            if (parent.AS_lineSpacing != undefined) {
                parent.AS_lineSpacing.set(value);
            }
        },
        minValue : 1,
        maxValue : 3,
        stepSize : 0.1,
        minText : {
            en : "small",
            de : "klein"
        },
        maxText : {
            en : "big",
            de : "groß"
        },
        inputLabel : {
            en : "times",
            de : "mal"
        }
    },

    //#### TEXTSTYLE ####//

    textStyle_dropdown : {

        ui_component_id : "textStyle_dropdown",
        title : {
            en : "Text Style",
            de : "Textstil"
        },
        defaultValue : {
            option_id : "default",
            name : "Default"
        },
        resetValue : {
            option_id : "default",
            name : "Default"
        },
        category : "cat1",
        type : TYPE_DROPDOWN,
        options : [{
            option_id : "default", // used as value-attribute in option-tag
            name : "Default" // used as text in option-tag
        }, {
            option_id : "times",
            name : "Times New Roman"
        }, {
            option_id : "arial",
            name : "Arial"
        }, {
            option_id : "verdana",
            name : "Verdana"
        }, {
            option_id : "comic sans ms",
            name : "Comic Sans MS"
        }],
        changeEvent : function(value) {
            if (parent.AS_textStyle != undefined) {
                parent.AS_textStyle.change(value);
            }
        }
    },

    //#### PICTOGRAM SUPPORT ####//

    picsupport_dropdown : {

        ui_component_id : 'picsupport_dropdown',
        title : {
            en : 'Pictograms',
            de : 'Piktogramme'
        },
        defaultValue : {
            option_id : "picsupport-off",
            name : "Off"
        },
        resetValue : {
            option_id : "picsupport-off",
            name : "Off"
        },
        category : "cat1",
        type : TYPE_DROPDOWN,
        options : [{
            option_id : "picsupport-off", // used as value-attribute in option-tag
            name : "Off" // used as text in option-tag
        }, {
            option_id : "picsupport-en",
            name : "English"
        }, {
            option_id : "picsupport-de",
            name : "Deutsch"
        }],
        changeEvent : function(value) {
            parent.AS_picsupport.activate(value);
        }
    },

    //#### TABLE OF CONTENT ####//

    table_of_content : {

        ui_component_id : "table_of_content",
        title : {
            en : "Show table of contents",
            de : "Inhaltsverzeichnis anzeigen"
        },
        defaultValue : false,
        defaultValue : false,
        category : "cat2",
        type : TYPE_CHECKBOX,
        explanation : {
            en : "Adds a table of contents to the top of the page.",
            de : "Fügt am Anfang der Seite ein Inhaltsverzeichnis ein."
        },
        changeEvent : function(value) {
            parent.AS_showTableOfContents(value);
        }
    },

    signlanguageLanguage_dropdown : {

       ui_component_id : "signlanguageLanguage_dropdown",
       title : {
            en : 'Sign Language',
            de : 'Gebärdensprache'
        },
        defaultValue : {
            option_id : "gsg",
            name : "Deutsche Gebärdensprache (GSG)"
        },
        resetValue : {
            option_id : "gsg",
            name : "Deutsche Gebärdensprache (GSG)"
        },
        category : "cat4",
        type : TYPE_DROPDOWN,
        options : [{
            option_id : "gsg",
            name : "Deutsche Gebärdensprache (GSG)"
        }, {
            option_id : "asl",
            name : "American Sign Language (ASL)"
        }],
        changeEvent : function(value) {
            parent.slSettings.Language = value;
            parent.myURCLightController.lockSLVOptions(value);
        }
    },

    signlanguageInterpreterName_dropdown : {

       ui_component_id : "signlanguageInterpreterName_dropdown",
       title : {
            en : 'Interpreter Name',
            de : 'Interpreter Name'
        },
        defaultValue : {
            option_id : "Feldmann",
            name : "Feldmann"
        },
        resetValue : {
            option_id : "Feldmann",
            name : "Feldmann"
        },
        category : "cat4",
        type : TYPE_DROPDOWN,
        options : [{
            option_id : "Maria",
            name : "Maria"
        }, {
            option_id : "Tony",
            name : "Tony"
        }, {
            option_id : "Feldmann",
            name : "Feldmann"
        }],
        changeEvent : function(value) {
            parent.slSettings.InterpreterName = value;
        }
    },


    scanCycles_dropdown : {

        ui_component_id : "scanCycles_dropdown",
        title : {
            en : "Scan cycles",
            de : "Scan Wiederholungen"
        },
        defaultValue : {
            option_id : "3",
            name : "3 Wiederholungen"
        },
        resetValue : {
            option_id : "3",
            name : "3 Wiederholungen"
        },
        category : "cat6",
        type : TYPE_DROPDOWN,
        options : [{
            option_id : "3", // used as value-attribute in option-tag
            name : "3 Wiederholungen" // used as text in option-tag
        }, {
            option_id : "5",
            name : "5 Wiederholungen"
        }, {
            option_id : "10",
            name : "10 Wiederholungen"
        }],
        changeEvent : function(value) {
            parent.checkCycles(value);
        }
    },


    scanSpeed_dropdown : {

        ui_component_id : "scanSpeed_dropdown",
        title : {
            en : "Scan speed",
            de : "Scan Geschwindigkeit"
        },
        defaultValue : {
            option_id : "1000",
            name : "1 Sekunde"
        },
        resetValue : {
            option_id : "1000",
            name : "1 Sekunde"
        },
        category : "cat6",
        type : TYPE_DROPDOWN,
        options : [{
            option_id : "1000", // used as value-attribute in option-tag
            name : "1 Sekunde" // used as text in option-tag
        }, {
            option_id : "750",
            name : "0,75 Sekunden"
        }, {
            option_id : "2000",
            name : "2 Sekunden"
        }],
        changeEvent : function(value) {
            parent.checkSpeed(value);
        }
    },


    scanColor_dropdown : {

        ui_component_id : "scanColor_dropdown",
        title : {
            en : "Scan color",
            de : "Scan Farbe"
        },
        defaultValue : {
            option_id : "#FFA500",
            name : "Orange"
        },
        resetValue : {
            option_id : "#FFA500",
            name : "Orange"
        },
        category : "cat6",
        type : TYPE_DROPDOWN,
        options : [{
            option_id : "#FFA500", // used as value-attribute in option-tag
            name : "Orange" // used as text in option-tag
        }, {
            option_id : "#5EEA0E",
            name : "Grün"
        }, {
            option_id : "#00E6F2",
            name : "Türkis"
        }],
        changeEvent : function(value) {
            parent.checkColor(value);
        }
    },


    scanMode_checkbox : {

        ui_component_id : "scanMode_checkbox",
        title : {
            en : "Scan Mode",
            de : "Scan Modus"
        },
        defaultValue : false,
        defaultValue : false,
        category : "cat6",
        type : TYPE_CHECKBOX,
        explanation : {
            en : "Toggle to Two Button Scanning",
            de : "Schaltet auf Two Button Scanning um"
        },
        changeEvent : function(value) {
            parent.checkScanMode(value);
        }
    },

};

