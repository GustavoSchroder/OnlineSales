module.exports = function Cart(oCart) {
    this.items = oCart.items || {};
    this.totalQtd = oCart.totalQtd || 0;
    this.totalCur = oCart.totalCur || 0;

    this.add = function(item, id)
    {
        var stored = this.items[id];
        if (!stored)
        {
            stored = this.items[id] = {item: item, qtd: 0, price: 0};
        }
        stored.qtd++;
        stored.price = stored.item.price * stored.qtd;
        this.totalQtd++;
        this.totalCur += parseFloat(stored.item.price);
    };


}