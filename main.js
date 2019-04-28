var $ = require('jquery');

export function credEncaDeca(name){
    $("<div>").append(
        $("div").append(
            $("<h3>").append(name).addClass("gridName")
        ).addClass("encaTitle")
    ).addClass('EncaDeca')
}