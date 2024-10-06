const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        const colorPicker = document.getElementById('color');
        const lineWidthPicker = document.getElementById('lineWidth');
        const clearButton = document.getElementById('clear');

        let isDrawing = false;
        let lastX = 0;
        let lastY = 0;

        function startPosition(e) {
            isDrawing = true;
            [lastX, lastY] = [e.offsetX, e.offsetY];
        }

        function endPosition() {
            isDrawing = false;
        }

        function draw(e) {
            if (!isDrawing) return;

            ctx.strokeStyle = colorPicker.value;
            ctx.lineWidth = lineWidthPicker.value;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';

            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.stroke();

            [lastX, lastY] = [e.offsetX, e.offsetY];
        }

        function clearCanvas() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }

        canvas.addEventListener('mousedown', startPosition);
        canvas.addEventListener('mouseup', endPosition);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseout', endPosition);

        clearButton.addEventListener('click', clearCanvas);

        // 防止在画布上拖动时选中文本
        canvas.addEventListener('selectstart', (e) => e.preventDefault());