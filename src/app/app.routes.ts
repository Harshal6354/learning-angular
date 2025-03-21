import { Routes } from '@angular/router';
import { TempComponent } from './pages/temp/temp.component';
import { AppComponent } from './app.component';
import { NgContainerComponent } from './pages/ng-container/ng-container.component';
import { NgT2Component } from './pages/ng-t2/ng-t2.component';
import { Ngc2Component } from './pages/ngc2/ngc2.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ViewChild } from '@angular/core';
import { ViewchildComponent } from './pages/viewchild/viewchild.component';

export const routes: Routes = [

    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path:'navbar',
        component:NavbarComponent
    }
    ,
    {
        path: 'temp',
        component: TempComponent
    }
    ,
    
    {
        path: 'ng-con',
        component: NgContainerComponent
    },
    {
        path: 'ng-t2',
        component: NgT2Component
    },
    {
        path: 'ng-c2',
        component: Ngc2Component
    },
    {
        path:'viewchild',
        component:ViewchildComponent
    }
];
