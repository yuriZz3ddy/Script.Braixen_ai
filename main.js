let addr;
function main() {
  const mod = {
    page: 1,
    page_size: 60,
    id: "",
    time_to: 0
  }

async = fetch("https://www.seaart.ai/api/v1/artwork/recommend", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  }
  .then(res => {
    return res.json()
  })
  .then(data => {
    var a = data.data.items
    for (var i = 0; i < a.length; i ++) {
      var imageUrl = a[i].cover
      addr = document.querySelector("raw")
      addr.textContent = data;
    }

  })
  .catch(er => {
    setTimeout(() => { 
    addr document.querySelector("raw")
    addr.textContent = er;
      main()
    }, 2000)
  })
}
 main()
  
  
