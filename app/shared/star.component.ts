/**
 * Created by Hori on 6/5/2016.
 */
import {Component,OnChanges, Input, Output,EventEmitter} from 'angular2/core';
@Component({
    selector:'ai-star', //because its not belong any page , we will use a name of project.
    templateUrl:'app/shared/star.component.html',
    styleUrls:['app/shared/star.component.css']
})
export class StarComponent implements OnChanges{
   @Input() rating: number ;
    startWidth:number;
    @Output() ratingClicked:EventEmitter<string> =
                new EventEmitter<string>();
    onClick(){
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
    ngOnChanges():void{
        this.starWidth = this.rating* 86/5;
    }

}
