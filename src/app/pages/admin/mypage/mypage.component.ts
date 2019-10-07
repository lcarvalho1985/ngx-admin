import { Component } from '@angular/core';

@Component({
  selector: 'ngx-mypage',
  styleUrls: ['./mypage.component.scss'],
  templateUrl: './mypage.component.html',
})
export class MypageComponent {

  starRate = 2;
  heartRate = 4;
  radioGroupValue = 'This is value 2';
}
