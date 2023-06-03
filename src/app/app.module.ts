import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ShareModule } from 'src/app/common/module/share.module';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask'

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentGatewayComponent } from './components/payment/payment-gateway/payment-gateway.component';
import { PersonalInformationComponent } from './components/payment/personal-information/personal-information.component';
import { ContactInformationComponent } from './components/payment/contact-information/contact-information.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentGatewayComponent,
    PersonalInformationComponent,
    ContactInformationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ShareModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
