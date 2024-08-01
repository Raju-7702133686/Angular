import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: '<h1>hello</h1>',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  states=[
    {
      id:1,
      name:"Andhra Pradesh",
      code:"AP"
    },
    {
      id: 2,
      name:"Telengaa",
      code:"TG"
    },
    {
      id:3,
      name:"karnataka",
      code:"KA"
    },
    {
      id:4,
      name:"Tamil Nadu",
      code:"TN"
    },
    {
      id:5,
      name:"Kerala",
      code:"KL"
    }

  ]
  districts=[
    {
      id:1,
      name:"Kurnool",
      s_id:1
    },
    {
      id:2,
      name:"Ananthapuram",
      s_id:1,
    },
    {
      id:3,
      name:"Nandyala",
      s_id:1
    },
    {
      id:4,
      name:"Kadapa",
      s_id:1
    },
  {
    id:5,
    name:"Chittoor",
    s_id:1
  },
  {
    id:6,
    name:"Hyderabad",
    s_id:2
  },
  {
    id:7,
    name:"Nalgonda",
    s_id:2
  },
  {
    id:8,
    name:"Mahaboob nagar",
    s_id:2
  },
  {
    id:9,
    name:"Jadcharla",
    s_id:2
  },
  {
  id:10,
  name:"Sad nagar",
  s_id:2
  },
  {
    id:11,
    name:" Bengaluru",
    s_id:3
  },
  {
    id:12,
    name:"Belagavim",
    s_id:3,
  },
  {
    id:13,
    name:"Mysuru",
    s_id:3
  },
  {
    id:14,
    name:"Ballari",
    s_id:3
  },
{
  id:15,
  name:"Kalaburagi",
  s_id:3
},
{
  id:16,
  name:"Kallakurichi",
  s_id:4
},
{
  id:17,
  name:"Chennai",
  s_id:4
},
{
  id:18,
  name:"Tirunalveli",
  s_id:4
},
{
  id:19,
  name:"Chengalpattu ",
  s_id:4
},
{
id:20,
name:"Tenkasi",
s_id:4
},
{
  id:21,
  name:"Kozhikode",
  s_id:5
},
{
  id:22,
  name:"Kochi",
  s_id:5
},
{
  id:23,
  name:"Thiruvananthapuram",
  s_id:5
},
{
  id:24,
  name:"Kollam  ",
  s_id:5
},
{
id:25,
name:"kerala",
s_id:5
}
  ]

  filterDistricts= this.districts;
  updateDistricts(e:any){
    let sId=e.target.value;
    console.log(sId);
  }
}
