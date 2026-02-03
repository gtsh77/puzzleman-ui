import { Routes } from '@angular/router';
import { IndexComponent }  from './index/index/index.component';
import { ListComponent }  from './puzzle/list/list.component';
import { FavComponent }  from './puzzle/fav/fav.component';
import { RegisterComponent }  from './auth/register/register.component';
import { LoginComponent }  from './auth/login/login.component';
import { RatingComponent }  from './stats/rating/rating.component';
import { PremiumComponent }  from './premium/premium/premium.component';


export const routes: Routes = [
    {
        path: '',
        component: IndexComponent
	},
    {
        path: 'puzzles',
        component: ListComponent
	},
    {
        path: 'favs',
        component: FavComponent
	},
    {
        path: 'auth/register',
        component: RegisterComponent
	},       
    {
        path: 'auth/login',
        component: LoginComponent
	},
    {
        path: 'stats',
        component: RatingComponent
	},
    {
        path: 'premium',
        component: PremiumComponent
	}              
];
