(() => {
    var o = {
            903: (o, r) => {
                r.g = function() {
                    console.log("library A")
                }
            }
        },
        r = {};

    function n(t) {
        var e = r[t];
        if (void 0 !== e) return e.exports;
        var i = r[t] = {
            exports: {}
        };
        return o[t](i, i.exports, n), i.exports
    }(() => {
        "use strict";

        function o() {
            console.log("library B, Function H")
        }
        let r = n(903).g;
        console.log("main"), console.log("library B, Function F"), r(), o(), o()
    })()
})();
