if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(function(){
            window.console.log('ServiceWorker registered');
        })
        .catch(function(){
            window.console.log('ServiceWorker registration failed');
        });
}