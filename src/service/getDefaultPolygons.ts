export default async function getDefaultPolygons(): Promise<GeoJSON.FeatureCollection> {
    const data = await fetch('http://localhost:5000/mapped-polygons').then((res) => res.json());
    return data.data;
}