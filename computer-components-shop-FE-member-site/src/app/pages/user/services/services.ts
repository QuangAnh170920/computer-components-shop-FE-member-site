import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IChangePassword, IResponse, IUser } from '../models/user.model';
import { ApiService } from '../../../shared/services/api.service';
import { API_ROUTER } from '../../../shared/constants/api.constant';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private apiService: ApiService) {}

    userInfo(): Observable<IResponse> {
        return this.apiService.get(`${API_ROUTER.USER.PROFILE}`);
    }

    changePassword(payload: IChangePassword): Observable<IResponse>{
        return this.apiService.put(API_ROUTER.PASSWORD.CHANGE_PASSWORD, payload)
    }

    editUserProfile(userProfile: IUser): Observable<IUser> {
        return this.apiService.put(API_ROUTER.USER.EDIT_PROFILE, userProfile);
    }
}
