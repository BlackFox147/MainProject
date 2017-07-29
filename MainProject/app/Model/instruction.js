"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Instruction = (function () {
    function Instruction(id, profId, name, maxC, steps) {
        this.Id = id;
        this.UserProfileId = profId;
        this.Name = name;
        this.MaxCount = maxC;
        this.Steps = steps;
    }
    return Instruction;
}());
exports.Instruction = Instruction;
//# sourceMappingURL=instruction.js.map