let count = 0;

const value = document.querySelector('#value')
const decrease = document.querySelector('.decrease')
const reset = document.querySelector('.reset')
const increase = document.querySelector('.increase')

decrease.addEventListener('click', function(){
  count--;
  value.textContent=count
  colorCheck()
})

increase.addEventListener('click', function(){
  count++;
  value.textContent =count;
  colorCheck()
})

reset.addEventListener('click', function(){
  count =0
  value.textContent=count
  colorCheck()
})

function colorCheck(){
  if(count<0){
    value.style.color = 'red';
  } else {
    value.style.color = 'green';
  }
}