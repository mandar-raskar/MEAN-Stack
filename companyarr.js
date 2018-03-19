
"Company Name":{
	
	"Samsung":
	{
	"Mobile": 20000;
	"LED": 25000;
	"TV": 23000;
},
"Sony":
{
	"Mobile": 30000;
	"LED": 35000;
	"TV": 33000;
},
"Micromax":
{
	"Mobile": 40000;
	"LED": 45000;
	"TV": 43000;
}
},
var table= document.getElementById('data1');
for(company in ComanyName)
{
	var tr = document.createElement("tr");
	var b = CompanyName[company];
	table.appendChild(tr);

	for (x in b)
	{
		var td= document.createElentById("td");
		td.innerHTML = b[x];
		tr.appendChild(td);

	}
}
