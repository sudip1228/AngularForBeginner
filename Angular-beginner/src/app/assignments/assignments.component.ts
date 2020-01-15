import { Component, OnInit } from '@angular/core';
import  {Assignment} from './assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  title = 'My assignment application';

  enabled=false;
  name:String;
  duedate:Date;


  //creating an array
  assignments:Assignment[]=
  [
    {

name: 'one',
submitted: true,
duedate:new Date('2019-01-01'),

  },

  {
name: 'two',
duedate: new Date('2020-02-01'),
submitted: false
  }




  ];
  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      this.enabled=true;

    },2000); //this method is called after 2 seconds to enable property binding on button provided in angular html.
  }


  onSubmit(){
    const assign= new Assignment();
    assign.name=this.name;
    assign.duedate=this.duedate;
    assign.submitted=false;

    
    this.assignments.push(assign);//pushing all the property values of assign object to an array which name is assignments.Returns new length of array
  }
}
