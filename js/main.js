var dob=document.querySelector("#date");
var output=document.querySelector(".output");
var output_year=document.querySelector(".year");
var output_month=document.querySelector(".month");
var output_days=document.querySelector(".days");
function ageCal(){
	
	var setdob = new Date(dob.value)
	var curentday= new Date();
	var set_month=setdob.getMonth()+1;
	var curent_month=curentday.getMonth()+1;
   	var set_year=setdob.getFullYear();
	var curent_year=curentday.getFullYear();
	var set_date=setdob.getDate();
	var curent_date=curentday.getDate();
	
	var totalDays=0;
	year:for(i=set_year;i<=curent_year;i++){
		var feb
		if(i%4==0){
			feb=29
		}
		else{
			feb=28
		}
		var all_month = [31,feb,31,30,31,30,31,31,30,31,30,31]
		
		for(j=set_month;j<=12;j++){
			
			for(k=set_date;k<=all_month[j-1];k++){
				
				if(k==curent_date && i==curent_year && j==curent_month){
					
					break year;
				}
				else{
					totalDays++
				}
			}
			set_date=1;
		}
		set_month=1;
	}
	console.log(totalDays);
	var month=0,age_year=0,age_date=0,remider;
	while(totalDays!=0){
		if(totalDays>=365){
			remider=totalDays%365;
			age_year=(totalDays-remider)/365;
			totalDays=remider;
		}
		else if(totalDays>=30){
			remider=totalDays%30;
			month=(totalDays-remider)/30;
			totalDays=remider;
		}
		else{
			age_date=totalDays;
			totalDays=0

		}
	}
	
	output_days.value=age_date;
	output_year.value=age_year;
	output_month.value=month;
	console.log(`year=${age_year} month=${month} days=${age_date}`)
}
