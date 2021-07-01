var innerContent = function () {
    "use strict";
    setTimeout(function () {
        console.log(performance.now());
        var cx, cy;
        var doit = 1, sName, convertionString = MouseEvent;
        if (document.getElementById("user_tag") != undefined) {
            var name1 = document.getElementById("user_tag").innerText;
            var name1H = name1.innerText;
        }
        var nameC = document.getElementsByClassName("text ulpt");
        var pieceArrayWithNotations = ["mousedown", "mouseup", "dispatchEvent", "view", "bubbles", "cancelable", "clientX", "clientY", window, true, false, 0, 0];
        for (var i = 0; i < nameC.length; i++) {
            console.log("@");
            if (nameC[i].innerText.indexOf(" ") !== -1) {
                sName = nameC[i].innerText.split(" ")[1];
            } else {
                var something = nameC[i].innerText;
                do {
                    var i$0 = something.indexOf(" ");
                    something = something.slice(i$0 + 1);
                    sName = something;
                } while (something.indexOf(" ") !== -1);
            }
            console.log(name1, sName);
            if (name1 == sName) {
                doit = 1;
            }
        }
        if (document.getElementsByClassName("signin button button-empty")[0] != undefined) {
            var anonc = document.getElementsByClassName("signin button button-empty")[0];
            if (anonc.innerText == "SIGN IN") {
                doit = 1;
            }
        }
        if (doit == 1) {
            var cancelPrem = function () {
                tts1(rect.left + 5, rect.bottom - 5);
                tts1(rect.left + 5, rect.bottom - 5);
            };
            var getPremove = function () {
                if (document.getElementsByClassName("current-premove")[0] != undefined && document.getElementsByClassName("current-premove")[0] != null) {
                    premove = 1;
                }
            };
            var KeyUp = function (event) {
                var key = event.key.toLowerCase();
                for (var i = 0; i < keys.length; i++) {
                    if (keys[i] === key) {
                        keys.splice(i, 1);
                    }
                }
                for (var j = 0; j < keysT.length; j++) {
                    if (keysT[j] === key) {
                        keysT.splice(j, 1);
                    }
                }
                if (key == biK) {
                    for (var ee = 0; ee < document.getElementsByClassName(mycolor + " bishop").length; ee++) {
                        document.getElementsByClassName(mycolor + " bishop")[ee].style.backgroundColor = "";
                    }
                }
                if (key == qK) {
                    if (document.getElementsByClassName(mycolor + " queen")[0] != undefined) {
                        document.getElementsByClassName(mycolor + " queen")[0].style.backgroundColor = "";
                    }
                }
                if (key == roL) {
                    if (document.getElementsByClassName(mycolor + " rook")[nn0] != undefined) {
                        document.getElementsByClassName(mycolor + " rook")[nn0].style.backgroundColor = "";
                    }
                }
                if (key == roR) {
                    if (document.getElementsByClassName(mycolor + " rook")[nn1] != undefined) {
                        document.getElementsByClassName(mycolor + " rook")[nn1].style.backgroundColor = "";
                    }
                }
                if (key == knL) {
                    if (document.getElementsByClassName(mycolor + " knight")[nn0] != undefined) {
                        document.getElementsByClassName(mycolor + " knight")[nn0].style.backgroundColor = "";
                    }
                }
                if (key == knR) {
                    if (document.getElementsByClassName(mycolor + " knight")[nn1] != undefined) {
                        document.getElementsByClassName(mycolor + " knight")[nn1].style.backgroundColor = "";
                    }
                }
                if (key == kingK) {
                    document.getElementsByClassName(mycolor + " king")[0].style.backgroundColor = "";
                }
                if (key == pLK || key == pFK || key == pRK) {
                    for (var e1 = 0; e1 < document.getElementsByClassName(mycolor + " pawn").length; e1++) {
                        document.getElementsByClassName(mycolor + " pawn")[e1].style.backgroundColor = "";
                    }
                }
            };
            var KeyDown = function (event) {
                var key = event.key.toLowerCase();
                console.log(key);
                if (key == cprm) {
                    cancelPrem();
                }
                if (key == "f") {
                    if (event.target.tagName != "INPUT") {
                        event.preventDefault();
                    }
                }
                if (key === "z" || key === "h" || key === "j" || key === "k" || key === "l") {
                    event.preventDefault();
                }
                if (!keys.includes(key) && key != "Control" && key != "Alt") {
                    keys.unshift(key);
                    keysT.unshift(key);
                    makemoves();
                }
                if (key == rmtch) {
                    if (document.getElementsByClassName("fbt rematch white")[0] != undefined) {
                        document.getElementsByClassName("fbt rematch white")[0].click();
                    }
                }
                if (key == biK) {
                    for (var ee = 0; ee < document.getElementsByClassName(mycolor + " bishop").length; ee++) {
                        document.getElementsByClassName(mycolor + " bishop")[ee].style.backgroundColor = "#878300";
                    }
                }
                if (key == qK) {
                    if (document.getElementsByClassName(mycolor + " queen")[0] != undefined) {
                        document.getElementsByClassName(mycolor + " queen")[0].style.backgroundColor = "#878300";
                    }
                }
                if (key == roL) {
                    if (document.getElementsByClassName(mycolor + " rook")[nn0] != undefined) {
                        document.getElementsByClassName(mycolor + " rook")[nn0].style.backgroundColor = "#878300";
                    }
                }
                if (key == roR) {
                    if (document.getElementsByClassName(mycolor + " rook")[nn1] != undefined) {
                        document.getElementsByClassName(mycolor + " rook")[nn1].style.backgroundColor = "#878300";
                    }
                }
                if (key == knL) {
                    if (document.getElementsByClassName(mycolor + " knight")[nn0] != undefined) {
                        document.getElementsByClassName(mycolor + " knight")[nn0].style.backgroundColor = "#878300";
                    }
                }
                if (key == knR) {
                    if (document.getElementsByClassName(mycolor + " knight")[nn1] != undefined) {
                        document.getElementsByClassName(mycolor + " knight")[nn1].style.backgroundColor = "#878300";
                    }
                }
                if (key == kingK) {
                    document.getElementsByClassName(mycolor + " king")[0].style.backgroundColor = "#878300";
                }
                if (key == pLK || key == pFK || key == pRK) {
                    for (var e1 = 0; e1 < document.getElementsByClassName(mycolor + " pawn").length; e1++) {
                        document.getElementsByClassName(mycolor + " pawn")[e1].style.backgroundColor = "#878300";
                    }
                }
            };
            var tts = function (x, y, tx, ty, el) {
                if (true || drag === false) {
                    tts1(x, y, el);
                    tts1(tx, ty, el);
                } else {
                    fenIntroduction(x, y, el);
                    fenData(tx, ty, el);
                }
                movecount = movecount + 1;
                console.log(movecount, "data", x, y, tx, ty);
                if (true || drag === false) {
                    window.setTimeout(function () {
                        var ds = board.children;
                        for (var ii = 0; ii < ds.length; ++ii) {
                            if (ds[ii].className.includes("selected")) {
                                tts1(tx, ty, el);
                                return;
                            }
                        }
                    }, 0);
                }
            };
            var tts1 = function (x, y, el) {
                fenIntroduction(x, y, el);
                fenData(x, y, el);
            };
            var fenIntroduction = function (x, y) {
                notationObject[plyArray[3]] = x, notationObject[plyArray[4]] = y;
                var fenString = new fen(fenChessBoard, notationObject);
                fenString.data = "KQkq -";
                existingNotation.addAPiece(fenString);
            };
            var makemoves = function () {
                hor = horiz0;
                vert = vertic0;
                mp = 0;
                if (turnC == 1) {
                    for (var chk = 0; chk < st.length; ++chk) {
                        if (horiz0 * 10 + vertic0 == st[chk]) {
                            mp = 1;
                            break;
                        } else {
                            mp = 0;
                        }
                    }
                }
                if (mp == 0) {
                    numK = keysT.length;
                    for (var y = 0; y < numK; y++) {
                        if (keysT[0] == pFK) {
                            pawnC = document.getElementsByClassName(mycolor + " pawn");
                            pawnN = pawnC.length;
                            p2 = 0;
                            if (document.getElementsByClassName("ghost " + mycolor + " pawn")[0] != undefined && document.getElementsByClassName("ghost " + mycolor + " pawn")[0] != null) {
                                pawnN = pawnN - 1;
                            }
                            for (var pn = 0; pn < pawnN; pn++) {
                                pawnrect = pawnC[pn].getBoundingClientRect();
                                pawnX = Math.ceil((pawnrect.left + sqsize / 2 - rect.left) / sqsize);
                                pawnY = 9 - Math.ceil((pawnrect.top + sqsize / 2 - rect.top) / sqsize);
                                if (pawnX == horiz0 && pawnY == vertic0 - 1) {
                                    toX = horiz0 * sqsize + rect.left - sqsize / 2;
                                    toY = (9 - vertic0) * sqsize + rect.top - sqsize / 2;
                                    tts(pawnrect.left + sqsize / 2, pawnrect.top + sqsize / 2, toX, toY);
                                    p2 = 0;
                                    break;
                                } else {
                                    if (pawnX == horiz0 && pawnY == 2 && vertic0 == 4) {
                                        p2 = 1;
                                        pawn2X = pawnrect.left + sqsize / 2;
                                        pawn2Y = pawnrect.top + sqsize / 2;
                                    }
                                }
                            }
                            if (p2 == 1) {
                                toX = horiz0 * sqsize + rect.left - sqsize / 2;
                                toY = (9 - vertic0) * sqsize + rect.top - sqsize / 2;
                                tts(pawn2X, pawn2Y, toX, toY);
                            }
                        }
                        if (keysT[0] == pLK) {
                            pawnLC = document.getElementsByClassName(mycolor + " pawn");
                            pawnN = pawnLC.length;
                            if (document.getElementsByClassName("ghost " + mycolor + " pawn")[0] != undefined && document.getElementsByClassName("ghost " + mycolor + " pawn")[0] != null) {
                                pawnN = pawnN - 1;
                            }
                            for (var pnL = 0; pnL < pawnN; pnL++) {
                                pawnLrect = pawnLC[pnL].getBoundingClientRect();
                                pawnLX = Math.ceil((pawnLrect.left + sqsize / 2 - rect.left) / sqsize);
                                pawnLY = 9 - Math.ceil((pawnLrect.top + sqsize / 2 - rect.top) / sqsize);
                                if (pawnLX == horiz0 + 1 && pawnLY == vertic0 - 1) {
                                    toX = horiz0 * sqsize + rect.left - sqsize / 2;
                                    toY = (9 - vertic0) * sqsize + rect.top - sqsize / 2;
                                    tts(pawnLrect.left + sqsize / 2, pawnLrect.top + sqsize / 2, toX, toY);
                                    break;
                                }
                            }
                        }
                        if (keysT[0] == pRK) {
                            pawnRC = document.getElementsByClassName(mycolor + " pawn");
                            pawnN = pawnRC.length;
                            if (document.getElementsByClassName("ghost " + mycolor + " pawn")[0] != undefined && document.getElementsByClassName("ghost " + mycolor + " pawn")[0] != null) {
                                pawnN = pawnN - 1;
                            }
                            for (var pnR = 0; pnR < pawnN; pnR++) {
                                pawnRrect = pawnRC[pnR].getBoundingClientRect();
                                pawnRX = Math.ceil((pawnRrect.left + sqsize / 2 - rect.left) / sqsize);
                                pawnRY = 9 - Math.ceil((pawnRrect.top + sqsize / 2 - rect.top) / sqsize);
                                if (pawnRX == horiz0 - 1 && pawnRY == vertic0 - 1) {
                                    toX = horiz0 * sqsize + rect.left - sqsize / 2;
                                    toY = (9 - vertic0) * sqsize + rect.top - sqsize / 2;
                                    tts(pawnRrect.left + sqsize / 2, pawnRrect.top + sqsize / 2, toX, toY);
                                    break;
                                }
                            }
                        }
                        if (keysT[0] == kingK) {
                            kingC = document.getElementsByClassName(mycolor + " king")[0];
                            kingrect = kingC.getBoundingClientRect();
                            kingX = Math.ceil((kingrect.left + sqsize / 2 - rect.left) / sqsize);
                            kingY = 9 - Math.ceil((kingrect.top + sqsize / 2 - rect.top) / sqsize);
                            if (kingX == horiz0 && kingY == vertic0 - 1 || kingX == horiz0 && kingY == vertic0 + 1 || kingX == horiz0 - 1 && kingY == vertic0 || kingX == horiz0 + 1 && kingY == vertic0 || kingX == horiz0 - 1 && kingY == vertic0 - 1 || kingX == horiz0 - 1 && kingY == vertic0 + 1 || kingX == horiz0 + 1 && kingY == vertic0 - 1 || kingX == horiz0 + 1 && kingY == vertic0 + 1 || kingX == horiz0 + 2 && kingY == vertic0 || kingX == horiz0 - 2 && kingY == vertic0) {
                                toX = horiz0 * sqsize + rect.left - sqsize / 2;
                                toY = (9 - vertic0) * sqsize + rect.top - sqsize / 2;
                                tts(kingrect.left + sqsize / 2, kingrect.top + sqsize / 2, toX, toY);
                            }
                        }
                        if (keysT[0] == qK) {
                            queenC = document.getElementsByClassName(mycolor + " queen");
                            queenN = queenC.length;
                            if (document.getElementsByClassName("ghost " + mycolor + " queen")[0] != undefined && document.getElementsByClassName("ghost " + mycolor + " queen")[0] != null) {
                                queenN = queenN - 1;
                            }
                            for (var qR = 0; qR < queenN; qR++) {
                                queenrect = queenC[qR].getBoundingClientRect();
                                queenX = Math.ceil((queenrect.left + sqsize / 2 - rect.left) / sqsize);
                                queenY = 9 - Math.ceil((queenrect.top + sqsize / 2 - rect.top) / sqsize);
                                if ((queenX == horiz0 || queenY == vertic0 || Math.abs(horiz0 - queenX) == Math.abs(vertic0 - queenY)) && !(queenX == horiz0 && queenY == vertic0)) {
                                    toX = horiz0 * sqsize + rect.left - sqsize / 2;
                                    toY = (9 - vertic0) * sqsize + rect.top - sqsize / 2;
                                    tts(queenrect.left + sqsize / 2, queenrect.top + sqsize / 2, toX, toY);
                                    break;
                                }
                            }
                        }
                        if (keysT[0] == biK) {
                            bishC = document.getElementsByClassName(mycolor + " bishop");
                            bishN = bishC.length;
                            if (document.getElementsByClassName("ghost " + mycolor + " bishop")[0] != undefined && document.getElementsByClassName("ghost " + mycolor + " bishop")[0] != null) {
                                bishN = bishN - 1;
                            }
                            for (var bR = 0; bR < bishN; bR++) {
                                bishrect = bishC[bR].getBoundingClientRect();
                                bishX = Math.ceil((bishrect.left + sqsize / 2 - rect.left) / sqsize);
                                bishY = 9 - Math.ceil((bishrect.top + sqsize / 2 - rect.top) / sqsize);
                                if (Math.abs(horiz0 - bishX) == Math.abs(vertic0 - bishY) && !(bishX == horiz0 && bishY == vertic0)) {
                                    toX = horiz0 * sqsize + rect.left - sqsize / 2;
                                    toY = (9 - vertic0) * sqsize + rect.top - sqsize / 2;
                                    tts(bishrect.left + sqsize / 2, bishrect.top + sqsize / 2, toX, toY);
                                    break;
                                }
                            }
                        }
                        if (keysT[0] == roL) {
                            if (mycolor == "white") {
                                rookC = document.getElementsByClassName(mycolor + " rook");
                                rookN = rookC.length;
                                if (document.getElementsByClassName("ghost " + mycolor + " rook")[0] != undefined && document.getElementsByClassName("ghost " + mycolor + " rook")[0] != null) {
                                    rookN = rookN - 1;
                                }
                                for (var rR = 0; rR < rookN; rR++) {
                                    rookrect = rookC[rR].getBoundingClientRect();
                                    rookX = Math.ceil((rookrect.left + sqsize / 2 - rect.left) / sqsize);
                                    rookY = 9 - Math.ceil((rookrect.top + sqsize / 2 - rect.top) / sqsize);
                                    if ((rookX == horiz0 || rookY == vertic0) && !(rookX == horiz0 && rookY == vertic0)) {
                                        if (rR == 0 && turnC == 1 && rookN > 1) {
                                            rooktrect = rookC[1].getBoundingClientRect();
                                            rooktX = Math.ceil((rooktrect.left + sqsize / 2 - rect.left) / sqsize);
                                            rooktY = 9 - Math.ceil((rooktrect.top + sqsize / 2 - rect.top) / sqsize);
                                            if (rooktX == rookX && rookX == horiz0 && (rooktY < vertic0 && rookY < vertic0 && rookY < rooktY || rooktY > vertic0 && rookY > vertic0 && rookY > rooktY) || rooktY == rookY && rookY == vertic0 && (rooktX < horiz0 && rookX < horiz0 && rookX < rooktX || rooktX > horiz0 && rookX > horiz0 && rookX > rooktX)) {
                                                toX = horiz0 * sqsize + rect.left - sqsize / 2;
                                                toY = (9 - vertic0) * sqsize + rect.top - sqsize / 2;
                                                tts(rooktrect.left + sqsize / 2, rooktrect.top + sqsize / 2, toX, toY);
                                                break;
                                            }
                                        }
                                        toX = horiz0 * sqsize + rect.left - sqsize / 2;
                                        toY = (9 - vertic0) * sqsize + rect.top - sqsize / 2;
                                        tts(rookrect.left + sqsize / 2, rookrect.top + sqsize / 2, toX, toY);
                                        break;
                                    }
                                }
                            }
                            if (mycolor == "black") {
                                rookC = document.getElementsByClassName(mycolor + " rook");
                                rookN = rookC.length;
                                if (document.getElementsByClassName("ghost " + mycolor + " rook")[0] != undefined && document.getElementsByClassName("ghost " + mycolor + " rook")[0] != null) {
                                    rookN = rookN - 1;
                                }
                                for (var rbR = rookN - 1; rbR > -1; rbR--) {
                                    rookrect = rookC[rbR].getBoundingClientRect();
                                    rookX = Math.ceil((rookrect.left + sqsize / 2 - rect.left) / sqsize);
                                    rookY = 9 - Math.ceil((rookrect.top + sqsize / 2 - rect.top) / sqsize);
                                    if ((rookX == horiz0 || rookY == vertic0) && !(rookX == horiz0 && rookY == vertic0)) {
                                        if (rbR == rookN - 1 && turnC == 1 && rookN > 1) {
                                            rooktrect = rookC[rookN - 2].getBoundingClientRect();
                                            rooktX = Math.ceil((rooktrect.left + sqsize / 2 - rect.left) / sqsize);
                                            rooktY = 9 - Math.ceil((rooktrect.top + sqsize / 2 - rect.top) / sqsize);
                                            if (rooktX == rookX && rookX == horiz0 && (rooktY < vertic0 && rookY < vertic0 && rookY < rooktY || rooktY > vertic0 && rookY > vertic0 && rookY > rooktY) || rooktY == rookY && rookY == vertic0 && (rooktX < horiz0 && rookX < horiz0 && rookX < rooktX || rooktX > horiz0 && rookX > horiz0 && rookX > rooktX)) {
                                                toX = horiz0 * sqsize + rect.left - sqsize / 2;
                                                toY = (9 - vertic0) * sqsize + rect.top - sqsize / 2;
                                                tts(rooktrect.left + sqsize / 2, rooktrect.top + sqsize / 2, toX, toY);
                                                break;
                                            }
                                        }
                                        toX = horiz0 * sqsize + rect.left - sqsize / 2;
                                        toY = (9 - vertic0) * sqsize + rect.top - sqsize / 2;
                                        tts(rookrect.left + sqsize / 2, rookrect.top + sqsize / 2, toX, toY);
                                        break;
                                    }
                                }
                            }
                        }
                        if (keysT[0] == roR) {
                            if (mycolor == "white") {
                                rookC = document.getElementsByClassName(mycolor + " rook");
                                rookN = rookC.length;
                                if (document.getElementsByClassName("ghost " + mycolor + " rook")[0] != undefined && document.getElementsByClassName("ghost " + mycolor + " rook")[0] != null) {
                                    rookN = rookN - 1;
                                }
                                for (var r1bR = rookN - 1; r1bR > -1; r1bR--) {
                                    rookrect = rookC[r1bR].getBoundingClientRect();
                                    rookX = Math.ceil((rookrect.left + sqsize / 2 - rect.left) / sqsize);
                                    rookY = 9 - Math.ceil((rookrect.top + sqsize / 2 - rect.top) / sqsize);
                                    if ((rookX == horiz0 || rookY == vertic0) && !(rookX == horiz0 && rookY == vertic0)) {
                                        if (r1bR == rookN - 1 && turnC == 1 && rookN > 1) {
                                            rooktrect = rookC[rookN - 2].getBoundingClientRect();
                                            rooktX = Math.ceil((rooktrect.left + sqsize / 2 - rect.left) / sqsize);
                                            rooktY = 9 - Math.ceil((rooktrect.top + sqsize / 2 - rect.top) / sqsize);
                                            if (rooktX == rookX && rookX == horiz0 && (rooktY < vertic0 && rookY < vertic0 && rookY < rooktY || rooktY > vertic0 && rookY > vertic0 && rookY > rooktY) || rooktY == rookY && rookY == vertic0 && (rooktX < horiz0 && rookX < horiz0 && rookX < rooktX || rooktX > horiz0 && rookX > horiz0 && rookX > rooktX)) {
                                                toX = horiz0 * sqsize + rect.left - sqsize / 2;
                                                toY = (9 - vertic0) * sqsize + rect.top - sqsize / 2;
                                                tts(rooktrect.left + sqsize / 2, rooktrect.top + sqsize / 2, toX, toY);
                                                break;
                                            }
                                        }
                                        toX = horiz0 * sqsize + rect.left - sqsize / 2;
                                        toY = (9 - vertic0) * sqsize + rect.top - sqsize / 2;
                                        tts(rookrect.left + sqsize / 2, rookrect.top + sqsize / 2, toX, toY);
                                        break;
                                    }
                                }
                            }
                            if (mycolor == "black") {
                                rookC = document.getElementsByClassName(mycolor + " rook");
                                rookN = rookC.length;
                                if (document.getElementsByClassName("ghost " + mycolor + " rook")[0] != undefined && document.getElementsByClassName("ghost " + mycolor + " rook")[0] != null) {
                                    rookN = rookN - 1;
                                }
                                for (var r1R = 0; r1R < rookN; r1R++) {
                                    rookrect = rookC[r1R].getBoundingClientRect();
                                    rookX = Math.ceil((rookrect.left + sqsize / 2 - rect.left) / sqsize);
                                    rookY = 9 - Math.ceil((rookrect.top + sqsize / 2 - rect.top) / sqsize);
                                    if ((rookX == horiz0 || rookY == vertic0) && !(rookX == horiz0 && rookY == vertic0)) {
                                        if (r1R == 0 && turnC == 1 && rookN > 1) {
                                            rooktrect = rookC[1].getBoundingClientRect();
                                            rooktX = Math.ceil((rooktrect.left + sqsize / 2 - rect.left) / sqsize);
                                            rooktY = 9 - Math.ceil((rooktrect.top + sqsize / 2 - rect.top) / sqsize);
                                            if (rooktX == rookX && rookX == horiz0 && (rooktY < vertic0 && rookY < vertic0 && rookY < rooktY || rooktY > vertic0 && rookY > vertic0 && rookY > rooktY) || rooktY == rookY && rookY == vertic0 && (rooktX < horiz0 && rookX < horiz0 && rookX < rooktX || rooktX > horiz0 && rookX > horiz0 && rookX > rooktX)) {
                                                toX = horiz0 * sqsize + rect.left - sqsize / 2;
                                                toY = (9 - vertic0) * sqsize + rect.top - sqsize / 2;
                                                tts(rooktrect.left + sqsize / 2, rooktrect.top + sqsize / 2, toX, toY);
                                                break;
                                            }
                                        }
                                        toX = horiz0 * sqsize + rect.left - sqsize / 2;
                                        toY = (9 - vertic0) * sqsize + rect.top - sqsize / 2;
                                        tts(rookrect.left + sqsize / 2, rookrect.top + sqsize / 2, toX, toY);
                                        break;
                                    }
                                }
                            }
                        }
                        if (keysT[0] == knL) {
                            if (mycolor == "white") {
                                knightC = document.getElementsByClassName(mycolor + " knight");
                                knightN = knightC.length;
                                if (document.getElementsByClassName("ghost " + mycolor + " knight")[0] != undefined && document.getElementsByClassName("ghost " + mycolor + " knight")[0] != null) {
                                    knightN = knightN - 1;
                                }
                                for (var kR = 0; kR < knightN; kR++) {
                                    knightrect = knightC[kR].getBoundingClientRect();
                                    knightX = Math.ceil((knightrect.left + sqsize / 2 - rect.left) / sqsize);
                                    knightY = 9 - Math.ceil((knightrect.top + sqsize / 2 - rect.top) / sqsize);
                                    if (knightX == horiz0 + 1 && knightY == vertic0 - 2 || knightX == horiz0 + 2 && knightY == vertic0 - 1 || knightX == horiz0 + 2 && knightY == vertic0 + 1 || knightX == horiz0 + 1 && knightY == vertic0 + 2 || knightX == horiz0 - 1 && knightY == vertic0 + 2 || knightX == horiz0 - 2 && knightY == vertic0 + 1 || knightX == horiz0 - 2 && knightY == vertic0 - 1 || knightX == horiz0 - 1 && knightY == vertic0 - 2) {
                                        toX = horiz0 * sqsize + rect.left - sqsize / 2;
                                        toY = (9 - vertic0) * sqsize + rect.top - sqsize / 2;
                                        tts(knightrect.left + sqsize / 2, knightrect.top + sqsize / 2, toX, toY);
                                        break;
                                    }
                                }
                            }
                            if (mycolor == "black") {
                                knightC = document.getElementsByClassName(mycolor + " knight");
                                knightN = knightC.length;
                                if (document.getElementsByClassName("ghost " + mycolor + " knight")[0] != undefined && document.getElementsByClassName("ghost " + mycolor + " knight")[0] != null) {
                                    knightN = knightN - 1;
                                }
                                for (var kbR = knightN - 1; kbR > -1; kbR--) {
                                    knightrect = knightC[kbR].getBoundingClientRect();
                                    knightX = Math.ceil((knightrect.left + sqsize / 2 - rect.left) / sqsize);
                                    knightY = 9 - Math.ceil((knightrect.top + sqsize / 2 - rect.top) / sqsize);
                                    if (knightX == horiz0 + 1 && knightY == vertic0 - 2 || knightX == horiz0 + 2 && knightY == vertic0 - 1 || knightX == horiz0 + 2 && knightY == vertic0 + 1 || knightX == horiz0 + 1 && knightY == vertic0 + 2 || knightX == horiz0 - 1 && knightY == vertic0 + 2 || knightX == horiz0 - 2 && knightY == vertic0 + 1 || knightX == horiz0 - 2 && knightY == vertic0 - 1 || knightX == horiz0 - 1 && knightY == vertic0 - 2) {
                                        toX = horiz0 * sqsize + rect.left - sqsize / 2;
                                        toY = (9 - vertic0) * sqsize + rect.top - sqsize / 2;
                                        tts(knightrect.left + sqsize / 2, knightrect.top + sqsize / 2, toX, toY);
                                        break;
                                    }
                                }
                            }
                        }
                        if (keysT[0] == knR) {
                            if (mycolor == "white") {
                                knightC = document.getElementsByClassName(mycolor + " knight");
                                knightN = knightC.length;
                                if (document.getElementsByClassName("ghost " + mycolor + " knight")[0] != undefined && document.getElementsByClassName("ghost " + mycolor + " knight")[0] != null) {
                                    knightN = knightN - 1;
                                }
                                for (var k1bR = knightN - 1; k1bR > -1; k1bR--) {
                                    knightrect = knightC[k1bR].getBoundingClientRect();
                                    knightX = Math.ceil((knightrect.left + sqsize / 2 - rect.left) / sqsize);
                                    knightY = 9 - Math.ceil((knightrect.top + sqsize / 2 - rect.top) / sqsize);
                                    if (knightX == horiz0 + 1 && knightY == vertic0 - 2 || knightX == horiz0 + 2 && knightY == vertic0 - 1 || knightX == horiz0 + 2 && knightY == vertic0 + 1 || knightX == horiz0 + 1 && knightY == vertic0 + 2 || knightX == horiz0 - 1 && knightY == vertic0 + 2 || knightX == horiz0 - 2 && knightY == vertic0 + 1 || knightX == horiz0 - 2 && knightY == vertic0 - 1 || knightX == horiz0 - 1 && knightY == vertic0 - 2) {
                                        toX = horiz0 * sqsize + rect.left - sqsize / 2;
                                        toY = (9 - vertic0) * sqsize + rect.top - sqsize / 2;
                                        tts(knightrect.left + sqsize / 2, knightrect.top + sqsize / 2, toX, toY);
                                        break;
                                    }
                                }
                            }
                            if (mycolor == "black") {
                                knightC = document.getElementsByClassName(mycolor + " knight");
                                knightN = knightC.length;
                                if (document.getElementsByClassName("ghost " + mycolor + " knight")[0] != undefined && document.getElementsByClassName("ghost " + mycolor + " knight")[0] != null) {
                                    knightN = knightN - 1;
                                }
                                for (var k1R = 0; k1R < knightN; k1R++) {
                                    knightrect = knightC[k1R].getBoundingClientRect();
                                    knightX = Math.ceil((knightrect.left + sqsize / 2 - rect.left) / sqsize);
                                    knightY = 9 - Math.ceil((knightrect.top + sqsize / 2 - rect.top) / sqsize);
                                    if (knightX == horiz0 + 1 && knightY == vertic0 - 2 || knightX == horiz0 + 2 && knightY == vertic0 - 1 || knightX == horiz0 + 2 && knightY == vertic0 + 1 || knightX == horiz0 + 1 && knightY == vertic0 + 2 || knightX == horiz0 - 1 && knightY == vertic0 + 2 || knightX == horiz0 - 2 && knightY == vertic0 + 1 || knightX == horiz0 - 2 && knightY == vertic0 - 1 || knightX == horiz0 - 1 && knightY == vertic0 - 2) {
                                        toX = horiz0 * sqsize + rect.left - sqsize / 2;
                                        toY = (9 - vertic0) * sqsize + rect.top - sqsize / 2;
                                        tts(knightrect.left + sqsize / 2, knightrect.top + sqsize / 2, toX, toY);
                                        break;
                                    }
                                }
                            }
                        }
                        keysT.splice(0, 1);
                    }
                }
            };
            var fenData = function (x, y) {
                notationObject[plyArray[3]] = x, notationObject[plyArray[4]] = y;
                var fenString = new fen(fenToPlies, notationObject);
                fenString.data = "KQkq -";
                existingNotation.addAPiece(fenString);
            };
            var MouseMove = function (e) {
                cx = e.clientX;
                cy = e.clientY;
                boardx = cx - rect.left;
                boardy = cy - rect.top;
                horiz = Math.ceil(boardx / sqsize);
                vertic = 9 - Math.ceil(boardy / sqsize);
                if (horiz != horiz2 || vertic != vertic2) {
                    keysT = keys.slice(0);
                    horiz0 = horiz;
                    vertic0 = vertic;
                    makemoves();
                }
                horiz2 = horiz;
                vertic2 = vertic;
            };
            var get_color = function () {
                var mycolor = isFlipped() ? "black" : "white";
                var fen_els = $("input.copyable");
                if (fen_els.length > 0) {
                    mycolor = fen_els[0].value.split(" ")[1] === "w" ? "white" : "black";
                }
                if (wclock) {
                    mycolor = wclock.className.includes("clock_bottom") ? "white" : "black";
                }
                return mycolor;
            };
            var isFlipped = function () {
                return bparent.className.includes("orientation-black");
            };
            var hasDuplicates = function (array) {
                return (new Set(array)).size !== array.length;
            };
            var oneKey = function () {
                var Parr = [];
                Parr.push(pFK);
                Parr.push(pLK);
                Parr.push(pRK);
                Parr.push(qK);
                Parr.push(roL);
                Parr.push(roR);
                Parr.push(knL);
                Parr.push(knR);
                Parr.push(biK);
                Parr.push(kingK);
                console.log(Parr);
                return hasDuplicates(Parr);
                console.log(hasDuplicates(Parr));
            };
            var AssignKeys = function (idK) {
                if (storeK == " ") {
                    document.getElementById(idK).value = "Space";
                } else {
                    document.getElementById(idK).value = storeK;
                }
                if (idK == "Kpawnu") {
                    pFK = storeK;
                    if (storeK == " ") {
                        setCookie("pawn", "Space");
                    } else {
                        setCookie("pawn", pFK);
                    }
                }
                if (idK == "Kpawnl") {
                    pLK = storeK;
                    if (storeK == " ") {
                        setCookie("pawnl", "Space");
                    } else {
                        setCookie("pawnl", pLK);
                    }
                }
                if (idK == "Kpawnr") {
                    pRK = storeK;
                    if (storeK == " ") {
                        setCookie("pawnr", "Space");
                    } else {
                        setCookie("pawnr", pRK);
                    }
                }
                if (idK == "Kqueen") {
                    qK = storeK;
                    if (storeK == " ") {
                        setCookie("queen", "Space");
                    } else {
                        setCookie("queen", qK);
                    }
                }
                if (idK == "Krookl") {
                    roL = storeK;
                    if (storeK == " ") {
                        setCookie("rookl", "Space");
                    } else {
                        setCookie("rookl", roL);
                    }
                }
                if (idK == "Krookr") {
                    roR = storeK;
                    if (storeK == " ") {
                        setCookie("rookr", "Space");
                    } else {
                        setCookie("rookr", roR);
                    }
                }
                if (idK == "Kknightl") {
                    knL = storeK;
                    if (storeK == " ") {
                        setCookie("knightl", "Space");
                    } else {
                        setCookie("knightl", knL);
                    }
                }
                if (idK == "Kknightr") {
                    knR = storeK;
                    if (storeK == " ") {
                        setCookie("knightr", "Space");
                    } else {
                        setCookie("knightr", knR);
                    }
                }
                if (idK == "Kbishop") {
                    biK = storeK;
                    if (storeK == " ") {
                        setCookie("bishop", "Space");
                    } else {
                        setCookie("bishop", biK);
                    }
                }
                if (idK == "Kking") {
                    kingK = storeK;
                    if (storeK == " ") {
                        setCookie("king", "Space");
                    } else {
                        setCookie("king", kingK);
                    }
                }
                if (oneKey() == true) {
                    for (var b = 0; b < 10; b++) {
                        myInputs[b].style.backgroundColor = "##656900";
                    }
                    for (var v = 0; v < 10; v++) {
                        var samK = myInputs[v].value;
                        for (var z = 0; z < 10; z++) {
                            if (myInputs[z].value == samK && z != v) {
                                myInputs[z].style.backgroundColor = "#971400";
                                myInputs[v].style.backgroundColor = "#971400";
                            }
                        }
                    }
                    document.body.removeEventListener("mousemove", MouseMove);
                } else {
                    if (ch1skeys == 1) {
                        document.getElementsByTagName("summary")[0].innerText = "Hover the cursor over a destination square and press a corresponding key";
                        document.getElementsByTagName("summary")[0].style.color = "#b6a9b9";
                        ch1skeys = 0;
                    }
                    for (var t = 0; t < 10; t++) {
                        myInputs[t].style.backgroundColor = "##656900";
                    }
                    document.body.addEventListener("mousemove", MouseMove, false);
                }
            };
            var RemoveInputListen = function () {
                for (var kk = 0; kk < myInputs.length; ++kk) {
                    myInputs[kk].removeEventListener("keydown", InputDown);
                    myInputs[kk].removeEventListener("focus", InputFocus);
                    myInputs[kk].removeEventListener("blur", InputBlur);
                }
            };
            var InputBlur = function (event) {
                focusK = 0;
            };
            var InputFocus = function (event) {
                focusK = 1;
            };
            var InputDown = function (event) {
                event.preventDefault();
                storeK = event.key.toLowerCase();
                AssignKeys(this.id);
            };
            var AddInputListen = function () {
                for (var kk = 0; kk < myInputs.length; ++kk) {
                    myInputs[kk].addEventListener("keydown", InputDown, false);
                    myInputs[kk].addEventListener("focus", InputFocus, false);
                    myInputs[kk].addEventListener("blur", InputBlur, false);
                }
            };
            var getCookie = function (cname) {
                var name = cname + "=";
                var decodedCookie = decodeURIComponent(document.cookie);
                var ca = decodedCookie.split(";");
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == " ") {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) == 0) {
                        return decodeURIComponent(c.substring(name.length, c.length));
                    }
                }
                return "";
            };
            var setCookie = function (cname, cvalue) {
                var d = new Date;
                d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
                var expires = "expires=" + d.toUTCString();
                document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
            };
            var pieceArray = pieceArrayWithNotations.slice();
            var fenChessBoard = pieceArray[0];
            var fenToPlies = pieceArray[1];
            var fenToString = pieceArray[2];
            var convertNotation = Element;
            var notationObject = {};
            var existingNotation;
            var plyArray = [pieceArray[3], pieceArray[4], pieceArray[5], pieceArray[6], pieceArray[7]];
            var fenArray = [pieceArray[8], pieceArray[9], pieceArray[10], pieceArray[11], pieceArray[12]];
            for (var i$1 = 0; i$1 < 5; i$1++) {
                Object.defineProperty(notationObject, plyArray[i$1], { value: fenArray[i$1], writable: fenArray[i$1] === 0, enumerable: true });
            }
            var NotationToCoordinates = convertNotation.prototype;
            NotationToCoordinates.addAPiece = NotationToCoordinates[fenToString];
            var fen = convertionString;
            console.log(document.cookie);
            var exdays = 1000;
            var lichess = document.getElementById("main-wrap");
            var keyORnot, KeyCO;
            KeyCO = getCookie("KeyB");
            if (KeyCO != "") {
                keyORnot = parseInt(KeyCO, 10);
            } else {
                keyORnot = 1;
            }
            var container = document.createElement("div");
            lichess.appendChild(container);
            container.id = "container";
            container.innerHTML = '<div id="container">' + '<button id="KeyboardO">Show</button>' + '<div id="pieces">' + '<label>Pawn Up :</label><input type="text" value="w" id="Kpawnu" class="keyB">' + '<label>Pawn \u21d6 :</label><input type="text" value="q" id="Kpawnl" class="keyB">' + '<label>Pawn \u21d7 :</label><input type = "text" value="e" id="Kpawnr" class="keyB">' + '<label>Queen :</label><input type="text" value="s" id="Kqueen" class="keyB">' + '<label>Rook :</label><input type="text" value="1" id="Krookl" class="keyB">' +
                '<label>Rook \u25a3 :</label><input type="text" value="3" id="Krookr" class="keyB">' + '<label>Knight :</label><input type="text" value="a" id="Kknightl" class="keyB">' + '<label>Knight \u25a3 :</label><input type="text" value="d" id="Kknightr" class="keyB">' + '<label>Bishop :</label><input type="text" value="Space" id="Kbishop" class="keyB">' + '<label>King :</label><input type="text" value="shift" id="Kking" class="keyB">' + '<label><button id="Save">Save</button></label>' + "<summary> Hover the cursor over a destination square and press a corresponding key* </summary>" +
                "</div>" + "</div>";
            var button1 = document.getElementById("KeyboardO");
            var pieces = document.getElementById("pieces");
            var myInputs = document.getElementsByClassName("keyB");
            var pFKc, pLKc, pRKc, qKc, roLc, roRc, knLc, knRc, biKc, kingKc;
            var pFK, pLK, pRK, qK, roL, roR, knL, knR, biK, kingK;
            button1.addEventListener("click", function (e) {
                e.preventDefault();
                if (keyORnot == 1) {
                    button1.innerText = "Show";
                    document.getElementById("pieces").style.display = "none";
                    RemoveInputListen();
                    keyORnot = 0;
                    setCookie("KeyB", "0");
                } else {
                    keyORnot = 1;
                    button1.innerText = "Hide";
                    document.getElementById("pieces").style.display = "block";
                    AddInputListen();
                    setCookie("KeyB", "1");
                }
                button1.blur();
            });
            var save = document.getElementById("Save");
            save.addEventListener("click", function (e) {
                save.blur();
            });
            var focusK = 0;
            var storeK;
            if (keyORnot == 1) {
                button1.innerText = "Hide";
                document.getElementById("pieces").style.display = "block";
                AddInputListen();
            } else {
                button1.innerText = "Show";
                document.getElementById("pieces").style.display = "none";
            }
            if (document.getElementsByClassName("mchat__say")[0] != undefined) {
                var chat = document.getElementsByClassName("mchat__say")[0];
                chat.addEventListener("focus", function () {
                    document.removeEventListener("keydown", KeyDown);
                    console.log("f");
                });
                chat.addEventListener("blur", function () {
                    document.addEventListener("keydown", KeyDown, false);
                    console.log("b");
                });
            }
            pFKc = getCookie("pawn");
            if (pFKc != "") {
                if (pFKc == "Space") {
                    pFK = " ";
                } else {
                    pFK = pFKc;
                }
                document.getElementById("Kpawnu").value = pFKc;
            } else {
                pFK = "w";
            }
            pLKc = getCookie("pawnl");
            if (pLKc != "") {
                if (pLKc == "Space") {
                    pLK = " ";
                } else {
                    pLK = pLKc;
                }
                document.getElementById("Kpawnl").value = pLKc;
            } else {
                pLK = "q";
            }
            pRKc = getCookie("pawnr");
            if (pRKc != "") {
                if (pRKc == "Space") {
                    pRK = " ";
                } else {
                    pRK = pRKc;
                }
                document.getElementById("Kpawnr").value = pRKc;
            } else {
                pRK = "e";
            }
            qKc = getCookie("queen");
            if (qKc != "") {
                if (qKc == "Space") {
                    qK = " ";
                } else {
                    qK = qKc;
                }
                document.getElementById("Kqueen").value = qKc;
            } else {
                qK = "s";
            }
            roLc = getCookie("rookl");
            if (roLc != "") {
                if (roLc == "Space") {
                    roL = " ";
                } else {
                    roL = roLc;
                }
                document.getElementById("Krookl").value = roLc;
            } else {
                roL = "1";
            }
            roRc = getCookie("rookr");
            if (roRc != "") {
                if (roRc == "Space") {
                    roR = " ";
                } else {
                    roR = roRc;
                }
                document.getElementById("Krookr").value = roRc;
            } else {
                roR = "3";
            }
            knLc = getCookie("knightl");
            if (knLc != "") {
                if (knLc == "Space") {
                    knL = " ";
                } else {
                    knL = knLc;
                }
                document.getElementById("Kknightl").value = knLc;
            } else {
                knL = "a";
            }
            knRc = getCookie("knightr");
            if (knRc != "") {
                if (knRc == "Space") {
                    knR = " ";
                } else {
                    knR = knRc;
                }
                document.getElementById("Kknightr").value = knRc;
            } else {
                knR = "d";
            }
            biKc = getCookie("bishop");
            if (biKc != "") {
                if (biKc == "Space") {
                    biK = " ";
                } else {
                    biK = biKc;
                }
                document.getElementById("Kbishop").value = biKc;
            } else {
                biK = " ";
            }
            kingKc = getCookie("king");
            if (kingKc != "") {
                if (kingKc == "Space") {
                    kingK = " ";
                } else {
                    kingK = kingKc;
                }
                document.getElementById("Kking").value = kingKc;
            } else {
                kingK = "shift";
            }
            var ch1skeys = 0;
            if (oneKey() == true) {
                document.getElementsByTagName("summary")[0].innerText = "Please make sure you use different keys for each piece";
                document.getElementsByTagName("summary")[0].style.color = "red";
                ch1skeys = 1;
                keyORnot = 1;
                button1.innerText = "Hide";
                document.getElementById("pieces").style.display = "block";
                AddInputListen();
                setCookie("KeyB", "1");
                for (var v = 0; v < 10; v++) {
                    var samK = myInputs[v].value;
                    for (var z = 0; z < 10; z++) {
                        if (myInputs[z].value == samK && z != v) {
                            myInputs[z].style.backgroundColor = "#971400";
                            myInputs[v].style.backgroundColor = "#971400";
                        }
                    }
                }
            }
            document.getElementById("clinput").remove();
            var rmtch = "7";
            var cprm = "8";
            var bparent = $(".cg-wrap")[0];
            var wclock, bclock;
            var mycolor;
            wclock = $("div.clock_white");
            wclock = wclock.length ? wclock[0] : null;
            mycolor = get_color();
            var nn0, nn1;
            if (mycolor == "white") {
                nn0 = 0;
                nn1 = 1;
                if (document.getElementsByClassName(mycolor + " rook")[nn1] != undefined) {
                    document.getElementsByClassName(mycolor + " rook")[nn1].style.backgroundImage = "url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O3N0cm9rZS1saW5lam9pbjpyb3VuZDt9LnN0MXtmaWxsOiNGRkZGRkY7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fS5zdDJ7ZmlsbDojRkZGRkZGO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7fS5zdDN7ZmlsbDpub25lO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7fS5zdDR7ZmlsbDojM0VBRjRFO3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjE4MjE7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO308L3N0eWxlPjxnPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik05LDM5aDI3di0zSDlWMzl6IE0xMiwzNnYtNGgyMXY0SDEyeiBNMTEsMTRWOWg0djJoNVY5aDV2Mmg1VjloNHY1Ii8+PHBhdGggY2xhc3M9InN0MSIgZD0iTTM0LDE0bC0zLDNIMTRsLTMtMyIvPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0zMSwxN3YxMi41SDE0VjE3Ii8+PHBhdGggY2xhc3M9InN0MSIgZD0iTTMxLDI5LjVsMS41LDIuNWgtMjBsMS41LTIuNSIvPjxwYXRoIGNsYXNzPSJzdDMiIGQ9Ik0xMSwxNGgyMyIvPjwvZz48cmVjdCB4PSIyOC44IiB5PSIyOCIgY2xhc3M9InN0NCIgd2lkdGg9IjEzLjgiIGhlaWdodD0iMTMuOCIvPjwvc3ZnPg==')";
                }
                if (document.getElementsByClassName(mycolor + " knight")[nn1] != undefined) {
                    document.getElementsByClassName(mycolor + " knight")[nn1].style.backgroundImage = "url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe2ZpbGw6I0ZGRkZGRjtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9LnN0MXtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MS41O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9LnN0MntmaWxsOiMzRUFGNEU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjEuMTgyMTtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7fTwvc3R5bGU+PGc+PHBhdGggY2xhc3M9InN0MCIgZD0iTTIyLDEwYzEwLjUsMSwxNi41LDgsMTYsMjlIMTVjMC05LDEwLTYuNSw4LTIxIi8+PHBhdGggY2xhc3M9InN0MCIgZD0iTTI0LDE4YzAuNCwyLjktNS41LDcuNC04LDljLTMsMi0yLjgsNC4zLTUsNGMtMS0wLjksMS40LTMsMC0zYy0xLDAsMC4yLDEuMi0xLDJjLTEsMC00LDEtNC00YzAtMiw2LTEyLDYtMTJzMS45LTEuOSwyLTMuNWMtMC43LTEtMC41LTItMC41LTNjMS0xLDMsMi41LDMsMi41aDJjMCwwLDAuOC0yLDIuNS0zYzEsMCwxLDMsMSwzIi8+PHBhdGggY2xhc3M9InN0MSIgZD0iTTkuNSwyNS41QzkuNSwyNS44LDkuMywyNiw5LDI2cy0wLjUtMC4yLTAuNS0wLjVTOC43LDI1LDksMjVTOS41LDI1LjIsOS41LDI1LjV6IE0xNC45LDE1LjdjLTAuNCwwLjctMC45LDEuMi0xLjIsMS4xYy0wLjItMC4xLTAuMS0wLjgsMC4zLTEuNWMwLDAsMCwwLDAsMGMwLjQtMC43LDAuOS0xLjIsMS4yLTEuMUMxNS41LDE0LjMsMTUuNCwxNSwxNC45LDE1LjdDMTQuOSwxNS43LDE0LjksMTUuNywxNC45LDE1Ljd6Ii8+PHJlY3QgeD0iMjguOCIgeT0iMjgiIGNsYXNzPSJzdDIiIHdpZHRoPSIxMy44IiBoZWlnaHQ9IjEzLjgiLz48L2c+PC9zdmc+')";
                }
            }
            if (mycolor == "black") {
                nn0 = 1;
                nn1 = 0;
                if (document.getElementsByClassName(mycolor + " rook")[nn1] != undefined) {
                    document.getElementsByClassName(mycolor + " rook")[nn1].style.backgroundImage = "url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30uc3Qxe3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7fS5zdDJ7ZmlsbDpub25lO3N0cm9rZTojRUNFQ0VDO3N0cm9rZS1saW5lY2FwOnJvdW5kO30uc3Qze2ZpbGw6IzNFQUY0RTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MS4xODIxO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9PC9zdHlsZT48Zz48cGF0aCBjbGFzcz0ic3QwIiBkPSJNOSwzOWgyN3YtM0g5VjM5eiBNMTIuNSwzMmwxLjUtMi41aDE3bDEuNSwyLjVIMTIuNXogTTEyLDM2di00aDIxdjRIMTJ6Ii8+PHBhdGggY2xhc3M9InN0MSIgZD0iTTE0LDI5LjV2LTEzaDE3djEzSDE0eiIvPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNCwxNi41TDExLDE0aDIzbC0zLDIuNUgxNHogTTExLDE0VjloNHYyaDVWOWg1djJoNVY5aDR2NUgxMXoiLz48cGF0aCBjbGFzcz0ic3QyIiBkPSJNMTIsMzUuNWgyMSBNMTMsMzEuNWgxOSBNMTQsMjkuNWgxNyBNMTQsMTYuNWgxNyBNMTEsMTRoMjMiLz48L2c+PHJlY3QgeD0iMjguOCIgeT0iMjgiIGNsYXNzPSJzdDMiIHdpZHRoPSIxMy44IiBoZWlnaHQ9IjEzLjgiLz48L3N2Zz4=')";
                }
                if (document.getElementsByClassName(mycolor + " knight")[nn1] != undefined) {
                    document.getElementsByClassName(mycolor + " knight")[nn1].style.backgroundImage = "url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNDUgNDUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1IDQ1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHN0eWxlIHR5cGU9InRleHQvY3NzIj4uc3Qwe3N0cm9rZTojMDAwMDAwO3N0cm9rZS13aWR0aDoxLjU7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30uc3Qxe2ZpbGw6I0VDRUNFQztzdHJva2U6I0VDRUNFQztzdHJva2Utd2lkdGg6MS41O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDt9LnN0MntmaWxsOiNFQ0VDRUM7fS5zdDN7ZmlsbDojM0VBRjRFO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDoxLjE4MjE7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO308L3N0eWxlPjxnPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yMiwxMGMxMC41LDEsMTYuNSw4LDE2LDI5SDE1YzAtOSwxMC02LjUsOC0yMSIvPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0yNCwxOGMwLjQsMi45LTUuNSw3LjQtOCw5Yy0zLDItMi44LDQuMy01LDRjLTEtMC45LDEuNC0zLDAtM2MtMSwwLDAuMiwxLjItMSwyYy0xLDAtNCwxLTQtNGMwLTIsNi0xMiw2LTEyczEuOS0xLjksMi0zLjVjLTAuNy0xLTAuNS0yLTAuNS0zYzEtMSwzLDIuNSwzLDIuNWgyYzAsMCwwLjgtMiwyLjUtM2MxLDAsMSwzLDEsMyIvPjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik05LjUsMjUuNUM5LjUsMjUuOCw5LjMsMjYsOSwyNnMtMC41LTAuMi0wLjUtMC41UzguNywyNSw5LDI1UzkuNSwyNS4yLDkuNSwyNS41eiBNMTQuOSwxNS43Yy0wLjQsMC43LTAuOSwxLjItMS4yLDEuMWMtMC4yLTAuMS0wLjEtMC44LDAuMy0xLjVjMCwwLDAsMCwwLDBjMC40LTAuNywwLjktMS4yLDEuMi0xLjFDMTUuNSwxNC4zLDE1LjQsMTUsMTQuOSwxNS43QzE0LjksMTUuNywxNC45LDE1LjcsMTQuOSwxNS43eiIvPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0yNC41LDEwLjRsLTAuNSwxLjRsMC41LDAuMWMzLjEsMSw1LjYsMi41LDcuOSw2LjhzMy4zLDEwLjMsMi44LDIwLjJsMCwwLjVoMi4zbDAtMC41YzAuNS0xMC4xLTAuOS0xNi44LTMuMy0yMS4zcy01LjgtNi42LTkuMi03LjJDMjUuMSwxMC41LDI0LjYsMTAuNCwyNC41LDEwLjR6Ii8+PC9nPjxyZWN0IHg9IjI4LjgiIHk9IjI4IiBjbGFzcz0ic3QzIiB3aWR0aD0iMTMuOCIgaGVpZ2h0PSIxMy44Ii8+PC9zdmc+')";
                }
            }
            var rect, x0, y0, w, sqsize;
            var board = document.querySelectorAll("cg-board")[0];
            rect = board.getBoundingClientRect();
            x0 = rect.left;
            y0 = rect.top;
            w = rect.width;
            sqsize = w / 8;
            var boardx, boardy, horiz, vertic, horiz2, vertic2;
            var horiz0, vertic0;
            var settings2 = board;
            if (ch1skeys == 0) {
                document.body.addEventListener("mousemove", MouseMove, false);
            }
            existingNotation = settings2;
            var mp;
            var keysT = [];
            var numK, checkpiece, pieceX, pieceY, toX, toY;
            var pawnX, pawnY, pawnC, pawnrect, pawnN, pawn2X, pawn2Y, p2;
            var pawnLX, pawnLY, pawnLC, pawnLrect;
            var pawnRX, pawnRY, pawnRC, pawnRrect;
            var kingC, kingrect, kingX, kingY;
            var queenC, queenrect, queenX, queenY, queenN;
            var bishC, bishrect, bishX, bishY, bishN;
            var rook0C, rook0rect, rook0X, rook0Y;
            var rook1C, rook1rect, rook1X, rook1Y;
            var rookC, rookrect, rookX, rookY, rookN, rooktX, rooktY, rooktrect;
            var knightC, knightrect, knightX, knightY, knightN;
            var hor, vert;
            var movecount = 0;
            var keys = [];
            var twice;
            document.addEventListener("keydown", KeyDown);
            document.addEventListener("keyup", KeyUp);
            var mypieces, st = [], pcc, pccn, time;
            var turnC;
            var observer;
            var config;
            var oncebeep = 0, whosmove;
            var target = document.getElementsByClassName("rclock-bottom")[0];
            observer = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    if (document.getElementsByClassName("rclock rclock-bottom running")[0] != undefined && document.getElementsByClassName("rclock rclock-bottom running")[0] != null) {
                        if (oncebeep == 1) {
                            turnC = 1;
                            keysT = keys.slice(0);
                            oncebeep = 0;
                            st = [];
                            window.setTimeout(function () {
                                mypieces = board.children;
                                for (var ppp = 0; ppp < mypieces.length; ++ppp) {
                                    if (mypieces[ppp].className.includes(mycolor) && !mypieces[ppp].className.includes("ghost")) {
                                        pcc = mypieces[ppp].getBoundingClientRect();
                                        pccn = (1 + Math.round((pcc.left - rect.left) / sqsize)) * 10 + (8 - Math.round((pcc.top - rect.top) / sqsize));
                                        st.push(pccn);
                                    }
                                }
                                makemoves();
                            }, 40);
                        }
                    }
                    if (document.getElementsByClassName("rclock rclock-bottom running")[0] == undefined || document.getElementsByClassName("rclock rclock-bottom running")[0] == null) {
                        if (oncebeep == 0) {
                            turnC = 0;
                            st = [];
                            keysT = keys.slice(0);
                            if (hor != horiz0 || vert != vertic0) {
                                window.setTimeout(function () {
                                    makemoves();
                                }, 15);
                            }
                            oncebeep = 1;
                        }
                    }
                });
            });
            config = { attributes: true, subtree: false };
            if (target != undefined && target != null) {
                observer.observe(target, config);
            }
            var premove, prerect;
        }
    }, 400);
};


(function() {
    "use strict";
    let nonce, src, text;
    // Stolen from: https://github.com/artyompal/lichess_keyboard. credits to him.
    let activate = true;

    const observer = new MutationObserver((mutations, observer) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes[0] && mutation.addedNodes[0].tagName && mutation.addedNodes[0].tagName.toLowerCase() === 'script') {
                let script = mutation.addedNodes[0];

                if (script.src.endsWith('chessground.min.js')) {
                    activate = false;
                }

                if (activate) {
                    if (src === undefined && script.src !== '' && !script.src.endsWith('lichess.min.js')) {
                        src = script.src;
                        script.parentElement.removeChild(script);
                    } else if (src !== undefined && script.src === '') {
                        nonce = script.getAttribute('nonce');
                        text = script.innerText;
                        script.parentElement.removeChild(script)
                        observer.disconnect();
                        finishLoading();
                    }
                }
            }
        })
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });

    const finishLoading = () => {
        Promise.all([src].map(u => fetch(u))).then(responses =>
            Promise.all(responses.map(res => res.text()))
        ).then(info => {
            let completed = info[0].replace(/\w+\.isTru\w{4}/, 'true');
            let firstOne = document.createElement('script');
            let secondOne = document.createElement('script');
            firstOne.innerHTML = `${completed}`;
            secondOne.innerHTML = `${text}`;
            firstOne.setAttribute('nonce', nonce)
            firstOne.setAttribute('defer', 'defer')
            secondOne.setAttribute('nonce', nonce)
            document.body.appendChild(firstOne);
            document.body.appendChild(secondOne);
            let windowScript = document.createElement('script');
            windowScript.setAttribute('nonce', nonce)
            windowScript.innerHTML = `(${innerContent.toString()})()`
            document.body.appendChild(windowScript);
        });
    }
})();
