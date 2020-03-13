var Box = /** @class */ (function () {
    function Box() {
        this.value = Box.counter;
        this.div = $("<div class=\"box shadow-lg\">" + this.value + "</div>");
        this.render();
        Box.collection.push(this);
        Box.counter++;
        this.changeBGColor();
    }
    Box.prototype.render = function () {
        $('#box-container').append(this.div);
    };
    Box.prototype.changeBGColor = function () {
        this.div.css('background-color', this.generateRandoColor());
    };
    Box.prototype.generateRandoColor = function () {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var a = Math.random();
        return "rgba(" + r + ", " + g + ", " + b + ", " + a + ")";
    };
    //static properties and methods
    Box.counter = 0;
    Box.collection = [];
    return Box;
}());
$('#add-box').click(function () { return new Box(); });
$('#mixup').click(function () { return Box.collection.forEach(function (box) { return box.changeBGColor(); }); });
