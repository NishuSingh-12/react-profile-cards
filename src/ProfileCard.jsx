const cardStyle = {
  border: "1px solid gray",
  margin: "10px",
  boxShadow: "1px 1px 4px 1px #6d716d",
  borderRadius: "10px",
  overflow: "hidden",
  padding: "10px",
  width: "250px",
};
function ProfileCard({ name, age, city, image, profession }) {
  return (
    <div style={cardStyle}>
      <div
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          margin: "auto",
          border: "2px solid grey",
        }}
      >
        <img
          src={image}
          style={{ width: "100%", height: "100%", borderRadius: "50%" }}
        />
      </div>
      <div style={{ marginTop: "14px", color: "white" }}>
        <h3 style={{ textAlign: "center", marginBottom: "10px" }}>{name}</h3>
        <p>Profession: {profession}</p>
        <p>Age:{age}</p>
        <p>City:{city}</p>
      </div>
    </div>
  );
}
export default ProfileCard;
