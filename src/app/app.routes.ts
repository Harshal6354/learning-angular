import { Routes } from '@angular/router';
import { TempComponent } from './temp/temp.component';
import { AppComponent } from './app.component';

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
    }
];
