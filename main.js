let proses = '';
let result = 0;
let finished = false;

function prosess(itemn, e){
	if(finished){
		reset();
	}
	proses += itemn;
	document.querySelector('#displayproses').innerHTML = proses;
	calchasil();
}

function hapusreset(){
		hapusproses();
}

function sapu(){
	proses = "";
	document.querySelector('#displayproses').innerHTML = 0;
	document.querySelector('#display-result').innerHTML = 0;
}

function hapusproses(){
	proses = proses.slice(0,-1);
	document.querySelector('#displayproses').innerHTML = proses;
	calchasil();
}

function selesai(){
	selesai = true;
	document.querySelector('#displayproses').classList.add('afters');
	document.querySelector('#display-result');
}

function calchasil(){

	if(proses != ""){
		let mathhasil = proses;

		try{
			result = eval(mathhasil);
		}catch{}

		document.querySelector('#display-result').innerHTML = result;
	}
	else{
		document.querySelector('#display-result').innerHTML = "";
	}

}

function reset(){
	finished = false;
	hasil = '';
	result = 0;
	proses = "";

	document.querySelector('#display-proses').innerHTML = '';
	document.querySelector('#display-result').innerHTML = '';
}
