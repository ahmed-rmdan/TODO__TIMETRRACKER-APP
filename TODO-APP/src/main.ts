import './style.css'
import { todo } from './todo'
import { modalview ,modal} from './modal/modal'
import { Viewtasks } from './view/viewtasks'
import { Viewtaps } from './view/viewtaps'
const submitbutton=document.querySelector<HTMLButtonElement>('.submit')
const taskvalue=document.querySelector<HTMLInputElement>('.task')
const timevalue=document.querySelector<HTMLInputElement>('.time')
const datevalue=document.querySelector<HTMLInputElement>('.date')
const nextbutton=document.querySelector<HTMLButtonElement>('.next button')
const prevbutton=document.querySelector<HTMLButtonElement>('.prev button')

handleloadapp();




submitbutton?.addEventListener('click',ev=>{
    ev.preventDefault();
    if(taskvalue?.value===''||timevalue?.value===''||datevalue?.value==='' ||datevalue?.valueAsDate===null ||datevalue?.valueAsDate===undefined){

    return;
}
    const nowdate=new Date()
    const taskdate=datevalue?.valueAsDate
    const hours:number= Number(timevalue?.value.split(':')[0])
    const minutes:number=Number(timevalue?.value.split(':')[1])
    taskdate?.setHours(hours)
    taskdate?.setMinutes(minutes)

if(taskdate< nowdate ){
    return
}
else{
 const setdate=new todo(taskvalue?.value as string,taskdate)
        modalview.pushtask(setdate)
        const viewtasks=new Viewtasks(modal.pagetodo)
        viewtasks.render() 
        const viewtaps=new Viewtaps(modal.maxpages,modal.activepage) 
        viewtaps.render() 
        modalview.setitems(modal.todos)   
      
}
               
})

nextbutton?.addEventListener('click',ev=>{
if(modal.activepage===modal.maxpages){
    return
}else{
   ev.preventDefault()
   modalview.handlenext()
   const viewtasks=new Viewtasks(modal.pagetodo)
   viewtasks.render()
   const viewtaps=new Viewtaps(modal.maxpages,modal.activepage) 
        viewtaps.render()  
}
  
     
})


prevbutton?.addEventListener('click',ev=>{
    ev.preventDefault()
    console.log(modal.activepage)
    if(modal.activepage!==1){
 modalview.handleprev()
   const viewtasks=new Viewtasks(modal.pagetodo)
   viewtasks.render()
   const viewtaps=new Viewtaps(modal.maxpages,modal.activepage) 
        viewtaps.render()  
    }else{
        return
    }
   
   
})


function handleloadapp(){
   
 modalview.getitems()
 

const viewtaps=new Viewtaps(modal.maxpages,modal.activepage) 
        viewtaps.render() 

if(modal.todos.length!==0){
    console.log(modal.todos)
 const viewfirsttasks=new Viewtasks(modal.pagetodo)
viewfirsttasks.render()
const viewtaps=new Viewtaps(modal.maxpages,modal.activepage) 
        viewtaps.render() 
        
}
}

export function handleremove(){
const xbuttun=document.querySelectorAll<HTMLButtonElement>('.exit button')

xbuttun?.forEach(elm=>{
    elm.addEventListener('click',ev=>{
    const indexnumber=elm.dataset.set
       
       modalview.removetask(Number(indexnumber))
    
       const viewtasks=new Viewtasks(modal.pagetodo)
   viewtasks.render()
    const viewtaps=new Viewtaps(modal.maxpages,modal.activepage) 
        viewtaps.render() 
        modalview.setitems(modal.todos) 

    })
})

}
setInterval(function(){
   const viewtasks=new Viewtasks(modal.pagetodo)
   viewtasks.render()
},1000)

