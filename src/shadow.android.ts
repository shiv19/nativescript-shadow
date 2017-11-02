export class Shadow {
    addShadow(nsView, elevation: number) {
        const nativeView = nsView.android;
        console.log("came here");
        nativeView.setElevation(10.0);
        nativeView.setClipToOutline(false);
    }
}
