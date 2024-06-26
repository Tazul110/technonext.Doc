import { Injectable } from "@angular/core";
import { MatLegacyDialog as MatDialog } from "@angular/material/legacy-dialog";
import { ModalDeleteAlertComponent, ModalInfoAlertComponent, ModalErrorAlertComponent } from "ui-components";

@Injectable({
    providedIn: 'root'
})
export class AlertModalService_temp {

    constructor(public dialog: MatDialog) { }

    showInfoModel(message: string) {
        return this.dialog.open(ModalInfoAlertComponent, {
            width: "600px",
            data: {
                message
            }
        });
    }

    showDeleteModal(message: string) {
        return this.dialog.open(ModalDeleteAlertComponent, {
            width: '590px',
            data: {
                message
            }
        });
    }

    showErroModal(message: string) {
        return this.dialog.open(ModalErrorAlertComponent, {
            width: '590px',
            data: {
                message
            }
        });
    }

}
