import { CurrencyPipe } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CommonService {
    public updateSideMenuEvent = new Subject<any>();
    public updatePageHeaderEvent = new Subject<any>();

    constructor(private currencyPipe: CurrencyPipe,
        private http: HttpClient) { }

    formatNumberToCurrency(val: any) {
        val = val.toString().replace(/\,/g,'');
        val = val.replace(/\$/g,'');
        if(val && !isNaN(val)) {
            return this.currencyPipe.transform(val);
        } else {
            return "0";
        }
    }

    transformCurrencyToNumber(val: any) {
        let str = val.toString().replace(/\,/g,'');
        return str.replace(/\$/g,'');
    }
}