//aliases for types of rooms in map object from server
export const roomTypes = {
    crossable: 1,
    notCrossable: 2
}
export const mapSize = 20;
export const roomSize = 30; //pixels

export const drawMap = (canvas, mapData) => {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#000000"
     
    for(const key in mapData) {
        const room = mapData[key];
        const rectPosX = room.x_pos * roomSize;
        const rectPosY = room.y_pos * roomSize;

        if (room.room_type === roomTypes.notCrossable) {
            ctx.fillRect(rectPosX, rectPosY, roomSize, roomSize)
        }

        // rectColor = null;
        
    //     switch(room.room_type) {
    //         case crossable: rectColor = 
    //     }
    }
}