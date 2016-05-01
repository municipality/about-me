import {Component} from 'angular2/core';

@Component({
    selector : 'background',
    //template for row by column image generation
    //#image lets you access "this" in the "loaded" function
    template : `
        <div id='background'>
            <tr *ngFor="#row of photos">
                <td *ngFor="#item of row">
                    <a href="#">
                        <img #image id='background-{{item.id}}' class="background-images" src='{{pathToImages}}{{item.src}}'>
                    </a>
                </td>
            </tr>
        </div>
    `
})

export class Background {
    pathToImages : string = "images/"
    //photoList : string[] = ["banner1.jpg", "banner2.jpg"];
    photoList : string[] = ["sample.jpg"];
    photos : any[][] = [];
    numRows : number = 20;
    numCols : number = 8;

    constructor () {
        //Set up "photos" to be loaded randomly based on files in directory
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

}
