let addr;
function main() {
	var onCreate = location.search;
	var textCode = new URLSearchParams(onCreate)
	var onVid = textCode.get("image_id");
	if (!onVid) {
		addr = document.querySelector("raw")
		addr.textContent = "Error NONE"
		return;
	} else {
		
  const mod = {
    page: 1,
    page_size: 60,
    id: onVid,
    time_to: 0
  }

async = fetch("https://www.seaart.ai/api/v1/artwork/recommend", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(mod)
  })
  .then(res => {
    return res.json()
  })
  .then(data => {
    var a = data.data.items
    var jsonp = JSON.stringify(a)
    for (var i = 0; i < a.length; i ++) {
      addr = document.querySelector("raw")
      addr.textContent = jsonp;
    }

  })
  .catch(er => {
    setTimeout(() => { 
    addr = document.querySelector("raw")
    addr.textContent = er;
      main()
    }, 2000)
  })
  }
}
 main()
