{	
	//premenne z js
	let a, b, c;
	let znamienko;
	//premenna z html
	let vysledok;
	//premenna pre html
	let znamienka=["+", "-", "*", "/"];


	//definovanie funkcii
	//generuje od 0 po max, bez max
	function generuj(max) {
		return Math.floor(Math.random() * max);
	}
	//vygeneruje a, b a znamienko a vypocita vysledok c
	function generujCisla() {
		a=generuj(100);
		b=generuj(100);
		znamienko=generuj(4);
		//vypocita c podla znamienka
		if (znamienko==0) c=a+b;
		else if (znamienko==1) c=a-b;
		else if (znamienko==2) c=a*b;
		//zaokruhlene na 2 desatinne cisla
		else c=Math.round(a/b*100)/100;
	}

	function vykresli() {
		document.getElementById("a").children[0].innerHTML = a;
		document.getElementById("znamienko").children[0].innerHTML = znamienka[znamienko];
		document.getElementById("b").children[0].innerHTML = b;
	}

	function vyhodnot() {
		if (vysledok.innerHTML==c) {
			document.getElementById("odpoved").innerHTML="spravne";
		}
		else document.getElementById("odpoved").innerHTML="nespravne";
	}

	function kontrolaVysledku(e) {
		if (e.which==13) {
			e.preventDefault();
			vyhodnot();
		}
	}


	//hra
	generujCisla();
	vykresli();
	//do premennej ulozi p tag z divu #vysledok
	vysledok=document.getElementById("vysledok").children[0];
	//automaticky nastavi kurzor na vysledok
	vysledok.focus();


}