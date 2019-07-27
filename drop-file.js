var fs = require('fs');
var path = require('path');
var JS_BIND_INPUT = function (target) {
    var input = document.createElement('input');
    input.type = 'file';
    input.style.display = 'none';
    input.addEventListener('change', function () {
        target.scrollIntoView(true);
        var rect = target.getBoundingClientRect(), x = rect.left + (rect.width >> 1), y = rect.top + (rect.height >> 1), data = { files: input.files };
        ['dragenter', 'dragover', 'drop'].forEach(function (name) {
            var event = document.createEvent('MouseEvent');
            event.initMouseEvent(name, !0, !0, window, 0, 0, 0, x, y, !1, !1, !1, !1, 0, null);
            event.dataTransfer = data;
            target.dispatchEvent(event);
        });
        document.body.removeChild(input);
    }, false);
    document.body.appendChild(input);
    return input;
};
/**
 * Support function to drop a file to a drop area.
 *
 * @view
 * <div id="drop-area"></div>
 *
 * @example
 * dropFile($("#drop-area"), "./image.png");
 *
 * @param {ElementFinder} drop area
 * @param {string} file path
 */
module.exports = function (dropArea, filePath) {
    // get the full path
    filePath = path.resolve(filePath);
    // assert the file is present
    fs.accessSync(filePath, fs.F_OK);
    // resolve the drop area
    return dropArea.getWebElement().then(function (element) {
        // bind a new input to the drop area
        browser.executeScript(JS_BIND_INPUT, element).then(function (input) {
            // upload the file to the new input
            input.sendKeys(filePath);
        });
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC1maWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZHJvcC1maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN2QixJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFM0IsSUFBSSxhQUFhLEdBQUcsVUFBVSxNQUFNO0lBQ2xDLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUMsS0FBSyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7SUFDcEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQzdCLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUU7UUFDL0IsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUU1QixJQUFJLElBQUksR0FBRyxNQUFNLENBQUMscUJBQXFCLEVBQUUsRUFDdkMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxFQUNqQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLEVBQ2pDLElBQUksR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFaEMsQ0FBQyxXQUFXLEVBQUMsVUFBVSxFQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLElBQUk7WUFDcEQsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMvQyxLQUFLLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbkYsS0FBSyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDMUIsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztRQUVILFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUVWLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyxDQUFDO0FBR0Y7Ozs7Ozs7Ozs7O0dBV0c7QUFDSCxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQVUsUUFBUSxFQUFFLFFBQVE7SUFDM0Msb0JBQW9CO0lBQ3BCLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRWpDLDZCQUE2QjtJQUM5QixFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFakMsd0JBQXdCO0lBQ3hCLE9BQU8sUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLE9BQU87UUFFcEQsb0NBQW9DO1FBQ3BDLE9BQU8sQ0FBQyxhQUFhLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUs7WUFFaEUsbUNBQW1DO1lBQ25DLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFM0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyJ9