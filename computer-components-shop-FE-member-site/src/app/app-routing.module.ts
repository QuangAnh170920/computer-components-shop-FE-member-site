import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { PolicyPrivacyComponent } from './pages/policy/components/policy-privacy/policy-privacy.component';
import { InstructOrderPurchaseComponent } from './pages/instruct/components/instruct-order-purchase/instruct-order-purchase.component';
import { InstructAccountComponent } from './pages/instruct/components/instruct-account/instruct-account.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent, children: [
                    { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
                    { path: 'store-intro', loadChildren: () => import('./pages/store-intro/store-intro.module').then(m => m.StoreIntroModule) },
                    { path: 'policy', loadChildren: () => import('./pages/policy/policy.module').then(m => m.PolicyModule) },
                    { path: 'policy-privacy', component: PolicyPrivacyComponent },
                    { path: 'instruct-order-purchase', component: InstructOrderPurchaseComponent },
                    { path: 'instruct-account', component: InstructAccountComponent },
                    { path: 'smart-vacuum-cleaner', loadChildren: () => import('./pages/product/useful-household-appliances/smart-vacuum-cleaner/smart-vacuum-cleaner.module').then(m => m.SmartVacuumCleanerModule) },
                ]
            },
            { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) },
            { path: 'password', loadChildren: () => import('./pages/password-change-reset/password-change-reset.module').then(m => m.PasswordChangeResetModule) },
            { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) },
            { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
            
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload', useHash: false })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
