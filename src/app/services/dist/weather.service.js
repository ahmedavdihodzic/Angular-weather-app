"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var environment_1 = require("src/environments/environment");
var WeatherService = /** @class */ (function () {
    function WeatherService(http) {
        this.http = http;
    }
    WeatherService.prototype.getWeatherData = function (cityName) {
        return this.http.get(environment_1.environment.weatherApiBaseUrl, {
            headers: new http_1.HttpHeaders()
                .set(environment_1.environment.XRapidAPIHostHeaderName, environment_1.environment.XRapidAPIHostHeaderValue)
                .set(environment_1.environment.XRapidAPIKeyHeaderName, environment_1.environment.XRapidAPIKeyHeaderValue),
            params: new http_1.HttpParams()
                .set('location', cityName)
                .set('unitGroup', 'us')
            //.set('mode','json')
        });
    };
    WeatherService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], WeatherService);
    return WeatherService;
}());
exports.WeatherService = WeatherService;

//# sourceMappingURL=weather.service.js.map
