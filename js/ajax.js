function request(callback) {
	var xhr = getXMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
			if (xhr.responseText === "Erreur"){
				alert("prenez la photo dabore!!");
			}else
			callback(xhr.responseText);
		}
	}
  var x = parseInt(document.getElementById("filter").style.left);
  var y = parseInt(document.getElementById("filter").style.top);
	x = encodeURIComponent(x);
	y = encodeURIComponent(y);
	console.log(x + "  " + y);
  var src = encodeURIComponent(document.getElementById("filter").getAttribute("src"));
  var dest = encodeURIComponent(document.getElementById("photo").getAttribute("src"));
	xhr.open("POST", "merge_image.php", true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send("x="+ x +"&y="+ y +"&dest="+ dest +"&src=" + src);
};

function addToGalrie(sData) {
	var div = document.createElement("div");
	div.setAttribute("class", "image");
	div.innerHTML = sData;
	// img.setAttribute("src",sData);
	// img.setAttribute("onclick", "delateImage(this,delateInGalrie)");
	document.querySelector(".gallery").appendChild(div);
}

function delateImage(elem,callback){
	var xhr = getXMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
			if (xhr.responseText === "Erreur"){
				alert("prenez la photo dabore!!");
			}else if(xhr.responseText === "Erreur"){
				alert("tu fais quoi la??!");
			}else
			console.log(xhr.responseText);
			elem.parentNode.parentNode.removeChild(elem.parentNode);
			//callback(elem);
		} else{
      console.log("impossible de contacter le serveur.  xhr=" + xhr.readyState)
		}
	}
	elem = elem.parentNode.querySelector("img");
	var imgTodelate = encodeURIComponent(elem.getAttribute("src"));
	xhr.open("POST", "delate_image.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send("img="+ imgTodelate);
}

function delateInGalrie(elem){
	console.log("ressu =" +elem);
}


function commentIt(callback){
	var elem = document.querySelector('#addcom');
	var com = encodeURIComponent(elem.value);
	var img = document.querySelector('#addcom').parentNode.parentNode.querySelector('img').src.split("/");
	img = encodeURIComponent(img.pop().split('.')[0]);
	var xhr = getXMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
			console.log(xhr.responseText);
			valideCom();
		} else{
      console.log("impossible de contacter le serveur.  xhr=" + xhr.readyState)
		}
	};
		xhr.open("POST", "image_commented.php", true);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.send("img="+ img +"&com="+ com);
}

	function likeIt(elem){
		var img = elem.parentNode.querySelector('img').src.split("/");
		img = encodeURIComponent(img.pop().split('.')[0]);
		var xhr = getXMLHttpRequest();
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
				elem.innerHTML=xhr.responseText;
			} else{
	      console.log("impossible de contacter le serveur.  xhr=" + xhr.readyState)
			}
		};
			xhr.open("POST", "image_liked.php", true);
			xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			xhr.send("img="+ img);
	}
