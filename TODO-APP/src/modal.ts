import { todo } from "./todo"

export const modal:{todos:todo[],length:number,start:number,end:number,pages:number}={
todos:[],
length:0,
start:0,
end:3,
pages:1
}
function pushtask(todo:todo){
    modal.todos.push(todo)
    modal.length++;
    if(modal.length===0){
        modal.pages=1
    }
    else{
modal.pages=Number((modal.length/3).toFixed())
    }
    
}
function removetask(id:string){
modal.todos.filter(to=>
    to.id!==id
)
 length--;   
 modal.pages=Number((modal.length/3).toFixed())

}
function updatepagemodal(){
    
  modal.todos=modal.todos.slice(modal.start,modal.end)
}
function handlenext(){

    modal.start=modal.start+3;
    modal.end=modal.end+3;
    modalview.updatepagemodal()

}
function handleprev(){
    modal.start=modal.start-3;
    modal.end=modal.end-3;
    modalview.updatepagemodal()
}

export const modalview={
    pushtask,
    removetask,
    updatepagemodal,
    handlenext,
    handleprev

}
