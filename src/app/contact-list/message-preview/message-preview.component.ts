import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-preview',
  templateUrl: './message-preview.component.html',
  styleUrls: ['./message-preview.component.scss'],
})
export class MessagePreviewComponent implements OnInit {
  @Input() name!: string;

  constructor() {}

  ngOnInit(): void {}
}
