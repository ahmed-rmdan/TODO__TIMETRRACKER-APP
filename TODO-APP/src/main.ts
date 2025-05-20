import './style.css'
import { todo } from './todo'
import { modalview ,modal} from './modal'
const submitbutton=document.querySelector<HTMLButtonElement>('.submit')
const taskvalue=document.querySelector<HTMLInputElement>('.task')
const timevalue=document.querySelector<HTMLInputElement>('.time')
const datevalue=document.querySelector<HTMLInputElement>('.date')

submitbutton?.addEventListener('click',ev=>{
    ev.preventDefault();

if(taskvalue?.value===''||timevalue===undefined||datevalue===undefined){
    return;
}
else{
 const setdate=new todo(taskvalue?.value as string,datevalue?.valueAsDate as Date,timevalue?.value as string)
        modalview.pushtask(setdate)
        console.log(modal.todos)
        
       
}
       
   
         

})

