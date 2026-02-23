///count array of interview and rejected
let interviewList=[]
let rejectedList=[]
let currentStatus='all'
///all id niye asa 
let totalCount=document.getElementById('totalCount') //(header part)

let interviewCount=document.getElementById('interviewCount')//(header part)

let rejectedCount=document.getElementById('rejectedCount')//(header part)

let allCards=document.getElementById('allCards')//card section

let filteredSection=document.getElementById('filterSection')//faka section jeta nea hoyece



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
currentStatus=id
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

//interview button er jonno
if(id=='interview-filter-btn'){
  allCards.classList.add('hidden');
  filteredSection.classList.remove('hidden')
}
else if(id=='all-filter-btn'){
  allCards.classList.remove('hidden');
  filteredSection.classList.add('hidden')
}
//reject button er jonno
else if(id=='rejected-filter-btn'){
  allCards.classList.add('hidden');
  filteredSection.classList.remove('hidden')
}
}

///card info show
maincontainer.addEventListener('click', function(event){
  //interview er jonno (button er name ta asce html button name theke)
  if(event.target.classList.contains('inteviewBtn')){
    const parentnode = event.target.parentNode.parentNode
    // closest('.box-1, .box-2, .box-3, .box-4, .box-5, .box-6, .box-7, .box-8');
    console.log(parentnode);

    const mobileInfo = parentnode.querySelector('.mobileInfo').innerText;
    const nativInfo = parentnode.querySelector('.nativInfo').innerText;
    const paymentInfo = parentnode.querySelector('.paymentInfo').innerText;
    const applyInfo = parentnode.querySelector('.applyInfo').innerText;
    const buildPlatform = parentnode.querySelector('.buildPlatform').innerText;

    const cardInfo = {mobileInfo, nativInfo, paymentInfo, applyInfo, buildPlatform};
    const mobileInfoExist = interviewList.find(item => item.mobileInfo == cardInfo.mobileInfo);

    parentnode.querySelector('.applyInfo').innerText = 'Interview';

    if(!mobileInfoExist){
      interviewList.push(cardInfo)
    }
    // interviewList=interviewList.filter(item=>item.mobileInfo !=cardInfo.mobileInfo)
    renderInterview();
    calculateTotalCount();
  }
  
  //reject er jonno
  else if(event.target.classList.contains('rejectBtn')){
    const parentnode = event.target.parentNode.parentNode
    // closest('.box-1, .box-2, .box-3, .box-4, .box-5, .box-6, .box-7, .box-8');
    console.log(parentnode);

    const mobileInfo = parentnode.querySelector('.mobileInfo').innerText;
    const nativInfo = parentnode.querySelector('.nativInfo').innerText;
    const paymentInfo = parentnode.querySelector('.paymentInfo').innerText;
    const applyInfo = parentnode.querySelector('.applyInfo').innerText;
    const buildPlatform = parentnode.querySelector('.buildPlatform').innerText;

    const cardInfo = {mobileInfo, nativInfo, paymentInfo, applyInfo, buildPlatform};
    const mobileInfoExist = rejectedList.find(item => item.mobileInfo == cardInfo.mobileInfo);

    parentnode.querySelector('.applyInfo').innerText = 'Reject';

    if(!mobileInfoExist){
      rejectedList.push(cardInfo)
    }
    interviewList=interviewList.filter(item=>item.mobileInfo !=cardInfo.mobileInfo)
if(currentStatus=='rejected-filter-btn'){
  renderReject()
}
    renderReject();
    calculateTotalCount();
  }


});



//interview er jonno mane thrive click korle sekhane akta akta kore card jabe
function renderInterview(){
  filteredSection.innerHTML='';
  for(let interview of interviewList){
    let status = interview.applyInfo; // 

    
    let statusClass = status === 'Interview' ? 'bg-[#10B981] text-white' : 'bg-[#F1F2F4] text-black';

    let div = document.createElement('div');
    div.className='box-1 flex justify-between border-2 border-gray-300 py-5 px-6 rounded-[8px] bg-white';
    div.innerHTML=`<div class="left space-y-6">
        <div class="space-y-1.5">
          <p class="mobileInfo font-bold text-[#002C5C]">${interview.mobileInfo}</p>
          <p class="nativInfo text-[#64748B]">${interview.nativInfo}</p>
        </div>
        <div>
          <p class="paymentInfo text-[#64748B]">${interview.paymentInfo}</p>
        </div>
        <div>
          <p class="applyInfo ${statusClass} px-5 py-2 inline rounded-xl">${status}</p>
          <p class="buildPlatform mt-3 text-[#323B49]">${interview.buildPlatform}</p>
        </div>
        <div class="flex gap-2">
          <button class="inteviewBtn border-2 font-bold border-green-400 text-green-400 py-1 px-3.5 rounded-[4px]">Interview</button>
          <button class="rejectBtn border-2 font-bold border-red-400 text-red-400 py-1 px-3.5 rounded-[4px]">Rejected</button>
        </div>
      </div>

      <div class="right">
        <img src="Trash.png" alt="">
      </div>`;
    filteredSection.appendChild(div);
  }
}


function renderReject(){
  filteredSection.innerHTML='';
  for(let rejected of rejectedList){
    let status = rejected.applyInfo; // 

    
    let statusClass = status === 'rejected' ? 'bg-[#10B981] text-white' : 'bg-[#F1F2F4] text-black';

    let div = document.createElement('div');
    div.className='box-1 flex justify-between border-2 border-gray-300 py-5 px-6 rounded-[8px] bg-white';
    div.innerHTML=`<div class="left space-y-6">
        <div class="space-y-1.5">
          <p class="mobileInfo font-bold text-[#002C5C]">${rejected.mobileInfo}</p>
          <p class="nativInfo text-[#64748B]">${rejected.nativInfo}</p>
        </div>
        <div>
          <p class="paymentInfo text-[#64748B]">${rejected.paymentInfo}</p>
        </div>
        <div>
          <p class="applyInfo ${statusClass} px-5 py-2 inline rounded-xl">${status}</p>
          <p class="buildPlatform mt-3 text-[#323B49]">${rejected.buildPlatform}</p>
        </div>
        <div class="flex gap-2">
          <button class="inteviewBtn border-2 font-bold border-green-400 text-green-400 py-1 px-3.5 rounded-[4px]">Interview</button>
          <button class="rejectBtn border-2 font-bold border-red-400 text-red-400 py-1 px-3.5 rounded-[4px]">Rejected</button>
        </div>
      </div>

      <div class="right">
        <img src="Trash.png" alt="">
      </div>`;
    filteredSection.appendChild(div);
  }
}



