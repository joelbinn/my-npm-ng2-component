import {NgModule} from "@angular/core";
import {HelloComponent} from "./src/hello.component";

@NgModule({
    declarations: [
      HelloComponent
    ],
    exports:[
      HelloComponent
    ]
})
export class HelloModule {
}
