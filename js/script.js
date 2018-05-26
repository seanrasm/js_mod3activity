

function showInput() {
	
	var string_val = document.getElementById("user_input").value;
	console.log("The initial string value is: " + string_val);
	var reverse_string = string_val.split("").reverse().join("");
	console.log("The reversed string is: " + reverse_string);
	
	document.getElementById('display').innerHTML = reverse_string;
}
