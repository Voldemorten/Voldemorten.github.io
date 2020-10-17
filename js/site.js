$(() => {
    if($(".images-container").length) {
        var bLazy = new Blazy({ 
            selector: '.b-lazy', 
            offset: 100 
        });
    }
})
