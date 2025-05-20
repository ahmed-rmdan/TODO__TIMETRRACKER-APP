import './style.css'
const submitbutton=document.querySelector('.submit')
const timevalue=document.querySelector<HTMLInputElement>('.time')
const datevalue=document.querySelector<HTMLInputElement>('.date')
console.log(submitbutton)
submitbutton?.addEventListener('click',ev=>{
    ev.preventDefault();
        const hours=timevalue?.value
        console.log(hours)
    // const date=datevalue?.valueAsDate
    // date?.setHours(10)
    //  console.log(date?.getHours())
         

})