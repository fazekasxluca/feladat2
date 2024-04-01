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
    benzines:boolean
}

/*
-Keszits fgv-t , ami kivalasztja egy auto tombbol a legkisebb heng.ur.tartalmu autot
-Keszits fgv-t, ami megadja a parameterul kapott auto tombbol a benzinesek db számát
-A valtozasokat tolts fel a git hub repoba
*/

//-Keszits fgv-t , ami kivalasztja egy auto tombbol a legkisebb heng.ur.tartalmu autot


function MinHenUrtart(autoT:Auto[]):Auto
{

    var min:Auto = autoT[0];

    for(var i:number  =0; i < autoT.length;i++)
    {
      if(min.hengerurtartalom  > autoT[i].hengerurtartalom)
      {
        min = autoT[i];
      }

    }

    return min;
}
var autoObj1 = {
    gyarto:"Opel",
    tipus:"Corsa",
    hengerurtartalom:2400,
    benzines:true,
};
var autoObj2 = {
    gyarto:"Opel",
    tipus:"Corsa",
    hengerurtartalom:1400,
    benzines:true,
};
var autoObj3 = {
    gyarto:"Opel",
    tipus:"Corsa",
    hengerurtartalom:3450,
    benzines:false,
};

var t:Auto[] = [autoObj1,autoObj2,autoObj3];
var eredmeny3 = MinHenUrtart(t);
console.log(eredmeny3);

