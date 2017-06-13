import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  settings = {
    columns: {
      id: {
        title: 'ID',
        filter: false
      },
      name: {
        title: 'Full Name',
        filter: false
      },
      username: {
        title: 'User Name',
        filter: false
      },
      email: {
        title: 'Email',
        filter: false
      }
    }
  };

  data = [
    {
      id:  1,
      name: 'Virat',
      username: 'VK',
      email: 'virat.kohli@gmail.com'
    },
    {
      id:  2,
      name: 'Dhoni',
      username: 'MS',
      email: 'ms.dhoni@gmail.com'
    },
    {
      id:  3,
      name: 'Rohit',
      username: 'RS',
      email: 'rohit.sharma@gmail.com'
    },
    {
      id:  4,
      name: 'Dhawan',
      username: 'SD',
      email: 'shikhar.dhawan@gmail.com'
    },
    {
      id:  5,
      name: 'Rahane',
      username: 'AR',
      email: 'ajinkya.rahane@gmail.com'
    },
    {
      id:  6,
      name: 'Yuvaraj',
      username: 'YS',
      email: 'yuvaraj.singh@gmail.com'

    },
    {
      id:  7,
      name: 'Jadhav',
      username: 'KJ',
      email: 'kedar.jadhav@gmail.com'
    },
    {
      id:  8,
      name: 'Ashwin',
      username: 'RA',
      email: 'ravi.ashwin@gmail.com'
    },
    {
      id:  9,
      name: 'Jadeja',
      username: 'RJ',
      email: 'ravi.jadeja@gmail.com'
    },
    {
      id: 10,
      name: 'Shami',
      username: 'SM',
      email: 'mohamad.shami@gmail.com'
    },
  ];

  source: LocalDataSource;

  ngOnInit() {

  }

  constructor() {
    this.source = new LocalDataSource(this.data);
  }

  onSearch(query: string = '') {
    this.source.setFilter([
      // fields we want to include in the search
      {
        field: 'id',
        search: query
      },
      {
        field: 'name',
        search: query
      },
      {
        field: 'username',
        search: query
      },
      {
        field: 'email',
        search: query
      }
    ], false);
  }
}

