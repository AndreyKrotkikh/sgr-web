// System
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Modules
import { AngularMaterialModule } from '../shared/modules/material.module';
// Components
import { PublicComponent } from './public.component';
import { RecommendationComponent } from './containers/recommendation/recommendation.component';

const routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: '',
        component: RecommendationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    // System
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    // Material
    AngularMaterialModule,
  ],
  declarations: [
    // Layout
    PublicComponent,
    // Containers
    RecommendationComponent,
    // Components
    // Modals
  ],
  providers: [],
})
export class PublicModule {}
