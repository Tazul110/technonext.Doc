import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Injectable({
    providedIn: 'root'
})
export class AlertBarTempService {
    
    constructor(private toastrService: ToastrService,
        private router: Router) { }
    
    showSuccess(title: string, message: string) {
        this.toastrService.success(message, title);
    }
    showWarning(message: string) {
        this.toastrService.warning(message, "Warning!");
    }
    showInfo(title: string, message: string) {
        this.toastrService.info(message, title);
    }
    showError(title: string = "Error", message: string = "Something went wrong. Please try again!") {
        this.toastrService.error(message, title);
    }
    showPageUnderConstructionInfo(pageName: string, title: string = "Info") {
        if(pageName == undefined) {
            let message = "Page is under <span class='text-danger fw-bold'>CONSTRUCTION</span> and will be <span class='text-dancer fw-bold'>LIVE SHORTLY.</span>";
            this.toastrService.info(message, title);
        }
        else {
            let message = `${pageName} page is under <span class='text-danger fw-bold'>progress</span> and will be <span class='text-danger fw-bold'>LIVE SHORTLY.</span>`;
            this.toastrService.info(message, title);            
        }
    }
    showFunctionalityUnderConstructionInfo(buttonName: string, title: string = "Info") {
        let message = `${buttonName} is in <span class='text-danger fw-bold'>progress</span> and will be <span class='text-danger fw-bold'>LIVE SHORTLY.</span>`;
        this.toastrService.info(message, title);
    }

    handleError(error: any) {
        
        console.log(error);
        if(!(error instanceof HttpErrorResponse)) {
            error = error?.rejection;
        }
        let message = error?.message;
        let title = "Error";
        if(error instanceof HttpErrorResponse) {
            message = error?.error;
            if(error?.status == 400) {
                title = "Invalid Request";
            }
            // Handle aunthorized error
            else if(error?.status == 401) {
                this.toastrService.error("Please login again to continue.", "Session Expired");

                setTimeout(() => {
                    this.router.navigate(["/login"]);
                }, 500)

                return;
            }
        }
        
        if(!message || typeof message !== 'string') {
            message = message?.Message || "Undefined client error";
        }
        this.toastrService.error(message, title);
    }
}