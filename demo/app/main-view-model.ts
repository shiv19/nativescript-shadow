import { Observable } from "tns-core-modules/data/observable";
import { Shadow } from "nativescript-shadow";
import * as frameModule from "tns-core-modules/ui/frame";

export class HelloWorldModel extends Observable {
    private shadowMaker: Shadow;

    constructor() {
        super();

        this.shadowMaker = new Shadow();
    }

    addShadow() {
        console.log("code behind");
        console.log(frameModule.topmost().getViewById("shadowBox"));
        this.shadowMaker.addShadow(
            frameModule.topmost().getViewById("shadowBox"),
            10
        );
        this.shadowMaker.addShadow(
            frameModule.topmost().getViewById("shadowBox2"),
            5
        );
    }
}
