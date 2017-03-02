/* IMPORT */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* CALL SPY */
function callSpy(fn, res) {
    res.called = false;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var result = fn.apply(this, args);
        res.called = true;
        res.this = this;
        res.arguments = args;
        res.return = result;
        return result;
    };
}
/* EXPORT */
exports.default = callSpy;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsWUFBWTs7O0FBSVosY0FBYztBQUVkLGlCQUFtQixFQUFZLEVBQUUsR0FBVztJQUUxQyxHQUFHLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUVuQixNQUFNLENBQUM7UUFBVyxjQUFPO2FBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztZQUFQLHlCQUFPOztRQUV2QixJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFHLElBQUksRUFBRSxJQUFJLENBQUUsQ0FBQztRQUV2QyxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNsQixHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixHQUFHLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUNyQixHQUFHLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUVwQixNQUFNLENBQUMsTUFBTSxDQUFDO0lBRWhCLENBQUMsQ0FBQztBQUVKLENBQUM7QUFFRCxZQUFZO0FBRVosa0JBQWUsT0FBTyxDQUFDIn0=