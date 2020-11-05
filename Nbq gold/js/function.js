var month = [
	"Jan",
	"Feb",
	"Mar",
	"April",
	"May",
	"June",
	"July",
	"Aug",
	"Sept",
	"Oct",
	"Nov",
	"Dec"
];


function validate(){
    if(document.getElementById('user').value == 'Ryme1947' && document.getElementById('pass').value == 'myprincess'){
        return true
    }
    return false
}


let dayTxt = document.querySelector('.day')
let dateTxt = document.querySelector('.date')
let mnTxt = document.querySelector('.month')
let sec_dayTxt = document.querySelector('.sec_day')
let sec_dateTxt = document.querySelector('.sec_date')
let sec_mnTxt = document.querySelector('.sec_month')

let date = new Date()

var a = moment.tz(date, "America/New_york");
console.log(a)



if(a._d.getHours() < 12){
    dayTxt.innerText = 'Good morning'
    sec_dayTxt.innerText = 'Good morning'
    mnTxt.innerText = month[a._d.getMonth()]
    sec_mnTxt.innerText = month[a._d.getMonth()]
}
else if(a._d.getHours() < 17){
    dayTxt.innerText = 'Good afternoon'
    sec_dayTxt.innerText = 'Good afternoon'
    mnTxt.innerText = month[a._d.getMonth()]
    sec_mnTxt.innerText = month[a._d.getMonth()]
}
else{
    dayTxt.innerText = 'Good evening'
    sec_dayTxt.innerText = 'Good evening'
    mnTxt.innerText = month[a._d.getMonth()]
    sec_mnTxt.innerText = month[a._d.getMonth()]
}







