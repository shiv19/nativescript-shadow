import { ShadowOptions } from "./index";

export class Shadow {
    public createBaseShadowOptions(): ShadowOptions {
        return {
            elevation: 10
        };
    }

    public addShadow(nsView, shadowOptions: ShadowOptions): void {
        const localShadowOpts = shadowOptions.elevation ? shadowOptions : this.createBaseShadowOptions();

        const nativeView = nsView.android;
        console.log("came here");
        nativeView.setElevation(localShadowOpts.elevation);
        nativeView.setClipToOutline(false);
    }
}
