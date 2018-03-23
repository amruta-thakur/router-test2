import { Component, OnInit } from '@angular/core';
import { CollectableService } from '../shared/collectable.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styles: []
})
export class CollectionComponent implements OnInit{
	collectedItems = [];

	constructor(private collectableService: CollectableService) { }

	ngOnInit() {
		this.collectedItems = this.collectableService.getCollection();
	}

	onRemoveFromCollection(item){
		this.collectableService.removeFromCollection(item);
	}
 
}
