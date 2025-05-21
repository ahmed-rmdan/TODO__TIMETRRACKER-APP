import { todo } from "./todo"

export const modal:{todos:todo[],length:number,start:number,end:number,maxpages:number,activepage:number,pagetodo:todo[]}={
todos:[],
length:0,
start:0,
end:3,
maxpages:1,
activepage:1,
pagetodo:[]
}
function pushtask(todo:todo){
    modal.todos.push(todo)
    modal.length++;  
   modal.maxpages=Math.ceil(modal.length/3) 
  updatepushitems()

}
function removetask(id:string){
modal.todos.filter(to=>
    to.id!==id
)
 length--;   


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
    console.log(modal.activepage)
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
      const end=modal.length
      
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
      console.log(newtodos)
     
    const end=modal.activepage*3
    const start=end-3
     console.log(start)
      console.log(end)
    modal.pagetodo=newtodos.slice(start,end)
}

export const modalview={
    pushtask,
    removetask,
    handlenext,
    handleprev

}
