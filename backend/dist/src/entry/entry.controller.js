"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntryController = void 0;
const common_1 = require("@nestjs/common");
const entry_service_1 = require("./entry.service");
let EntryController = class EntryController {
    entryService;
    constructor(entryService) {
        this.entryService = entryService;
    }
    async create(body, _auth) {
        const userId = 'user-id';
        const result = await this.entryService.create(userId, body.type, body.content);
        return { code: 200, data: result, message: '创建成功' };
    }
    async getList(type, page = 1, pageSize = 20, _auth) {
        const userId = 'user-id';
        const result = await this.entryService.getList(userId, type, Number(page), Number(pageSize));
        return { code: 200, data: result, message: 'success' };
    }
    async getOne(id) {
        const result = await this.entryService.getOne(id);
        return { code: 200, data: result, message: 'success' };
    }
    async delete(id) {
        await this.entryService.delete(id);
        return { code: 200, data: null, message: '删除成功' };
    }
};
exports.EntryController = EntryController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('type')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('pageSize')),
    __param(3, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object, String]),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "getList", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "getOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EntryController.prototype, "delete", null);
exports.EntryController = EntryController = __decorate([
    (0, common_1.Controller)('entries'),
    __metadata("design:paramtypes", [entry_service_1.EntryService])
], EntryController);
//# sourceMappingURL=entry.controller.js.map