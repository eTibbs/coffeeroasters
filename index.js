

const accordion = document.getElementsByClassName('accordion')



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




accordionfn()



const preferences = document.getElementsByClassName("preference")
const beanType = document.getElementsByClassName("bean")
const quantity = document.getElementsByClassName("quantity")
const grindOption = document.getElementsByClassName("grind")
const deliveries = document.getElementsByClassName("deliver")

function orderSummaryData(classNameList, elementIdNameOne, elementIdNameTwo, totalCharge=""){
  for (let option of classNameList){
    option.addEventListener('click', function(){
      for (let option of classNameList){
        option.classList.remove('active_color')
      }
        option.classList.add('active_color')
        const value = option.children[0].innerHTML
        document.getElementById(elementIdNameOne).innerHTML = value
        document.getElementById(elementIdNameTwo).innerHTML = value

        const opt = option.children[1].innerHTML

        if (parseInt(opt.substr(1,6))){
          document.getElementById(totalCharge).innerHTML = opt.substr(1,6)
        }
          
    })
  }
}



orderSummaryData(preferences, 'answer1', 'modal1')
orderSummaryData(beanType, 'answer2', 'modal2')
orderSummaryData(quantity, 'answer3', 'modal3')
orderSummaryData(grindOption, 'answer4', 'modal4')
orderSummaryData(deliveries, 'answer5', 'modal5', 'total_charge')




const modal = document.getElementById('modal')
const modalBtn = document.getElementById("modalbtn")

modalBtn.onclick = function(){
  modal.style.display = 'block'
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

