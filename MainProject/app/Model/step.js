"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Step = (function () {
    function Step(id, instrId, num, name) {
        this.Id = id;
        this.InstructionId = instrId;
        this.Name = name;
        this.Number = num;
        this.Elements = new Array();
    }
    return Step;
}());
exports.Step = Step;
//# sourceMappingURL=step.js.map