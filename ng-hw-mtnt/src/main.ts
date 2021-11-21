import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
import { initializeApp } from "firebase/app";
import { environment } from "./environments/environment";

const app = initializeApp(environment.firebase);
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
