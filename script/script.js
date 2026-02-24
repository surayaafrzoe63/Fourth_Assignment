///count array of interview and rejected
let interviewList = []
let rejectedList = []
let currentStatus = 'all'
///all id niye asa 
let totalCount = document.getElementById('totalCount') //(header part)

let interviewCount = document.getElementById('interviewCount')//(header part)

let rejectedCount = document.getElementById('rejectedCount')//(header part)

let allCards = document.getElementById('allCards')//card section

let filteredSection = document.getElementById('filterSection')//faka section jeta nea hoyece
let deleteBtn = document.getElementById('deleteBtn')

let availableJobsCountElement = document.getElementById('availableJobsCount');


///card info show er jonno main container k dhora hoyece karon er moddhe sob info ache
let maincontainer = document.querySelector('main');
console.log(maincontainer)

///toggeling er jonno id niye asa
const allFilterBtn = document.getElementById('all-filter-btn');

const interviewFilterBtn = document.getElementById('interview-filter-btn');

const rejectedFilterBtn = document.getElementById('rejected-filter-btn')


function calculateTotalCount() {
  //all button count
  totalCount.innerText = allCards.children.length

  ///interview button
  interviewCount.innerText = interviewList.length;

  ///rejected button
  rejectedCount.innerText = rejectedList.length;
 if (availableJobsCountElement) {
    availableJobsCountElement.innerText = allCards.children.length; 
  }
 
}
calculateTotalCount()


//Toggelin method apply
function togglestyle(id) {
  currentStatus = id
  ///remove blue color and (text white)within all button
  allFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white')
  interviewFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white')
  rejectedFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white')


  ///then add white color and(text black) within all button
  allFilterBtn.classList.add('bg-white', 'text-black')
  interviewFilterBtn.classList.add('bg-white', 'text-black')
  rejectedFilterBtn.classList.add('bg-white', 'text-black')

  //id take dhora jeta select korbo seitai change hobe
  const selected = document.getElementById(id)
  console.log(selected)

  ///then age jeta add korci oita remove kora
  selected.classList.remove('bg-white', 'text-black')
  ///then age jeta remove korci oita add kora
  selected.classList.add('bg-[#3B82F6]', 'text-white')

  //interview button er jonno
  if (id == 'interview-filter-btn') {
    allCards.classList.add('hidden');
    filteredSection.classList.remove('hidden')
    renderInterview();
  }
  else if (id == 'all-filter-btn') {
    allCards.classList.remove('hidden');
    filteredSection.classList.add('hidden')
  }
  //reject button er jonno
  else if (id == 'rejected-filter-btn') {
    allCards.classList.add('hidden');
    filteredSection.classList.remove('hidden')
    renderReject();
  }
}

///card info show
maincontainer.addEventListener('click', function (event) {
  //interview er jonno (button er name ta asce html button name theke)
   if (!event.target) return;
const parentnode = event.target.parentNode.parentNode
  
   if (!parentnode) return;

  

  // if (event.target.classList.contains('inteviewBtn')) {
    
    // closest('.box-1, .box-2, .box-3, .box-4, .box-5, .box-6, .box-7, .box-8');
    // console.log(parentnode);

    const mobileInfo = parentnode.querySelector('.mobileInfo').innerText;
    const nativInfo = parentnode.querySelector('.nativInfo').innerText;
    const paymentInfo = parentnode.querySelector('.paymentInfo').innerText;
    // const applyInfo = parentnode.querySelector('.applyInfo').innerText;
    const buildPlatform = parentnode.querySelector('.buildPlatform').innerText;

    //delete card from alll section use delete img
    if (event.target.classList.contains('deleteBtn')) {
      parentnode.remove();


      interviewList = interviewList.filter(item => item.mobileInfo !== mobileInfo);
      rejectedList = rejectedList.filter(item => item.mobileInfo !== mobileInfo);
calculateTotalCount();
    if (currentStatus === 'interview-filter-btn') renderInterview();
    if (currentStatus === 'rejected-filter-btn') renderReject();
    return;
  }

if (event.target.classList.contains('inteviewBtn')) {
    const cardInfo = { mobileInfo, nativInfo, paymentInfo, applyInfo: 'Interview', buildPlatform };
    if (!interviewList.find(item => item.mobileInfo === mobileInfo)) {
      interviewList.push(cardInfo);
    }
    rejectedList = rejectedList.filter(item => item.mobileInfo !== mobileInfo);
    parentnode.querySelector('.applyInfo').innerText = 'Interview';
    calculateTotalCount();
    if (currentStatus === 'interview-filter-btn') renderInterview();
    if (currentStatus === 'rejected-filter-btn') renderReject();
  }


    //reject er jonno
    // else if (event.target.classList.contains('rejectBtn')) {
    //   const parentnode = event.target.parentNode.parentNode
      // closest('.box-1, .box-2, .box-3, .box-4, .box-5, .box-6, .box-7, .box-8');
      if (event.target.classList.contains('rejectBtn')) {
    const cardInfo = { mobileInfo, nativInfo, paymentInfo, applyInfo: 'Rejected', buildPlatform };
    if (!rejectedList.find(item => item.mobileInfo === mobileInfo)) {
      rejectedList.push(cardInfo);
    }
    interviewList = interviewList.filter(item => item.mobileInfo !== mobileInfo);
    parentnode.querySelector('.applyInfo').innerText = 'Rejected';
    calculateTotalCount();
    if (currentStatus === 'interview-filter-btn') renderInterview();
    if (currentStatus === 'rejected-filter-btn') renderReject();
  }
});



//interview er jonno mane thrive click korle sekhane akta akta kore card jabe
function renderInterview() {
  filteredSection.innerHTML = '';

 if (interviewList.length === 0) {
    let noJobsDiv = document.createElement('div');
    noJobsDiv.className = 'text-center py-20 text-gray-400';
    noJobsDiv.innerHTML = `
      <img src="jobs.png" alt="No jobs" class="mx-auto mb-5 w-24 h-24">
      <p class="font-bold text-lg">No jobs available</p>
      <p>Check back soon for new job opportunities</p>
    `;
    filteredSection.appendChild(noJobsDiv);
    return;
  }



  for (let interview of interviewList) {
    let status = interview.applyInfo; // 


    let statusClass = status === 'Interview' ? 'bg-[#10B981] text-white' : 'bg-[#F1F2F4] text-black';

    let div = document.createElement('div');
    div.className = 'box-1 flex justify-between border-2 border-gray-300 py-5 px-6 rounded-lg bg-white';
    div.innerHTML = `<div class="left space-y-6">
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
          <button class="inteviewBtn border-2 font-bold border-green-400 text-green-400 py-1 px-3.5 rounded-sm">Interview</button>
          <button class="rejectBtn border-2 font-bold border-red-400 text-red-400 py-1 px-3.5 rounded-sm">Rejected</button>
        </div>
      </div>

      <div class="right">
        <img src="Trash.png" alt="">
      </div>`;
    filteredSection.appendChild(div);
  }
}


function renderReject() {
  filteredSection.innerHTML = '';
  for (let rejected of rejectedList) {
    let status = rejected.applyInfo; // 


    let statusClass = status === 'Rejected' ? 'bg-[#EF4444] text-white' : 'bg-[#F1F2F4] text-black';

    let div = document.createElement('div');
    div.className = 'box-1 flex justify-between border-2 border-gray-300 py-5 px-6 rounded-lg bg-white';
    div.innerHTML = `<div class="left space-y-6">
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
          <button class="inteviewBtn border-2 font-bold border-green-400 text-green-400 py-1 px-3.5 rounded-sm">Interview</button>
          <button class="rejectBtn border-2 font-bold border-red-400 text-red-400 py-1 px-3.5 rounded-sm">Rejected</button>
        </div>
      </div>

      <div class="right">
        <img src="Trash.png" alt="">
      </div>`;
    filteredSection.appendChild(div);
  }
}



