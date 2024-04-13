function header(rootDir){
    $.ajax({
        url: rootDir + "header.html",
        cache: false,
        success: function(html){
            html = html.replace(/\{\$root\}/g, rootDir);
            document.getElementById('header').innerHTML = html;
        }
    });
}
function footer(rootDir){
    $.ajax({
        url: rootDir + "footer.html",
        cache: false,
        success: function(html){
            html = html.replace(/\{\$root\}/g, rootDir);
            document.getElementById('footer').innerHTML = html;
        }
    });
}
