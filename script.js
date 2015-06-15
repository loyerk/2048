/*jslint browser: true, node: true */
/*global $, jQuery, alert*/

var cellValues = [],
    cell,
    numberValues,
    maxCell,
    randCell,
    randValue,
    cellPos,
    cellValue,
    $cell,
    $cell2,
    id,
    html,
    idLeft,
    htmlLeft,
    idRight,
    htmlRight,
    generate = false,
    score = 0;

// Case aléatoire.
function randomCell() {

    // S'arranger pour qu'ils ne spawn pas l'un sur l'autre.
    "use strict";
    var i = 0;
    for (i = 0; i <= 15; i = i + 1) {
        //Si la class est 0 alors elle est pas utilisée.
        if ($('#' + i).hasClass('0')) {

            cellValues.push(i);
        }
    }
    maxCell = cellValues.length;

    randCell = Math.floor(Math.random() * (maxCell - 1 + 1));
    // cell est l'ID de la div.
    cell = cellValues[randCell];
    // on vide le tableau pour éviter les doublons.
    cellValues = [];
    return cell;
}

// générer aléatoirement deux premiers nombres (2 ou 4).
function randomValue() {

    "use strict";
    randValue = Math.floor(Math.random() * (10 - 1 + 1));

    // 1 chance sur 10 d'avoir un 4 sinon 2.
    if (randValue === 5) {

        numberValues = 4;
        return numberValues;
    }
    numberValues = 2;
    return numberValues;
}

//placer les cases après mouvement ou début de jeu (2 au début, 1 ensuite).
function generateCase() {

    "use strict";
    cellPos = randomCell(); //position de la case.
    cellValue = randomValue(); //valeur de la case.

    $cell = $('#' + cellPos);
    $cell.attr('class', '1').attr('value', cellValue).css('opacity', 0.1);
    $cell.fadeTo(500, 1);

    cellPos = randomCell();
    $cell2 = $('#' + cellPos);
    $cell2.attr('class', '1').attr('value', cellValue).css('opacity', 0.1);
    $cell2.fadeTo(500, 1);
}
function reRenerateCase() {

    "use strict";
    cellPos = randomCell(); //position de la case.
    cellValue = randomValue(); //valeur de la case.

    $cell = $('#' + cellPos);
    $cell.attr('class', '1').attr('value', cellValue).css('opacity', 0.1);
    $cell.fadeTo(500, 1);
}
var j = 0,
    checkValue,
    checkValueLeft,
    checkValueUp,
    checkValueRight,
    checkValueDown;

function checkVictory() {

    "use strict";
    var check = 0;

    if (maxCell === 1) {
        // Check défaite.

        for (j = 0; j <= 15; j = j + 1) {
            checkValue = $('#' + j).attr('value');
            checkValueLeft = $('#' + (j - 1)).attr('value');
            checkValueUp = $('#' + (j - 4)).attr('value');
            checkValueRight = $('#' + (j + 1)).attr('value');
            checkValueDown = $('#' + (j + 4)).attr('value');

            if (checkValue !== checkValueLeft && checkValue !== checkValueUp && checkValue !== checkValueRight && checkValue !== checkValueDown) {

                check = check + 1;

                if (check === 15) {

                    $('#gameOver').css('display', "block");
                    $('#gameOver').fadeTo(2000, 1);
                }
            }
        }
    }
}
var k = 0,
    value;

function checkSkin() {

    "use strict";
    for (k = 0; k <= 15; k = k + 1) {
        if ($('#' + k).hasClass('1')) {
            value = $('#' + k).attr('value');
            value = parseInt(value, 10);

            if (value === 2) {

                $('#' + k).css("background-image", "url(src/2.jpg)").css('color', 'white');
            }
            if (value === 4) {

                $('#' + k).css("background-image", "url(src/4.jpg)").css('color', 'white');
            }
            if (value === 8) {

                $('#' + k).css("background-image", "url(src/8.jpg)").css('color', 'white');
            }
            if (value === 16) {

                $('#' + k).css("background-image", "url(src/16.jpg)").css('color', 'white');
            }
            if (value === 32) {

                $('#' + k).css("background-image", "url(src/32.jpg)").css('color', 'white');
            }
            if (value === 64) {

                $('#' + k).css("background-image", "url(src/64.jpg)").css('color', 'white');
            }
            if (value === 128) {

                $('#' + k).css("background-image", "url(src/128.jpg)").css('color', 'white');
            }
            if (value === 256) {

                $('#' + k).css("background-image", "url(src/256.jpg)").css('color', 'white');
            }
            if (value === 512) {

                $('#' + k).css("background-image", "url(src/512.jpg)").css('color', 'white');
            }
            if (value === 1024) {

                $('#' + k).css("background-image", "url(src/1024.jpg)").css('color', 'white');
            }
            if (value === 2048) {

                $('#' + k).css("background-image", "url(src/2048.jpg)").css('color', 'white');
            }
        } else if ($('#' + k).hasClass('0')) {


            $('#' + k).css("background-image", "url(src/fond.jpg)");
            $('#' + k).attr('value', '0').css('color', '#C9A46D');
        }
    }
}

generateCase();
checkSkin();
// DEPLACEMENT ==================================================================
var l  = 0,
    klass,
    idSecond,
    klassSecond,
    valueSecond,
    result;

function moveLeft() {

    "use strict";
    for (l = 0; l <= 15; l = l + 1) {
        if ($('#' + l).hasClass('1')) {

            id = $('#' + l).attr('id');
            klass = $('#' + l).attr('class');
            value = $('#' + l).attr('value');

            idSecond = $('#' + (l - 1)).attr('id');
            klassSecond = $('#' + (l - 1)).attr('clas');
            valueSecond = $('#' + (l - 1)).attr('value');

            if (valueSecond === '0' && id !== '0' && id !== '4' && id !== '8' && id !== '12') {

                $('#' + (l - 1)).addClass('1');
                $('#' + (l - 1)).removeClass('0');
                $('#' + (l - 1)).attr('value', value);

                $('#' + l).css('background-color', 'grey');
                $('#' + l).addClass('0');
                $('#' + l).removeClass('1');
                $('#' + l).attr('value', valueSecond);

                generate = true;
                moveLeft();
            } else if (valueSecond === value) {

                $('#' + (l - 1)).addClass('1');
                $('#' + (l - 1)).removeClass('0');
                $('#' + (l - 1)).attr('value', parseInt(value, 10) + parseInt(valueSecond, 10));

                $('#' + l).attr('value', 0);
                $('#' + l).addClass('0');
                $('#' + l).removeClass('1');

                result = parseInt(value, 10) + parseInt(valueSecond, 10);
                score = score + result;

                $("#addScore").animate({ opacity: '0.5'}, "slow");
                $("#addScore").animate({ opacity: '0'}, "slow");
                $("#addScore").html("+ " + result);
                $("#score").html("Score : " + score);
                generate = true;
                //moveLeft();
            }
        }
    }
}
var u;

function moveUp() {

    "use strict";
    for (u = 0; u <= 15; u = u + 1) {

        if ($('#' + u).hasClass('1')) {

            id = $('#' + u).attr('id');
            klass = $('#' + u).attr('class');
            value = $('#' + u).attr('value');

            idSecond = $('#' + (u - 4)).attr('id');
            klassSecond = $('#' + (u - 4)).attr('clas');
            valueSecond = $('#' + (u - 4)).attr('value');

            if (valueSecond === '0' && id !== '0' && id !== '1' && id !== '2' && id !== '3') {

                $('#' + (u - 4)).addClass('1');
                $('#' + (u - 4)).removeClass('0');
                $('#' + (u - 4)).attr('value', value);

                $('#' + u).css('background-color', 'grey');
                $('#' + u).addClass('0');
                $('#' + u).removeClass('1');
                $('#' + u).attr('value', valueSecond);

                generate = true;
                moveUp();
            } else if (valueSecond === value) {

                $('#' + (u - 4)).addClass('1');
                $('#' + (u - 4)).removeClass('0');
                $('#' + (u - 4)).attr('value', parseInt(value, 10) + parseInt(valueSecond, 10));

                $('#' + u).attr('value', 0);
                $('#' + u).addClass('0');
                $('#' + u).removeClass('1');

                result = parseInt(value, 10) + parseInt(valueSecond, 10);
                score = score + result;
                $("#addScore").animate({ opacity: '0.5'}, "slow");
                $("#addScore").animate({ opacity: '0'}, "slow");
                $("#addScore").html("+ " + result);
                $("#score").html("Score : " + score);
                generate = true;
                //moveLeft();
            }
        }
    }
}
var r;

function moveRight() {

    "use strict";
    for (r = 15; r >= 0; r = r - 1) {

        if ($('#' + r).hasClass('1')) {

            id = $('#' + r).attr('id');
            klass = $('#' + r).attr('class');
            value = $('#' + r).attr('value');

            idSecond = $('#' + (r + 1)).attr('id');
            klassSecond = $('#' + (r + 1)).attr('clas');
            valueSecond = $('#' + (r + 1)).attr('value');

            if (valueSecond === '0' && id !== '3' && id !== '7' && id !== '11' && id !== '15') {

                $('#' + (r + 1)).addClass('1');
                $('#' + (r + 1)).removeClass('0');
                $('#' + (r + 1)).attr('value', value);

                $('#' + r).css('background-color', 'grey');
                $('#' + r).addClass('0');
                $('#' + r).removeClass('1');
                $('#' + r).attr('value', valueSecond);

                generate = true;
                moveRight();
            } else if (valueSecond === value) {

                $('#' + (r + 1)).addClass('1');
                $('#' + (r + 1)).removeClass('0');
                $('#' + (r + 1)).attr('value', parseInt(value, 10) + parseInt(valueSecond, 10));

                $('#' + r).attr('value', 0);
                $('#' + r).addClass('0');
                $('#' + r).removeClass('1');

                result = parseInt(value, 10) + parseInt(valueSecond, 10);
                score = score + result;
                $("#addScore").animate({ opacity: '0.5'}, "slow");
                $("#addScore").animate({ opacity: '0'}, "slow");
                $("#addScore").html("+ " + result);
                $("#score").html("Score : " + score);
                generate = true;
                //moveLeft();
            }
        }
    }
}
var d;

function moveDown() {

    "use strict";
    for (d = 15; d >= 0; d = d - 1) {

        if ($('#' + d).hasClass('1')) {

            id = $('#' + d).attr('id');
            klass = $('#' + d).attr('class');
            value = $('#' + d).attr('value');

            idSecond = $('#' + (d + 4)).attr('id');
            klassSecond = $('#' + (d + 4)).attr('clas');
            valueSecond = $('#' + (d + 4)).attr('value');

            if (valueSecond === '0' && id !== '12' && id !== '13' && id !== '14' && id !== '15') {

                $('#' + (d + 4)).addClass('1');
                $('#' + (d + 4)).removeClass('0');
                $('#' + (d + 4)).attr('value', value);

                $('#' + d).css('background-color', 'grey');
                $('#' + d).addClass('0');
                $('#' + d).removeClass('1');
                $('#' + d).attr('value', valueSecond);

                generate = true;
                moveDown();
            } else if (valueSecond === value) {

                $('#' + (d + 4)).addClass('1');
                $('#' + (d + 4)).removeClass('0');
                $('#' + (d + 4)).attr('value', parseInt(value, 10) + parseInt(valueSecond, 10));

                $('#' + d).attr('value', 0);
                $('#' + d).addClass('0');
                $('#' + d).removeClass('1');

                result = parseInt(value, 10) + parseInt(valueSecond, 10);
                score = score + result;
                $("#addScore").animate({ opacity: '0.5'}, "slow");
                $("#addScore").animate({ opacity: '0'}, "slow");
                $("#addScore").html("+ " + result);
                $("#score").html("Score : " + score);
                generate = true;
                //moveLeft();
            }
        }
    }
}
var save;

    // mouvements
$(document).keydown(function (e) {
    //$(this)

    "use strict";
    switch (e.which) {
    case 37: // left

        moveLeft();
        if (generate === true) {

            reRenerateCase();
            generate = false;
        }
        checkSkin();
        checkVictory();
        break;

    case 38: // up

        moveUp();
        if (generate === true) {

            reRenerateCase();
            generate = false;
        }
        checkSkin();
        checkVictory();
        break;

    case 39: // right

        moveRight();
        if (generate === true) {

            reRenerateCase();
            generate = false;
        }
        checkSkin();
        checkVictory();
        break;

    case 40: // down

        moveDown();
        if (generate === true) {

            reRenerateCase();
            generate = false;
        }
        checkSkin();
        checkVictory();
        break;
    }
});
