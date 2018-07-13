import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { trigger, keyframes, animate, transition } from '@angular/animations';
import * as kf from '../keyframes';
import {ModalComponent} from '../modal/modal.component';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('cardAnimator', [
      transition('* => wobble', animate(1000, keyframes(kf.wobble))),
      transition('* => swing', animate(1000, keyframes(kf.swing))),
      transition('* => jello', animate(1000, keyframes(kf.jello))),
      transition('* => zoomOutRight', animate(1000, keyframes(kf.zoomOutRight))),
      transition('* => slideOutLeft', animate(1000, keyframes(kf.slideOutLeft))),
      transition('* => rotateOutUpRight', animate(1000, keyframes(kf.rotateOutUpRight))),
      transition('* => flipOutY', animate(1000, keyframes(kf.flipOutY))),
    ])
  ]
})

export class CardComponent implements OnInit {
  animationState: string;
  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openUploadDialogue = () => {
    const uploadRef = this.dialog.open(ModalComponent, {
      height: 'auto',
      width: 'auto',
    });
      }
  startAnimation(state) {
    console.log(state);
    if (!this.animationState) {
      this.animationState = state;
    }
  }

  resetAnimationState() {
    this.animationState = '';
  }
}
