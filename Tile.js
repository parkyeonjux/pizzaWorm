class Tile {
    constructor(col, row) {
        this.col = col;
        this.row = row;
        this.posX = this.col * tileSize;
        this.posY = this.row * tileSize;
    }

     renderTile(bg = '#F3B0C3') {
        if ((this.col % 2 === 1 && this.row % 2 === 1) || (this.col % 2 === 0 && this.row % 2 === 0)) {
            ctx.fillStyle = '#CBAACB'; 
        } else {
            ctx.fillStyle = bg; 
        }
        ctx.fillRect(this.posX, this.posY, tileSize, tileSize);
    }

    renderImg(bg = './pizza.png') {
        // img 요소를 만드는 생성자 함수입니다.
        const image = new Image(tileSize, tileSize);
        image.src = bg;
        image.addEventListener('load', () => {
            ctxBg.drawImage(image, this.posX, this.posY, tileSize, tileSize);
        });
    }
    // 타일의 충돌을 체크합니다.
    collisionCheck(taget) {
        return this.col === taget.col && this.row === taget.row;
    }
}
