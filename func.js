const answers1 = ["Leider falsch. Die richtige Antwort war Hülsenfrüchtler."];
const answers2 = ["Richtig!"];
const answers3 = ["Leider falsch. Die richtige Antwort war Hülsenfrüchtler."];
const answers4 = ["Leider falsch. Die richtige Antwort war Hülsenfrüchtler."];

function onButton(index, i) {
    var a;
    if(index == 1) a = answers1[i];
    else if(index == 2) a = answers2[i];
    else if(index == 3) a = answers3[i];
    else if(index == 4) a = answers4[i];
    window.alert(a);
}