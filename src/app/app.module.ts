import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { PageProductComponent } from './product/page-product.component';
import { PageNewproductComponent } from './product/new-product/page-newproduct/page-newproduct.component';

import { QuillModule } from 'ngx-quill';
import { PageCategoryComponent } from './pages/page-category/page-category.component'

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    QuillModule.forRoot(),
    NgbModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    PageProductComponent,
    PageNewproductComponent,
    PageCategoryComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
