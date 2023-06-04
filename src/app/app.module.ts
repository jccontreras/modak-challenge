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
import { PaymentInformationComponent } from './components/payment/payment-information/payment-information.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentGatewayComponent,
    PersonalInformationComponent,
    ContactInformationComponent,
    PaymentInformationComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,

    // ngx-translate and the loader module
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
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

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
