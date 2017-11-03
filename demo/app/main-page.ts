import * as observable from "tns-core-modules/data/observable";
import * as pages from "tns-core-modules/ui/page";
import {
    Shadow,
    ShadowOptions,
    ShadowType,
    TextShadowOptions
} from "nativescript-shadow";

const shadowMaker = new Shadow();
// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    let page = <pages.Page>args.object;
}

export function exampleText1(args: any) {
    console.log("Example text 1 loaded");
    let textShadowOptions: TextShadowOptions = {
        radius: 1.5, // radius
        xOffset: 5.0, // dx
        yOffset: 5.0, // dy
        color: "#FF3D803D"
    };
    shadowMaker.addShadowToText(args.object, textShadowOptions);
}

export function exampleText2(args: any) {
    console.log("Example text 2 loaded");
    let textShadowOptions: TextShadowOptions = {
        radius: 5, // radius
        xOffset: 5.0, // dx
        yOffset: 5.0, // dy
        color: "#FF3D803D"
    };
    shadowMaker.addShadowToText(args.object, textShadowOptions);
}

export function exampleText3(args: any) {
    console.log("Example text 3 loaded");
    let textShadowOptions: TextShadowOptions = {
        radius: 1.5, // radius
        xOffset: 6.0, // dx
        yOffset: -4.0, // dy
        color: "#0e65f9"
    };
    shadowMaker.addShadowToText(args.object, textShadowOptions);
}

export function exampleText4(args: any) {
    console.log("Example text 4 loaded");
    let textShadowOptions: TextShadowOptions = {
        radius: 2.5, // radius
        xOffset: 5.0, // dx
        yOffset: 0.0, // dy
        color: "#5b5b5b"
    };
    shadowMaker.addShadowToText(args.object, textShadowOptions);
}

export function exampleText5(args: any) {
    console.log("Example text 5 loaded");
    let textShadowOptions: TextShadowOptions = {
        radius: 2.5, // radius
        xOffset: 0.0, // dx
        yOffset: 5.0, // dy
        color: "#5b5b5b"
    };
    shadowMaker.addShadowToText(args.object, textShadowOptions);
}

export function exampleText6(args: any) {
    console.log("Example text 6 loaded");
    let textShadowOptions: TextShadowOptions = {
        radius: 2.5, // radius
        xOffset: -5.0, // dx
        yOffset: -5.0, // dy
        color: "#FF3D803D"
    };
    shadowMaker.addShadowToText(args.object, textShadowOptions);
}

export function exampleText7(args: any) {
    console.log("Example text 7 loaded");
    let textShadowOptions: TextShadowOptions = {
        radius: 1.5, // radius
        xOffset: -5.0, // dx
        yOffset: 5.0, // dy
        color: "#FF3D803D"
    };
    shadowMaker.addShadowToText(args.object, textShadowOptions);
}

export function exampleText8(args: any) {
    console.log("Example text 8 loaded");
    let textShadowOptions: TextShadowOptions = {
        radius: 1.5, // radius
        xOffset: 5.0, // dx
        yOffset: -5.0, // dy
        color: "#FF3D803D"
    };
    shadowMaker.addShadowToText(args.object, textShadowOptions);
}

export function example1(args: any) {
    console.log("Example 1 loaded");
    let shadowOptions: ShadowOptions = {
        elevation: 10,
        backgroundColor: "#ffffff",
        backgroundAlpha: 255,
        shadowType: ShadowType.RECTANGLE,
        opacity: 1,
        radius: 0,
        size: {
            width: 10,
            height: 10
        }
    };
    shadowMaker.addShadow(args.object, shadowOptions);
}

export function example2(args: any) {
    console.log("Example 2 loaded");
    let shadowOptions: ShadowOptions = {
        elevation: 20,
        backgroundColor: "#ffffff",
        backgroundAlpha: 255,
        shadowType: ShadowType.RECTANGLE,
        opacity: 1,
        radius: 0,
        size: {
            width: 10,
            height: 10
        }
    };
    shadowMaker.addShadow(args.object, shadowOptions);
}

export function example3(args: any) {
    console.log("Example 3 loaded");
    let shadowOptions: ShadowOptions = {
        elevation: 10,
        backgroundColor: "#ffffff",
        backgroundAlpha: 255,
        shadowType: ShadowType.OVAL,
        opacity: 1,
        radius: 0,
        size: {
            width: 10,
            height: 10
        }
    };
    shadowMaker.addShadow(args.object, shadowOptions);
}

export function example4(args: any) {
    console.log("Example 4 loaded");
    let shadowOptions: ShadowOptions = {
        elevation: 20,
        backgroundColor: "#ffffff",
        backgroundAlpha: 255,
        shadowType: ShadowType.OVAL,
        opacity: 1,
        radius: 0,
        size: {
            width: 10,
            height: 10
        }
    };
    shadowMaker.addShadow(args.object, shadowOptions);
}

export function example5(args: any) {
    console.log("Example 5 loaded");
    let shadowOptions: ShadowOptions = {
        elevation: 10,
        backgroundColor: "#ffffff",
        backgroundAlpha: 255,
        shadowType: ShadowType.RECTANGLE,
        opacity: 1,
        radius: 25,
        size: {
            width: 10,
            height: 10
        }
    };
    shadowMaker.addShadow(args.object, shadowOptions);
}

export function example6(args: any) {
    console.log("Example 6 loaded");
    let shadowOptions: ShadowOptions = {
        elevation: 10,
        backgroundColor: "#ffffff",
        backgroundAlpha: 100,
        shadowType: ShadowType.RECTANGLE,
        opacity: 1,
        radius: 25,
        size: {
            width: 10,
            height: 10
        }
    };
    shadowMaker.addShadow(args.object, shadowOptions);
}

export function example7(args: any) {
    console.log("Example 7 loaded");
    let shadowOptions: ShadowOptions = {
        elevation: 20,
        backgroundColor: "#FB801D",
        backgroundAlpha: 255,
        translateZ: 30,
        shadowType: ShadowType.RECTANGLE,
        opacity: 1,
        radius: 0,
        size: { height: 5, width: 5 }
    };
    shadowMaker.addShadow(args.object, shadowOptions);
}

export function example8(args: any) {
    console.log("Example 8 loaded");
    let shadowOptions: ShadowOptions = {
        elevation: 20,
        backgroundColor: "#ffffff",
        backgroundAlpha: 255,
        shadowType: ShadowType.RECTANGLE,
        opacity: 1,
        radius: 0,
        size: { height: 5, width: 5 }
    };
    shadowMaker.addShadow(args.object, shadowOptions);
}
