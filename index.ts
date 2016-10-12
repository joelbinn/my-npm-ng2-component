import {NgModule} from "@angular/core";
import {HelloComponent} from "./src/hello.component";

export {HelloComponent};

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
