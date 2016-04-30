import {Component} from 'angular2/core';

@Component({
    selector : 'background',
    //template for row by column image generation
    template : `
        <div id='background'>
            <tr *ngFor="#row of photos">
                <td *ngFor="#item of row">
                    <img class="background-images" src='images/{{item}}'>
                    <!--<img class="background-images" src='images/banner2.jpg'>-->
                </td>
            </tr>
        </div>
    `
})

export class Background {
    photoList : string[] = ["banner1.jpg", "banner2.jpg"];
    photos : string[][] = [];
    numRows : number = 8;
    numCols : number = 6;
    constructor () {
        for (let row = 0; row < this.numRows; row++) {
            this.photos.push([]);
            for (let col = 0; col < this.numCols; col++) {
                this.photos[row].push(this.photoList[Math.floor(Math.random()*(this.photoList.length))]);
            }
        }
    }


}
