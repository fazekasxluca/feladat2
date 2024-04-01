/*
-Keszits fgv-t ,ami...

-Eldonti, hogy a paramterul kapott szamok a tombben vvan-e a negtativ szam.
-Egy parametrul kapott sugarbol megallapitja a kor keruletet es teruletet:
-Tuplet! alkalmazz
-kerulet : 2* sugar *PI
-terulet : sugar* sugar * PI
*/
/*
Keszits interface-t Auto neven:
Gyarto: string
Tipus: string
heng.ur.tart : szam
benzines-e : logikai
*/
//-Keszits fgv-t ,ami...
//-Eldonti, hogy a paramterul kapott szamok a tombben vvan-e a negtativ szam.
function negativSzam(szamokT) {
    var vanNegativ = false;
    for (var i = 0; i < szamokT.length; i++) {
        if (szamokT[i] < 0) {
            vanNegativ = true;
        }
    }
    return vanNegativ;
}
var tomb = [3, 2, 5, 10, 33, -1];
var eredmeny1 = negativSzam(tomb);
console.log(eredmeny1);
function KeruletTerulet(sugar) {
    var kerulet = 2 * sugar * Math.PI;
    var terulet = sugar * sugar * Math.PI;
    return [kerulet, terulet];
}
var sugar1 = 5;
var eredmeny2 = KeruletTerulet(sugar1);
console.log(eredmeny2);
