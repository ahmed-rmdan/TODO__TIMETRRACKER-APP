import './style.css'
import { todo } from './todo'
import { modalview ,modal} from './modal'
import { Viewtasks } from './viewtasks'
const submitbutton=document.querySelector<HTMLButtonElement>('.submit')
const taskvalue=document.querySelector<HTMLInputElement>('.task')
const timevalue=document.querySelector<HTMLInputElement>('.time')
const datevalue=document.querySelector<HTMLInputElement>('.date')
const nextbutton=document.querySelector<HTMLButtonElement>('.next button')
const prevbutton=document.querySelector<HTMLButtonElement>('.prev button')


submitbutton?.addEventListener('click',ev=>{
    ev.preventDefault();

if(taskvalue?.value===''||timevalue===undefined||datevalue===undefined){
    return;
}
else{
 const setdate=new todo(taskvalue?.value as string,datevalue?.valueAsDate as Date,timevalue?.value as string)
        modalview.pushtask(setdate)
        const viewtasks=new Viewtasks(modal.pagetodo)
        viewtasks.render()      
}
               
})

nextbutton?.addEventListener('click',ev=>{
    ev.preventDefault()
   modalview.handlenext()
   const viewtasks=new Viewtasks(modal.pagetodo)
   viewtasks.render()
})


prevbutton?.addEventListener('click',ev=>{
    ev.preventDefault()
   modalview.handleprev()
   const viewtasks=new Viewtasks(modal.pagetodo)
   viewtasks.render()
})
const x=[1,2,3,4,5,6]
console.log(x.splice(0))