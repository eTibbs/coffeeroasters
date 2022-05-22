

const accordion = document.getElementsByClassName('accordion')

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


const firstOption = document.getElementsByClassName("preference")

for (let option of firstOption){
  option.addEventListener('click', function(){
    for (let option of firstOption){
      option.classList.remove('active_color')
    }
    option.classList.add('active_color')
    const preference = option.children[0].innerHTML
    console.log(preference)
    document.getElementById('answer').innerHTML = preference
  })
}
