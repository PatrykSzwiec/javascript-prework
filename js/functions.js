function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
	document.getElementById('pc').innerHTML = 'None';
	document.getElementById('ch').innerHTML = 'None';
	document.getElementById('result').innerHTML = ".";
}