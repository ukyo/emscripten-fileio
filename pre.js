Module['preRun'] = function(){
    FS.createDataFile(
        '/',
        'input',
        Module['input'], //引数から入力できるようにするためのもの
        true,
        true
    );
    FS.createDataFile(
        '/',
        'output',
        [],
        true,
        true
    );
    Module['ret'] = function(){
        return FS.findObject("/output").contents; //最終的に返り値になる
    };
};
