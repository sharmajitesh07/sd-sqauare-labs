var empList = [{
	empName: 'Jon',
	designation : 'Front End Developer',
	joining_date:'23/10/2015',
	age: 23
}, {
	empName:'Viki',
	designation : 'Ios Developer',
	joining_date: '24/01/2015',
	age: 20
}, {
	empName: 'Manoj',
	designation : 'Back End Developer', 
	joining_date:'25/10/2015', 
	age: 43
}];

var initialCount = sessionStorage && sessionStorage.getItem('count') ? sessionStorage.getItem('count') : 0,
count = initialCount,
empCounter = 0,
maxEmpCount = 8, //Put the value in a contant so that it can be configured
timeInterval = 1000;

function appendEmpItem (empObject) {
	//Kept the div to be added inline, would have loved to use underscore templating here !! Not sure if that was allowed
	var $newDiv = $('<div class="containerItem"><div class="content">'+
		 '<div class="nameItem" title="DOJ -' + empObject.joining_date + ' Age - ' + empObject.age + '">' + empObject.empName + '</div>' +
		 '<div class="desigItem">' + empObject.designation + '</div>' +
	 '</div></div>');
	$newDiv.hide().appendTo('#container').show('slow');
	//maintained box numbers in session
	$('#countContainer').html(++count);
	if (sessionStorage) {
		sessionStorage.setItem('count', count);
	}
}

//To increment date by one
function getNextDate (dateString) {
	//The string is not in format supported by Date class in javascript, hence split and make relevent date object
	var dateSplitArray = dateString.split('/');
	var thisDateObject = new Date(dateSplitArray[2], dateSplitArray[1] - 1, dateSplitArray[0]);
	//Should take care of month and year changes
	thisDateObject.setDate(thisDateObject.getDate() + 1);
	var dateArr = [
		thisDateObject.getDate(),
		thisDateObject.getMonth() + 1,
		thisDateObject.getFullYear()
	];
	return dateArr.join('/'); 
}

//Reverse the age
function reverseString (age) {
	//convert age to string and post spliiting use array methods
	return age.toString().split('').reverse().join('');
}

$(function() {
    for (var empCount in empList) {
		appendEmpItem(empList[empCount]);
	}

	var interval = setInterval(function () {
		var empObject = empList[empCounter++];
		empObject.age = reverseString(empObject.age);
		empObject.joining_date = getNextDate(empObject.joining_date);
		empList.push(empObject);
		appendEmpItem(empObject);
		if (count - initialCount === maxEmpCount) {
			clearInterval(interval);
		}
	}, timeInterval);

	$( document ).tooltip();
});
