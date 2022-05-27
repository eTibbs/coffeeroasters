const accordion = document.getElementsByClassName('accordion')
const accordion_data = document.getElementsByClassName('accordion_data')
const types = document.getElementsByClassName('type')
const preferences = document.getElementsByClassName("preference")
const beanType = document.getElementsByClassName("bean")
const quantity = document.getElementsByClassName("quantity")
const grindOption = document.getElementsByClassName("grind")
const deliveries = document.getElementsByClassName("deliver")



const prefBtn = document.querySelector(".type1")
const beanBtn = document.querySelector(".type2")
const quantityBtn = document.querySelector(".type3")
const grindBtn = document.querySelector(".type4")
const deliveryBtn = document.querySelector(".type5")


const grind = document.getElementsByClassName("grind_op")
const grind_div = document.getElementById("grind_div")
const grind_accord = document.querySelector(".grind_accord")

const modal = document.getElementById('modal')
const modalBtn = document.getElementById("modalbtn")


const menuBtn = document.querySelector(".mobile_btn");
const navMenu = document.querySelector(".mobile_menu");
const toggleBtn = document.querySelector("#toggleBtn");

function toggleMenuBtn() {
  console.log("togglleee")
  navMenu.classList.toggle("close");
  if (toggleBtn.src.match("assets/shared/mobile/icon-hamburger.svg")) {
    toggleBtn.src = "assets/shared/mobile/icon-close.svg";
    navMenu.style.display = 'block'
  } else if (toggleBtn.src.match("assets/shared/mobile/icon-close.svg")) {
    toggleBtn.src = "assets/shared/mobile/icon-hamburger.svg";
    navMenu.style.display = 'none'
  }
}

menuBtn.addEventListener("click", toggleMenuBtn);

function firstAccord(){
  accordion_data[0].style.display = "flex"
}

function accordionfn(){
  for (let i=0; i<accordion.length; i++){
    accordion[i].addEventListener('click', function(){
      this.classList.toggle('active');
      let accordion_data = this.nextElementSibling;

      if (accordion_data.style.display === "flex"){
        accordion_data.style.display = "none";
      } else {
        accordion_data.style.display = "flex";
      }
    })
  }
}

function sideAccordion(el, index){
  el.addEventListener('click', function(){
    accordion[index].classList.toggle('active');
    let accordion_data = accordion[index].nextElementSibling;

    if (accordion_data.style.display === "flex"){
      accordion_data.style.display = "none";
    } else {
      accordion_data.style.display = "flex";
    }
  })
}

function typesColor(classNameList){
  for (let option of classNameList){
    option.addEventListener('click', function(){
    for (let option of classNameList){
      option.classList.remove('option_color')
    }
    option.classList.add('option_color')
  })
  }
}



function coffeeCost(value){

  const week = document.querySelector(".desc1")
  const twoWeeks = document.querySelector(".desc2")
  const month = document.querySelector(".desc3")


  if (value === '250g'){
    week.innerHTML = '7.20'
    twoWeeks.innerHTML = '9.60'
    month.innerHTML = '12.00'

  } else if (value === '500g'){
    week.innerHTML = '13.00'
    twoWeeks.innerHTML = '17.50'
    month.innerHTML = '22.00'

  } else if (value === '1000g'){
    week.innerHTML = '22.00'
    twoWeeks.innerHTML = '32.50'
    month.innerHTML = '42.00'
  }

  const weekCost = parseFloat(week.innerHTML * 4)
  const twoWeekCost = parseFloat(twoWeeks.innerHTML * 2)
  const monthCost = parseFloat(month.innerHTML)

  if (value === 'Every week'){
    document.getElementById("total_charge").innerHTML = weekCost
  } else if (value === 'Every 2 weeks') {
    document.getElementById("total_charge").innerHTML = twoWeekCost
  } else if (value === 'Every month'){
    document.getElementById("total_charge").innerHTML = monthCost
  }

}

function grindDisable(coffee){
  if (coffee === "Capsule"){
    for (let option of grindOption){
      option.classList.remove('active_color')
    }
    document.querySelector(".sentence").innerHTML = ""
    if (grind_div.style.display === "flex"){
      grind_accord.classList.remove('active')
      grind_div.style.display = "none"
    }
    for (let g of grind){
      g.classList.add("disable_grind")
      document.getElementById("answer4").innerHTML = ""
    }
  } else {
    for (let g of grind){
      g.classList.remove("disable_grind")
    }
  }
}

function capSentence(value){
  if (value === 'Capsule'){
    document.querySelector(".sentences").innerHTML = 'using'
  } else if (value === 'Filter' || value === 'Espresso') {
    document.querySelector(".sentences").innerHTML = ''
    document.querySelector(".sentence").innerHTML = 'as'
  }
}


function orderSummaryData(classNameList, elementIdNameOne, elementIdNameTwo){
  for (let option of classNameList){
    option.addEventListener('click', function(){
      for (let option of classNameList){
        option.classList.remove('active_color')
      }
        option.classList.add('active_color')
        
        const value = option.children[0].innerHTML
        
        coffeeCost(value)
        capSentence(value)
       
        document.getElementById(elementIdNameOne).innerHTML = value
        document.getElementById(elementIdNameTwo).innerHTML = value
        
        const coffee = document.getElementById("answer1").innerHTML
        
        grindDisable(coffee)          
      })
    }
  }
  

modalBtn.onclick = function(){
  modal.style.display = 'block'
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

firstAccord()

sideAccordion(prefBtn, 0)
sideAccordion(beanBtn, 1)
sideAccordion(quantityBtn, 2)
sideAccordion(grindBtn, 3)
sideAccordion(deliveryBtn, 4)

accordionfn()

typesColor(types)


orderSummaryData(preferences, 'answer1', 'modal1')
orderSummaryData(beanType, 'answer2', 'modal2')
orderSummaryData(quantity, 'answer3', 'modal3')
orderSummaryData(grindOption, 'answer4', 'modal4')
orderSummaryData(deliveries, 'answer5', 'modal5')



