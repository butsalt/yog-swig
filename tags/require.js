var exports = module.exports;

exports.compile = function(compiler, args, content, parents, options, blockName) {
    var code = 'var _res = _swig._r(); _res.fis.load(' + args.pop() + ');'
    return code;
};

exports.parse = function(str, line, parser, types) {
    parser.on(types.STRING, function (token) {
        var self = this;
        self.out.push(token.match);
    });
    return true;
};

exports.ends = false;