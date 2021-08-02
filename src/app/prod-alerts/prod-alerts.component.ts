import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-prod-alerts',
  templateUrl: './prod-alerts.component.html',
  styleUrls: ['./prod-alerts.component.css']
})
export class ProdAlertsComponent implements OnInit {
  @Input() product!: Product;
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}