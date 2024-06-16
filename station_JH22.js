var test1_cnt = 0;

function countTime(eki_no,number){
	if(test1_cnt >= number){
		test1_cnt = 0;
	}else{
		test1_cnt++;
	}
	document.getElementById("test1_img").src="picture/JH"+eki_no+"/"+test1_cnt + ".jpg"
}

function clickButton(nki_no,number){
	var btnElem = document.getElementById("button");
	if(btnElem.value == "停止"){
		clearInterval(timer1);
		btnElem.value = "再開";
	}else{
		timer1 = setInterval("countTime(eki_no,number)",3000);
		btnElem.value = "停止";
	}
}