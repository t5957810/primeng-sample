import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss']
})
export class SubmenuComponent implements OnInit {
  @Input() items: { label: string; children: any[] }[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
