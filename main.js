
//add clock time

let clock = document.getElementById('clock', 'currentDay', 'currentMonth', 'currentYear');

function clockTime() {

	let nowDate = new Date();


	let hours = nowDate.getHours();
	let minutes = nowDate.getMinutes();
	let seconds = nowDate.getSeconds();
	let day = nowDate.getDay();
	let month = nowDate.getMonth();
	let year = nowDate.getFullYear();
	let timeOfDay;

	let monthOfYear = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
	let monthString = monthOfYear[month];


	let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	let dayString = daysOfWeek[day];


	if (hours >= 12) {
		hours -= 12;
		timeOfDay = 'PM'
	} else {
		timeOfDay = 'AM'
	}
	if (hours < 10) { hours = '0' + hours; }
	if (minutes < 10) { minutes = '0' + minutes; }


	let clockString = hours + ':' + minutes + ':' + seconds;
	currentDay.textContent = dayString + ' / ' + monthString + ' / ' + year + ' / ' + clockString + ' ' + timeOfDay;
}

setInterval(clockTime, 1000);


//add the number of pictures

let numOfPicture = document.getElementById('numOfPicture');
numOfPicture.textContent = 'Number of pictures: ' + document.querySelectorAll('.img').length;



// add modal image

let img = document.querySelectorAll('.img');
let modal = document.querySelector('.modal');
let modalContent = document.querySelector('.modal-content');

img.forEach((element) => {
	element.addEventListener(`click`, () => {
		modal.style.display = 'block';
		modalContent.src = element.src;
	});
});

let exit = document.getElementsByClassName('close')[0];

exit.onclick = function () {
	modal.style.display = 'none';
}