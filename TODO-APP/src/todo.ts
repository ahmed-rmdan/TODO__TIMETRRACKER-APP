
class todo{
    id:string;
    task:string;
    date:Date;
    constructor(task:string){
      this.task=task;
      this.id=new Date().toString();
      this.date=new Date()
    }

}