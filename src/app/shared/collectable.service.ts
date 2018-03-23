export class CollectableService {
	private collectables = [
  		{description:"A very rare copy of Jquery", type:"Book" },
  		{description:"The first letter", type:"Piece of paper" },
  		{description:"No photo available", type:"Photo" },
  		{description:"New fountain pen", type:"Pen" }
    ];

    private collection = [];
    
    getCollectables(){
    	return this.collectables;
    }

    getCollection(){
    	return this.collection;
    }

    addToCollection(item){
    	if(this.collection.indexOf(item) !== -1){
    		return;
    	}
    	this.collection.push(item);
	}

	removeFromCollection(item){
		this.collection.splice(this.collection.indexOf(item), 1);
	}
}