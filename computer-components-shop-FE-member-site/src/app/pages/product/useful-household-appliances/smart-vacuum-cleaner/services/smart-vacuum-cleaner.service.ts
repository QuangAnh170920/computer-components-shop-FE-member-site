import { Injectable } from '@angular/core';
import { API_ROUTER } from '../../../../../shared/constants/api.constant';
import { ApiService } from '../../../../../shared/services/api.service';
import { ISearch } from '../models/smart-vacuum-cleaner.model';
import { HttpClient } from '@angular/common/http';
import { ToastService } from '../../../../../shared/services/toast.service';
import { ConfirmationService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class SmartVacuumCleanerService {
  constructor(
    private http: HttpClient,
    private toastService: ToastService,
    private confirmationService: ConfirmationService,
) {}

search(id: any) {
    const apiUrl = `http://192.168.1.23:8080/computer-components-admin-api/v1/api/user/products-no-auth/find-all-and-search-condition/${id}`;
    return this.http.post(
      apiUrl,
      {},
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );
  }
}
