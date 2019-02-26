function addQuestions() {
	var choicesNum = 3;
	var qNum = 10;

	var qtextP = document.createElement("p");
	var qNode = document.createElement("div");
	var pcNode = document.createElement("div");
	var fcNode = document.createElement("div");
	var numNode = document.createElement("div");
	var infoNode = document.createElement("div");
	var jumbNode = document.createElement("div");
	var stateNode = document.createElement("div");
	var scoreNode = document.createElement("div");
	var qtextNode = document.createElement("div");
	var fcLabel = document.createElement("label");
	var fcInput = document.createElement("input");
	var promptNode = document.createElement("div");
	var choicesNode = document.createElement("div");

	fcInput.name = "opt";
	fcInput.type = "radio";
	infoNode.className = "info";
	qNode.className = "question";
	qtextNode.className = "qtext";
	fcNode.className = "form-check";
	promptNode.className = "prompt";
	choicesNode.className = "choices";
	fcLabel.className = "form-check-label";
	fcInput.className = "form-check-input";
	jumbNode.className = "content jumbotron";

	scoreNode.innerHTML = "Score: ";
	numNode.innerHTML = "Question: ";
	stateNode.innerHTML = "Status: ";
	promptNode.innerHTML = "Select your answer:";

	fcNode.appendChild(fcLabel);
	qNode.appendChild(infoNode);
	qNode.appendChild(jumbNode);
	fcLabel.appendChild(fcInput);
	jumbNode.appendChild(pcNode);
	qtextNode.appendChild(qtextP);
	infoNode.appendChild(numNode);
	pcNode.appendChild(promptNode);
	pcNode.appendChild(choicesNode);
	jumbNode.appendChild(qtextNode);
	infoNode.appendChild(stateNode);
	infoNode.appendChild(scoreNode);

	for (var i = 0; i < choicesNum; i++) {
		choicesNode.appendChild(fcNode.cloneNode(true));
	}

	for (var j = 1; j <= qNum; j++) {
		console.log(j);
		document.getElementById("q_container").appendChild(qNode.cloneNode(true));
	}
}

addQuestions();