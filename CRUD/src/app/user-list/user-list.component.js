/*
 * Angular 2 CRUD application using Nodejs
 * @autthor Shashank Tiwari
 */
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
var UserListComponent = (function () {
    function UserListComponent(httpService) {
        this.httpService = httpService;
        this.isReset = true;
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getAllUser().subscribe(function (response) { return _this.usersList = response.users; }, function (error) { alert("Can't get users."); });
    };
    UserListComponent.prototype.userSelected = function (user) {
        this.currentUser = user;
        emitter_service_1.EmitterService.get(this.userInfo).emit(this.currentUser);
        this.isReset = true;
    };
    UserListComponent.prototype.isSelected = function (user) {
        if (!this.currentUser) {
            return false;
        }
        return this.currentUser._id === user._id ? true : false;
    };
    UserListComponent.prototype.deleteUser = function (userId) {
        var _this = this;
        this.httpService.deleteUser(userId).subscribe(function (response) {
            if (response.error) {
                alert("The user could not be deleted, server Error.");
            }
            else {
                _this.usersList = response.users;
            }
        }, function (error) {
            alert("The user could not be deleted, server Error.");
        });
    };
    UserListComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        emitter_service_1.EmitterService.get(this.reset).subscribe(function (reset) {
            _this.isReset = false;
        });
        emitter_service_1.EmitterService.get(this.userList).subscribe(function (userList) {
            _this.usersList = userList;
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], UserListComponent.prototype, "reset", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], UserListComponent.prototype, "userInfo", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], UserListComponent.prototype, "userList", void 0);
    UserListComponent = __decorate([
        core_1.Component({
            selector: 'app-user-list',
            templateUrl: './user-list.component.html',
            styleUrls: ['./user-list.component.css'],
            providers: [http_service_1.HttpService]
        }), 
        __metadata('design:paramtypes', [http_service_1.HttpService])
    ], UserListComponent);
    return UserListComponent;
}());
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=user-list.component.js.map