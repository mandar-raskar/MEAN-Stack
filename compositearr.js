
function disp(){

var student = 
{
	"student1" :
	{
	"id":"1",
	"name":"abc",
	"marks":47,
},
	"student2" :
{
	"id":2,
	"name":"def",
	"marks":77,
},
	"student3" :
{
	"id":3,
	"name":"ghi",
	"marks":97,
}
};
var div = document.getElementById('data');
var table =document.createElement('table');
div.appendChild(table);
//var tr = document.createElement("tr");
//var heading = student[0];
//for (head in heading){
	//var th = document.createElement("th");
	//table.innerHtml = heading["head"];
	//tr.appendChild("th");
//}

//for(x in student)

for (x in student){
	
	var tr= document.createElement("tr");
	var z = student[x];
	table.appendChild(tr);
	
	for(y in z){
	var td = document.createElement("td");
		//document.write(z[y]);
		td.innerHTML = z[y];
		tr.appendChild(td);
	}

}
}

