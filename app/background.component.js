System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Background;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Background = (function () {
                function Background() {
                    this.pathToImages = "images/";
                    //photoList : string[] = ["banner1.jpg", "banner2.jpg"];
                    this.photoList = ["sample.jpg"];
                    this.photos = [];
                    this.numRows = 20;
                    this.numCols = 8;
                    //Set up "photos" to be loaded randomly based on files in directory
                    for (var row = 0; row < this.numRows; row++) {
                        this.photos.push([]);
                        for (var col = 0; col < this.numCols; col++) {
                            this.photos[row].push({
                                src: this.photoList[Math.floor(Math.random() * (this.photoList.length))],
                                id: "" + row + col
                            });
                        }
                    }
                }
                Background = __decorate([
                    core_1.Component({
                        selector: 'background',
                        //template for row by column image generation
                        //#image lets you access "this" in the "loaded" function
                        template: "\n        <div id='background'>\n            <tr *ngFor=\"#row of photos\">\n                <td *ngFor=\"#item of row\">\n                    <a href=\"#\">\n                        <img #image id='background-{{item.id}}' class=\"background-images\" src='{{pathToImages}}{{item.src}}'>\n                    </a>\n                </td>\n            </tr>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Background);
                return Background;
            }());
            exports_1("Background", Background);
        }
    }
});
//# sourceMappingURL=background.component.js.map