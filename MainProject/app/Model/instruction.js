"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Instruction = (function () {
    function Instruction(id, profId, name) {
        this.Id = id;
        this.UserProfileId = profId;
        this.Name = name;
        this.Steps = new Array();
    }
    return Instruction;
}());
exports.Instruction = Instruction;
//# sourceMappingURL=instruction.js.map