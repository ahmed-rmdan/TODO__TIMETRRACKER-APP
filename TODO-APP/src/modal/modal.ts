import { todo } from "../todo"

export const modal:{todos:todo[],length:number,maxpages:number,activepage:number,pagetodo:todo[]}={
todos:[],
length:0,
maxpages:1,
activepage:1,
pagetodo:[]
}
function pushtask(todo:todo){
    modal.todos.push(todo)
    modal.length=modal.length+1;  
   modal.maxpages=Math.ceil(modal.length/3) 
  updatepushitems()

}
function removetask(index:number){
    const dividednumber=modal.todos.length%3 
    
let newtodos=[...modal.todos]  

newtodos.splice(index,1)


modal.todos=[...newtodos]

modal.length=modal.length-1;
modal.maxpages=Math.ceil(modal.length/3)
console.log(dividednumber)
console.log(modal.activepage)
console.log(modal.maxpages)
const checkpage=modal.activepage-1
if(checkpage===modal.maxpages&&dividednumber==1&&modal.activepage>1){
modal.activepage=modal.activepage-1
console.log('aaaaa')
}

updateremoveitems()

}

function handlenext(){
if(modal.activepage<modal.maxpages){
    updatenextitems()
    modal.activepage=modal.activepage+1
}else{
    return
}

    
}
function handleprev(){
   
if(modal.activepage===1){
    return;
}else{
     modal.activepage=modal.activepage-1;
    updateprevitems()
   
}
}
function updatepushitems(){
    if(modal.activepage===modal.maxpages){
      let  newtodos=[...modal.todos]
      const start=(modal.activepage-1)*3
      const end=start+3
      
     modal.pagetodo=newtodos.slice(start,end)
      }
      else{
     return;
      }
 
}
function updatenextitems(){
     let  newtodos=[...modal.todos]
    const start=modal.activepage*3
    const end=start+3
    modal.pagetodo=newtodos.slice(start,end)
}
function updateprevitems(){
      let  newtodos=[...modal.todos]
     
     console.log(modal.activepage)
    const end=(modal.activepage)*3
    const start=end-3
   
    modal.pagetodo=newtodos.slice(start,end)
}
function setitems(items:todo[]){
  
    localStorage.setItem('items',JSON.stringify(items))
    
}
function getitems(){
    const localiems=JSON.parse(localStorage.getItem('items')as string)
    if(!localiems) return;
    const items:todo[] =[...JSON.parse(localStorage.getItem('items')as string)]
    items.forEach(item=>{
        
        item.date=new Date(item.date)
    })
     modal.todos=[...items]

       modal.length=modal.todos.length
    
modal.maxpages=Math.ceil(modal.todos.length/3)
       
       
       updateopenitems()
}
function updateopenitems(){
    let newtodos=[...modal.todos]
    modal.pagetodo=newtodos.slice(0,3)
}
function updateremoveitems(){
    const start=(modal.activepage-1)*3
    const end=start+3
    let newtodos=[...modal.todos]
    
    modal.pagetodo=newtodos.slice(start,end)
}
export const modalview={
    pushtask,
    removetask,
    handlenext,
    handleprev,
    setitems,
    getitems

}
