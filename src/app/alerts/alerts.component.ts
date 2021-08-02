import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
  @Input() product!: Product;

  constructor() { }

  ngOnInit() {
  }

}