export default async function getMappedPolygons(): Promise<GeoJSON.Feature[]> {
    const data = await fetch('http://localhost:5000/get-map-polygons').then((res) => res.json());
    return data.data;
}