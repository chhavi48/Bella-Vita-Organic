display(allproductdata);
function display(data) {
  document.querySelector(".right").innerHTML="";
  data.map(function (elem) {

    var div = document.createElement("div");
    div.setAttribute("class", "boxes");
    var div0 = document.createElement("div");
    div0.setAttribute("class", "div0");

    var imgs = document.createElement("img");
    imgs.setAttribute("class", "image");
    imgs.src = elem.img;
    var button=document.createElement("button")
    button.innerText="BUY NOW"
    button.setAttribute("class","btn_buy")
    div0.append(imgs,button);
   
    var p = document.createElement("p");
    p.setAttribute("class", "para_box");
    p.innerText = elem.pname;
    var div1 = document.createElement("div");
    div1.setAttribute("class", "div1");
    var i1 = document.createElement("i");
    i1.setAttribute("class", "fas fa-star");
    var i2 = document.createElement("i");
    i2.setAttribute("class", "fas fa-star");
    var i3 = document.createElement("i");
    i3.setAttribute("class", "fas fa-star");
    var i4 = document.createElement("i");
    i4.setAttribute("class", "fas fa-star");
    var i5 = document.createElement("i");
    i5.setAttribute("class", "fas fa-star-half-alt");
    var span = document.createElement("span");
    span.innerText = "1909 reviews";
    div1.append(i1, i2, i3, i4, i5, span);
    div2 = document.createElement("div");
    div2.setAttribute("class", "div2");
    var p1 = document.createElement("p");
    p1.innerText = elem.offprice;
    p1.setAttribute("class", "p1");
    var p2 = document.createElement("p");
    p2.innerText = "Rs."+elem.price;
    p2.setAttribute("class", "p2");

    div2.append(p1, p2);
    div.append(div0, p, div1, div2);
    document.querySelector(".right").append(div);
  });
}

function seemore() {
  var btn = document.querySelector(".btn_para");
  var dots = document.querySelector("#dots");
  var more = document.querySelector("#more");
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btn.innerHTML = "Read more";
    more.style.display = "none";
  } else {
    dots.style.display = "none";
    btn.innerHTML = "Read less";
    more.style.display = "inline";
  }
}

//category hide and show
var flag = "p";
function hide1() {
  var elem = document.querySelector(".category1");
  if (flag == "p") {
    elem.classList.remove("disp");
    flag = "m";
  } else {
    elem.classList.add("disp");
    // location.reload();
    flag = "p";
  }
}
//concern hide and show
var flag = "R";
function hide2() {
  var elem = document.querySelector(".category2");
  if (flag == "R") {
    elem.classList.remove("disp");
    flag = "S";
  } else {
    elem.classList.add("disp");
    // location.reload();
    flag = "R";
  }
}
//gradiennt hide and show
var flag = "J";
function hide3() {
  var elem = document.querySelector(".category3");
  if (flag == "J") {
    elem.classList.remove("disp");
    flag = "K";
  } else {
    elem.classList.add("disp");
    // location.reload();
    flag = "J";
  }
}
//sort item by price

function selectitem(e){
var selectval=document.querySelector("#sort").value
if(selectval=="l2h"){
 var l2hdata= allproductdata.sort(function(a,b){
    return a.price-b.price
  })
 display(l2hdata)
}else if(selectval=="h2l"){
  var h2ldata= allproductdata.sort(function(a,b){
    return b.price-a.price
  })
 display(h2ldata)
}
}