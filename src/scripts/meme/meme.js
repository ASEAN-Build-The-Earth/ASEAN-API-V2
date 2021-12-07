function randomObject(obj) {
    const arr = Object.values(obj);
    const randomValue = Math.floor(Math.random() * arr.length);
    document.getElementById("content").innerHTML = JSON.stringify(arr[randomValue]);
}

$.getJSON("../../../data/meme/meme.json", function (data) {
    randomObject(data);
})