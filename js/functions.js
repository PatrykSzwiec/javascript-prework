function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
	document.getElementById('pc').innerHTML = 'You : ';
	document.getElementById('ch').innerHTML = "Computer : ";
	document.getElementById('result').innerHTML = "Winner: <br>";
}