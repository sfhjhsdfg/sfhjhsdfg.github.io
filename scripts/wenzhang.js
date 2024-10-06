function loadArticle(id) {
    var articles = document.querySelectorAll('.article');
    articles.forEach(function(article) {
        article.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
}