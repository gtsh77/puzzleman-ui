import { Routes } from '@angular/router';
import { IndexComponent }  from './index/index/index.component';
import { ListComponent }  from './puzzle/list/list.component';
import { FavComponent }  from './puzzle/fav/fav.component';

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
	}    
];
