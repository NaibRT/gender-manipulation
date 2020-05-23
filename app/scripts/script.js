
var range3_4 = document.querySelectorAll(".range3_4");
var range5_6 = document.querySelectorAll(".range5_6");
var range7 = document.querySelectorAll(".range7");




var output = document.getElementById("demo");
var myFrom=document.getElementById('from');

let questions3_4=[
  'Question 3&4/gm-1.01.svg',
  'Question 3&4/gm-1.02.svg',
  'Question 3&4/gm-1.03.svg',
  'Question 3&4/gm-1.04.svg',
  'Question 3&4/gm-1.05.svg',
  'Question 3&4/gm-1.06.svg',
  'Question 3&4/gm-1.07.svg',
  'Question 3&4/gm-1.08.svg'
];
let questions5_6=[
 'Question 5&6/gm-2.01.svg',
 'Question 5&6/gm-2.02.svg',
 'Question 5&6/gm-2.03.svg',
 'Question 5&6/gm-2.04.svg',
 'Question 5&6/gm-2.05.svg',
 'Question 5&6/gm-2.06.svg'
];
let questions7=[
 'Question 7/gm-3.01.svg',
 'Question 7/gm-3.02.svg',
 'Question 7/gm-3.03.svg',
 'Question 7/gm-3.04.svg',
 'Question 7/gm-3.05.svg',
 'Question 7/gm-3.06.svg',
 'Question 7/gm-3.07.svg'
];

var questions3_4Interval=Math.round(100/questions3_4.length);
var questions3_4Count=0;
var x=questions3_4Interval;

let questions5_6Interval=Math.round(100/questions5_6.length);
let questions5_6Count=0;
var x1=questions5_6Interval;

let questions7Interval=Math.round(100/questions7.length);
let questions7Count=0;
var x2=questions7Interval;


range3_4.forEach(range=>{
  range.addEventListener('input',function(){
    if(this.value<=x){
      range.parentElement.previousElementSibling.setAttribute('src',questions3_4[questions3_4Count])
     }
     if(this.value>=x){
      x+=questions3_4Interval;
      questions3_4Count++;
     }
   else{
      x-=questions3_4Interval;
      questions3_4Count--;
     }
  })
})



range5_6.forEach(range=>{
  range.addEventListener('input',function(){
    if(this.value<=x1){

      range.parentElement.previousElementSibling.setAttribute('src',questions5_6[questions5_6Count])
     }
     if(this.value>=x1){
      x1+=questions5_6Interval;
      questions5_6Count++;
     }
   else{
      x1-=questions5_6Interval;
      questions5_6Count--;
     }
  });
})

range7.forEach(range=>{
  range.addEventListener('input',function(){
    if(this.value<=x2){

      range.parentElement.previousElementSibling.setAttribute('src',questions7[questions7Count])
     }
     if(this.value>=x2){
      x2+=questions7Interval;
      questions7Count++;
     }
   else{
      x2-=questions7Interval;
      questions7Count--;
     }
  })
})

const SerializeFormToObject=(form)=>{
  const formData ={};
  let inputs=form.querySelectorAll("input,select");
      inputs.forEach(x=>{
        formData[x.name]=x.value;
      });
     return formData;
  }

//   myFrom.addEventListener('submit',function(e){
//   e.preventDefault();
//   fetch('/create-manipulation',{
//     method
//   })
//   // fs.writeFileSync('../data/database.json',JSON.stringify(data))
//   console.log(data)
// })
