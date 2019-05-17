import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/general/home/home.component';
import { LoginComponent } from './components/general/login/login.component';
import { ReservationComponent } from './components/general/reservation/reservation.component';
import { SignupComponent } from './components/general/signup/signup.component';
import { PromotersignupComponent } from './components/promoter/promotersignup/promotersignup.component';
import { PromoterloginComponent } from './components/promoter/promoterlogin/promoterlogin.component';
import { BandsignupComponent } from './components/band/bandsignup/bandsignup.component';
import { BandloginComponent } from './components/band/bandlogin/bandlogin.component';
import { BandhomeComponent } from './components/band/bandhome/bandhome.component';
import { BandprofileComponent } from './components/band/./bandprofile/bandprofile.component';
import { BandeditprofileComponent } from './components/band//bandeditprofile/bandeditprofile.component';
import { BandgigsComponent } from './components/band/bandgigs/bandgigs.component';
import { PromoterhomeComponent } from './components/promoter/promoterhome/promoterhome.component';
import { PromotermanageComponent } from './components/promoter/promotermanage/promotermanage.component';
import { PromoterendorseComponent } from './components/promoter/promoterendorse/promoterendorse.component';
import { PromoterresolveComponent} from './components/promoter/promoterresolve/promoterresolve.component';
import { MasterComponent } from './components/general/master/master.component';

const routes: Routes = [
  { path: '',
  component: MasterComponent,
  children: [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'reservation',
      component: ReservationComponent
    },
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'promoterlogin',
      component: PromoterloginComponent
    },
    {
      path: 'bandlogin',
      component: BandloginComponent
    }
    ,
    {
      path: 'signup',
      component: SignupComponent,
    },
    {
      path: 'promotersignup',
      component: PromotersignupComponent
    },
    {
      path: 'bandsignup',
      component: BandsignupComponent
    },
  ]
  },
  {
    path: 'bandhome',
    component: BandhomeComponent,
    children: [
      {
        path: 'bandprofile',
        component: BandprofileComponent
      },
      {
        path: 'bandeditprofile',
        component: BandeditprofileComponent
      },
      {
        path: 'bandgigs',
        component: BandgigsComponent
      },
      {
        path: '',
        component: BandgigsComponent
      }
    ]
  },
  {
    path: 'promoterhome',
    component: PromoterhomeComponent,
    children: [
      {
        path: 'promotermanage',
        component: PromotermanageComponent
      },
      {
        path: 'promoterendorse',
        component: PromoterendorseComponent
      },
      {
        path: 'promoterresolve',
        component: PromoterresolveComponent
      },
      {
        path: '',
        component: PromoterresolveComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
