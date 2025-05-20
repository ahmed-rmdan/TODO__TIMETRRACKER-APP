
export class todo{
    id:string;
    task:string;
    date:Date;
    time:string;
    constructor(task:string,date:Date,time:string){
      this.task=task;
      this.id=new Date().toString();
      this.date=date
      this.time=time
      this.sethours()
    }
    sethours(){
    const hours:number= Number(this.time.split(':')[0])
    const minutes:number=Number(this.time.split(':')[1])
    this.date.setHours(hours)
    this.date.setMinutes(minutes)
    }

}