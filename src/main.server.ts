import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { WelcomeComponent } from './app/welcome/welcome.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
