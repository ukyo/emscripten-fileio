function fileio(input){
    var Module = { //さきにModule作っちゃう
        input: input //pre.jsで読み込まれる
    };
    arguments = [];//こうしないとmain関数のargvとして読み込まれるので注意
