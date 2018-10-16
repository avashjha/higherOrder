var list=[
    {id:1,name:'colgate',price:120,cat:'paste'},
    {id:2,name:'pepsodent',price:100,cat:'paste'},
    {id:3, name:'patanjali',price:80,cat:'paste'},
    {id:4, name:'wai wai',price:20,cat:'noodles'},
    {id:5, name:'maggie',price:30,cat:'noodles'},
    {id:6, name:'rara',price:18,cat:'noodles'},
    
];



/*
var look = document.getElementById('look').nodeValue;
var btn = document.getElementById('btn');

btn.addEventListener('click',()=>{
    console.log(look)
})



var price = list.map(x=>`${x.name} and price is ${x.price*2}`)
console.log(price)


var noodles = list.filter(x=>x.cat==='noodles')
               
                .sort((a,b)=> (a.price>b.price ? 1 : -1) )
                .map(x=>x.name)


console.log(noodles)

*/
//to get the noodles price only
var noodlesPrice = list.filter(x=>x.cat==='noodles')
                    .reduce((total,np)=> total+np.price,0)



console.log(noodlesPrice)


var btn=document.getElementById('btn');
var look=document.getElementById('look');
var box=document.getElementById('box');

var list1=list.map(x=>x.name);

var product = list.map(x=>x.name+' price is'+x.price);
var noodles = list.filter( x => x.cat=='noodles');
var paste = list.filter(x=>x.cat==='paste');


btn.addEventListener('click',hait);

function hait(){
//console.log(look.value)

if(look.value===''){
    console.log('empty')
}
else if(look.value==list.filter(x=>x.name==look.value).map(x=>x.name)){
    console.log('in the list');
    for ( i in list){
        box.innerHTML= list.filter(x=>x.name==look.value).map(x=>`<h1>Product:- ${x.name}</h1><li>Price:- ${x.price}</li><li>Category:-${x.cat}</li>`);
    }   

}
else{
    console.log('not in the list')
}



}


var db= document.getElementById('db');
db.innerHTML= list.map(x=>x.name)
