import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Login & Register Components 
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
//Home Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { PetsComponent } from './pets/pets.component'; 
import { NewPetComponent } from './new-pet/new-pet.component';
import { PetdetailComponent } from './petdetail/petdetail.component';
import { AdoptionApplicationComponent } from './adoption-application/adoption-application.component';
import { FormsComponent } from './forms/forms.component';
import { WaitListComponent } from './wait-list/wait-list.component';
import { DoNotAdoptComponent } from './do-not-adopt/do-not-adopt.component';
import { ManagePeopleComponent } from './manage-people/manage-people.component';

//Contact Components
import { ContactComponent } from './contact/contact.component';
import { MessagesComponent } from './messages/messages.component';
import { EmailTemplateComponent } from './email-template/email-template.component';
import { VolunteerOpportunitiesComponent } from './volunteer-opportunities/volunteer-opportunities.component';
//Tool Components
import { ToolsComponent } from './tools/tools.component';
import { RescueNetworkComponent } from './rescue-network/rescue-network.component';
import { RegionalBreedTrackerComponent } from './regional-breed-tracker/regional-breed-tracker.component';
import { TransportComponent } from './transport/transport.component';
//Employee Component
import { UserComponent } from './user/user.component'; 
import { NewuserComponent } from './newuser/newuser.component';
import { UserdetailComponent } from './userdetail/userdetail.component';

import { NewTemplateComponent } from './new-template/new-template.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { QuestionTemplateComponent } from './question-template/question-template.component';
import { ResumeMessageComponent } from './resume-message/resume-message.component';
import { TrackerResultComponent } from './tracker-result/tracker-result.component';
//Volunteer Components 
import { VolunteerPortalComponent } from './volunteer-portal/volunteer-portal.component';
import { PortalOpportunitiesComponent } from './portal-opportunities/portal-opportunities.component';
import { PortalHistoryComponent } from './portal-history/portal-history.component';
import { PortalHoursComponent } from './portal-hours/portal-hours.component';
import { PortalMyVolunteerComponent } from './portal-my-volunteer/portal-my-volunteer.component';
import { PortalMyMessagesComponent } from './portal-my-messages/portal-my-messages.component';
import { PortalMyHistoryComponent } from './portal-my-history/portal-my-history.component';
import { PortalMyOrganizationsComponent } from './portal-my-organizations/portal-my-organizations.component'; 




// Route Configuration
export const routes: Routes = [ 
   { path: '', component: LoginComponent },
   { path: 'register',component:RegisterComponent},
   { path: 'home', component: DashboardComponent },
   { path: 'profile', component: ViewprofileComponent },
   { path: 'contact', component: ContactComponent },
   { path: 'tools', component: ToolsComponent },
   { path: 'user', component: UserComponent },
   { path: 'newuser', component: NewuserComponent },
   { path: 'userdetail', component: UserdetailComponent },
   { path: 'pets', component: PetsComponent },
   { path: 'newPet', component: NewPetComponent },
   { path: 'petdetail', component: PetdetailComponent },
   { path: 'adoption', component: AdoptionApplicationComponent },
   { path: 'forms', component: FormsComponent },
   { path: 'waitList', component: WaitListComponent },
   { path: 'doNot', component: DoNotAdoptComponent },
   { path: 'managePeople', component: ManagePeopleComponent },
   { path: 'messages', component: MessagesComponent },
   { path: 'emailTemplate', component: EmailTemplateComponent },
   { path: 'volunteerOpportunities', component: VolunteerOpportunitiesComponent },
   { path: 'rescueNetwork', component: RescueNetworkComponent },
   { path: 'RegionalBreed', component: RegionalBreedTrackerComponent },
   { path: 'transport', component: TransportComponent },
   { path: 'newTemplate', component: NewTemplateComponent },
   { path: 'newQuestion', component: NewQuestionComponent },
   { path: 'QuestionTemplate', component: QuestionTemplateComponent },
   { path: 'ResumeMessage', component: ResumeMessageComponent },
   { path: 'trackerResult', component: TrackerResultComponent },
   { path: 'Portal/Volunteer', component: VolunteerPortalComponent },
   { path: 'Portal/Opportunities', component: PortalOpportunitiesComponent },
   { path: 'Portal/History', component: PortalHistoryComponent },
   { path: 'Portal/Hours', component: PortalHoursComponent },
   { path: 'Portal/Volunteers', component: PortalMyVolunteerComponent },
   { path: 'Portal/Messages', component: PortalMyMessagesComponent },
   { path: 'Portal/MyHistory', component: PortalMyHistoryComponent },
   { path: 'Portal/MyOrganizations', component: PortalMyOrganizationsComponent }   
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);