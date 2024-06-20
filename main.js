let addr;
function main() {
async = fetch("", {
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

}
