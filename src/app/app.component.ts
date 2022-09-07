import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public items: MenuItem[] = [
    {
      label: 'File',
      items: [
        { label: 'New', icon: 'pi pi-plus' },
        {
          label: 'Open', icon: 'pi pi-download',
          items: [
            {
              label: 'A', icon: 'pi pi-refresh',
              items: [
                { label: 'A-1', icon: 'pi pi-refresh' },
                { label: 'A-2', icon: 'pi pi-repeat' }
              ]
            },
            { label: 'B', icon: 'pi pi-repeat' }
          ]
        }
      ]
    },
    {
      label: 'Edit',
      items: [
        { label: 'Undo', icon: 'pi pi-refresh' },
        { label: 'Redo', icon: 'pi pi-repeat' }
      ]
    },
    {
      label: 'no child',
      items: []
    }
  ];

  ngOnInit(): void {
    console.log(this.items)
  }

}
