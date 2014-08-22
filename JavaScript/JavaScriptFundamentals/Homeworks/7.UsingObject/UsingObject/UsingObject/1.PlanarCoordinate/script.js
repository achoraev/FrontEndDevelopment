var a = Point(1, 1),
    b = Point(2, 3);

var ab = FormLine(a, b).Length,
    bc = FormLine(Point(1, 3), Point(2, 2)).Length,
    ca = FormLine(Point(2, 2), Point(1, 11)).Length;
jsConsole.writeLine("Distance between A and B = " + ab);
jsConsole.writeLine("Distance between B and C = " + bc);
jsConsole.writeLine("Distance between C and A = " + ca);

if (IsTriangle(ab, bc, ca)) {
    jsConsole.writeLine("CAN form a triangle!!!");
} else {
    jsConsole.writeLine("CAN'T form a triangle!!!");
}

function Point(x, y) {
    return {
        X: x,
        Y: y
    };
}

function FormLine(firstPoint, secondPoint) {
    return {
        P1: firstPoint,
        P2: secondPoint,
        Length: CalculateDistance(firstPoint, secondPoint)
    };
}

function CalculateDistance(firstPoint, secondPoint) {
    return Math.sqrt((secondPoint.X - firstPoint.X) * (secondPoint.X - firstPoint.X) +
                     (secondPoint.Y - firstPoint.Y) * (secondPoint.Y - firstPoint.Y));
}

function IsTriangle(firstLine, secondLine, thirdLine) {
    if (((firstLine + secondLine) > thirdLine) &&
		((firstLine + thirdLine) > secondLine) &&
		((thirdLine + secondLine) > firstLine)) {
        return true;
    }
    return false;
}