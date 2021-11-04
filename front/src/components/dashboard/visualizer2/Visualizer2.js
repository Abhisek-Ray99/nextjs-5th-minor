import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import './Visualizer2.module.css'
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const Map = () => {
    return (
        <div className="leaflet-container">
            <MapContainer
                center={[40.8054, -74.0241]}
                zoom={14}
                scrollWheelZoom={false}
                style={{ height: "100%", width: "100%" }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                    url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
                />
                <Marker position={[40.8054, -74.0241]} draggable={true} animate={true}>
                    <Popup>Hey ! I live here</Popup>
                </Marker>
            </MapContainer>
        </div>

    );
};

export default Map;
