import {Component} from 'angular2/core';
import {Square} from './square.component';

@Component ({
    selector : 'page',
    directives : [Square],
    template : `
        <div id="wall">
            <table id="square-table">
                <tr *ngFor="#row of builder">
                    <td *ngFor="#square of row">
                        <square [title]="square.title" [description]="square.description" [src]="square.src"></square>
                    </td>
                </tr>
            </table>
        </div>


    `
})
export class Page {
    /*
    Squares
        title : title of square
        src : image file name in pathToImages
        description : square description
    */
    squares : any[] = [
        {
            title : "Brian Lee",
            src : 'sample.jpg',
            description : `UC San Diego CS Major 2014`
        },
        {
            title : "bye",
            description : "See you later"
        },{
            title : "Brian Lee",
            src : 'sample.jpg',
            description : `UC San Diego CS Major 2014`
        },
        {
            title : "bye",
            description : "See you later"
        },{
            title : "Brian Lee",
            src : 'sample.jpg',
            description : `UC San Diego CS Major 2014`
        },
        {
            title : "bye",
            description : "See you later"
        },{
            title : "Brian Lee",
            src : 'sample.jpg',
            description : `UC San Diego CS Major 2014`
        },
        {
            title : "bye",
            description : "See you later"
        }
    ];

    //used to build the squares
    numColumns : number = 3;
    builder : any[][] = [];

    //Construct the builder which is used to lay out the squares by template
    constructor () {
        for (let i = 0; i < this.squares.length; i++) {
            //For every numColumns squares, construct a new row
            if (i%this.numColumns == 0) {
                this.builder.push([]);
            }
            this.builder[this.builder.length - 1].push(this.squares[i]);
        }
    }


}
