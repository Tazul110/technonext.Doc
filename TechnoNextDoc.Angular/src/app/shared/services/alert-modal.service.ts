import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ModalErrorAlertComponent } from "../components/modal-error-alert/modal-error-alert.component";
import { ModalDeleteAlertComponent } from "../components/modal-delete-alert/modal-delete-alert.component";
import { ModalInfoAlertComponent } from "../components/modal-info-alert/modal-info-alert.component";

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  constructor(public dialog: MatDialog) { }

  showInfoModel(message: string) {
    return this.dialog.open(ModalInfoAlertComponent, {
      width: '600px',
      data: {
        message
      }
    });
  }

  showDeleteModal(message: string) {
    return this.dialog.open(ModalDeleteAlertComponent, {
      width: '590px',
      data: {
        errorMessage1: message
      }
    });
  }

  showErrorModal(message: string) {
    return this.dialog.open(ModalErrorAlertComponent, {
      width: '590px',
      data: {
        message
      }
    });
  }
}
