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
import { HeaderComponent } from './shared/components/layout/header/header.component';
import { FooterComponent } from './shared/components/layout/footer/footer.component';
import { SubHeaderComponent } from './shared/components/layout/sub-header/sub-header.component';
import { RecommendationComponent } from './containers/recommendation/recommendation.component';
import { ExpressSelectionComponent } from './containers/express-selection/express-selection.component';
import { GreetingCardComponent } from './shared/components/greetings/greeting-card/greeting-card.component';
import { SGRDropdownComponent } from './shared/components/common/sgr-dropdown/sgr-dropdown.component';
import { UIKitComponent } from './containers/ui-kit/ui-kit.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';

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
        path: 'ui-kit',
        component: UIKitComponent
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
    // Other
    AngularMultiSelectModule,
  ],
  declarations: [
    // Layout
    PublicComponent,
    HeaderComponent,
    SubHeaderComponent,
    FooterComponent,
    // Common Components
    GreetingCardComponent,
    // Inputs
    SGRDropdownComponent,
    // Containers
    UIKitComponent,
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
