/**
 * September 5 2018
 * Draw Chart On Specefic Canvas
 * Hossein.Se
 */
export class ChartDrawer {

    /** Canvas Element */
    canvas!: HTMLCanvasElement;


    /** Data Element For Display */
    config = {
        scores: [] as number[],
        colors: ["#ff9800", "#4caf50", "#f44336", "#000000", "rgba(0,0,0,0)"],
        get total(): number {
            return this.scores.reduce((a, b) => a + b)
        }

    }

    /** Color Array */

    /**
     * Clear Canvas Graph
     */
    cleaning(): any {
        var cv = this.canvas;
        var ctx = cv.getContext("2d") as CanvasRenderingContext2D;
        ctx.clearRect(0, 0, cv.width, cv.height);
    }

    /**
     * Draw Chart With Data
     */
    Charting() {
        //test

        this.canvas.width = this.canvas.clientWidth;
        this.canvas.height = this.canvas.clientHeight;
        console.log("runned");

        var cv = this.canvas;

        var ctx = cv.getContext("2d") as CanvasRenderingContext2D;

        var x = this.canvas.width / 2;               // x coordinate
        var y = this.canvas.height / 2;               // y coordinate

        var data = this.config.scores;
        var total = this.config.total;

       
        // todo : get background color or let them free

        var colors = this.config.colors;
        var sum = 0;
        data.forEach((p, i) => {

            this.drawPieSlice_DecimalPoint(ctx, x, x, x + 1,
                sum / total, (sum + p) / total,
                colors[i]);
            sum += p;



        })



    }
    /**
     * Draw Arc line
     * @param ctx 
     * @param centerX 
     * @param centerY 
     * @param radius 
     * @param startAngle 
     * @param endAngle 
     */
    private drawArc(ctx: CanvasRenderingContext2D, centerX: number, centerY: number, radius: number, startAngle: number, endAngle: number) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.stroke();
    }

    /**
     * Draw Sector of Circle with Radian 
     * @param ctx 
     * @param centerX 
     * @param centerY 
     * @param radius 
     * @param startAngle [0:2pi]
     * @param endAngle [0:2pi]
     * @param color 
     */
    private drawPieSlice(ctx: CanvasRenderingContext2D, centerX: number, centerY: number, radius: number, startAngle: number, endAngle: number, color: string) {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle - Math.PI / 2, endAngle - Math.PI / 2);
        ctx.closePath();
        ctx.fill();
    }
    /**
     * Draw Sector of Circle with Degrees 
     * @param ctx 
     * @param centerX 
     * @param centerY 
     * @param radius 
     * @param startDegree [0:360]
     * @param endDegree [0:360]
     * @param color 
     */
    private drawPieSlice_Degree(ctx: CanvasRenderingContext2D,
        centerX: number, centerY: number,
        radius: number,
        startDegree: number, endDegree: number,
        color: string) {
        let startAngle = startDegree * Math.PI / 180 - Math.PI / 2;
        let endAngle = endDegree * Math.PI / 180 - Math.PI / 2;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.closePath();
        ctx.fill();
    }
    /**
     * Draw Sector of Circle with decimal
     * @param ctx 
     * @param centerX 
     * @param centerY 
     * @param radius 
     * @param startDecimalPoint [0:1]
     * @param endDecimalPoint [0:1]
     * @param color 
     */
    private drawPieSlice_DecimalPoint(ctx: CanvasRenderingContext2D,
        centerX: number, centerY: number,
        radius: number,
        startDecimalPoint: number, endDecimalPoint: number,
        color: string) {
        let startAngle = startDecimalPoint * 2 * Math.PI - Math.PI / 2;
        let endAngle = endDecimalPoint * 2 * Math.PI - Math.PI / 2;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, startAngle, endAngle);
        ctx.closePath();
        ctx.fill();
    }

    /**
     * Draw Line
     * @param ctx 
     * @param startX 
     * @param startY 
     * @param endX 
     * @param endY 
     */
    private drawLine(ctx: CanvasRenderingContext2D, startX: number, startY: number, endX: number, endY: number) {
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
    }
}
