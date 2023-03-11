
const DUM_IMG = 'https://img.freepik.com/free-vector/hand-drawn-flat-design-japan-food-illustration_23-2149281758.jpg'



export default function ListMenuItem() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <img
          src= {DUM_IMG}
          style={{
            width: "100px",
            objectFit: "cover",
          }}
        />
        <p>Raman</p>
      </div>
    </>
  );
}
