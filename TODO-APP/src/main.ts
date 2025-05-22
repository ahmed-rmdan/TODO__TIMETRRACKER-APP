import './style.css'
import { todo } from './todo'
import { modalview ,modal} from './modal'
import { Viewtasks } from './viewtasks'
import { Viewtaps } from './viewtaps'
const submitbutton=document.querySelector<HTMLButtonElement>('.submit')
const taskvalue=document.querySelector<HTMLInputElement>('.task')
const timevalue=document.querySelector<HTMLInputElement>('.time')
const datevalue=document.querySelector<HTMLInputElement>('.date')
const nextbutton=document.querySelector<HTMLButtonElement>('.next button')
const prevbutton=document.querySelector<HTMLButtonElement>('.prev button')

 modalview.getitems()


if(modal.todos.length!==0){
    console.log(modal.todos)
 const viewfirsttasks=new Viewtasks(modal.pagetodo)
viewfirsttasks.render()
const viewtaps=new Viewtaps(modal.maxpages,modal.activepage) 
        viewtaps.render() 
}



submitbutton?.addEventListener('click',ev=>{
    ev.preventDefault();
if(taskvalue?.value===''||taskvalue?.value===''||datevalue?.value===''){
    
    return;
}
else{
 const setdate=new todo(taskvalue?.value as string,datevalue?.valueAsDate as Date,timevalue?.value as string)
        modalview.pushtask(setdate)
        const viewtasks=new Viewtasks(modal.pagetodo)
        viewtasks.render() 
        const viewtaps=new Viewtaps(modal.maxpages,modal.activepage) 
        viewtaps.render() 
        modalview.setitems(modal.todos)   
}
               
})

nextbutton?.addEventListener('click',ev=>{
    ev.preventDefault()
   modalview.handlenext()
   const viewtasks=new Viewtasks(modal.pagetodo)
   viewtasks.render()
   const viewtaps=new Viewtaps(modal.maxpages,modal.activepage) 
        viewtaps.render()    
})


prevbutton?.addEventListener('click',ev=>{
    ev.preventDefault()
   modalview.handleprev()
   const viewtasks=new Viewtasks(modal.pagetodo)
   viewtasks.render()
   const viewtaps=new Viewtaps(modal.maxpages,modal.activepage) 
        viewtaps.render()    
})
