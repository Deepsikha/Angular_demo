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
var core_1 = require('@angular/core');
var http_service_1 = require('../services/http.service');
var emitter_service_1 = require('../services/emitter.service');
var userModel_1 = require('../userModel');
var AddUserComponent = (function () {
    function AddUserComponent(httpService) {
        this.httpService = httpService;
        this.isInsert = true;
        this.userModel = new userModel_1.UserModel('', '', '', '');
    }
    AddUserComponent.prototype.addUser = function () {
        var _this = this;
        this.httpService.addUser(this.userModel).subscribe(function (response) {
            if (response.error) {
                alert("The user could not be added, server Error.");
            }
            else {
                emitter_service_1.EmitterService.get(_this.userList).emit(response.users);
            }
        }, function (error) {
            alert("The user could not be added, server Error = " + error);
        });
    };
    AddUserComponent.prototype.updateUser = function () {
        var _this = this;
        this.httpService.updateUser(this.userModel).subscribe(function (response) {
            if (response.error) {
                alert("The user could not be updated, server Error.");
            }
            else {
                emitter_service_1.EmitterService.get(_this.userList).emit(response.users);
            }
        }, function (error) {
            alert("The user could not be updated, server Error = " + error);
        });
    };
    AddUserComponent.prototype.resetAddUser = function () {
        this.userModel = new userModel_1.UserModel('', '', '', '');
        emitter_service_1.EmitterService.get(this.reset).emit(true);
        this.isInsert = true;
    };
    AddUserComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        emitter_service_1.EmitterService.get(this.userInfo).subscribe(function (value) {
            _this.userModel = new userModel_1.UserModel(value._id, value.name, value.gender, value.country);
            _this.isInsert = false;
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AddUserComponent.prototype, "userInfo", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AddUserComponent.prototype, "reset", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AddUserComponent.prototype, "userList", void 0);
    AddUserComponent = __decorate([
        core_1.Component({
            selector: 'app-add-user',
            templateUrl: './add-user.component.html',
            styleUrls: ['./add-user.component.css'],
            providers: [http_service_1.HttpService]
        }), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], AddUserComponent);
    return AddUserComponent;
}());
exports.AddUserComponent = AddUserComponent;
//# sourceMappingURL=add-user.component.js.map