// abstract class TakePhoto {
//     constructor(
//         public cameraMode: string,
//         public filter: string
//     ) {}

//     abstract getSepia(): void;
//     getReelTime(): number {
//         return 8;
//     }
// }

// // const Zavyar = new TakePhoto("test", "test2");

// class Instagram extends TakePhoto {
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//     ) {
//         super(cameraMode, filter);
//     }
//     getSepia(): void {
//         console.log("Sepia");
//     }
// }