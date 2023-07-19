// INPUTS
const daily = document.getElementById('daily')
const weekly = document.getElementById('weekly')
const monthly = document.getElementById('monthly')

const hour = document.querySelectorAll('.hour')
const timeInterval = document.querySelectorAll('.time-interval')



daily.addEventListener('click', () => {
    hour[0].innerHTML = '5hrs'
    timeInterval[0].innerHTML = 'Yesterday - 7hrs'

    hour[1].innerHTML = '1hrs'
    timeInterval[1].innerHTML = 'Yesterday - 2hrs'

    hour[2].innerHTML = '0hrs'
    timeInterval[2].innerHTML = 'Yesterday - 1hrs '

    hour[3].innerHTML = '1hrs'
    timeInterval[3].innerHTML = 'Yesterday - 1hrs'
    
    hour[4].innerHTML = '1hrs'
    timeInterval[4].innerHTML = 'Yesterday - 3hrs'

    hour[5].innerHTML = '0hrs'
    timeInterval[5].innerHTML = 'Yesterday - 1hrs'

})
weekly.addEventListener('click', () => {
    hour[0].innerHTML = '32hrs'
    timeInterval[0].innerHTML = 'Last Week - 36hrs'

    hour[1].innerHTML = '10hrs'
    timeInterval[1].innerHTML = 'Last Week- 8hrs'

    hour[2].innerHTML = '4hrs'
    timeInterval[2].innerHTML = 'Last Week - 7hrs '

    hour[3].innerHTML = '4hrs'
    timeInterval[3].innerHTML = 'Last Week- 5hrs'
    
    hour[4].innerHTML = '5hrs'
    timeInterval[4].innerHTML = 'Last Week - 10hrs'

    hour[5].innerHTML = '2hrs'
    timeInterval[5].innerHTML = 'Last Week - 2hrs'

})


monthly.addEventListener('click', () => {
   
    hour[0].innerHTML = '103hrs'
    timeInterval[0].innerHTML = 'Last Month - 108hrs'

    hour[1].innerHTML = '23hrs'
    timeInterval[1].innerHTML = 'Last Month- 29hrs'

    hour[2].innerHTML = '13hrs'
    timeInterval[2].innerHTML = 'Last Month - 19hrs '

    hour[3].innerHTML = '11hrs'
    timeInterval[3].innerHTML = 'Last Month- 18hrs'
    
    hour[4].innerHTML = '21hrs'
    timeInterval[4].innerHTML = 'Last Month - 23hrs'

    hour[5].innerHTML = '7hrs'
    timeInterval[5].innerHTML = 'Last Month - 11hrs'

})
