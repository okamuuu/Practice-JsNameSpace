TestCase("NameSpaceTest", {

    tearDown: function () {
        delete MyApp.hoge;
    },

    "test should create non-existent object" : 
    function () {
        MyApp.namespace("hoge");
        assertObject(MyApp.hoge);
    },

    "test should not overwrite existing objects":
    function () {
        MyApp.hoge = { fuga: {} };
        var result = MyApp.namespace("hoge.fuga");

        assertSame(MyApp.hoge.fuga, result);
    },

    "test only create missing parts":
    function () {
        var hash = {};
        MyApp.hoge = { fuga: { piyo: hash } };
        var result = MyApp.namespace("hoge.fuga.ui");
        assertSame(hash, MyApp.hoge.fuga.piyo);
        assertObject(MyApp.hoge.fuga.ui);
    }
});

