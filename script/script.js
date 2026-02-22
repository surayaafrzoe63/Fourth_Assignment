///count array of interview and rejected
let interviewList=[]
let rejectedList=[]

///all id niye asa 
let totalCount=document.getElementById('totalCount') //(header part)

let interviewCount=document.getElementById('interviewCount')//(header part)

let rejectedCount=document.getElementById('rejectedCount')//(header part)

let allCards=document.getElementById('allCards')//card section


///card info show er jonno main container k dhora hoyece karon er moddhe sob info ache
let maincontainer=document.querySelector('main');
console.log(maincontainer)

///toggeling er jonno id niye asa
const allFilterBtn=document.getElementById('all-filter-btn');

const interviewFilterBtn=document.getElementById('interview-filter-btn');

const rejectedFilterBtn=document.getElementById('rejected-filter-btn')



function calculateTotalCount(){
  //all button count
  totalCount.innerText=allCards.children.length

  ///interview button
interviewCount.innerText=interviewList.length;

  ///rejected button
  rejectedCount.innerText=rejectedList.length;
}
calculateTotalCount()


//Toggelin method apply
function togglestyle(id){

///remove blue color and (text white)within all button
allFilterBtn.classList.remove('bg-[#3B82F6]','text-white')
interviewFilterBtn.classList.remove('bg-[#3B82F6]','text-white')
rejectedFilterBtn.classList.remove('bg-[#3B82F6]','text-white')


 ///then add white color and(text black) within all button
allFilterBtn.classList.add('bg-white','text-black')
interviewFilterBtn.classList.add('bg-white','text-black')
rejectedFilterBtn.classList.add('bg-white','text-black')

//id take dhora jeta select korbo seitai change hobe
const selected= document.getElementById(id)
console.log(selected)

///then age jeta add korci oita remove kora
selected.classList.remove('bg-white','text-black')
///then age jeta remove korci oita add kora
selected.classList.add('bg-[#3B82F6]','text-white')

}

///card info show
maincontainer.addEventListener('click',function(event){
  const parentnode=event.target.parentNode.parentNode;
  const mobileInfo=parentnode.querySelector('.mobileInfo').innerText
  
  const nativInfo=parentnode.querySelector('.nativInfo').innerText
  
  const paymentInfo=parentnode.querySelector('.paymentInfo').innerText
 
  const applyInfo=parentnode.querySelector('.applyInfo').innerText
  
  const buildPlatform=parentnode.querySelector('.buildPlatform').innerText
  

 const cardInfo={mobileInfo,nativInfo,paymentInfo,applyInfo,buildPlatform}
    
  
console.log(cardInfo)
  const mobileInfoExist= interviewList.find(item=>item.mobileInfo==cardInfo.mobileInfo)

  if(!mobileInfoExist){
    interviewList.push(cardInfo)
  }
  
})


