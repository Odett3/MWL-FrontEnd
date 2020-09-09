import React, { useEffect } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "../style/map.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectUsers } from "../store/userProfile/selectors";
import { fetchAllUsers } from "../store/userProfile/actions";
import { Card, Button } from "react-bootstrap";
export default function MapComponent() {
  const users = useSelector(selectUsers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const mwl = new Icon({
    iconUrl:
      "https://res.cloudinary.com/dztzswpcp/image/upload/v1599502988/mwl_bleqzc.png",
    iconSize: [35, 35],
  });

  return users === undefined ? (
    <p>"loading content..."</p>
  ) : (
    <div>
      <Map center={[52.37949, 4.63772]} zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {users.map((u) => {
          return (
            <>
              <Marker icon={mwl} key={u.id} position={[u.lat, u.long]}>
                <Popup>
                  <Card>
                    <Card.Header>
                      <em> Made with Love</em> 💖 in {u.address}
                    </Card.Header>
                    <Card.Body>
                      <Card.Title>{u.name}</Card.Title>
                      <Card.Text>
                        👩🏻‍🍳Support Local Talent👩🏻‍🍳 Click the button below to visit
                        the user's profile and check out the listings.
                      </Card.Text>
                      <Button variant="dark">
                        <Link to={`/user/${u.id}`}>Go to profile</Link>
                      </Button>
                    </Card.Body>
                  </Card>
                </Popup>
              </Marker>
            </>
          );
        })}
      </Map>
    </div>
  );
}
