require(['./monModule'] , function (module1) {
    document.body.innerHTML += module1.bonjour();
    document.body.innerHTML += '<br>';
    document.body.innerHTML += module1.auRevoir();
});

