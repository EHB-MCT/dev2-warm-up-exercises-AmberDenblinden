import { getRandomScores, getStudentJSON, runTitle } from "./lib.js";
import Student from "./Student.js";

runTitle();
warmup1();
warmup2();
warmup3();
warmup4();
warmup5();

function warmup1() {
	console.log("Exercise week 1");
	document.querySelector("#button-1a").addEventListener("click", function () {
		document.querySelector("#content-1").innerHTML =
			"<p>Hallo, dit is de oefening van je Amber</p>";
	});

	document.querySelector("#button-1b").addEventListener("click", function () {
		document.querySelector("#section-1").style.backgroundColor = "lightblue";
	});

	document.querySelector("#button-1c").addEventListener("click", function () {
		const newText = document.createElement("h1");
		newText.id = "content-1";
		newText.className = "content";
		newText.innerHTML = "<h1>Ik ben er klaar voor.</h1>";
		document.querySelector("#content-1").append(newText);
	});
}

function warmup2() {
	console.log("Exercise week 2");
	let scores = getRandomScores(10);

	document.querySelector("#button-2a").addEventListener("click", function () {
		// TODO: ---Scores toegvoegen ---
		// TODO: ul toevoegen
		let html = "<ul>";

		// TODO: li per score
		scores.forEach(function (score) {
			console.log(scores);
			console.log(score);
			// TODO:li toevoegen
			// TODO: zorgen voor echte score
			html += `<li>${score}</li>`;
		});
		html += "</ul>";

		// TODO: toevoegen aan html
		document.querySelector("#content-2").innerHTML = html;
	});

	document.querySelector("#button-2b").addEventListener("click", function () {
		// TODO: sort
		scores = scores.sort(function (a, b) {
			if (a > b) {
				return 1;
			} else {
				return -1;
			}
		});

		const sum = scores.reduce(function (total, current) {
			return total + current;
		});

		document.querySelector("#content-2").innerHTML = html;
	});

	// TODO: 3de Knop
	document.querySelector("#button-2c").addEventListener("click", function () {
		// TODO: Som scores uitrekenen

		document.querySelector("#content-2").innerHTML = html;
	});
}

function warmup3() {
	console.log("Exercise week 3");

	document.querySelector("#button-3a").addEventListener("click", function () {
		let student = getStudentJSON();
		console.log(student);

		const studentObject = JSON.parse(student);
		console.log(studentObject);

		document.querySelector("#content-3").innerHTML = html;
	});

	document.querySelector("#button-3b").addEventListener("click", function () {
		document.querySelector(
			"#content-3"
		).innerHTML = `<h2>${studentObject.firstname}</h2>`;
	});
}

function warmup4() {
	console.log("Exercise week 4");

	let main, min, max;
	document.querySelector("#button-4a").addEventListener("click", function () {
		const URL =
			"https://api.openweathermap.org/data/2.5/weather?q=Brussels&APPID=d7b955c4c268fe54649d6f0d702b39d1&units=metric";
		fetch(URL)
			.then(function (response) {
				console.log(response);
				return response.json(response);
			})
			.then(function (data) {
				console.log(data);
				main = data.main.temp;
				min = data.main.temp_min;
				max = data.main.temp_max;
			});
	});

	document.querySelector("#button-4b").addEventListener("click", function () {
		document.querySelector("#content-4").innerHTML = `<h2>${main}</h1>
			<h2>Lat: ${min}</h4>
			<h2>Lon: ${max}</h4>
			`;
	});
}

function warmup5() {
	let student;
	console.log("Exercise week 5");
	document.querySelector("#button-5a").addEventListener("click", function () {
		console.log("This button works");
		student = new Student("Amber", 23, 20);
		console.log(student);
	});
	document.querySelector("#button-5b").addEventListener("click", function () {
		console.log("This button works");
		document.querySelector(
			"#content-5"
		).innerHTML = `<h2>name: ${student.name} </h2>
        <h2>age: ${student.age} </h2>`;
	});
}
