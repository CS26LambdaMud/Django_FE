//aliases for types of rooms in map object from server
export const roomTypes = {
    type1: 1,
    type2: 2,
    exit: 3 //this is the last room the player is trying to reach
}
export const mapSize = 20;
export const roomSize = 30; //pixels

const bgColor = "#0d1bea"

export const drawMap = (canvas, mapData) => {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
     
    for(const key in mapData) {
        const room = mapData[key];
        const rectPosX = room.x_pos * roomSize;
        const rectPosY = room.y_pos * roomSize;

        // if (room.room_type === roomTypes.notCrossable) {
        //     ctx.fillRect(rectPosX, rectPosY, roomSize, roomSize)
        // }

        switch(room.room_type) {
            case roomTypes.type1: 
                ctx.fillStyle = "#79ea0d"
                break;
            case roomTypes.type2:
                ctx.fillStyle = "#ea500d"
                break;
            case roomTypes.exit:
                ctx.fillStyle = "#000000"
                break;
            default:
                console.log("Unknown room type: " + room.room_type);
        }

        ctx.fillRect(rectPosX, rectPosY, roomSize, roomSize)
    }
}