import { DraftModalDialog } from './shared/components/modals/draft-modal-dialog/draft-modal-dialog.component';
import { StepFourComponent } from './containers/detailed-selection/components/step-four/step-four.component';
import { StepOneComponent } from './containers/detailed-selection/components/step-one/step-one.component';
import { DetailedSelectionComponent } from './containers/detailed-selection/detailed-selection.component';
// System
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Modules
import { AngularMaterialModule } from '../shared/modules/material.module';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
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
import { HttpClientModule } from '@angular/common/http';
import { RecommendationService } from './shared/services/recommendation.service';
import { RecommendationCardComponent } from './shared/components/recommendation-card/recommendation-card.component';
import { SGRDataService } from './shared/services/data.service';
import { StepperActionsComponent } from './containers/detailed-selection/components/stepper-actions/stepper-actions.component';
import { StepTwoComponent } from './containers/detailed-selection/components/step-two/step-two.component';
import { StepThreeComponent } from './containers/detailed-selection/components/step-three/step-three.component';
import { ExpressAnketComponent } from './containers/recommendation/express-anket/express-anket.component';
import { DetailedAnketComponent } from './containers/recommendation/detailed-anket/detailed-anket.component';
import { PlanComponent } from './containers/plan/plan.component';
import { EmailModalDialog } from './shared/components/modals/email-modal-dialog/email-modal-dialog.component';
import { PlanStepComponent } from './containers/plan/plan-step/plan-step.component';

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
        path: 'express/draft',
        component: ExpressSelectionComponent,
      },
      {
        path: 'detailed',
        component: DetailedSelectionComponent
      },
      {
        path: 'detailed/draft',
        component: DetailedSelectionComponent
      },
      {
        path: 'ui-kit',
        component: UIKitComponent
      },
      {
        path: 'recommendation',
        component: RecommendationComponent
      },
      {
        path: 'plan',
        component: PlanComponent
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
    HttpClientModule,
    // Material
    AngularMaterialModule,
    // Other
    AngularMultiSelectModule,
    // Share buttons
    ShareButtonsModule,
    ShareIconsModule,
  ],
  declarations: [
    // Layout
    PublicComponent,
    HeaderComponent,
    SubHeaderComponent,
    FooterComponent,
    // Common Components
    GreetingCardComponent,
    RecommendationCardComponent,
    // Inputs
    SGRDropdownComponent,
    // Containers
    UIKitComponent,
    GreetingsComponent,
    ExpressSelectionComponent,
    DetailedSelectionComponent,
    RecommendationComponent,
    PlanComponent,
    // Components
    // Detailed Selection
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
    StepFourComponent,
    StepperActionsComponent,
    // Result view
    ExpressAnketComponent,
    DetailedAnketComponent,
    // Plan
    PlanStepComponent,
    // Modals
    DraftModalDialog,
    EmailModalDialog
  ],
  providers: [RecommendationService, SGRDataService],
})
export class PublicModule {}
