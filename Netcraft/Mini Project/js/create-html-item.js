function createItemHtmlElement(item) {
    switch(item.kind) {
        case 'song':
            return `
<div class="list">
    <div class="song-item-wrapper">
                <img src="${item.artworkUrl100}" height="100">
    </div>
    <div class="song-fields">
                <div class="song-title">
                    ${item.trackName}
                </div>
                <div class="artist-name">
                   ${item.artistName}
                </div> 
                <div class="album-title">
                   ${item.collectionName}
                </div>  
                <div class="player">
                <audio src="${item.previewUrl}" controls></audio>
</div>  
                    
    </div>              
</div>
                
            `;
        case 'feature-movie':
            console.log(item);
            return `<ul><li></li></ul>`

        default:
            return `<div></div>`;
    }
}