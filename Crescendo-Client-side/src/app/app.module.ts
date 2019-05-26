import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/general/home/home.component';
import { ReservationComponent } from './components/general/reservation/reservation.component';
import { SignupComponent } from './components/general/signup/signup.component';
import { PromotersignupComponent } from './components/promoter/promotersignup/promotersignup.component';
import { PromoterloginComponent } from './components/promoter/promoterlogin/promoterlogin.component';
import { BandsignupComponent } from './components/band/bandsignup/bandsignup.component';
import { BandloginComponent } from './components/band/bandlogin/bandlogin.component';
import { BandhomeComponent } from './components/band/bandhome/bandhome.component';
import { BandprofileComponent } from './components/band/./bandprofile/bandprofile.component';
import { BandeditprofileComponent } from './components/band//bandeditprofile/bandeditprofile.component';
import { PromoterhomeComponent } from './components/promoter/promoterhome/promoterhome.component';
import { PromotermanageComponent } from './components/promoter/promotermanage/promotermanage.component';
import { PromoterendorseComponent } from './components/promoter/promoterendorse/promoterendorse.component';
import { MasterComponent } from './components/general/master/master.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BandMasterComponent } from './components/band/bandMaster/band-master/band-master.component';
import { PromotermasterComponent } from './components/promoter/promotermaster/promotermaster.component';
import { BsModalRef, BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { LoadingComponent } from './components/extras/loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReservationComponent,
    SignupComponent,
    PromotersignupComponent,
    PromoterloginComponent,
    BandsignupComponent,
    BandloginComponent,
    BandhomeComponent,
    BandprofileComponent,
    BandeditprofileComponent,
    PromoterhomeComponent,
    PromotermanageComponent,
    PromoterendorseComponent,
    MasterComponent,
    BandMasterComponent,
    PromotermasterComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],

  providers: [BsModalRef,
    BsModalService],

  bootstrap: [AppComponent]
})
export class AppModule { }
