import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {interval, Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sub: any;
  mySubscription: Subscription


  todaydate;
  componentproperty;
  emailid;
  formdata;
  countDownDate1: any;


  ngOnInit() {



    this.formdata = new FormGroup({
      date: new FormControl(""),
      month: new FormControl(""),
      year: new FormControl(""),
      hours: new FormControl(""),
      min:new FormControl(""),
      sec:new FormControl(""),
    });

  }
  countDownDate :any;

  now="";
  distance="";
  days="";
  hours="";
  minutes="";
  seconds="";


  k=function(){

    setTimeout (() => {
      this.now = new Date().getTime();


      this.distance = this.countDownDate - this.now;


      this.days = Math.floor(this.distance / (1000 * 60 * 60 * 24));

      this.hours = Math.floor((this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((this.distance % (1000 * 60)) / 1000);
    }, 1000);

  }

  onClickSubmit(data) {
    this.countDownDate1 = new Date("Jun 24 , 2020 15:37:25")
    this.countDownDate1.setDate(data.date);
    this.countDownDate1.setFullYear(data.year);
    this.countDownDate1.setHours(data.hours);
    this.countDownDate1.setMinutes(data.min);
    this.countDownDate1.setSeconds(data.sec);
    this.countDownDate1.setMonth(data.month - 1);

    this.countDownDate = this.countDownDate1.getTime();

    this.mySubscription = interval(1000).subscribe((x => {
      this.k();
    }));
  }
  title = 'todoapp';
  todoArray=[];
  todo;
  //todoForm: new FormGroup()
  addTodo(value) {
    if (value != "") {
      this.todoArray.push(value);
      this.todo.value='';
    } else {
      alert('Field required **');
    }}
  /*delete item*/
  deleteItem(todo) {
    for(let i = 0 ;i <= this.todoArray.length ; i++) {
      if(todo == this.todoArray[i]){
        this.todoArray.splice(i,1);
      }}
  }
  // submit Form
  todoSubmit(value:any) {
    if (value !== "" ) {
      this.todoArray.push(value.todo);
      value.todo = "";
    } else {
      alert('Field required **');
    }

  }
}


