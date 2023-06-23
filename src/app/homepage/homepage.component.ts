import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { PrimeNGConfig } from "primeng/api";
@Component({
  selector: 'app-home-page',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomePageComponent {
myimage:string="assets/bgimg.jpeg"; 
constructor(private service:ServiceService){}
user=[{
  CompanyName: 'ProKarma',
  JobRole: 'Developer',
  Skill:[
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
  ],
  JobType: 'Permanent',
  Experience:'1-5'
},
{
CompanyName: 'Bylnc',
  JobRole: 'Angular Developer',
  Skill:[
    'HTML',
    'CSS',
    
  ],
  JobType: 'internship',
  Experience:'3-5'

},
{
  CompanyName: 'Cotus',
    JobRole: 'Trainee',
    Skill:[
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      
    ],
    JobType: 'Permanent',
    Experience:'0-2'
  
  },
  {
    CompanyName: 'ProKarma',
      JobRole: 'Developer',
      Skill:[
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
      ],
      JobType: 'Permanent',
      Experience:'1-5'
    
    }
];
rowdata :any
ngOnInit()
{
  // PrimeNGConfig.ripple = true;
  this.fetchdata();
}
fetchdata()
{
  this.service.getData().subscribe((res:any)=>
  {
    this.rowdata = res;
  })
  console.log(this.rowdata,"rowdata")
}

}
