import { Routes } from '@angular/router';
import { TempComponent } from './pages/temp/temp.component';
import { AppComponent } from './app.component';
import { NgContainerComponent } from './pages/ng-container/ng-container.component';
import { NgT2Component } from './pages/ng-t2/ng-t2.component';
import { Ngc2Component } from './pages/ngc2/ngc2.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ViewChild } from '@angular/core';
import { ViewchildComponent } from './pages/viewchild/viewchild.component';
import { TemFormComponent } from './pages/tem-form/tem-form.component';
import { ReactivFormComponent } from './pages/reactiv-form/reactiv-form.component';
import { PipesComponent } from './pages/pipes/pipes.component';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'temp',
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
    },
    {
        path:'tempForm',
        component:TemFormComponent
    },
    {
        path:'reactiveform',
        component:ReactivFormComponent
    },
    {
        path:'rjx',
        component:PipesComponent
    }
];
