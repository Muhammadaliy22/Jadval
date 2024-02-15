 var elArr = [
     {
         title : 'aliy',
         text : 'lorem inpun sal lore',
         img : 'https://th.bing.com/th/id/OIP.8JefaqtUUCnlXWZnp0JzVQHaFN?rs=1&pid=ImgDetMain'
     },
     {
         title : 'abu',
         text : 'pubg oi saoida ',
         img : 'https://th.bing.com/th/id/OIP.8JefaqtUUCnlXWZnp0JzVQHaFN?rs=1&pid=ImgDetMain'
     },
     {
         title : 'shoxa',
         text : 'pubg oi saoida ',
         img : 'https://th.bing.com/th/id/OIP.8JefaqtUUCnlXWZnp0JzVQHaFN?rs=1&pid=ImgDetMain'
     }
 ]

var arr = ['shoxrux', 'nasibullo', 'abdulboriy','abdullox', 'ahror', 'muxammadali','azim', 'ilmidin', 'ali','suxrob','sirojiddin','aziz']
var elWrapper = document.querySelector('.wrapper')
for (var i = 0; i < arr.length; i++) {
    var newBox = document.createElement('div')
    newBox.innerHTML = `
    <div class="box">
    <img src="./img/cat 8k.png" alt="">
    <h2>${arr[i]}</h2>
    <p>Lorem ipsum dolor <br> sit amet.</p>
    <button class="remove" onclick="rm()">say hello</button>
</div>
    `
    elWrapper.appendChild(newBox)
}

 document.addEventListener('contextmenu', function (p) {
     p.preventDefault();
     alert("Kod ni ko'chirish mumkinmas !!!");
 });