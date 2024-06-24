//Array - Moods
  const moodAr = ["green", "greenyellow", "rgb(0, 255, 76)", "orange", "red"];
  


//Mood Icon On Click'
const icon = document.querySelectorAll('.js-icon');
const iconContainer = document.querySelector('.mood-icons');
const date = document.querySelectorAll('.day-circle');
const dateContainer = document.querySelector('.day');


moodSelection();
function moodSelection(){

  let checked = false;

  iconContainer.addEventListener('click', function(e){ //when clicking the mood container
    if(!e.target.classList.contains('active')){ //target doesnt have class active
      icon.forEach(function(btn){ //each of the btns run this function
        btn.classList.remove('active'); //remove every active class
          checked = false;
      });
      e.target.classList.add('active'); //add active to target
        checked = true;
    }else{
      e.target.classList.remove('active'); //remove class active if already applied before click
        checked = false;
    }

    //Getting Color Index
      id = e.target.id;
      console.log(id);
    
      date.forEach(function(btn){
        btn.addEventListener('click', function(){
          if(!checked){
            btn.style.backgroundColor = "gray";
          }else{
            btn.style.backgroundColor = moodAr[id - 1];
          }
        });
      });
  });
}
