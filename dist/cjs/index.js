"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMinutes = exports.addHours = exports.getTodayTime = exports.isToday = exports.last3Weeks = exports.getWeekNumber = exports.getMemberDob = exports.getHumanReadableDate = exports.parseDate = exports.parseNeoTime = exports.getMondayThisWeek = exports.parseTimeToDate = exports.setTime = exports.getTime = void 0;
var getTime = function (time) {
    return "".concat(time.getHours(), ":").concat(time.getMinutes(), ":").concat(time.getSeconds());
};
exports.getTime = getTime;
var setTime = function (timeArray) {
    var now = new Date();
    now.setHours(timeArray[0]);
    now.setMinutes(timeArray[1]);
    now.setMilliseconds(timeArray[2]);
    return now;
};
exports.setTime = setTime;
var parseTimeToDate = function (timeString) {
    var array = timeString.split(':');
    var numArray = array.map(function (element) { return parseInt(element); });
    var datetime = (0, exports.setTime)(__spreadArray(__spreadArray([], numArray, true), [0], false));
    return datetime.toISOString();
};
exports.parseTimeToDate = parseTimeToDate;
var getMondayThisWeek = function (date) {
    var firstDate = date;
    var numberOfDaysBefore = date.getDay();
    if (numberOfDaysBefore === 0) {
        firstDate.setDate(firstDate.getDate() - 6);
    }
    else {
        firstDate.setDate(firstDate.getDate() - numberOfDaysBefore + 1);
    }
    return firstDate;
};
exports.getMondayThisWeek = getMondayThisWeek;
var parseNeoTime = function (timestamp) {
    if (!timestamp) {
        return;
    }
    var data = new Date(timestamp);
    var hrs = data.getHours();
    var mins = data.getMinutes();
    var secs = data.getSeconds();
    if (hrs <= 9)
        hrs = "0".concat(hrs);
    if (mins < 10)
        mins = "0".concat(mins);
    if (secs < 10)
        secs = "0".concat(secs);
    var postTime = "".concat(hrs, ":").concat(mins, ":").concat(secs);
    return postTime;
};
exports.parseNeoTime = parseNeoTime;
var parseDate = function (date) {
    // Receives the current date and returns text "Today, Yesterday,etc"
    // Get today's date
    var todaysDate = new Date();
    // Create date from input value
    var inputDate = new Date(date);
    // To calculate the time difference of two dates
    var differenceInTime = todaysDate.getTime() - inputDate.getTime();
    // To calculate the no. of days between two dates
    var differenceInDays = differenceInTime / (1000 * 3600 * 24);
    // call setHours to take the time out of the comparison
    if (inputDate.toDateString() === todaysDate.toDateString()) {
        // Date equals today's date
        return 'Today';
    }
    if (differenceInDays < 2) {
        // Date equals yesterday's date
        return 'Yesterday';
    }
    if (Math.floor(differenceInDays) < 7) {
        // Date equals yesterday's date
        return "".concat(Math.floor(differenceInDays), " days ago");
    }
    return inputDate.toDateString();
};
exports.parseDate = parseDate;
var getHumanReadableDate = function (date, weekday) {
    if (!date) {
        return;
    }
    if (weekday) {
        return new Date(date).toLocaleDateString('en-gb', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long',
        });
    }
    return new Date(date).toLocaleDateString('en-gb', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};
exports.getHumanReadableDate = getHumanReadableDate;
var getMemberDob = function (displayMember) {
    var _a, _b;
    if (!displayMember) {
        return;
    }
    if ((_a = displayMember.dob) === null || _a === void 0 ? void 0 : _a.date) {
        return (0, exports.getHumanReadableDate)((_b = displayMember.dob) === null || _b === void 0 ? void 0 : _b.date);
    }
    return null;
};
exports.getMemberDob = getMemberDob;
var getWeekNumber = function (date) {
    var currentdate = date ? new Date(date) : new Date();
    var oneJan = new Date(currentdate.getFullYear(), 0, 1);
    var adjustedForMonday = 8 - oneJan.getDay(); // Checking the number of days till Monday when the week starts
    oneJan.setDate(oneJan.getDate() + adjustedForMonday);
    var numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000));
    var result = Math.ceil(numberOfDays / 7);
    return result;
};
exports.getWeekNumber = getWeekNumber;
var last3Weeks = function () {
    var lastWeek = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toString();
    var last2Weeks = new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toString();
    return [(0, exports.getWeekNumber)(), (0, exports.getWeekNumber)(lastWeek), (0, exports.getWeekNumber)(last2Weeks)];
};
exports.last3Weeks = last3Weeks;
var isToday = function (date) {
    return (0, exports.parseDate)(date) === 'Today';
};
exports.isToday = isToday;
//Arrivals Specific Date Functions
var getTodayTime = function (timeString) {
    return new Date().toISOString().slice(0, 10) + (timeString === null || timeString === void 0 ? void 0 : timeString.slice(10));
};
exports.getTodayTime = getTodayTime;
var addHours = function (date, hours) {
    var newDate = new Date(date);
    newDate.setHours(newDate.getHours() + hours);
    return newDate;
};
exports.addHours = addHours;
var addMinutes = function (date, minutes) {
    var newDate = new Date(date);
    newDate.setMinutes(newDate.getMinutes() + minutes);
    return newDate;
};
exports.addMinutes = addMinutes;
