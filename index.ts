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

function negativSzam(szamokT:number[]):boolean
{
    var vanNegativ:boolean = false;
    
    for(var i:number = 0; i < szamokT.length;i++)
    {
        if(szamokT[i] < 0)
        {
            vanNegativ = true;
        }
    }

    return vanNegativ;
}

var tomb:number[] = [3,2,5,10,33,-1];
var eredmeny1 = negativSzam(tomb);
console.log(eredmeny1);

function KeruletTerulet(sugar:number):[number,number]
{
   var kerulet:number  = 2 * sugar * Math.PI;

   var terulet:number = sugar * sugar * Math.PI;

   return [kerulet,terulet];
}

var sugar1:number =5;
var eredmeny2 = KeruletTerulet(sugar1);
console.log(eredmeny2);

/*
Keszits interface-t Auto neven:
Gyarto: string
Tipus: string
heng.ur.tart : szam
benzines-e : logikai
*/


interface Auto{
    gyarto:string,
    tipus:string,
    hengerurtartalom:number,
    beniznes:boolean
}