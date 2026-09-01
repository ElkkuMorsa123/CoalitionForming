const vas = document.querySelector(".vas_switch input");
const vihr = document.querySelector(".vihr_switch input");
const sd = document.querySelector(".sd_switch input");
const kesk = document.querySelector(".kesk_switch input");
const rkp = document.querySelector(".rkp_switch input");
const kok = document.querySelector(".kok_switch input");
const kd = document.querySelector(".kd_switch input");
const ps = document.querySelector(".ps_switch input");

var vasSeats = 11;
var vihrSeats = 13;
var sdSeats = 43;
var keskSeats = 23;
var rkpSeats = 9;
var kokSeats = 48;
var kdSeats = 5;
var psSeats = 46;

var curyear = 2023;

rkp.checked = true;
kok.checked = true;
kd.checked = true;
ps.checked = true;

vas.disabled = true;
vihr.disabled = true;
sd.disabled = true;

setSeats();
document.getElementById("2023").disabled = true;
calculateCoalitionSeats()

function toggleParty(party) {
	vas.disabled = false;
	vihr.disabled = false;
	sd.disabled = false;
	kesk.disabled = false;
	rkp.disabled = false;
	kok.disabled = false;
	kd.disabled = false;
	ps.disabled = false;
	if (vas.checked || vihr.checked || sd.checked) {
		kd.disabled = true;
		ps.disabled = true;
	}
	if (vas.checked) {
		kok.disabled = true;
	}
	if (kok.checked || kd.checked || ps.checked) {
		vas.disabled = true;
	}
	if (kd.checked || ps.checked) {
		vihr.disabled = true;
		sd.disabled = true;
	}
	calculateCoalitionSeats()
}

function resetParties() {
	vas.checked = false;
	vihr.checked = false;
	sd.checked = false;
	kesk.checked = false;
	rkp.checked = false;
	kok.checked = false;
	kd.checked = false;
	ps.checked = false;

	vas.disabled = false;
	vihr.disabled = false;
	sd.disabled = false;
	kesk.disabled = false;
	rkp.disabled = false;
	kok.disabled = false;
	kd.disabled = false;
	ps.disabled = false;
	calculateCoalitionSeats()
}

function calculateCoalitionSeats() {
	totalSeats = 0;
	if (vas.checked) {
		totalSeats += vasSeats;
	}
	if (vihr.checked) {
		totalSeats += vihrSeats;
	}
	if (sd.checked) {
		totalSeats += sdSeats;
	}
	if (kesk.checked) {
		totalSeats += keskSeats;
	}
	if (rkp.checked) {
		totalSeats += rkpSeats;
	}
	if (kok.checked) {
		totalSeats += kokSeats;
	}
	if (kd.checked) {
		totalSeats += kdSeats;
	}
	if (ps.checked) {
		totalSeats += psSeats;
	}
	document.getElementById("coalition-seats").textContent = "Seats in coalition: " + totalSeats;
	document.getElementById("coalition-progress").value = totalSeats;
	document.getElementById("coalition-progress").setAttribute("data-label", "Coalition status: " + (totalSeats >= 101 ? "Enough seats" : "Not enough seats"));

	if (totalSeats >= 101) {
		document.getElementById("coalition-progress").classList.add("enough-seats");
		document.getElementById("coalition-progress").classList.remove("not-enough-seats");
	}
	else {
		document.getElementById("coalition-progress").classList.add("not-enough-seats");
		document.getElementById("coalition-progress").classList.remove("enough-seats");
	}
}

function elections(year) {
	curyear = year;
	resetParties();
	if (year == 2023) {
		vasSeats = 11;
		vihrSeats = 13;
		sdSeats = 43;
		keskSeats = 23;
		rkpSeats = 10;
		kokSeats = 48;
		kdSeats = 5;
		psSeats = 46;

		document.getElementById("2023").disabled = true;
		document.getElementById("2019").disabled = false;
		document.getElementById("2015").disabled = false;

	}
	else if (year == 2019) {
		vasSeats = 16;
		vihrSeats = 20;
		sdSeats = 40;
		keskSeats = 31;
		rkpSeats = 10;
		kokSeats = 38;
		kdSeats = 5;
		psSeats = 39;

		document.getElementById("2023").disabled = false;
		document.getElementById("2019").disabled = true;
		document.getElementById("2015").disabled = false;

	}
	else if (year == 2015) {
		vasSeats = 12;
		vihrSeats = 15;
		sdSeats = 34;
		keskSeats = 49;
		rkpSeats = 10;
		kokSeats = 37;
		kdSeats = 5;
		psSeats = 38;

		document.getElementById("2023").disabled = false;
		document.getElementById("2019").disabled = false;
		document.getElementById("2015").disabled = true;
		
	}

	toggleParty();
	setSeats();
}

function setSeats() {
	var vasSeatCount = document.querySelector(".vas_switch .party-name .seat-count");
	var vihrSeatCount = document.querySelector(".vihr_switch .party-name .seat-count");
	var sdSeatCount = document.querySelector(".sd_switch .party-name .seat-count");
	var keskSeatCount = document.querySelector(".kesk_switch .party-name .seat-count");
	var rkpSeatCount = document.querySelector(".rkp_switch .party-name .seat-count");
	var kokSeatCount = document.querySelector(".kok_switch .party-name .seat-count");
	var kdSeatCount = document.querySelector(".kd_switch .party-name .seat-count");
	var psSeatCount = document.querySelector(".ps_switch .party-name .seat-count");

	vasSeatCount.textContent = vasSeats + " seats";
	vihrSeatCount.textContent = vihrSeats + " seats";
	sdSeatCount.textContent = sdSeats + " seats";
	keskSeatCount.textContent = keskSeats + " seats";
	rkpSeatCount.textContent = rkpSeats + " seats";
	kokSeatCount.textContent = kokSeats + " seats";
	kdSeatCount.textContent = kdSeats + " seats";
	psSeatCount.textContent = psSeats + " seats";
}

function presetCoalition(preset) {
	resetParties();
	if (preset == "left") {
		vas.checked = true;
		vihr.checked = true;
		sd.checked = true;
		kesk.checked = true;
		rkp.checked = true;

		kok.disabled = true;
		kd.disabled = true;
		ps.disabled = true;
	}
	else if (preset == "right") {
		kok.checked = true;
		kd.checked = true;
		ps.checked = true;
		rkp.checked = true;

		vas.disabled = true;
		vihr.disabled = true;
		sd.disabled = true;
	}
	else if (preset == "grand") {
		sd.checked = true;
		kesk.checked = true;
		kok.checked = true;
		rkp.checked = true;

		vas.disabled = true;
		kd.disabled = true;
		ps.disabled = true;
	}
	else if (preset == "historical") {
		if (curyear == 2023) {
			kok.checked = true;
			kd.checked = true;
			ps.checked = true;
			rkp.checked = true;

			vas.disabled = true;
			vihr.disabled = true;
			sd.disabled = true;
		}
		else if (curyear == 2019) {
			vas.checked = true;
			vihr.checked = true;
			sd.checked = true;
			kesk.checked = true;
			rkp.checked = true;

			kok.disabled = true;
			kd.disabled = true;
			ps.disabled = true;
		}

		else if (curyear == 2015) {
			kesk.checked = true;
			kok.checked = true;
			ps.checked = true;

			vas.disabled = true;
			vihr.disabled = true;
			sd.disabled = true;
		}
	}
	calculateCoalitionSeats();
}