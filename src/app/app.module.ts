import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.router';
import { FormsModule } from '@angular/forms';

//General Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
//Login & Register Components 
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
//Home Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { PetsComponent } from './pets/pets.component';
import { PetService } from './pets/shared/pet.service';
import { NewPetComponent } from './new-pet/new-pet.component';
import { NewPetService } from './new-pet/shared/new-pet.service';
import { PetdetailComponent } from './petdetail/petdetail.component';
import { PetdetailService } from './petdetail/shared/petdetail.service';

import { AdoptionApplicationComponent } from './adoption-application/adoption-application.component';
import { FormsComponent } from './forms/forms.component';
import { WaitListComponent } from './wait-list/wait-list.component';
import { DoNotAdoptComponent } from './do-not-adopt/do-not-adopt.component';
import { ManagePeopleComponent } from './manage-people/manage-people.component';
import { ManagepeopleService }  from './manage-people/shared/managepeople.service';

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
import { UserService } from './user/shared/user.service';
import { NewuserComponent } from './newuser/newuser.component';
import { NewuserService } from './newuser/shared/newuser.service';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { UserdetailService } from './userdetail/shared/userdetail.service';

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
//Socket Manager
import { SocketManagerService } from './shared/socket/socket-manager.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    ToolsComponent,
    UserComponent,
    SidebarComponent,
    PetsComponent,
    AdoptionApplicationComponent,
    FormsComponent,
    WaitListComponent,
    DoNotAdoptComponent,
    ManagePeopleComponent,
    MessagesComponent,
    EmailTemplateComponent,
    VolunteerOpportunitiesComponent,
    RescueNetworkComponent,
    RegionalBreedTrackerComponent,
    TransportComponent,
    NewPetComponent,
    NewTemplateComponent,
    NewQuestionComponent,
    QuestionTemplateComponent,
    ResumeMessageComponent,
    TrackerResultComponent,
    VolunteerPortalComponent,
    PortalOpportunitiesComponent,
    PortalHistoryComponent,
    PortalHoursComponent,
    PortalMyVolunteerComponent,
    PortalMyMessagesComponent,
    PortalMyHistoryComponent,
    PortalMyOrganizationsComponent,
    PetdetailComponent,
    NewuserComponent,
    UserdetailComponent,
    ViewprofileComponent
  ],
  imports: [
    BrowserModule,routing,FormsModule
  ],
  providers: [
    PetService,
    NewPetService,
    PetdetailService,
    UserService,
    ManagepeopleService,
    NewuserService,
    UserdetailService,
    SocketManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
