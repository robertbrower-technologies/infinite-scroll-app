import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ItemDetailsComponent } from './items/item-details/item-details.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/items',
        pathMatch: 'full',
    },
    {
        path: 'items',
        component: ItemsComponent
    }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);