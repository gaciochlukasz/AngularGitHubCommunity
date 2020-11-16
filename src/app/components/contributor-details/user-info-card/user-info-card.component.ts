// Third-party
import { Component, Input, OnInit } from '@angular/core';

// Models
import { UserExtendedInfoModel } from 'src/app/models/user-info.model';

@Component({
  selector: 'scl-user-info-card',
  templateUrl: './user-info-card.component.html',
  styleUrls: ['./user-info-card.component.scss']
})
export class UserInfoCardComponent implements OnInit {
  @Input() userInfo: UserExtendedInfoModel;
  constructor() { }

  ngOnInit(): void {
  }

}
