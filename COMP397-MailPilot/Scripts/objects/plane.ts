module objects {
    // Plane Class ++++++++++++++++++++++++++++++++++++++
    export class Plane extends createjs.Bitmap {
        // PUBLIC PROPERTIES ++++++++++++++++++++++++++++
        width: number;
        height: number;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.y = 430;

        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {
            this.x = stage.mouseX; // position plane under mouse
        }
    }
} 