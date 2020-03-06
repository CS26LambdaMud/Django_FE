//aliases for types of rooms in map object from server
export const roomTypes = {
    type1: 1,
    type2: 2,
    exit: 3 //this is the last room the player is trying to reach
}
export const mapSize = 20;
export const roomSize = 30; //pixels

//room colors
const bgColor = "#0d1bea";
const curRoomColor = "#006666";

const setRoomColor = (ctx, room) => {
    switch(room.room_type) {
        case roomTypes.type1: 
            ctx.fillStyle = "#79ea0d";
            break;
        case roomTypes.type2:
            ctx.fillStyle = "#ea500d";
            break;
        case roomTypes.exit:
            ctx.fillStyle = "#000000";
            break;
        default:
            console.log("Unknown room type: " + room.room_type);
    }
}

//sets the color of a room on the canvas
const drawRoom = (ctx, room) => {
    const rectPosX = room.x_pos * roomSize;
    const rectPosY = room.y_pos * roomSize;
    ctx.fillRect(rectPosX, rectPosY, roomSize, roomSize);
}

//change color of room player is in and revert color of the last room player was in
// export const movePlayer = (canvas, mapData, curRoomId, lastRoomId = null) => {
//     const ctx = canvas.getContext("2d");

//     if(lastRoomId) {
//         setRoomColor(ctx, mapData[lastRoomId]);
//         drawRoom(ctx, mapData[lastRoomId]);
//     }

//     //color of player's room
//     ctx.fillStyle = "#006666";
//     drawRoom(ctx, mapData[curRoomId])
// }

export const drawMap = (canvas, mapData, playerPos) => {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
     
    for(const key in mapData) {
        const room = mapData[key];

        setRoomColor(ctx, room);
        drawRoom(ctx, room);
    }

    ctx.fillStyle = curRoomColor;
    drawRoom(ctx, playerPos);
}