"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
// Import everything from express and assign it to the express variable
var express = __importStar(require("express"));
// Create a new express application instance
var app = express();
// The port the express app will listen on
var port = process.env.PORT || 3000;
// Serve the application at the given port
app.listen(port, function () {
    // Success callback
    console.log("Listening at http://localhost:" + port + "/");
});
//# sourceMappingURL=server.js.map