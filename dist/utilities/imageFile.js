'use strict'
const __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value) }) }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)) } catch (e) { reject(e) } }
        function rejected(value) { try { step(generator['throw'](value)) } catch (e) { reject(e) } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected) }
        step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
}
const __generator = (this && this.__generator) || function (thisArg, body) {
    let _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1] }, trys: [], ops: [] }, f, y, t, g
    return g = { next: verb(0), 'throw': verb(1), 'return': verb(2) }, typeof Symbol === 'function' && (g[Symbol.iterator] = function() { return this }), g
    function verb(n) { return function (v) { return step([n, v]) } }
    function step(op) {
        if (f) throw new TypeError('Generator is already executing.')
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y['return'] : op[0] ? y['throw'] || ((t = y['return']) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t
            if (y = 0, t) op = [op[0] & 2, t.value]
            switch (op[0]) {
                case 0: case 1: t = op; break
                case 4: _.label++; return { value: op[1], done: false }
                case 5: _.label++; y = op[1]; op = [0]; continue
                case 7: op = _.ops.pop(); _.trys.pop(); continue
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break }
                    if (t[2]) _.ops.pop()
                    _.trys.pop(); continue
            }
            op = body.call(thisArg, _)
        } catch (e) { op = [6, e]; y = 0 } finally { f = t = 0 }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true }
    }
}
const __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { 'default': mod }
}
Object.defineProperty(exports, '__esModule', { value: true })
exports.resizeFile = exports.insistDirectoryExists = exports.checkFileExists = void 0
// Node's File System module
const fs_1 = require('fs')
// Sharp module
const sharp_1 = __importDefault(require('sharp'))
// asynchronous function to check if file exists
const checkFileExists = function (fileResourceName) { return __awaiter(void 0, void 0, void 0, function () {
    let fileVar, err_1
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3])
                return [4 /*yield*/, fs_1.promises.open(fileResourceName, 'r')]
            case 1:
                fileVar = _a.sent()
                fileVar.close()
                return [2 /*return*/, true]
            case 2:
                err_1 = _a.sent()
                return [2 /*return*/, false]
            case 3: return [2 /*return*/]
        }
    })
}) }
exports.checkFileExists = checkFileExists
// asynchronous function that insists existence of specified directory
const insistDirectoryExists = function (directoryResourceName) { return __awaiter(void 0, void 0, void 0, function () {
    let _a
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 4])
                return [4 /*yield*/, fs_1.promises.readdir(directoryResourceName)]
            case 1:
                _b.sent()
                return [3 /*break*/, 4]
            case 2:
                _a = _b.sent()
                return [4 /*yield*/, fs_1.promises.mkdir(directoryResourceName)]
            case 3:
                _b.sent()
                return [3 /*break*/, 4]
            case 4: return [2 /*return*/, Promise.resolve()]
        }
    })
}) }
exports.insistDirectoryExists = insistDirectoryExists
// asynchronous function to resize image file to specified dimensions and save as thumbnail
const resizeFile = function (inputFileName, width, height, outputFileName) { return __awaiter(void 0, void 0, void 0, function () {
    let outputFileExists
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, checkFileExists(outputFileName)]
            case 1:
                outputFileExists = _a.sent()
                if (outputFileExists) return [3 /*break*/, 3]
                // use Sharp module to create output file
                console.log('creating output file')
                return [4 /*yield*/, (0, sharp_1.default)(inputFileName).resize(width, height).toFile(outputFileName)]
            case 2:
                _a.sent()
                return [2 /*return*/, outputFileName]
            case 3:
                console.log('existing output file')
                return [2 /*return*/, outputFileName]
        }
    })
}) }
exports.resizeFile = resizeFile
