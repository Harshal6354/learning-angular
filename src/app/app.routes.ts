import { Routes } from '@angular/router';
import { TempComponent } from './temp/temp.component';
import { AppComponent } from './app.component';
import { NgContainerComponent } from './pages/ng-container/ng-container.component';

export const routes: Routes = [

    {
        path:'',
        redirectTo:'app',
        pathMatch:'full'
    }
    ,{
        path:'temp',
        component:TempComponent
    }
    ,{
        path:'app',
        component:AppComponent
    },{
        path:'ng-con',
        component:NgContainerComponent
    }
];
