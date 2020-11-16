// Third-party
import { Injectable } from '@angular/core';

// Materials
import { MatSnackBar } from '@angular/material/snack-bar';

// Services
import { RepositoryDefaultInfoModel } from '../models/repositories.model';

// Enums
import { SnackBarTypeEnum } from '../enums/snack-bar-type.enum';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  constructor(private snackBar: MatSnackBar) {}

  public openSuccessInfo(message: string): void {
    this.snackBar.open(message, '', this.setSnackBarSettings(SnackBarTypeEnum.Success));
  }

  public openErrorInfo(message: string): void {
    this.snackBar.open(message, '', this.setSnackBarSettings(SnackBarTypeEnum.Error));
  }

  private setSnackBarSettings(type: SnackBarTypeEnum): {} {
    return {
      duration: 5000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: type
    };
  }

  public filterRepoByOwner(ownerLogin: string, repositories: RepositoryDefaultInfoModel[]): RepositoryDefaultInfoModel[] {
    const newRepositoriesList = repositories.filter(x => x.owner.login === ownerLogin);
    return newRepositoriesList;
  }
}
