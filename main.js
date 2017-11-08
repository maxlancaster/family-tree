(function() {
    var tree = Family_tree();

    document.getElementById("search_button").addEventListener("click", function(e) {
        tree.search();
    });

    document.getElementById("search_input").addEventListener("keyup", function(e) {
        e.preventDefault();
        if (e.keyCode === 13) {
            tree.search();
        }
    });

    tree.generate_tree();

})()