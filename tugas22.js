function cetakarray() {
    var data = ("Saya ingin belajar bersama");
    var dataarray = data.split(" ");

    dataarray.forEach(function perulangan(item, index) {
        console.log("Item : " + item + " Index ke " + index);
    })
}

cetakarray();