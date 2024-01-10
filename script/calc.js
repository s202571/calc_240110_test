const height = document.querySelector('#height')
const weight = document.querySelector('#weight')
const goals = document.querySelector('#goals')
const result = document.querySelector('#result')
let goals_weight = 0;
console.log(height,weight,goals,result)

result.addEventListener('click', function(){
    goals_weight = (height.value-100)*0.9
    goals.value = (`적정 체중은 ${goals_weight}kg 이며 ${weight.value - goals_weight}kg 초과 되셨습니다`)
})