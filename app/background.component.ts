import {Component} from 'angular2/core';

@Component({
    selector : 'background',
    //template for row by column image generation
    //#image lets you access "this" in the "loaded" function
    template : `
        <div id='background'>
            <tr *ngFor="#row of photos">
                <td *ngFor="#item of row">
                    <div class='imagecon'>
                        <img #image id='background-{{item.id}}' class="background-images" src='images/{{item.src}}'>
                    </div>
                </td>
            </tr>
        </div>

    `
})

export class Background {
    //photoList : string[] = ["banner1.jpg", "banner2.jpg"];
    photoList : string[] = ["sample.jpg"];
    photos : any[][] = [];
    numRows : number = 20;
    numCols : number = 8;
    // tracker = {};
    // animationTracker = {};

    //tuples = {};
    constructor () {
        for (let row = 0; row < this.numRows; row++) {
            this.photos.push([]);
            for (let col = 0; col < this.numCols; col++) {
                this.photos[row].push({
                    src : this.photoList[Math.floor(Math.random()*(this.photoList.length))],
                    id :  "" + row + col
                });
            }
        }


    }

    // loadedBackground (image) {
    //     //Want to transition to a new image with animation
    //     console.log(image.id);
    //     this.tracker[image.id] = image;
    //     this.pairUp(image.id);
    // }
    //
    // loadedAnimationImage (image) {
    //     console.log(image.id);
    //     this.animationTracker[image.id] = image;
    //     this.pairUp(image.id);
    // }
    //
    // pairUp(imageId) {
    //     // id ends with 1 for original, 2 for animation
    //     let base : string = imageId.substring(0, imageId.length - 1);
    //     let original = this.tracker[base+1];
    //     let anim = this.animationTracker[base+2]
    //     if (original && anim) {
    //         //Both loaded, pair up
    //         this.tuples[base] = [original, anim];
    //         anim.height = original.height;
    //         anim.width = original.width;
    //         debugger
    //         anim.setAttribute("x", original.x);
    //         anim.setAttribute("y", original.y);
    //     }
    // }


}
