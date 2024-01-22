export default function featuresToFeatureCollection(
    features: GeoJSON.Feature[]
) {
    return {
        type: "FeatureCollection",
        features: features,
    };
}