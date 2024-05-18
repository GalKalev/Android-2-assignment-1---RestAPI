class GameClass{
    #title
    #thumbnail
    #shortDescription

    constructor(title,thumbnail,shortDescription){
        this.#title = title;
        this.#thumbnail = thumbnail;
        this.#shortDescription = shortDescription;
    }

    get title(){
        return this.#title;
    }
    get thumbnail(){
        return this.#thumbnail
    }
    get shortDescription(){
        return this.#shortDescription
    }

    set title(newTitle){
        this.#title = newTitle;
    }
    set thumbnail(newThumbnail){
        this.#thumbnail = newThumbnail;
    }
    set shortDescription(newShortDescription){
        this.#shortDescription = newShortDescription;
    }

}