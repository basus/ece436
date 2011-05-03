function hello() {
    var em = document.getElementById("hello");
    var hello = document.createElement("p");
    var hello_text = document.createTextNode("Hello, World!");
    hello.appendChild(hello_text);
    em.appendChild(hello);
};

