import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Route[] = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'boards', pathMatch: 'full' },
            { path: 'boards', canActivate: [ AuthGuard ], loadChildren: () => import('./../boards/boards.module').then(m => m.BoardsModule) },
            { path: 'users', canActivate: [ AuthGuard ], loadChildren: () => import('./../users/users.module').then(m => m.UsersModule) },
            { path: 'profile', canActivate: [ AuthGuard ], loadChildren: () => import('./../profile/profile.module').then(m => m.ProfileModule) },
        ],
    }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
