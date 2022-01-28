const questions = [
    "Wie werden Pflanzen bezeichnet, die Hülsenfrüchte tragen?",
    "Wie viele Arten von Hülsenfrüchten gibt es ungefähr?",
    "Wofür werden die in Europa angebauten Hülsenfrüchte größtenteils genutzt?",
    "Wozu gehören Hülsenfrüchte?",
    "Gibt es einen internationalen Tag der Hülsenfrüchte?",
    "Was wird als Hülsenfrucht bezeichnet?",
    "Wie hoch ist der Proteingehalt je nach Sorte?",
    "Wie hoch ist der Anteil der Kohlenhydrate je nach Sorte?",
    "Wie hoch ist der Ballaststoffgehalt je nach Sorte?",
    "Zu wieviel Prozent bestehen Linsen aus Eiweiß?",
    "Zu wieviel Prozent bestehen Sojabohnen aus Eiweiß?",
    "Wofür sind Hülsenfrüchte bei der Ernährung bekannt?",
    "Welche Aussage über Hülsenfrüchte trifft nicht zu?",
    "Was ist der wissenschaftliche Name für Hülsenfrüchtler?",
    "Wo werden die meisten Hülsenfrüchte angebaut?",
    "Welche ist die meist von Menschen gegessene Hülsenfrucht in Deutschland?",
    "Wie viele Menschen essen in Deutschland Hülsenfrüchte durchschnittlich pro Kopf?",
    "Welcher Stoff wird in den Wurzeln von Hülsenfrüchtlern gebildet?",
    "Warum heißen Hülsenfrüchte nicht Hülsengemüse?",
    "Zu welcher Zeit werden Hülsenfrüchte in Deutschland geerntet?",
    "Wie hoch werden die Stöcke von Bohnenpflanzen?",
    "Was kann man mit Hülsenfrüchten in der Medizin machen?",
    "Wie viel Kilogramm Erbsen werden in Deutschland jährlich gegessen?",
    "Welche Temperatur ist die beste für Linsen zum Wachsen?",
    "Was ist der beste Boden für das Wachstum von Hülsenfrüchten?",
    "Wie heißen die weißen Knöllchenbakterien der Hülsenfrüchtler?",
    "Seit wie vielen Jahren werden Hülsenfrüchte kultiviert?"
];
const answers1 = [
    "Bohnen",
    "2000",
    "Tierfutter",
    "Obst",
    "Nein",
    "Die Samen/Früchte der Hülsenfrüchtler",
    "5-15%",
    "0-10%",
    "0-7%",
    "12%",
    "34%",
    "Eiweißgehalt",
    "Proteinreich",
    "Leguminosen",
    "Amerika",
    "Soja",
    "2,5 kg",
    "Stickstoff",
    "Stammen von Gemüse ab",
    "Ende Juni - November",
    "3 Meter",
    "helfen bei der Verdauung",
    "9400 Tonnen",
    "4°C",
    "Humusreiche Böden",
    "Rhizobien",
    "1000"
];
const answers2 = [
    "Hülsenfrüchtler",
    "35000",
    "Treibstoff",
    "Luftfrüchte",
    "Am 10 Februar",
    "Die Schale der Hülsenfrüchtler",
    "15-25%",
    "10-20%",
    "7-15%",
    "19%",
    "34%",
    "Fettgehalt",
    "hohe Erträge",
    "Geum rivale",
    "Europa",
    "Erbsen",
    "10 kg",
    "Sauerstoff",
    "Stammen von Früchten ab",
    "Mitte Juni - Januar",
    "2 Meter",
    "helfen gegen Krebs",
    "88 Tonnen",
    "5°C",
    "Sandige Böden",
    "Rhizobein",
    "690"
];
const answers3 = [
    "Fruchthülser",
    "20000",
    "Essen",
    "Flugfrüchte",
    "Irgendwann im Sommer",
    "Die kompletten Hülsenfrüchtler",
    "25-35%",
    "20-30%",
    "15-23%",
    "23%",
    "41%",
    "Vitamin C",
    "viele Mineralstoffe",
    "Soja",
    "Asien",
    "Kidneybohnen",
    "2,3 kg",
    "Kohlenstoffdioxid",
    "Gehören dem Fruchtgemüse an",
    "Ende Juni - Mitte Oktober",
    "1 Meter",
    "bekämpfen Tumore",
    "95 Tonnen",
    "10°C",
    "Lehmböden",
    "Rizobein",
    "1200"
];
const answers4 = [
    "Hülsenpflanzen",
    "4750",
    "Fußbodenbau",
    "Gemüse",
    "Es ist eine ganze Woche",
    "Die Wurzeln",
    "35-45%",
    "30-40%",
    "23-30%",
    "30%",
    "48%",
    "OMEGA 3",
    "keine Blähungen",
    "Enzyklopädien",
    "Afrika",
    "Erdnüsse",
    "1,9 kg",
    "Wasserstoff",
    "Ein Fehler bei Benennung",
    "Februar - Juni",
    "5 Meter",
    "Füllung für Feldbetten",
    "297500 Tonnen",
    "20°C",
    "Weichbodenmatten",
    "Rizobien",
    "8000"
];
//                                                   | stimmt nicht
var correct_a = [2, 3, 1, 4, 2, 1, 3, 2, 3, 3, 2, 1, 4, 1, 1, 2, 1, 1, 3, 3, 1, 1, 4, 1, 1, 1, 1];

curr_q = 0;

function onButtonQ(index) {
    document.getElementById("overlay").style.display = "block";
    console.log(curr_q);
    if(index == correct_a[curr_q]) {
        document.getElementById("result").style.color = "green";
        document.getElementById("result").innerHTML = "Richtig!";
    } else {
        document.getElementById("result").style.color = "red";
        document.getElementById("result").innerHTML = "Leider Falsch.";
    }
    nc = getRanInt(27);
    if(nc == curr_q) curr_q = getRanInt(27);
    else curr_q = nc;
    document.getElementById("tq").innerHTML = questions[curr_q];
    document.getElementById("ba1").innerHTML = answers1[curr_q];
    document.getElementById("ba2").innerHTML = answers2[curr_q];
    document.getElementById("ba3").innerHTML = answers3[curr_q];
    document.getElementById("ba4").innerHTML = answers4[curr_q];
}

function getRanInt(max) {
    return Math.floor(Math.random() * max);
}

function onButtonR() {
    document.getElementById("overlay").style.display = "none";
}