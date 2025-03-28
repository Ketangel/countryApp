import { Routes } from '@angular/router';
import { CountryLayoutComponent } from './layouts/CountryLayout/CountryLayout.component';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCoutryPageComponent } from './pages/by-coutry-page/by-coutry-page.component';
import { ByRegionPageComponent } from './pages/by-region-page/by-region-page.component';
import { CountryPageComponent } from './pages/Country-page/Country-page.component';

export const CountryRoutes: Routes = [
    {
        path:'',
        component:CountryLayoutComponent,
        children:[
            {
                path:'by-capital',
                component:ByCapitalPageComponent
            },
            {
                path:'by-country',
                component:ByCoutryPageComponent
            },
            {
                path:'by-region',
                component:ByRegionPageComponent
            },
            {
                path:'by-region',
                component:ByRegionPageComponent
            },
            {
                path:'by/:code',
                component:CountryPageComponent
            },
            {
                path:'**',
                redirectTo:'by-capital'
            }
        ]
    }
]

export default CountryRoutes;