System.register(['angular2/core', './square.component'], function(exports_1, context_1) {
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
    var core_1, square_component_1;
    var Page;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (square_component_1_1) {
                square_component_1 = square_component_1_1;
            }],
        execute: function() {
            Page = (function () {
                //Construct the builder which is used to lay out the squares by template
                function Page() {
                    /*
                    Squares
                        title : title of square
                        src : image file name in pathToImages
                        description : square description
                    */
                    this.squares = [
                        {
                            title: "Brian Lee",
                            src: 'sample.jpg',
                            description: "UC San Diego CS Major 2014"
                        },
                        {
                            title: "bye",
                            description: "See you later"
                        }, {
                            title: "Brian Lee",
                            src: 'sample.jpg',
                            description: "UC San Diego CS Major 2014"
                        },
                        {
                            title: "bye",
                            description: "See you later"
                        }, {
                            title: "Brian Lee",
                            src: 'sample.jpg',
                            description: "UC San Diego CS Major 2014"
                        },
                        {
                            title: "bye",
                            description: "See you later"
                        }, {
                            title: "Brian Lee",
                            src: 'sample.jpg',
                            description: "UC San Diego CS Major 2014"
                        },
                        {
                            title: "bye",
                            description: "See you later"
                        }
                    ];
                    //used to build the squares
                    this.numColumns = 3;
                    this.builder = [];
                    for (var i = 0; i < this.squares.length; i++) {
                        //For every numColumns squares, construct a new row
                        if (i % this.numColumns == 0) {
                            this.builder.push([]);
                        }
                        this.builder[this.builder.length - 1].push(this.squares[i]);
                    }
                }
                Page = __decorate([
                    core_1.Component({
                        selector: 'page',
                        directives: [square_component_1.Square],
                        template: "\n        <div id=\"wall\">\n            <table id=\"square-table\">\n                <tr *ngFor=\"#row of builder\">\n                    <td *ngFor=\"#square of row\">\n                        <square [title]=\"square.title\" [description]=\"square.description\" [src]=\"square.src\"></square>\n                    </td>\n                </tr>\n            </table>\n        </div>\n\n\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Page);
                return Page;
            }());
            exports_1("Page", Page);
        }
    }
});
//# sourceMappingURL=page.component.js.map