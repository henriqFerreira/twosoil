export default async function addNewPolygon(polygon: GeoJSON.Feature) {
    console.log(polygon)
    const data = await fetch('http://localhost:5000/add-new-polygon', {
        body: JSON.stringify(polygon),
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((res) => res.json());
    return data.data;
}