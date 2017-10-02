var url ='https://docs.google.com/spreadsheets/d/e/PUB_ID/pub?gid=0&single=true&output=csv';
var id = '2PACX-1vSNtn3oG0TMMy4Manxu-y6tMzoDGp2JlNBTIzNmjnoadrl_VjaFlr_fw2DifD88W5EMo085lxVBdq7-';

$(function() {
	url = url.replace('PUB_ID', id);
	$.get(url)
	.done(function(csv){
		return csv_as_object(csv)
	})
	.then(data => {
		console.log(data);
		for(d in data){
			console.log(data[d]);
		}
	});
});

function csv_as_object(data){
	return new Promise(function(resolve, reject){
		var obj = {};
		var rows = data.split("\n");
		for (r in rows){
			var columns = rows[r].split(",");
			var identifier = columns[0];
			obj[identifier] = [];
			if(columns.length > 1){
				for(var i = 1; i < columns.length; i++){
					obj[identifier].push(columns[i]);
				}
			}
		}
		console.log(obj)
		console.log("returning");
		resolve(obj);
	});
}
