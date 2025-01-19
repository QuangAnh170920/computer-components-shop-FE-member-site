import { Injectable } from "@angular/core";
import { BehaviorSubject, distinctUntilChanged, filter, Observable } from "rxjs";
import { NewPagingData, NewResponseData } from "../../../../../shared/models/paging.model";
import { ToastService } from "../../../../../shared/services/toast.service";
import { AirPurifierService } from "../service/air-purifier.service";
import { IProduct } from "../models/air-purifier.model";

@Injectable({
  providedIn: 'root',
})
export class AirPurifierFacade {
  private _id = new BehaviorSubject<any | null>(null);
  private _products = new BehaviorSubject<NewPagingData<IProduct> | null>(null);
  private _product = new BehaviorSubject<NewResponseData<IProduct> | null>(
    null
  );
  constructor(
    private airPurifierService: AirPurifierService,
    private toastService: ToastService
  ) {}

  get productsPaging$(): Observable<NewPagingData<IProduct> | null> {
    return this._products.asObservable().pipe(
      filter((res) => res !== null),
      distinctUntilChanged()
    );
  }

  search(id: any) {
    this.airPurifierService.search(id).subscribe((res: any) => {
      if (res && res.responseData) {
        this._products.next(res.responseData);
        console.log(res.responseData , 'res.responseData');
        
      }
    });
  }
}
