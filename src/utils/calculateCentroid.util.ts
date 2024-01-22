function area(polygon: GeoJSON.Polygon) {
    var s = 0.0;
    var ring = polygon.coordinates[0];
    for(let i = 0; i < (ring.length-1); i++){
        s += (ring[i][0] * ring[i+1][1] - ring[i+1][0] * ring[i][1]);
    }
    return 0.5 *s;
}

export default function centroid(polygon: GeoJSON.Polygon){
    var c = [0,0];
    var ring = polygon.coordinates[0];
    for(let i = 0; i < (ring.length-1); i++){
        c[0] += (ring[i][0] + ring[i+1][0]) * (ring[i][0]*ring[i+1][1] - ring[i+1][0]*ring[i][1]);
        c[1] += (ring[i][1] + ring[i+1][1]) * (ring[i][0]*ring[i+1][1] - ring[i+1][0]*ring[i][1]);
    }
    var a = area(polygon);
    c[0] /= a *6;
    c[1] /= a*6;
    return c;
}