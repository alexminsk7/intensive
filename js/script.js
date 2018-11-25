	function myFirstApp(name, age) {
		
		let answers = [],
		questions = [
		"Как Вас зовут?",
		
		];

		for (let i = 0; i < questions.length; i++) {
			answers[i]=prompt(questions[i])
		};
		document.write(answers + "<br>");

		alert("Привет, меня зовут " + name + " и это моя первая программа!");
		
		function showSkills() {
			let skills = ["HTML", "CSS", "JAVASCRIPT"];

			for (let i = 0; i < skills.length; i++) {
				document.write("Я владею " + " " + skills[i] + "<br>");
			}
		};
		showSkills();
		

		function checkAge() {
			let age = prompt("Сколько Вам лет");
			if (age > 18) {
				alert("В твоем возрасте пора стать веб-разработчиком!")
			} else {
				alert("Пора еще рано!")
			}
		};
		checkAge();

		function calcPow(num) {
			console.log(num*num)
		};
		calcPow(2);
		calcPow(3);
		calcPow(4);
		
	}
	myFirstApp("alex", 22)