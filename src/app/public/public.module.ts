import { DetailedSelectionComponent } from './containers/detailed-selection/detailed-selection.component';
// System
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Modules
import { AngularMaterialModule } from '../shared/modules/material.module';
// Components
import { PublicComponent } from './public.component';
import { GreetingsComponent } from './containers/greetings/greetings.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SubHeaderComponent } from './shared/components/sub-header/sub-header.component';
import { RecommendationComponent } from './containers/recommendation/recommendation.component';
import { ExpressSelectionComponent } from './containers/express-selection/express-selection.component';

const routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: '',
        component: GreetingsComponent,
      },
      {
        path: 'express',
        component: ExpressSelectionComponent,
      },
      {
        path: 'detailed',
        component: DetailedSelectionComponent
      },
      {
        path: 'recommendation',
        component: RecommendationComponent
      }
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
    HeaderComponent,
    SubHeaderComponent,
    FooterComponent,
    // Containers
    GreetingsComponent,
    ExpressSelectionComponent,
    DetailedSelectionComponent,
    RecommendationComponent,
    // Components
    // Modals
  ],
  providers: [],
})
export class PublicModule {}
