import { Injectable } from "@angular/core";
import { BehaviorSubject, distinctUntilChanged, filter, Observable } from "rxjs";
import { NewPagingData, NewResponseData } from "../../../../../shared/models/paging.model";
import { IProduct } from "../models/induction-cooker.models";
import { InductionCookerService } from "../services/induction-cooker.service";
import { ToastService } from "../../../../../shared/services/toast.service";

@Injectable({
  providedIn: 'root',
})
export class InductionCookerFacade {
  private _id = new BehaviorSubject<any | null>(null);
  private _products = new BehaviorSubject<NewPagingData<IProduct> | null>(null);
  private _product = new BehaviorSubject<NewResponseData<IProduct> | null>(
    null
  );
  constructor(
    private inductionCookerService: InductionCookerService,
    private toastService: ToastService
  ) {}

  get productsPaging$(): Observable<NewPagingData<IProduct> | null> {
    return this._products.asObservable().pipe(
      filter((res) => res !== null),
      distinctUntilChanged()
    );
  }

  search(id: any) {
    this.inductionCookerService.search(id).subscribe((res: any) => {
      if (res && res.responseData) {
        this._products.next(res.responseData);
        console.log(res.responseData , 'res.responseData');
      }
    });
  }
}