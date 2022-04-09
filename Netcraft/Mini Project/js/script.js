let $result_list,
    $search_term_input,
    $options_select_el;

function onBodyLoad()
{
    $result_list = $('#result-list');
    $search_term_input = $('#search-box');
    $options_select_el = $('#options-select');
}

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

function onButtonClicked() {
    $result_list[0].innerHTML = '<svg class="loader" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"> <circle cx="50" cy="50" r="46"/> </svg>';
    const
        search_term = $search_term_input.val(),
        searchType = $options_select_el.val();

    const url = `https://itunes.apple.com/search?term=${search_term}${searchType === 'all' ? '' : '&entity=' + searchType} `;
    console.log(url);
    fetch(url)
        .then(response => {
            response.json()
                .then(data => {
                    const items = data.results
                        .filter(item=>!!item.kind);
                   $result_list[0].innerHTML = '';
                    for (let item of items) {
                        const element = createItemHtmlElement(item)
                        $result_list.append(element);
                    }
                })
        })
}
