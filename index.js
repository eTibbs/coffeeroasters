const accordion = document.getElementsByClassName('accordion')
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

const pref = document.getElementById("answer1").innerHTML
const btn = document.querySelector(".plan_create")

// function dis(){
//   if (pref !== "Capsule" || pref !== "Filter" || pref !== "Espresso" ){
//     console.log(btn)
//     btn.style.pointerEvents="none"
//     btn.classList.add("disable_button")
//     btn.disabled = true
//   } else {
//     btn.classList.remove("disable_button")
//   }
// }

// dis()

const grind = document.getElementsByClassName("grind_op")

const modal = document.getElementById('modal')
const modalBtn = document.getElementById("modalbtn")


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


function orderSummaryData(classNameList, elementIdNameOne, elementIdNameTwo, totalCharge=""){
  for (let option of classNameList){
    option.addEventListener('click', function(){
      for (let option of classNameList){
        option.classList.remove('active_color')
      }
        option.classList.add('active_color')

        const value = option.children[0].innerHTML
        console.log(value)
        
        
        document.getElementById(elementIdNameOne).innerHTML = value
        document.getElementById(elementIdNameTwo).innerHTML = value

        const coffee = document.getElementById("answer1").innerHTML

        if (coffee === "Capsule"){
          for (let g of grind){
            g.classList.add("disable_grind")
            document.getElementById("answer4").innerHTML = "________"
          }
        } else {
          for (let g of grind){
            g.classList.remove("disable_grind")
          }
        }

        const opt = option.children[1].innerHTML

        if (parseInt(opt.substr(1,6))){
          document.getElementById(totalCharge).innerHTML = opt.substr(1,6)
        }
          
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
orderSummaryData(deliveries, 'answer5', 'modal5', 'total_charge')