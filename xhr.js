var xml;
var pyxml;

function request() {
    
    xml = new XMLHttpRequest();
    xml.onreadystatechange = respond;
    xml.open("GET", "test.xml", true);
    xml.send(null);
}

function respond() {
    if (xml.readyState == 4 && xml.status == 200 ) {
        var em = document.getElementById("xhr-ex");
        var hello = document.createElement("p");
        var hello_text = document.createTextNode(xml.responseText);
        hello.appendChild(hello_text);
        em.appendChild(hello);
    } 
};

function pyrequest() {
    
    pyxml = new XMLHttpRequest();
    pyxml.onreadystatechange = pyrespond;
    pyxml.open("GET", "py.xml", true);
    pyxml.send(null);
}

function pyrespond() {
    if (pyxml.readyState == 4 && pyxml.status == 200 ) {
        var em = document.getElementById("python");
        var hello = document.createElement("p");
        var hello_text = document.createTextNode(pyxml.responseText);
        hello.appendChild(hello_text);
        em.appendChild(hello);
    } 
};
