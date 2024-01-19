export interface NewAreaType {
    type: string;
    properties?: {}
    geometry: {
        coordinates: Object[];
        type: string;
    };
}