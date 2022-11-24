export const Section = ({title, children}) => {
  return (
  <section style={{
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    margin: 20,
    padding: "20px 16px",
    borderRadius: 4,
    backgroundColor: "rgb(255, 228, 196)",
    color: "#130202",
  }}>
    <h2>{title}</h2>
    {children}
  </section>
  );
};
